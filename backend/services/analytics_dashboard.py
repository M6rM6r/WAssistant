"""
INTJ: Analytics Dashboard Service for comprehensive usage tracking
OCPD: Quantifiable metrics with measurable business impact
"""
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Any
from dataclasses import dataclass
from enum import Enum
import json

from sqlalchemy import func, and_
from sqlalchemy.orm import Session

from backend.models import AnalyticsEvent, User, HistoryItem
from backend.cache_manager import cache

class MetricType(Enum):
    """Types of analytics metrics"""
    DAILY_ACTIVE_USERS = "dau"
    MONTHLY_ACTIVE_USERS = "mau"
    QR_GENERATED = "qr_generated"
    LINKS_CREATED = "links_created"
    TEMPLATES_USED = "templates_used"
    VCARD_CREATED = "vcard_created"
    CONVERSION_RATE = "conversion_rate"
    RETENTION_7D = "retention_7d"
    RETENTION_30D = "retention_30d"

@dataclass
class DashboardMetrics:
    """Comprehensive dashboard metrics"""
    timestamp: datetime
    period: str
    user_metrics: Dict[str, Any]
    feature_metrics: Dict[str, Any]
    engagement_metrics: Dict[str, Any]
    geographic_metrics: Dict[str, Any]

class AnalyticsDashboardService:
    """INTJ: Enterprise analytics dashboard with real-time insights"""
    
    def __init__(self):
        self._cache_prefix = "analytics_dashboard"
    
    async def get_overview_metrics(
        self,
        db: Session,
        days: int = 30
    ) -> DashboardMetrics:
        """OCPD: Comprehensive overview with caching"""
        cache_key = f"{self._cache_prefix}:overview:{days}"
        
        cached = cache.get(cache_key)
        if cached:
            return DashboardMetrics(**cached)
        
        from_date = datetime.utcnow() - timedelta(days=days)
        
        metrics = DashboardMetrics(
            timestamp=datetime.utcnow(),
            period=f"{days}d",
            user_metrics=await self._get_user_metrics(db, from_date),
            feature_metrics=await self._get_feature_metrics(db, from_date),
            engagement_metrics=await self._get_engagement_metrics(db, from_date),
            geographic_metrics=await self._get_geographic_metrics(db, from_date)
        )
        
        # Cache for 5 minutes
        cache.set(cache_key, metrics.__dict__, ttl=300)
        
        return metrics
    
    async def _get_user_metrics(
        self,
        db: Session,
        from_date: datetime
    ) -> Dict[str, Any]:
        """INTJ: User acquisition and retention metrics"""
        # Daily Active Users
        dau = db.query(AnalyticsEvent.user_id).filter(
            AnalyticsEvent.created_at >= datetime.utcnow() - timedelta(days=1)
        ).distinct().count()
        
        # Monthly Active Users
        mau = db.query(AnalyticsEvent.user_id).filter(
            AnalyticsEvent.created_at >= from_date
        ).distinct().count()
        
        # Total users
        total_users = db.query(User).count()
        
        # New users in period
        new_users = db.query(User).filter(
            User.created_at >= from_date
        ).count()
        
        # Retention calculations
        retention_7d = await self._calculate_retention(db, 7)
        retention_30d = await self._calculate_retention(db, 30)
        
        return {
            "dau": dau,
            "mau": mau,
            "total_users": total_users,
            "new_users": new_users,
            "retention_7d": retention_7d,
            "retention_30d": retention_30d,
            "churn_rate": 1 - retention_30d,
            "user_growth_rate": (new_users / max(total_users - new_users, 1))
        }
    
    async def _get_feature_metrics(
        self,
        db: Session,
        from_date: datetime
    ) -> Dict[str, Any]:
        """OCPD: Feature adoption and usage metrics"""
        # Event counts by type
        event_counts = db.query(
            AnalyticsEvent.event_type,
            func.count(AnalyticsEvent.id).label('count')
        ).filter(
            AnalyticsEvent.created_at >= from_date
        ).group_by(AnalyticsEvent.event_type).all()
        
        counts = {event_type: count for event_type, count in event_counts}
        
        # Feature adoption funnel
        qr_count = counts.get('qr_generated', 0)
        link_count = counts.get('link_created', 0)
        template_count = counts.get('template_used', 0)
        vcard_count = counts.get('vcard_generated', 0)
        
        total = qr_count + link_count + template_count + vcard_count
        
        return {
            "qr_generated": qr_count,
            "links_created": link_count,
            "templates_used": template_count,
            "vcards_created": vcard_count,
            "feature_adoption": {
                "qr_percentage": qr_count / max(total, 1),
                "link_percentage": link_count / max(total, 1),
                "template_percentage": template_count / max(total, 1),
                "vcard_percentage": vcard_count / max(total, 1),
            },
            "top_features": sorted(
                [{"feature": k, "count": v} for k, v in counts.items()],
                key=lambda x: x["count"],
                reverse=True
            )[:5]
        }
    
    async def _get_engagement_metrics(
        self,
        db: Session,
        from_date: datetime
    ) -> Dict[str, Any]:
        """INTJ: User engagement quality metrics"""
        # Average events per user
        user_event_counts = db.query(
            AnalyticsEvent.user_id,
            func.count(AnalyticsEvent.id).label('count')
        ).filter(
            AnalyticsEvent.created_at >= from_date
        ).group_by(AnalyticsEvent.user_id).all()
        
        avg_events = (
            sum(count for _, count in user_event_counts) / 
            max(len(user_event_counts), 1)
        )
        
        # Power users (top 10% by activity)
        sorted_counts = sorted(user_event_counts, key=lambda x: x[1], reverse=True)
        power_user_threshold = int(len(sorted_counts) * 0.1)
        power_users = sorted_counts[:power_user_threshold]
        
        # Session duration estimation (based on time between first and last event)
        session_data = db.query(
            AnalyticsEvent.user_id,
            func.min(AnalyticsEvent.created_at).label('first'),
            func.max(AnalyticsEvent.created_at).label('last')
        ).filter(
            AnalyticsEvent.created_at >= from_date
        ).group_by(AnalyticsEvent.user_id).all()
        
        avg_session_minutes = 0
        if session_data:
            total_minutes = sum(
                (last - first).total_seconds() / 60 
                for _, first, last in session_data
            )
            avg_session_minutes = total_minutes / len(session_data)
        
        return {
            "avg_events_per_user": round(avg_events, 2),
            "avg_session_minutes": round(avg_session_minutes, 2),
            "power_user_count": len(power_users),
            "power_user_percentage": len(power_users) / max(len(user_event_counts), 1),
            "engagement_score": min(avg_events / 10, 1.0),  # Normalized 0-1
        }
    
    async def _get_geographic_metrics(
        self,
        db: Session,
        from_date: datetime
    ) -> Dict[str, Any]:
        """INTJ: Geographic distribution metrics"""
        # Note: This requires storing country/region data in events
        # Simplified version - in production, use GeoIP
        
        return {
            "top_countries": [],
            "country_distribution": {},
            "timezone_distribution": {}
        }
    
    async def _calculate_retention(
        self,
        db: Session,
        days: int
    ) -> float:
        """OCPD: Cohort retention calculation"""
        cohort_date = datetime.utcnow() - timedelta(days=days)
        
        # Users who signed up on cohort date
        cohort_users = db.query(User.id).filter(
            func.date(User.created_at) == func.date(cohort_date)
        ).all()
        
        if not cohort_users:
            return 0.0
        
        cohort_ids = [u[0] for u in cohort_users]
        
        # Users still active
        active_users = db.query(AnalyticsEvent.user_id).filter(
            AnalyticsEvent.user_id.in_(cohort_ids),
            AnalyticsEvent.created_at >= datetime.utcnow() - timedelta(days=1)
        ).distinct().count()
        
        return active_users / len(cohort_ids)
    
    async def get_realtime_metrics(self, db: Session) -> Dict[str, Any]:
        """INTJ: Real-time active users and events"""
        last_5_min = datetime.utcnow() - timedelta(minutes=5)
        
        active_now = db.query(AnalyticsEvent.user_id).filter(
            AnalyticsEvent.created_at >= last_5_min
        ).distinct().count()
        
        events_last_5m = db.query(AnalyticsEvent).filter(
            AnalyticsEvent.created_at >= last_5_min
        ).count()
        
        return {
            "active_now": active_now,
            "events_per_minute": events_last_5m / 5,
            "server_time": datetime.utcnow().isoformat()
        }
    
    async def get_conversion_funnel(
        self,
        db: Session,
        days: int = 30
    ) -> List[Dict[str, Any]]:
        """INTJ: User conversion funnel analysis"""
        from_date = datetime.utcnow() - timedelta(days=days)
        
        # Funnel stages
        stages = [
            {
                "stage": "signup",
                "count": db.query(User).filter(
                    User.created_at >= from_date
                ).count(),
                "percentage": 100.0
            },
            {
                "stage": "first_qr",
                "count": db.query(AnalyticsEvent.user_id).filter(
                    AnalyticsEvent.event_type == 'qr_generated',
                    AnalyticsEvent.created_at >= from_date
                ).distinct().count()
            },
            {
                "stage": "returning_user",
                "count": db.query(AnalyticsEvent.user_id).filter(
                    AnalyticsEvent.created_at >= from_date
                ).having(func.count(AnalyticsEvent.id) > 1).distinct().count()
            }
        ]
        
        # Calculate percentages
        base_count = stages[0]["count"]
        for stage in stages[1:]:
            stage["percentage"] = (stage["count"] / max(base_count, 1)) * 100
        
        return stages
    
    async def export_analytics_report(
        self,
        db: Session,
        start_date: datetime,
        end_date: datetime,
        format: str = "json"
    ) -> Dict[str, Any]:
        """Generate comprehensive analytics report"""
        days = (end_date - start_date).days
        
        report = {
            "generated_at": datetime.utcnow().isoformat(),
            "period": {
                "start": start_date.isoformat(),
                "end": end_date.isoformat(),
                "days": days
            },
            "metrics": await self.get_overview_metrics(db, days),
            "conversion_funnel": await self.get_conversion_funnel(db, days),
            "export_format": format
        }
        
        return report

# Global dashboard service instance
dashboard_service = AnalyticsDashboardService()
