#!/usr/bin/env python3
# flake8: noqa
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - API Schemas (Pydantic Models)
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

from datetime import datetime
from typing import Generic, TypeVar

from pydantic import BaseModel, ConfigDict, Field

T = TypeVar("T")


# ─────────────────────────────────────────────────────────────────────────────
# BASE SCHEMAS
# ─────────────────────────────────────────────────────────────────────────────
class BaseSchema(BaseModel):  # type: ignore[misc]
    """Base schema with common config."""

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        str_strip_whitespace=True,
    )


class PaginatedResponse(BaseModel, Generic[T]):  # type: ignore[misc]
    """Paginated response wrapper."""

    items: list[T]
    total: int
    page: int
    page_size: int
    pages: int


class APIResponse(BaseModel, Generic[T]):  # type: ignore[misc]
    """Standard API response wrapper."""

    success: bool = True
    data: T | None = None
    message: str | None = None
    error: str | None = None


# ─────────────────────────────────────────────────────────────────────────────
# HEALTH
# ─────────────────────────────────────────────────────────────────────────────
class HealthResponse(BaseSchema):
    """Health check response."""

    status: str
    version: str
    environment: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


# ─────────────────────────────────────────────────────────────────────────────
# QR CODE
# ─────────────────────────────────────────────────────────────────────────────
class QRCodeRequest(BaseSchema):
    """Request model for QR code generation."""

    data: str = Field(
        ..., min_length=1, max_length=2048, description="Data to encode"
    )
    size: int = Field(
        default=300, ge=100, le=1000, description="Size in pixels"
    )
    error_correction: str = Field(default="H", pattern="^[LMQH]$")
    foreground_color: str = Field(
        default="#000000", pattern="^#[0-9A-Fa-f]{6}$"
    )
    background_color: str = Field(
        default="#FFFFFF", pattern="^#[0-9A-Fa-f]{6}$"
    )


class QRCodeResponse(BaseSchema):
    """Response model for QR code metadata."""

    id: str
    data_hash: str
    size: int
    downloads: int
    created_at: datetime


# ─────────────────────────────────────────────────────────────────────────────
# WHATSAPP LINK
# ─────────────────────────────────────────────────────────────────────────────
class WhatsAppLinkRequest(BaseSchema):
    """Request model for WhatsApp link generation."""

    phone: str = Field(
        ..., min_length=7, max_length=20, description="Phone with country code"
    )
    message: str | None = Field(
        default=None, max_length=2048, description="Pre-filled message"
    )
    create_short_link: bool = Field(
        default=False, description="Create shortened link"
    )


class WhatsAppLinkResponse(BaseSchema):
    """Response model for WhatsApp link."""

    id: str | None = None
    link: str
    short_link: str | None = None
    phone: str
    message: str | None = None
    clicks: int = 0
    created_at: datetime | None = None


# ─────────────────────────────────────────────────────────────────────────────
# BULK OPERATIONS
# ─────────────────────────────────────────────────────────────────────────────
class BulkLinkRequest(BaseSchema):
    """Request for bulk link generation."""

    links: list[WhatsAppLinkRequest] = Field(..., min_length=1, max_length=100)


class BulkLinkResponse(BaseSchema):
    """Response for bulk link generation."""

    success_count: int
    error_count: int
    links: list[WhatsAppLinkResponse]
    errors: list[str]


# ─────────────────────────────────────────────────────────────────────────────
# ANALYTICS
# ─────────────────────────────────────────────────────────────────────────────
class AnalyticsOverview(BaseSchema):
    """Analytics overview response."""

    total_links: int
    total_qr_codes: int
    total_clicks: int
    total_downloads: int
    links_today: int
    qr_codes_today: int


class ClickAnalytics(BaseSchema):
    """Click analytics for a link."""

    link_id: str
    total_clicks: int
    clicks_by_day: dict[str, int]
    last_clicked: datetime | None = None
