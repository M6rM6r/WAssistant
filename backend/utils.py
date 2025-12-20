#!/usr/bin/env python3
# flake8: noqa
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Utilities (Common Functions)
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

import hashlib
import re
import secrets
import string
from typing import Any
from urllib.parse import quote


def clean_phone_number(phone: str) -> str:
    """Clean phone number - keep only digits."""
    return "".join(filter(str.isdigit, phone))


def validate_phone_number(phone: str) -> bool:
    """Validate phone number format."""
    clean = clean_phone_number(phone)
    return 7 <= len(clean) <= 15


def generate_whatsapp_link(phone: str, message: str | None = None) -> str:
    """Generate WhatsApp link."""
    clean_phone = clean_phone_number(phone)
    link = f"https://wa.me/{clean_phone}"
    if message:
        link += f"?text={quote(message)}"
    return link


def generate_short_code(length: int = 8) -> str:
    """Generate a random short code."""
    alphabet = string.ascii_letters + string.digits
    return "".join(secrets.choice(alphabet) for _ in range(length))


def hash_data(data: str) -> str:
    """Generate SHA-256 hash of data."""
    return hashlib.sha256(data.encode()).hexdigest()


def sanitize_filename(filename: str) -> str:
    """Sanitize filename for safe storage."""
    # Remove path separators and null bytes
    filename = (
        filename.replace("/", "_").replace("\\", "_").replace("\x00", "")
    )
    # Remove other dangerous characters
    filename = re.sub(r'[<>:"|?*]', "_", filename)
    # Limit length
    if len(filename) > 255:
        name, ext = (
            filename.rsplit(".", 1) if "." in filename else (filename, "")
        )
        filename = (
            name[: 255 - len(ext) - 1] + "." + ext if ext else name[:255]
        )
    return filename


def format_phone_display(phone: str) -> str:
    """Format phone number for display."""
    clean = clean_phone_number(phone)
    if len(clean) <= 4:
        return clean
    # Simple format: +XX XXX XXX XXXX
    if len(clean) >= 10:
        return f"+{clean[:2]} {clean[2:5]} {clean[5:8]} {clean[8:]}"
    return f"+{clean}"


def truncate_string(s: str, max_length: int = 100, suffix: str = "...") -> str:
    """Truncate string with suffix."""
    if len(s) <= max_length:
        return s
    return s[: max_length - len(suffix)] + suffix


def is_valid_url(url: str) -> bool:
    """Basic URL validation."""
    url_pattern = re.compile(
        r"^https?://"  # http:// or https://
        r"(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,6}\.?|"  # domain
        r"localhost|"  # localhost
        r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})"  # IP
        r"(?::\d+)?"  # optional port
        r"(?:/?|[/?]\S+)$",
        re.IGNORECASE,
    )
    return bool(url_pattern.match(url))


def mask_phone(phone: str) -> str:
    """Mask phone number for privacy."""
    clean = clean_phone_number(phone)
    if len(clean) <= 4:
        return "*" * len(clean)
    return clean[:2] + "*" * (len(clean) - 4) + clean[-2:]


def deep_merge(base: dict[str, Any], update: dict[str, Any]) -> dict[str, Any]:
    """Deep merge two dictionaries."""
    result = base.copy()
    for key, value in update.items():
        if (
            key in result
            and isinstance(result[key], dict)
            and isinstance(value, dict)
        ):
            result[key] = deep_merge(result[key], value)
        else:
            result[key] = value
    return result
