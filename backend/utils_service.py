"""
Utils Service Module
Encapsulates utility functions for phone numbers, WhatsApp links, hashing, filenames, formatting, and validation.
"""
import hashlib
import re
import secrets
import string
from typing import Any
from urllib.parse import quote

def clean_phone_number(phone: str) -> str:
    return "".join(filter(str.isdigit, phone))

def validate_phone_number(phone: str) -> bool:
    clean = clean_phone_number(phone)
    return 7 <= len(clean) <= 15

def generate_whatsapp_link(phone: str, message: str | None = None) -> str:
    clean_phone = clean_phone_number(phone)
    link = f"https://wa.me/{clean_phone}"
    if message:
        link += f"?text={quote(message)}"
    return link

def generate_short_code(length: int = 8) -> str:
    alphabet = string.ascii_letters + string.digits
    return "".join(secrets.choice(alphabet) for _ in range(length))

def hash_data(data: str) -> str:
    return hashlib.sha256(data.encode()).hexdigest()

def sanitize_filename(filename: str) -> str:
    filename = filename.replace("/", "_").replace("\\", "_").replace("\x00", "")
    filename = re.sub(r'[<>:"|?*]', "_", filename)
    if len(filename) > 255:
        name, ext = filename.rsplit(".", 1) if "." in filename else (filename, "")
        filename = name[: 255 - len(ext) - 1] + "." + ext if ext else name[:255]
    return filename

def format_phone_display(phone: str) -> str:
    clean = clean_phone_number(phone)
    if len(clean) <= 4:
        return clean
    if len(clean) >= 10:
        return f"+{clean[:2]} {clean[2:5]} {clean[5:8]} {clean[8:]}"
    return f"+{clean}"

def truncate_string(s: str, max_length: int = 100, suffix: str = "...") -> str:
    if len(s) <= max_length:
        return s
    return s[: max_length - len(suffix)] + suffix

def is_valid_url(url: str) -> bool:
    url_pattern = re.compile(
        r"^https?://"
        r"(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,6}\.?|"
        r"localhost|"
        r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})"
        r"(?::\d+)?"
        r"(?:/?|[/?]\S+)$",
        re.IGNORECASE,
    )
    return bool(url_pattern.match(url))
