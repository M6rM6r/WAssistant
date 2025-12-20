#!/usr/bin/env python3
# flake8: noqa
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Backend Tests (Pytest)
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from backend.main import app
from backend.utils import (
    clean_phone_number,
    format_phone_display,
    generate_short_code,
    generate_whatsapp_link,
    hash_data,
    is_valid_url,
    mask_phone,
    sanitize_filename,
    truncate_string,
    validate_phone_number,
)


# ─────────────────────────────────────────────────────────────────────────────
# FIXTURES
# ─────────────────────────────────────────────────────────────────────────────
@pytest.fixture  # type: ignore[misc]
def client() -> TestClient:
    """Create test client."""
    return TestClient(app)


# ─────────────────────────────────────────────────────────────────────────────
# API TESTS
# ─────────────────────────────────────────────────────────────────────────────
class TestHealthEndpoints:
    """Test health check endpoints."""

    def test_root_returns_healthy(self, client: TestClient) -> None:
        response = client.get("/")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"

    def test_health_endpoint(self, client: TestClient) -> None:
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert "version" in data


class TestQREndpoints:
    """Test QR code generation endpoints."""

    def test_generate_qr_post(self, client: TestClient) -> None:
        response = client.post("/qr", json={"data": "https://example.com"})
        assert response.status_code == 200
        assert response.headers["content-type"] == "image/png"

    def test_generate_qr_get(self, client: TestClient) -> None:
        response = client.get("/qr", params={"data": "test data"})
        assert response.status_code == 200
        assert response.headers["content-type"] == "image/png"

    def test_generate_qr_custom_size(self, client: TestClient) -> None:
        response = client.post("/qr", json={"data": "test", "size": 500})
        assert response.status_code == 200

    def test_generate_qr_invalid_size(self, client: TestClient) -> None:
        response = client.post("/qr", json={"data": "test", "size": 10000})
        assert response.status_code == 422


class TestWhatsAppEndpoints:
    """Test WhatsApp link generation endpoints."""

    def test_generate_link(self, client: TestClient) -> None:
        response = client.post("/whatsapp/link", json={"phone": "+1234567890"})
        assert response.status_code == 200
        data = response.json()
        assert "link" in data
        assert "wa.me" in data["link"]

    def test_generate_link_with_message(self, client: TestClient) -> None:
        response = client.post(
            "/whatsapp/link",
            json={"phone": "+1234567890", "message": "Hello World"},
        )
        assert response.status_code == 200
        data = response.json()
        assert "text=" in data["link"]


# ─────────────────────────────────────────────────────────────────────────────
# UTILITY TESTS
# ─────────────────────────────────────────────────────────────────────────────
class TestPhoneUtils:
    """Test phone number utilities."""

    def test_clean_phone_number(self) -> None:
        assert clean_phone_number("+1 (234) 567-8900") == "12345678900"
        assert clean_phone_number("1234567890") == "1234567890"
        assert clean_phone_number("") == ""

    def test_validate_phone_number(self) -> None:
        assert validate_phone_number("1234567") is True
        assert validate_phone_number("12345678901234") is True
        assert validate_phone_number("123") is False
        assert validate_phone_number("1234567890123456") is False

    def test_format_phone_display(self) -> None:
        result = format_phone_display("12345678901")
        assert result.startswith("+")

    def test_mask_phone(self) -> None:
        assert mask_phone("12345678901") == "12*******01"
        assert mask_phone("1234") == "****"


class TestGenerators:
    """Test generation utilities."""

    def test_generate_whatsapp_link(self) -> None:
        link = generate_whatsapp_link("1234567890")
        assert link == "https://wa.me/1234567890"

    def test_generate_whatsapp_link_with_message(self) -> None:
        link = generate_whatsapp_link("1234567890", "Hello")
        assert "text=Hello" in link

    def test_generate_short_code(self) -> None:
        code = generate_short_code(8)
        assert len(code) == 8
        code2 = generate_short_code(8)
        assert code != code2  # Should be random

    def test_hash_data(self) -> None:
        h1 = hash_data("test")
        h2 = hash_data("test")
        assert h1 == h2
        assert len(h1) == 64


class TestStringUtils:
    """Test string utilities."""

    def test_sanitize_filename(self) -> None:
        assert sanitize_filename("file/name.txt") == "file_name.txt"
        assert sanitize_filename("file:name.txt") == "file_name.txt"

    def test_truncate_string(self) -> None:
        assert truncate_string("short", 10) == "short"
        assert truncate_string("this is a long string", 10) == "this is..."

    def test_is_valid_url(self) -> None:
        assert is_valid_url("https://example.com") is True
        assert is_valid_url("http://localhost:8000") is True
        assert is_valid_url("not a url") is False
