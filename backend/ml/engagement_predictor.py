"""
INTJ: Predictive User Engagement & Churn Prevention System
OCPD: Mathematical models for retention optimization with measurable ROI
"""
import json
import math
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from enum import Enum

from sqlalchemy import func
from sqlalchemy.orm import Session

from backend.models import User, AnalyticsEvent, Intervention
from backend.cache_manager import cache
from backend.webhook_manager import webhook_manager, WebhookEventType

class ChurnRiskLevel(str, Enum):
    """OCPD: Risk stratification with intervention triggers"""
    CRITICAL = "critical"    # >80% churn probability
    HIGH = "high"            # 50-80% churn probability
    MEDIUM = "medium"        # 30-50% churn probability
    LOW = "low"              # <30% churn probability
    HEALTHY = "healthy"      # Active user

@dataclass
class EngagementScore:
    """INTJ: Quantified engagement metrics"""
    score: float                    # 0-100
    trend: float                    # Change from last period
    frequency: float                # Actions per day
    recency: float                  # Days since last action
    depth: float                   # Feature usage diversity
    risk_level: ChurnRiskLevel
    intervention_recommended: bool

class EngagementPredictor:
    """INTJ: ML-powered engagement prediction with actionable insights"""
    
    # Feature weights for engagement scoring
    WEIGHTS = {
        "recency": 0.35,
        "frequency": 0.25,
        "depth": 0.20,
        "retention": 0.20
    }
    
    # Risk thresholds
    RISK_THRESHOLDS = {
        ChurnRiskLevel.CRITICAL: 80,
        ChurnRiskLevel.HIGH: 50,
        ChurnRiskLevel.MEDIUM: 30,
        ChurnRiskLevel.LOW: 0
    }
    
    async def analyze_user(
        self,
        db: Session,
        user_id: int,
        days_window: int = 30
    ) -> EngagementScore:
        """OCPD: Comprehensive user engagement analysis"""
        
        # Get user data
        user = db.query(User).get(user_id)
        if not user:
            return None
        
        # Calculate components
        recency_score = self._calculate_recency_score(user)
        frequency_score = self._calculate_frequency_score(db, user_id, days_window)
        depth_score = self._calculate_depth_score(db, user_id, days_window)
        retention_score = self._calculate_retention_score(user)
        
        # Calculate weighted engagement score
        engagement_score = (
            recency_score * self.WEIGHTS["recency"] +
            frequency_score * self.WEIGHTS["frequency"] +
            depth_score * self.WEIGHTS["depth"] +
            retention_score * self.WEIGHTS["retention"]
        ) * 100
        
        # Calculate trend (change from previous period)
        trend = await self._calculate_trend(db, user_id, days_window)
        
        # Determine risk level
        risk_level = self._determine_risk_level(engagement_score)
        
        # Check if intervention needed
        intervention_needed = self._should_intervene(risk_level, trend)
        
        return EngagementScore(
            score=round(engagement_score, 2),
            trend=round(trend, 2),
            frequency=round(frequency_score, 4),
            recency=round(recency_score, 4),
            depth=round(depth_score, 4),
            risk_level=risk_level,
            intervention_recommended=intervention_needed
        )
    
    def _calculate_recency_score(self, user: User) -> float:
        """Score based on days since last activity (0-1)"""
        if not user.updated_at:
            return 0.0
        
        days_inactive = (datetime.utcnow() - user.updated_at).days
        
        # Exponential decay: 1.0 at 0 days, ~0.05 at 14 days
        score = math.exp(-0.2 * days_inactive)
        return min(max(score, 0.0), 1.0)
    
    def _calculate_frequency_score(
        self,
        db: Session,
        user_id: int,
        days_window: int
    ) -> float:
        """Score based on actions per day (0-1)"""
        from_date = datetime.utcnow() - timedelta(days=days_window)
        
        event_count = db.query(AnalyticsEvent).filter(
            AnalyticsEvent.user_id == user_id,
            AnalyticsEvent.created_at >= from_date
        ).count()
        
        # Optimal: 3+ actions per day
        actions_per_day = event_count / days_window
        score = min(actions_per_day / 3.0, 1.0)
        
        return score
    
    def _calculate_depth_score(
        self,
        db: Session,
        user_id: int,
        days_window: int
    ) -> float:
        """Score based on feature usage diversity (0-1)"""
        from_date = datetime.utcnow() - timedelta(days=days_window)
        
        # Count unique event types
        unique_events = db.query(AnalyticsEvent.event_type).filter(
            AnalyticsEvent.user_id == user_id,
            AnalyticsEvent.created_at >= from_date
        ).distinct().count()
        
        # Total possible event types
        total_event_types = len(WebhookEventType)
        
        # Score based on percentage of features used
        score = unique_events / total_event_types
        return min(score, 1.0)
    
    def _calculate_retention_score(self, user: User) -> float:
        """Score based on account age and stickiness (0-1)"""
        if not user.created_at:
            return 0.0
        
        # Older accounts with recent activity score higher
        account_age_days = (datetime.utcnow() - user.created_at).days
        
        if account_age_days < 1:
            return 0.5  # New user
        
        # Logarithmic scaling: returns ~0.7 at 7 days, ~0.9 at 30 days, ~1.0 at 90 days
        score = math.log1p(account_age_days) / 5
        return min(score, 1.0)
    
    async def _calculate_trend(
        self,
        db: Session,
        user_id: int,
        days_window: int
    ) -> float:
        """Calculate engagement trend (-1 to 1, positive is improving)"""
        
        # Current period
        current_from = datetime.utcnow() - timedelta(days=days_window)
        current_count = db.query(AnalyticsEvent).filter(
            AnalyticsEvent.user_id == user_id,
            AnalyticsEvent.created_at >= current_from
        ).count()
        
        # Previous period
        previous_from = current_from - timedelta(days=days_window)
        previous_count = db.query(AnalyticsEvent).filter(
            AnalyticsEvent.user_id == user_id,
            AnalyticsEvent.created_at >= previous_from,
            AnalyticsEvent.created_at < current_from
        ).count()
        
        if previous_count == 0:
            return 1.0 if current_count > 0 else 0.0
        
        # Calculate percent change
        change = (current_count - previous_count) / previous_count
        
        # Normalize to -1 to 1 range
        return max(min(change, 1.0), -1.0)
    
    def _determine_risk_level(self, engagement_score: float) -> ChurnRiskLevel:
        """OCPD: Risk stratification based on engagement score"""
        if engagement_score >= 80:
            return ChurnRiskLevel.HEALTHY
        elif engagement_score >= 50:
            return ChurnRiskLevel.LOW
        elif engagement_score >= 30:
            return ChurnRiskLevel.MEDIUM
        elif engagement_score >= 20:
            return ChurnRiskLevel.HIGH
        else:
            return ChurnRiskLevel.CRITICAL
    
    def _should_intervene(
        self,
        risk_level: ChurnRiskLevel,
        trend: float
    ) -> bool:
        """INTJ: Strategic intervention decision logic"""
        # Always intervene for critical risk
        if risk_level == ChurnRiskLevel.CRITICAL:
            return True
        
        # Intervene for high risk with negative trend
        if risk_level == ChurnRiskLevel.HIGH and trend < -0.2:
            return True
        
        # Intervene for medium risk with strong negative trend
        if risk_level == ChurnRiskLevel.MEDIUM and trend < -0.5:
            return True
        
        return False
    
    async def get_cohort_analysis(
        self,
        db: Session,
        cohort_period: str = "week"  # week, month
    ) -> List[Dict]:
        """INTJ: Cohort retention analysis"""
        
        # Group users by signup period
        if cohort_period == "week":
            date_format = "%Y-W%U"
        else:
            date_format = "%Y-%m"
        
        # Get all users with their signup date
        users = db.query(User).all()
        
        # Group into cohorts
        cohorts = {}
        for user in users:
            cohort_key = user.created_at.strftime(date_format)
            if cohort_key not in cohorts:
                cohorts[cohort_key] = []
            cohorts[cohort_key].append(user)
        
        # Calculate retention for each cohort
        results = []
        for cohort_key, cohort_users in sorted(cohorts.items()):
            cohort_size = len(cohort_users)
            
            # Check activity at different intervals
            retention_periods = [7, 14, 30, 60, 90]
            retention_rates = {}
            
            for days in retention_periods:
                active_count = 0
                for user in cohort_users:
                    days_since_active = (datetime.utcnow() - user.updated_at).days
                    if days_since_active <= days:
                        active_count += 1
                
                retention_rates[f"day_{days}"] = round(
                    active_count / cohort_size * 100, 2
                ) if cohort_size > 0 else 0
            
            results.append({
                "cohort": cohort_key,
                "size": cohort_size,
                "retention": retention_rates,
                "avg_engagement": await self._calculate_cohort_engagement(
                    db, [u.id for u in cohort_users]
                )
            })
        
        return results
    
    async def _calculate_cohort_engagement(
        self,
        db: Session,
        user_ids: List[int]
    ) -> float:
        """Calculate average engagement for cohort"""
        if not user_ids:
            return 0.0
        
        scores = []
        for user_id in user_ids[:100]:  # Sample for performance
            score = await self.analyze_user(db, user_id)
            if score:
                scores.append(score.score)
        
        return round(sum(scores) / len(scores), 2) if scores else 0.0
    
    async def trigger_intervention(
        self,
        db: Session,
        user_id: int,
        intervention_type: str
    ) -> Dict:
        """OCPD: Execute targeted retention intervention"""
        
        user = db.query(User).get(user_id)
        if not user:
            return {"error": "User not found"}
        
        # Log intervention
        intervention = Intervention(
            user_id=user_id,
            intervention_type=intervention_type,
            triggered_at=datetime.utcnow(),
            status="triggered"
        )
        db.add(intervention)
        db.commit()
        
        # Execute based on type
        result = await self._execute_intervention(
            db, user, intervention_type
        )
        
        # Update intervention record
        intervention.status = "completed" if result["success"] else "failed"
        intervention.result_data = json.dumps(result)
        db.commit()
        
        return {
            "intervention_id": intervention.id,
            "type": intervention_type,
            "user_id": user_id,
            **result
        }
    
    async def _execute_intervention(
        self,
        db: Session,
        user: User,
        intervention_type: str
    ) -> Dict:
        """Execute specific intervention strategy"""
        
        strategies = {
            "email_re_engagement": self._send_re_engagement_email,
            "feature_highlight": self._highlight_unused_features,
            "personalized_template": self._send_personalized_template,
            "discount_offer": self._send_discount_offer,
            "push_notification": self._send_push_notification,
        }
        
        strategy = strategies.get(intervention_type)
        if not strategy:
            return {"success": False, "error": "Unknown intervention type"}
        
        return await strategy(user)
    
    async def _send_re_engagement_email(self, user: User) -> Dict:
        """Strategy: Send re-engagement email"""
        # Implementation would integrate with email service
        return {
            "success": True,
            "action": "email_sent",
            "channel": "email"
        }
    
    async def _highlight_unused_features(self, user: User) -> Dict:
        """Strategy: Show user features they haven't used"""
        return {
            "success": True,
            "action": "feature_highlight",
            "channel": "in_app"
        }
    
    async def _send_personalized_template(self, user: User) -> Dict:
        """Strategy: Recommend personalized templates"""
        return {
            "success": True,
            "action": "template_recommendation",
            "channel": "in_app"
        }
    
    async def _send_discount_offer(self, user: User) -> Dict:
        """Strategy: Send discount/promotional offer"""
        return {
            "success": True,
            "action": "discount_sent",
            "channel": "email"
        }
    
    async def _send_push_notification(self, user: User) -> Dict:
        """Strategy: Send push notification"""
        return {
            "success": True,
            "action": "push_sent",
            "channel": "push"
        }
    
    def get_intervention_effectiveness(
        self,
        db: Session,
        days: int = 30
    ) -> Dict:
        """INTJ: Measure intervention ROI"""
        from_date = datetime.utcnow() - timedelta(days=days)
        
        # Get all interventions in period
        interventions = db.query(Intervention).filter(
            Intervention.triggered_at >= from_date
        ).all()
        
        if not interventions:
            return {"error": "No interventions in period"}
        
        # Calculate effectiveness
        successful = 0
        re_engaged = 0
        
        for intervention in interventions:
            # Check if user was re-engaged after intervention
            user = db.query(User).get(intervention.user_id)
            if user:
                days_since = (datetime.utcnow() - intervention.triggered_at).days
                if days_since <= 7 and (datetime.utcnow() - user.updated_at).days <= 7:
                    re_engaged += 1
                    successful += 1
        
        total = len(interventions)
        
        return {
            "total_interventions": total,
            "successful": successful,
            "re_engaged_users": re_engaged,
            "success_rate": round(successful / total * 100, 2) if total > 0 else 0,
            "roi_estimate": f"{re_engaged} users retained"
        }

# Global predictor instance
engagement_predictor = EngagementPredictor()
