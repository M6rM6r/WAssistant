#!/usr/bin/env python3
# flake8: noqa
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Comprehensive API Test Suite (Pytest)
═══════════════════════════════════════════════════════════════════════════════
"""

# flake8: noqa
from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from backend.main import app


@pytest.fixture(scope="session")  # type: ignore[misc]
def client() -> TestClient:
    """Create test client."""
    return TestClient(app)


# ─────────────────────────────────────────────────────────────────────────────
# HEALTH ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────
class TestHealth:
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


# ─────────────────────────────────────────────────────────────────────────────
# QR CODE ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────
class TestQRCode:
    """Test QR code generation."""

    def test_generate_qr_post_success(self, client: TestClient) -> None:
        response = client.post("/qr", json={"data": "https://example.com"})
        assert response.status_code == 200
        assert response.headers["content-type"] == "image/png"
        assert len(response.content) > 100  # Should have image data

    def test_generate_qr_get_success(self, client: TestClient) -> None:
        response = client.get("/qr", params={"data": "test data"})
        assert response.status_code == 200
        assert response.headers["content-type"] == "image/png"

    def test_generate_qr_with_custom_size(self, client: TestClient) -> None:
        response = client.post("/qr", json={"data": "test", "size": 500})
        assert response.status_code == 200

    def test_generate_qr_invalid_size_too_large(
        self, client: TestClient
    ) -> None:
        response = client.post("/qr", json={"data": "test", "size": 10000})
        assert response.status_code == 422

    def test_generate_qr_invalid_size_too_small(
        self, client: TestClient
    ) -> None:
        response = client.post("/qr", json={"data": "test", "size": 50})
        assert response.status_code == 422

    def test_generate_qr_empty_data(self, client: TestClient) -> None:
        response = client.post("/qr", json={"data": ""})
        assert response.status_code == 422

    def test_generate_qr_with_error_correction(
        self, client: TestClient
    ) -> None:
        for level in ["L", "M", "Q", "H"]:
            response = client.post(
                "/qr", json={"data": "test", "error_correction": level}
            )
            assert response.status_code == 200

    def test_generate_qr_special_characters(self, client: TestClient) -> None:
        response = client.post("/qr", json={"data": "Hello! こんにちは 🎉"})
        assert response.status_code == 200


# ─────────────────────────────────────────────────────────────────────────────
# WHATSAPP ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────
class TestWhatsApp:
    """Test WhatsApp link generation."""

    def test_generate_link_basic(self, client: TestClient) -> None:
        response = client.post("/whatsapp/link", json={"phone": "+1234567890"})
        assert response.status_code == 200
        data = response.json()
        assert "link" in data
        assert "wa.me" in data["link"]
        assert "1234567890" in data["link"]

    def test_generate_link_with_message(self, client: TestClient) -> None:
        response = client.post(
            "/whatsapp/link",
            json={"phone": "+1234567890", "message": "Hello World!"},
        )
        assert response.status_code == 200
        data = response.json()
        assert "text=" in data["link"]
        assert "Hello" in data["link"] or "Hello%20" in data["link"]

    def test_generate_link_cleans_phone(self, client: TestClient) -> None:
        response = client.post(
            "/whatsapp/link", json={"phone": "+1 (234) 567-8900"}
        )
        assert response.status_code == 200
        data = response.json()
        assert "12345678900" in data["link"]

    def test_generate_link_get_method(self, client: TestClient) -> None:
        response = client.get("/whatsapp/link", params={"phone": "1234567890"})
        assert response.status_code == 200
        data = response.json()
        assert "wa.me" in data["link"]


# ─────────────────────────────────────────────────────────────────────────────
# OPENAPI SCHEMA
# ─────────────────────────────────────────────────────────────────────────────
class TestOpenAPI:
    """Test OpenAPI documentation."""

    def test_openapi_schema_available(self, client: TestClient) -> None:
        response = client.get("/openapi.json")
        assert response.status_code == 200
        data = response.json()
        assert "openapi" in data
        assert "paths" in data

    def test_docs_available(self, client: TestClient) -> None:
        response = client.get("/docs")
        assert response.status_code == 200

    def test_redoc_available(self, client: TestClient) -> None:
        response = client.get("/redoc")
        assert response.status_code == 200


# ─────────────────────────────────────────────────────────────────────────────
# ERROR HANDLING
# ─────────────────────────────────────────────────────────────────────────────
class TestErrorHandling:
    """Test error responses."""

    def test_404_not_found(self, client: TestClient) -> None:
        response = client.get("/nonexistent-endpoint")
        assert response.status_code == 404

    def test_405_method_not_allowed(self, client: TestClient) -> None:
        response = client.delete("/health")
        assert response.status_code == 405

    def test_422_validation_error(self, client: TestClient) -> None:
        response = client.post("/qr", json={"invalid": "data"})
        assert response.status_code == 422
