#!/usr/bin/env python3
# flake8: noqa
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - API Routes (FastAPI Routers)
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

import hashlib
import io
import secrets
from typing import Annotated
from urllib.parse import quote

import qrcode
from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session  # type: ignore[import-untyped]

from backend.database import get_db
from backend.models import QRCode, WhatsAppLink  # type: ignore[attr-defined]
from backend.schemas import (
    BulkLinkRequest,
    BulkLinkResponse,
    QRCodeRequest,
    WhatsAppLinkRequest,
    WhatsAppLinkResponse,
)

# ─────────────────────────────────────────────────────────────────────────────
# ROUTERS
# ─────────────────────────────────────────────────────────────────────────────
qr_router = APIRouter(prefix="/qr", tags=["QR Code"])
whatsapp_router = APIRouter(prefix="/whatsapp", tags=["WhatsApp"])


# ─────────────────────────────────────────────────────────────────────────────
# QR CODE ROUTES
# ─────────────────────────────────────────────────────────────────────────────
@qr_router.post("")  # type: ignore[misc]
async def generate_qr(
    req: QRCodeRequest,
    db: Session = Depends(get_db),
) -> StreamingResponse:
    """Generate a PNG QR code."""
    # Create QR code
    error_levels = {
        "L": qrcode.constants.ERROR_CORRECT_L,
        "M": qrcode.constants.ERROR_CORRECT_M,
        "Q": qrcode.constants.ERROR_CORRECT_Q,
        "H": qrcode.constants.ERROR_CORRECT_H,
    }

    qr = qrcode.QRCode(
        error_correction=error_levels.get(
            req.error_correction, qrcode.constants.ERROR_CORRECT_H
        ),
        box_size=10,
        border=2,
    )
    qr.add_data(req.data)
    qr.make(fit=True)

    # Parse colors
    fg = req.foreground_color.lstrip("#")
    bg = req.background_color.lstrip("#")
    fg_rgb = tuple(int(fg[i : i + 2], 16) for i in (0, 2, 4))
    bg_rgb = tuple(int(bg[i : i + 2], 16) for i in (0, 2, 4))

    img = qr.make_image(fill_color=fg_rgb, back_color=bg_rgb)

    # Resize if needed
    if req.size != 300:
        from PIL import Image

        img = img.resize((req.size, req.size), Image.Resampling.LANCZOS)

    # Save to database
    data_hash = hashlib.sha256(req.data.encode()).hexdigest()
    try:
        qr_record = QRCode(
            data=req.data,
            data_hash=data_hash,
            size=req.size,
            error_correction=req.error_correction,
        )
        db.add(qr_record)
        db.commit()
    except Exception:
        db.rollback()

    # Return image
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    return StreamingResponse(
        buf,
        media_type="image/png",
        headers={"Content-Disposition": "inline; filename=qr.png"},
    )


@qr_router.get("")  # type: ignore[misc]
async def generate_qr_simple(
    data: Annotated[str, Query(min_length=1, max_length=2048)],
    size: Annotated[int, Query(ge=100, le=1000)] = 300,
) -> StreamingResponse:
    """Generate QR code via GET (for embedding)."""
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")

    if size != 300:
        from PIL import Image

        img = img.resize((size, size), Image.Resampling.LANCZOS)

    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    return StreamingResponse(buf, media_type="image/png")


# ─────────────────────────────────────────────────────────────────────────────
# WHATSAPP ROUTES
# ─────────────────────────────────────────────────────────────────────────────
@whatsapp_router.post("/link", response_model=WhatsAppLinkResponse)  # type: ignore[misc]
async def generate_link(
    req: WhatsAppLinkRequest,
    db: Session = Depends(get_db),
) -> WhatsAppLinkResponse:
    """Generate a WhatsApp chat link."""
    # Clean phone number
    clean_phone = "".join(filter(str.isdigit, req.phone))
    if len(clean_phone) < 7:
        raise HTTPException(status_code=400, detail="Invalid phone number")

    # Build URL
    link = f"https://wa.me/{clean_phone}"
    if req.message:
        link += f"?text={quote(req.message)}"

    # Generate short code if requested
    short_link = None
    short_code = None
    if req.create_short_link:
        short_code = secrets.token_urlsafe(6)[:8]
        short_link = f"https://wa.link/{short_code}"  # Placeholder

    # Save to database
    try:
        link_record = WhatsAppLink(
            phone=clean_phone,
            message=req.message,
            link=link,
            short_code=short_code,
        )
        db.add(link_record)
        db.commit()
        db.refresh(link_record)

        return WhatsAppLinkResponse(
            id=link_record.id,
            link=link,
            short_link=short_link,
            phone=clean_phone,
            message=req.message,
            clicks=0,
            created_at=link_record.created_at,
        )
    except Exception:
        db.rollback()
        return WhatsAppLinkResponse(
            link=link,
            phone=clean_phone,
            message=req.message,
        )


@whatsapp_router.get("/link", response_model=WhatsAppLinkResponse)  # type: ignore[misc]
async def generate_link_simple(
    phone: Annotated[str, Query(min_length=7, max_length=20)],
    message: Annotated[str | None, Query(max_length=2048)] = None,
) -> WhatsAppLinkResponse:
    """Generate WhatsApp link via GET."""
    clean_phone = "".join(filter(str.isdigit, phone))
    link = f"https://wa.me/{clean_phone}"
    if message:
        link += f"?text={quote(message)}"

    return WhatsAppLinkResponse(link=link, phone=clean_phone, message=message)


@whatsapp_router.post("/bulk", response_model=BulkLinkResponse)  # type: ignore[misc]
async def generate_bulk_links(
    req: BulkLinkRequest,
    db: Session = Depends(get_db),
) -> BulkLinkResponse:
    """Generate multiple WhatsApp links at once."""
    links: list[WhatsAppLinkResponse] = []
    errors: list[str] = []

    for i, link_req in enumerate(req.links):
        try:
            clean_phone = "".join(filter(str.isdigit, link_req.phone))
            if len(clean_phone) < 7:
                errors.append(f"Item {i}: Invalid phone number")
                continue

            link = f"https://wa.me/{clean_phone}"
            if link_req.message:
                link += f"?text={quote(link_req.message)}"

            link_record = WhatsAppLink(
                phone=clean_phone,
                message=link_req.message,
                link=link,
            )
            db.add(link_record)
            db.commit()
            db.refresh(link_record)

            links.append(
                WhatsAppLinkResponse(
                    id=link_record.id,
                    link=link,
                    phone=clean_phone,
                    message=link_req.message,
                    created_at=link_record.created_at,
                )
            )
        except Exception as e:
            db.rollback()
            errors.append(f"Item {i}: {e!s}")

    return BulkLinkResponse(
        success_count=len(links),
        error_count=len(errors),
        links=links,
        errors=errors,
    )


@whatsapp_router.get("/{short_code}/redirect")  # type: ignore[misc]
async def redirect_short_link(
    short_code: str,
    db: Session = Depends(get_db),
) -> dict[str, str]:  # type: ignore[type-arg]
    """Redirect short link and track click."""
    link_record = (
        db.query(WhatsAppLink)
        .filter(WhatsAppLink.short_code == short_code)
        .first()
    )

    if not link_record:
        raise HTTPException(status_code=404, detail="Link not found")

    # Increment click count
    link_record.clicks += 1
    db.commit()

    return {"redirect_url": link_record.link}
