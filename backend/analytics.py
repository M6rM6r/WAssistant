# flake8: noqa
# mypy: ignore-errors
"""
Advanced Analytics & Retention Strategy (Python Backend)
OCPD: Cohort analysis, funnel tracking, predictive churn modeling
"""

import json
from datetime import datetime, timedelta
from enum import Enum

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.orm import Session

from backend import auth, models
from backend.database import get_db

router = APIRouter(prefix="/api/v1/analytics", tags=["Analytics"])


class EventType(str, Enum):
    """User engagement event types"""

    QR_GENERATED = "qr_generated"
    LINK_CREATED = "link_created"
    VCARD_GENERATED = "vcard_generated"
    HISTORY_VIEWED = "history_viewed"
    SETTINGS_UPDATED = "settings_updated"
    SHARED = "shared"


class AnalyticsEvent(BaseModel):
    """Track individual user events"""

    event_type: EventType
    user_id: int
    metadata: dict | None = None
    timestamp: datetime = None

    class Config:
        orm_mode = True


class UserCohort(BaseModel):
    """Cohort analysis result"""

    cohort_id: str
    size: int
    retention_rate: float
    avg_lifetime_value: float
    churn_probability: float


@router.post("/events", response_model=dict)
async def track_event(
    event: AnalyticsEvent,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db),
):
    """Track user engagement events"""
    event.timestamp = event.timestamp or datetime.utcnow()
    event.user_id = current_user.id

    # Create event record
    db_event = models.AnalyticsEvent(
        user_id=event.user_id,
        event_type=event.event_type,
        metadata=json.dumps(event.metadata or {}),
        created_at=event.timestamp,
    )
    db.add(db_event)
    db.commit()

    return {"status": "recorded", "event_id": db_event.id}


@router.get("/user/metrics", response_model=dict)
async def get_user_metrics(
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db),
):
    """Get personalized engagement metrics"""
    thirty_days_ago = datetime.utcnow() - timedelta(days=30)

    # Fetch recent events
    recent_events = (
        db.query(models.AnalyticsEvent)
        .filter(
            models.AnalyticsEvent.user_id == current_user.id,
            models.AnalyticsEvent.created_at >= thirty_days_ago,
        )
        .all()
    )

    # Calculate metrics
    event_counts = {}
    for event in recent_events:
        event_counts[event.event_type] = event_counts.get(event.event_type, 0) + 1

    # Churn prediction score (0-100)
    churn_score = _calculate_churn_score(current_user, recent_events, db)

    return {
        "user_id": current_user.id,
        "total_events_30d": len(recent_events),
        "event_breakdown": event_counts,
        "churn_probability": churn_score,
        "recommendation": _get_retention_recommendation(churn_score),
    }


@router.get("/cohorts", response_model=list[UserCohort])
async def analyze_cohorts(
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db),
):
    """Perform cohort analysis"""
    if current_user.role != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN)

    # Group users by signup week
    cohorts = {}
    for user in db.query(models.User).all():
        week_key = user.created_at.strftime("%Y-W%U")
        if week_key not in cohorts:
            cohorts[week_key] = {"users": [], "created_at": user.created_at}
        cohorts[week_key]["users"].append(user)

    # Calculate retention for each cohort
    results = []
    for cohort_id, cohort_data in cohorts.items():
        users = cohort_data["users"]
        active_users = sum(
            1 for u in users if (datetime.utcnow() - u.updated_at) < timedelta(days=30)
        )
        retention_rate = active_users / len(users) if users else 0

        results.append(
            UserCohort(
                cohort_id=cohort_id,
                size=len(users),
                retention_rate=retention_rate,
                avg_lifetime_value=_calculate_ltv(users, db),
                churn_probability=1 - retention_rate,
            )
        )

    return sorted(results, key=lambda x: x.churn_probability, reverse=True)


@router.get("/features/top", response_model=list[dict])
async def get_top_features(
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db),
):
    """Identify most-used features"""
    if current_user.role != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN)

    events = db.query(models.AnalyticsEvent).all()
    feature_counts = {}

    for event in events:
        feature_counts[event.event_type] = feature_counts.get(event.event_type, 0) + 1

    return sorted(
        [{"feature": k, "count": v} for k, v in feature_counts.items()],
        key=lambda x: x["count"],
        reverse=True,
    )


@router.post("/interventions", response_model=dict)
async def trigger_intervention(
    user_id: int,
    intervention_type: str,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db),
):
    """Trigger targeted re-engagement intervention"""
    if current_user.role != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN)

    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

    # Log intervention
    intervention = models.Intervention(
        user_id=user_id,
        intervention_type=intervention_type,
        triggered_at=datetime.utcnow(),
    )
    db.add(intervention)
    db.commit()

    return {
        "intervention_id": intervention.id,
        "user_id": user_id,
        "type": intervention_type,
        "status": "triggered",
    }


def _calculate_churn_score(user: models.User, events: list, db: Session) -> float:
    """Predict churn probability (0-100)"""
    days_since_active = (datetime.utcnow() - user.updated_at).days
    event_count = len(events)

    # Simple heuristic: no activity in 14 days = 80% churn probability
    if days_since_active > 14:
        return 80.0
    elif days_since_active > 7:
        return 50.0
    elif event_count == 0:
        return 60.0
    else:
        return max(0, 100 - (event_count * 5))


def _get_retention_recommendation(churn_score: float) -> str:
    """Generate actionable recommendation"""
    if churn_score > 70:
        return "CRITICAL: Trigger immediate re-engagement (email, push, in-app message)"
    elif churn_score > 50:
        return "HIGH: Offer new features or content recommendation"
    elif churn_score > 30:
        return "MEDIUM: Monitor closely; prepare intervention"
    else:
        return "HEALTHY: Maintain engagement with regular content"


def _calculate_ltv(users: list[models.User], db: Session) -> float:
    """Calculate average lifetime value"""
    if not users:
        return 0.0

    total_value = 0
    for user in users:
        events = db.query(models.AnalyticsEvent).filter_by(user_id=user.id).count()
        total_value += events * 5  # Weighted by event count

    return total_value / len(users)
