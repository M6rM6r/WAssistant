#!/usr/bin/env python3
# flake8: noqa
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Utilities (Common Functions)
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from backend.utils_service import (
    clean_phone_number,
    validate_phone_number,
    generate_whatsapp_link,
    generate_short_code,
    hash_data,
    sanitize_filename,
    format_phone_display,
    truncate_string,
    is_valid_url,
)


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
