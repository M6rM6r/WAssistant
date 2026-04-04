from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from .database import Base

__all__ = ["Base", "HistoryItem", "Template", "User", "AnalyticsEvent"]


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    templates = relationship("Template", back_populates="owner")
    history = relationship("HistoryItem", back_populates="owner")


class Template(Base):
    __tablename__ = "templates"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    content = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="templates")


class HistoryItem(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(String, nullable=False)  # 'link', 'qr', 'vcard'  # noqa: E501
    data = Column(String, nullable=False)
    display = Column(String, nullable=False)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
    user_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="history")


class AnalyticsEvent(Base):
    __tablename__ = "analytics_events"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    event_type = Column(String, nullable=False)
    metadata = Column(String, nullable=False, default="{}")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    owner = relationship("User")
