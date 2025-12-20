#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Backend Configuration (Pydantic Settings)
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

from functools import lru_cache
from typing import Literal

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # ─────────────────────────────────────────────────────────────────────────
    # APP
    # ─────────────────────────────────────────────────────────────────────────
    app_name: str = "WAssistant API"
    app_version: str = "1.4.1"
    env: Literal["development", "staging", "production"] = "development"
    debug: bool = Field(default=True)

    # ─────────────────────────────────────────────────────────────────────────
    # SERVER
    # ─────────────────────────────────────────────────────────────────────────
    host: str = "0.0.0.0"
    port: int = 8000
    workers: int = 1
    reload: bool = True

    # ─────────────────────────────────────────────────────────────────────────
    # DATABASE
    # ─────────────────────────────────────────────────────────────────────────
    database_url: str = "sqlite:///./wassistant.db"

    # ─────────────────────────────────────────────────────────────────────────
    # REDIS
    # ─────────────────────────────────────────────────────────────────────────
    redis_url: str = "redis://localhost:6379/0"

    # ─────────────────────────────────────────────────────────────────────────
    # CORS
    # ─────────────────────────────────────────────────────────────────────────
    cors_origins: list[str] = ["*"]

    # ─────────────────────────────────────────────────────────────────────────
    # SECURITY
    # ─────────────────────────────────────────────────────────────────────────
    secret_key: str = "change-me-in-production-please"
    api_key: str | None = None

    # ─────────────────────────────────────────────────────────────────────────
    # SENTRY
    # ─────────────────────────────────────────────────────────────────────────
    sentry_dsn: str | None = None

    # ─────────────────────────────────────────────────────────────────────────
    # RATE LIMITING
    # ─────────────────────────────────────────────────────────────────────────
    rate_limit_requests: int = 100
    rate_limit_window: int = 60  # seconds

    @property
    def is_production(self) -> bool:
        return self.env == "production"

    @property
    def is_development(self) -> bool:
        return self.env == "development"


@lru_cache
def get_settings() -> Settings:
    """Get cached settings instance."""
    return Settings()


settings = get_settings()
