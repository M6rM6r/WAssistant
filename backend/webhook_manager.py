"""
INTJ: Webhook Event Distribution System
OCPD: Reliable event delivery with retry logic and observability
"""
import json
import hmac
import hashlib
import asyncio
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Callable
from enum import Enum
import httpx
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models import Webhook, WebhookDelivery
from backend.cache_manager import cache, CacheStrategy

class WebhookEventType(str, Enum):
    """INTJ: Comprehensive event taxonomy"""
    QR_GENERATED = "qr.generated"
    LINK_CREATED = "link.created"
    VCARD_CREATED = "vcard.created"
    USER_SIGNUP = "user.signup"
    USER_LOGIN = "user.login"
    TEMPLATE_USED = "template.used"
    HISTORY_EXPORTED = "history.exported"
    BULK_OP_COMPLETED = "bulk_op.completed"
    ANALYTICS_THRESHOLD = "analytics.threshold"

class WebhookPriority(int, Enum):
    """OCPD: Priority-based delivery queue"""
    CRITICAL = 1
    HIGH = 2
    NORMAL = 3
    LOW = 4

class WebhookManager:
    """INTJ: Enterprise-grade webhook orchestration"""
    
    def __init__(self):
        self._client = httpx.AsyncClient(
            timeout=30.0,
            limits=httpx.Limits(max_keepalive_connections=50, max_connections=100)
        )
        self._event_handlers: Dict[WebhookEventType, List[Callable]] = {}
    
    async def register_webhook(
        self,
        db: Session,
        user_id: int,
        url: str,
        events: List[WebhookEventType],
        secret: Optional[str] = None,
        priority: WebhookPriority = WebhookPriority.NORMAL
    ) -> Webhook:
        """Register new webhook endpoint"""
        webhook = Webhook(
            user_id=user_id,
            url=url,
            events=[e.value for e in events],
            secret=secret or self._generate_secret(),
            priority=priority.value,
            is_active=True,
            created_at=datetime.utcnow()
        )
        db.add(webhook)
        db.commit()
        db.refresh(webhook)
        
        # Cache webhook config
        cache.set(
            f"webhook:{webhook.id}",
            {
                "url": url,
                "secret": secret,
                "events": [e.value for e in events]
            },
            ttl=3600
        )
        
        return webhook
    
    async def dispatch_event(
        self,
        db: Session,
        event_type: WebhookEventType,
        payload: Dict,
        user_id: Optional[int] = None
    ) -> List[WebhookDelivery]:
        """INTJ: Strategic event distribution with guaranteed delivery"""
        deliveries = []
        
        # Get active webhooks for this event
        webhooks = db.query(Webhook).filter(
            Webhook.is_active == True,
            Webhook.events.contains(event_type.value)
        )
        
        if user_id:
            webhooks = webhooks.filter(Webhook.user_id == user_id)
        
        # Sort by priority
        webhooks = webhooks.order_by(Webhook.priority.asc()).all()
        
        # Dispatch to all subscribers concurrently
        tasks = [
            self._deliver_with_retry(webhook, event_type, payload, db)
            for webhook in webhooks
        ]
        
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        for webhook, result in zip(webhooks, results):
            if isinstance(result, Exception):
                delivery = self._record_delivery(
                    db, webhook.id, event_type, payload, False, str(result)
                )
            else:
                delivery = result
            deliveries.append(delivery)
        
        return deliveries
    
    async def _deliver_with_retry(
        self,
        webhook: Webhook,
        event_type: WebhookEventType,
        payload: Dict,
        db: Session,
        max_retries: int = 3
    ) -> WebhookDelivery:
        """OCPD: Exponential backoff retry strategy"""
        attempt = 0
        last_error = None
        
        # Prepare payload
        event_payload = {
            "event_id": self._generate_event_id(),
            "event_type": event_type.value,
            "timestamp": datetime.utcnow().isoformat(),
            "data": payload
        }
        
        # Generate signature
        signature = self._generate_signature(
            webhook.secret, 
            json.dumps(event_payload)
        )
        
        headers = {
            "Content-Type": "application/json",
            "X-Webhook-Signature": signature,
            "X-Webhook-ID": webhook.id,
            "X-Event-Type": event_type.value,
            "User-Agent": "WAssistant-Webhook/1.4.1"
        }
        
        while attempt < max_retries:
            try:
                start_time = datetime.utcnow()
                response = await self._client.post(
                    webhook.url,
                    json=event_payload,
                    headers=headers
                )
                latency = (datetime.utcnow() - start_time).total_seconds()
                
                if response.status_code < 400:
                    return self._record_delivery(
                        db, webhook.id, event_type, payload, True,
                        response_code=response.status_code,
                        latency_ms=latency * 1000
                    )
                
                last_error = f"HTTP {response.status_code}"
                
            except Exception as e:
                last_error = str(e)
            
            attempt += 1
            if attempt < max_retries:
                # Exponential backoff: 1s, 2s, 4s
                await asyncio.sleep(2 ** (attempt - 1))
        
        # All retries exhausted
        return self._record_delivery(
            db, webhook.id, event_type, payload, False,
            error_message=last_error
        )
    
    def _generate_signature(self, secret: str, payload: str) -> str:
        """HMAC-SHA256 signature generation"""
        return hmac.new(
            secret.encode(),
            payload.encode(),
            hashlib.sha256
        ).hexdigest()
    
    def _generate_secret(self) -> str:
        """Generate secure webhook secret"""
        return hashlib.sha256(
            f"webhook_secret_{datetime.utcnow().timestamp()}".encode()
        ).hexdigest()[:32]
    
    def _generate_event_id(self) -> str:
        """Generate unique event identifier"""
        return hashlib.sha256(
            f"event_{datetime.utcnow().timestamp()}".encode()
        ).hexdigest()[:16]
    
    def _record_delivery(
        self,
        db: Session,
        webhook_id: int,
        event_type: WebhookEventType,
        payload: Dict,
        success: bool,
        error_message: Optional[str] = None,
        response_code: Optional[int] = None,
        latency_ms: Optional[float] = None
    ) -> WebhookDelivery:
        """Record delivery attempt"""
        delivery = WebhookDelivery(
            webhook_id=webhook_id,
            event_type=event_type.value,
            payload=payload,
            success=success,
            error_message=error_message,
            response_code=response_code,
            latency_ms=latency_ms,
            created_at=datetime.utcnow()
        )
        db.add(delivery)
        db.commit()
        db.refresh(delivery)
        return delivery
    
    async def get_delivery_stats(
        self,
        db: Session,
        webhook_id: int,
        days: int = 7
    ) -> Dict:
        """INTJ: Quantifiable delivery performance metrics"""
        from_date = datetime.utcnow() - timedelta(days=days)
        
        deliveries = db.query(WebhookDelivery).filter(
            WebhookDelivery.webhook_id == webhook_id,
            WebhookDelivery.created_at >= from_date
        ).all()
        
        total = len(deliveries)
        successful = sum(1 for d in deliveries if d.success)
        failed = total - successful
        
        avg_latency = sum(
            d.latency_ms for d in deliveries if d.latency_ms
        ) / total if total > 0 else 0
        
        return {
            "total_deliveries": total,
            "successful": successful,
            "failed": failed,
            "success_rate": round(successful / total * 100, 2) if total > 0 else 0,
            "avg_latency_ms": round(avg_latency, 2),
            "period_days": days
        }
    
    async def cleanup_old_deliveries(self, db: Session, days: int = 30) -> int:
        """OCPD: Maintenance - remove old delivery records"""
        cutoff = datetime.utcnow() - timedelta(days=days)
        
        old_deliveries = db.query(WebhookDelivery).filter(
            WebhookDelivery.created_at < cutoff
        ).all()
        
        count = len(old_deliveries)
        for delivery in old_deliveries:
            db.delete(delivery)
        
        db.commit()
        return count

# Global webhook manager
webhook_manager = WebhookManager()
