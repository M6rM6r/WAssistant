"""
INTJ: AI-Powered Smart Template Recommendation Engine
OCPD: Data-driven personalization with measurable engagement lift
"""
import json
import re
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Tuple
from collections import defaultdict
import math

from sqlalchemy.orm import Session
from backend.models import User, HistoryItem, Template, AnalyticsEvent
from backend.cache_manager import cache, CacheStrategy

class TemplateRecommender:
    """INTJ: ML-based template recommendation with collaborative filtering"""
    
    def __init__(self):
        self._user_vectors = {}
        self._template_vectors = {}
        self._similarity_threshold = 0.7
    
    async def get_personalized_recommendations(
        self,
        db: Session,
        user_id: int,
        context: Optional[Dict] = None,
        limit: int = 5
    ) -> List[Dict]:
        """OCPD: Strategic recommendation with confidence scoring"""
        
        # Check cache first
        cache_key = f"template_rec:{user_id}:{hash(str(context))}"
        cached = cache.get(cache_key)
        if cached:
            return cached
        
        # Build user preference vector
        user_vector = await self._build_user_vector(db, user_id)
        
        # Get candidate templates
        candidates = self._get_candidate_templates(db, user_id)
        
        # Score and rank
        scored_templates = []
        for template in candidates:
            template_vector = self._build_template_vector(template)
            similarity = self._cosine_similarity(user_vector, template_vector)
            
            # Boost score based on recency and frequency
            recency_boost = self._calculate_recency_boost(template)
            frequency_score = self._calculate_frequency_score(db, template.id)
            
            final_score = (similarity * 0.5 + 
                          recency_boost * 0.3 + 
                          frequency_score * 0.2)
            
            scored_templates.append({
                "template": template,
                "score": final_score,
                "confidence": self._calculate_confidence(similarity, frequency_score)
            })
        
        # Sort by score and filter
        scored_templates.sort(key=lambda x: x["score"], reverse=True)
        
        # Filter by confidence threshold
        high_confidence = [t for t in scored_templates 
                          if t["confidence"] >= self._similarity_threshold]
        
        # Format recommendations
        recommendations = [
            {
                "id": t["template"].id,
                "title": t["template"].title,
                "content": t["template"].content,
                "score": round(t["score"], 4),
                "confidence": round(t["confidence"], 4),
                "reason": self._generate_reason(t, context)
            }
            for t in high_confidence[:limit]
        ]
        
        # Cache recommendations
        cache.set(cache_key, recommendations, 
                 ttl=CacheStrategy.ttl_strategy("templates"))
        
        return recommendations
    
    async def _build_user_vector(self, db: Session, user_id: int) -> Dict[str, float]:
        """INTJ: User preference vector from behavioral data"""
        vector = defaultdict(float)
        
        # Analyze history patterns
        history = db.query(HistoryItem).filter(
            HistoryItem.user_id == user_id
        ).order_by(HistoryItem.created_at.desc()).limit(100).all()
        
        for item in history:
            # Extract features from history
            features = self._extract_features(item.data)
            for feature, weight in features.items():
                # Decay older interactions
                age_days = (datetime.utcnow() - item.created_at).days
                decay = math.exp(-0.1 * age_days)
                vector[feature] += weight * decay
        
        # Normalize vector
        magnitude = math.sqrt(sum(v**2 for v in vector.values()))
        if magnitude > 0:
            vector = {k: v/magnitude for k, v in vector.items()}
        
        return dict(vector)
    
    def _extract_features(self, data: str) -> Dict[str, float]:
        """OCPD: Feature extraction from message data"""
        features = defaultdict(float)
        
        # Message intent patterns
        patterns = {
            "greeting": [r"\b(hi|hello|hey|greetings)\b"],
            "business": [r"\b(business|company|work|office)\b"],
            "delivery": [r"\b(delivery|shipping|order|package)\b"],
            "support": [r"\b(help|support|issue|problem)\b"],
            "sales": [r"\b(price|cost|buy|purchase|order)\b"],
            "meeting": [r"\b(meeting|call|zoom|schedule|appointment)\b"],
            "urgent": [r"\b(urgent|asap|emergency|immediately)\b"],
        }
        
        for category, regex_list in patterns.items():
            for pattern in regex_list:
                if re.search(pattern, data, re.IGNORECASE):
                    features[f"intent_{category}"] += 1.0
        
        # Message length features
        words = len(data.split())
        features["length_short"] = 1.0 if words < 10 else 0.0
        features["length_medium"] = 1.0 if 10 <= words < 30 else 0.0
        features["length_long"] = 1.0 if words >= 30 else 0.0
        
        # Language features
        if re.search(r"\d{10,}", data):
            features["contains_phone"] = 1.0
        if re.search(r"https?://", data):
            features["contains_url"] = 1.0
        
        return dict(features)
    
    def _build_template_vector(self, template: Template) -> Dict[str, float]:
        """Convert template to feature vector"""
        vector = defaultdict(float)
        
        # Content features
        content_features = self._extract_features(template.content)
        vector.update(content_features)
        
        # Title features
        title_features = self._extract_features(template.title)
        for k, v in title_features.items():
            vector[f"title_{k}"] = v
        
        # Normalize
        magnitude = math.sqrt(sum(v**2 for v in vector.values()))
        if magnitude > 0:
            vector = {k: v/magnitude for k, v in vector.items()}
        
        return dict(vector)
    
    def _cosine_similarity(self, vec1: Dict, vec2: Dict) -> float:
        """Calculate cosine similarity between vectors"""
        all_keys = set(vec1.keys()) | set(vec2.keys())
        
        dot_product = sum(vec1.get(k, 0) * vec2.get(k, 0) for k in all_keys)
        
        mag1 = math.sqrt(sum(v**2 for v in vec1.values()))
        mag2 = math.sqrt(sum(v**2 for v in vec2.values()))
        
        if mag1 == 0 or mag2 == 0:
            return 0.0
        
        return dot_product / (mag1 * mag2)
    
    def _calculate_recency_boost(self, template: Template) -> float:
        """Boost score for recently created templates"""
        age_days = (datetime.utcnow() - template.created_at).days
        return math.exp(-0.05 * age_days)  # Exponential decay
    
    def _calculate_frequency_score(self, db: Session, template_id: int) -> float:
        """Score based on template usage frequency"""
        # Count usage in last 30 days
        thirty_days_ago = datetime.utcnow() - timedelta(days=30)
        
        usage_count = db.query(HistoryItem).filter(
            HistoryItem.template_id == template_id,
            HistoryItem.created_at >= thirty_days_ago
        ).count()
        
        # Normalize with log scaling
        return min(math.log1p(usage_count) / 5, 1.0)
    
    def _calculate_confidence(self, similarity: float, frequency: float) -> float:
        """OCPD: Calculate recommendation confidence"""
        # Higher similarity and frequency = higher confidence
        return (similarity * 0.7 + frequency * 0.3)
    
    def _generate_reason(self, scored_template: Dict, context: Optional[Dict]) -> str:
        """INTJ: Explainable AI - generate recommendation reason"""
        score = scored_template["score"]
        confidence = scored_template["confidence"]
        
        if confidence > 0.9:
            return "Highly relevant based on your messaging patterns"
        elif confidence > 0.8:
            return "Matches your typical communication style"
        elif score > 0.7:
            return "Popular among similar users"
        else:
            return "May be useful for your workflow"
    
    def _get_candidate_templates(self, db: Session, user_id: int) -> List[Template]:
        """Get templates not already used by user"""
        used_template_ids = db.query(HistoryItem.template_id).filter(
            HistoryItem.user_id == user_id,
            HistoryItem.template_id.isnot(None)
        ).distinct().all()
        
        used_ids = [t[0] for t in used_template_ids if t[0]]
        
        query = db.query(Template)
        if used_ids:
            query = query.filter(~Template.id.in_(used_ids))
        
        return query.all()
    
    async def get_trending_templates(
        self,
        db: Session,
        period_days: int = 7,
        limit: int = 10
    ) -> List[Dict]:
        """INTJ: Trending templates based on aggregate usage"""
        from_date = datetime.utcnow() - timedelta(days=period_days)
        
        # Aggregate usage data
        template_usage = db.query(
            HistoryItem.template_id,
            func.count(HistoryItem.id).label('usage_count')
        ).filter(
            HistoryItem.created_at >= from_date,
            HistoryItem.template_id.isnot(None)
        ).group_by(HistoryItem.template_id).all()
        
        # Get template details
        trending = []
        for template_id, usage_count in template_usage:
            template = db.query(Template).get(template_id)
            if template:
                # Calculate trend velocity (usage in last 24h vs previous)
                yesterday = datetime.utcnow() - timedelta(days=1)
                recent_usage = db.query(HistoryItem).filter(
                    HistoryItem.template_id == template_id,
                    HistoryItem.created_at >= yesterday
                ).count()
                
                trend_score = usage_count + (recent_usage * 2)  # Weight recent usage
                
                trending.append({
                    "id": template.id,
                    "title": template.title,
                    "usage_count": usage_count,
                    "trend_score": trend_score
                })
        
        # Sort by trend score
        trending.sort(key=lambda x: x["trend_score"], reverse=True)
        return trending[:limit]

# Import required functions
from sqlalchemy import func

# Global recommender instance
template_recommender = TemplateRecommender()
