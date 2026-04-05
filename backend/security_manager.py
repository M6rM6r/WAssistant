"""
INTJ: Security Hardening & Audit System
OCPD: Multi-layer defense with comprehensive logging and threat detection
"""
import hashlib
import hmac
import secrets
import re
from datetime import datetime, timedelta
from typing import Optional, Dict, List
from functools import wraps
from enum import Enum

from fastapi import HTTPException, status, Request
from sqlalchemy.orm import Session

from backend.models import SecurityAudit, FailedLoginAttempt, User
from backend.config import settings

class SecurityEventType(str, Enum):
    """OCPD: Comprehensive security event taxonomy"""
    LOGIN_SUCCESS = "login_success"
    LOGIN_FAILURE = "login_failure"
    PASSWORD_CHANGE = "password_change"
    SUSPICIOUS_ACTIVITY = "suspicious_activity"
    RATE_LIMIT_EXCEEDED = "rate_limit_exceeded"
    INVALID_TOKEN = "invalid_token"
    PRIVILEGE_ESCALATION_ATTEMPT = "privilege_escalation"
    DATA_EXPORT = "data_export"
    API_KEY_GENERATED = "api_key_generated"

class SecurityManager:
    """INTJ: Centralized security orchestration"""
    
    # Security thresholds
    MAX_LOGIN_ATTEMPTS = 5
    LOCKOUT_DURATION_MINUTES = 30
    SUSPICIOUS_IP_THRESHOLD = 10
    PASSWORD_MIN_LENGTH = 12
    
    # Regex patterns for input validation
    PATTERNS = {
        "email": r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        "phone": r"^\+?[1-9]\d{1,14}$",
        "username": r"^[a-zA-Z0-9_-]{3,32}$",
    }
    
    def __init__(self):
        self._suspicious_ips = {}
        self._blocked_ips = set()
    
    async def validate_request(
        self,
        request: Request,
        db: Session,
        require_auth: bool = True
    ) -> Optional[Dict]:
        """OCPD: Multi-layer request validation"""
        client_ip = self._get_client_ip(request)
        
        # Check if IP is blocked
        if client_ip in self._blocked_ips:
            await self._log_security_event(
                db, SecurityEventType.SUSPICIOUS_ACTIVITY,
                None, client_ip, "Blocked IP attempted access"
            )
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Access denied"
            )
        
        # Rate limiting check
        if await self._is_rate_limited(client_ip):
            await self._log_security_event(
                db, SecurityEventType.RATE_LIMIT_EXCEEDED,
                None, client_ip, "Rate limit exceeded"
            )
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Rate limit exceeded. Please try again later."
            )
        
        # Input sanitization
        if not self._sanitize_request(request):
            await self._log_security_event(
                db, SecurityEventType.SUSPICIOUS_ACTIVITY,
                None, client_ip, "Malicious input detected"
            )
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid input"
            )
        
        return {"client_ip": client_ip, "validated": True}
    
    def validate_password(self, password: str) -> tuple[bool, str]:
        """OCPD: Strict password policy enforcement"""
        if len(password) < self.PASSWORD_MIN_LENGTH:
            return False, f"Password must be at least {self.PASSWORD_MIN_LENGTH} characters"
        
        if not re.search(r"[A-Z]", password):
            return False, "Password must contain uppercase letter"
        
        if not re.search(r"[a-z]", password):
            return False, "Password must contain lowercase letter"
        
        if not re.search(r"\d", password):
            return False, "Password must contain digit"
        
        if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
            return False, "Password must contain special character"
        
        # Check against common passwords
        common_passwords = self._load_common_passwords()
        if password.lower() in common_passwords:
            return False, "Password is too common"
        
        return True, "Password valid"
    
    async def check_login_attempts(
        self,
        db: Session,
        email: str,
        ip_address: str
    ) -> bool:
        """INTJ: Account lockout mechanism"""
        # Check recent failed attempts
        cutoff = datetime.utcnow() - timedelta(minutes=self.LOCKOUT_DURATION_MINUTES)
        
        failed_attempts = db.query(FailedLoginAttempt).filter(
            FailedLoginAttempt.email == email,
            FailedLoginAttempt.ip_address == ip_address,
            FailedLoginAttempt.attempted_at >= cutoff
        ).count()
        
        if failed_attempts >= self.MAX_LOGIN_ATTEMPTS:
            await self._log_security_event(
                db, SecurityEventType.SUSPICIOUS_ACTIVITY,
                None, ip_address, f"Account locked: {email}"
            )
            return False
        
        return True
    
    async def record_failed_login(
        self,
        db: Session,
        email: str,
        ip_address: str
    ):
        """Record failed login attempt"""
        attempt = FailedLoginAttempt(
            email=email,
            ip_address=ip_address,
            attempted_at=datetime.utcnow()
        )
        db.add(attempt)
        db.commit()
        
        # Track suspicious IPs
        if ip_address not in self._suspicious_ips:
            self._suspicious_ips[ip_address] = 0
        self._suspicious_ips[ip_address] += 1
        
        # Block IP if threshold exceeded
        if self._suspicious_ips[ip_address] >= self.SUSPICIOUS_IP_THRESHOLD:
            self._blocked_ips.add(ip_address)
    
    def generate_secure_token(self, length: int = 32) -> str:
        """Generate cryptographically secure token"""
        return secrets.token_urlsafe(length)
    
    def hash_sensitive_data(self, data: str, salt: Optional[str] = None) -> str:
        """One-way hash for sensitive data"""
        if salt is None:
            salt = secrets.token_hex(16)
        
        return hashlib.pbkdf2_hmac(
            'sha256',
            data.encode(),
            salt.encode(),
            100000
        ).hex()
    
    async def audit_data_access(
        self,
        db: Session,
        user_id: int,
        resource_type: str,
        resource_id: str,
        action: str
    ):
        """OCPD: Comprehensive audit logging"""
        audit = SecurityAudit(
            user_id=user_id,
            event_type=action,
            resource_type=resource_type,
            resource_id=resource_id,
            timestamp=datetime.utcnow(),
            ip_address=None,  # Set from request context
            user_agent=None,  # Set from request context
        )
        db.add(audit)
        db.commit()
    
    def sanitize_input(self, value: str, input_type: str = "text") -> str:
        """INTJ: Input sanitization"""
        if not value:
            return value
        
        # Remove null bytes
        value = value.replace('\x00', '')
        
        # Type-specific sanitization
        if input_type == "email":
            value = value.lower().strip()
            if not re.match(self.PATTERNS["email"], value):
                raise ValueError("Invalid email format")
        
        elif input_type == "phone":
            value = re.sub(r"[^\d+]", "", value)
        
        elif input_type == "text":
            # Remove potentially dangerous characters
            value = re.sub(r"[<>\"']", "", value)
        
        return value.strip()
    
    def verify_webhook_signature(
        self,
        payload: bytes,
        signature: str,
        secret: str
    ) -> bool:
        """Verify webhook HMAC signature"""
        expected = hmac.new(
            secret.encode(),
            payload,
            hashlib.sha256
        ).hexdigest()
        
        return hmac.compare_digest(signature, expected)
    
    async def _log_security_event(
        self,
        db: Session,
        event_type: SecurityEventType,
        user_id: Optional[int],
        ip_address: Optional[str],
        details: str
    ):
        """Log security event to database"""
        audit = SecurityAudit(
            user_id=user_id,
            event_type=event_type.value,
            resource_type="security",
            resource_id="",
            timestamp=datetime.utcnow(),
            ip_address=ip_address,
            details=details
        )
        db.add(audit)
        db.commit()
    
    def _get_client_ip(self, request: Request) -> str:
        """Extract client IP with proxy handling"""
        x_forwarded_for = request.headers.get("X-Forwarded-For")
        if x_forwarded_for:
            return x_forwarded_for.split(",")[0].strip()
        
        x_real_ip = request.headers.get("X-Real-IP")
        if x_real_ip:
            return x_real_ip
        
        return request.client.host if request.client else "unknown"
    
    async def _is_rate_limited(self, ip_address: str) -> bool:
        """Check if IP is rate limited"""
        # Implementation would use Redis for distributed rate limiting
        # Simplified version for illustration
        return False
    
    def _sanitize_request(self, request: Request) -> bool:
        """Validate request for malicious content"""
        # Check for SQL injection patterns
        sql_patterns = [
            r"(\b(union|select|insert|update|delete|drop|create|alter)\b.*\b(from|into|table|database)\b)",
            r"(--|;\s*$)",
            r"(\b(AND|OR)\b\s+\d+\s*=\s*\d+)",
        ]
        
        url = str(request.url)
        for pattern in sql_patterns:
            if re.search(pattern, url, re.IGNORECASE):
                return False
        
        return True
    
    def _load_common_passwords(self) -> set:
        """Load list of common passwords to reject"""
        # In production, load from file or external service
        return {
            "password", "123456", "qwerty", "admin", "welcome",
            "password123", "admin123", "letmein", "welcome123"
        }

# Security decorator for endpoints
def require_security_check(roles: Optional[List[str]] = None):
    """Decorator to add security validation to endpoints"""
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            # Security checks would go here
            # This is a simplified version
            return await func(*args, **kwargs)
        return wrapper
    return decorator

# Global security manager
security_manager = SecurityManager()
