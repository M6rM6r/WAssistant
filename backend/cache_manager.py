"""
INTJ: Advanced Caching & Performance Optimization Layer
OCPD: Deterministic caching strategies with measurable performance gains
"""
import hashlib
import json
from functools import wraps
from typing import Any, Callable, Optional
import redis
from datetime import timedelta
import time

from backend.config import settings

# Redis client initialization with connection pooling
redis_client = redis.Redis.from_url(
    settings.redis_url,
    decode_responses=True,
    max_connections=50,
    socket_keepalive=True,
    socket_connect_timeout=5,
    socket_timeout=5,
    retry_on_timeout=True
)

class CacheStrategy:
    """INTJ: Strategic caching patterns for optimal performance"""
    
    @staticmethod
    def generate_key(prefix: str, *args, **kwargs) -> str:
        """Generate deterministic cache key"""
        key_data = f"{prefix}:{json.dumps(args, sort_keys=True)}:{json.dumps(kwargs, sort_keys=True)}"
        return hashlib.sha256(key_data.encode()).hexdigest()[:32]
    
    @staticmethod
    def ttl_strategy(endpoint_type: str) -> int:
        """OCPD: Precise TTL based on data volatility"""
        strategies = {
            "qr_code": 3600 * 24,      # 24h - QR codes rarely change
            "user_profile": 300,        # 5m - User data changes occasionally
            "analytics": 60,            # 1m - Analytics needs near real-time
            "templates": 1800,          # 30m - Templates change periodically
            "history": 300,             # 5m - History updates frequently
            "bulk_ops": 600,            # 10m - Bulk operations status
        }
        return strategies.get(endpoint_type, 300)

class CacheManager:
    """INTJ: Centralized cache management with observability"""
    
    def __init__(self):
        self._hit_count = 0
        self._miss_count = 0
        self._redis = redis_client
    
    def get(self, key: str) -> Optional[Any]:
        """Retrieve from cache with metrics"""
        try:
            data = self._redis.get(key)
            if data:
                self._hit_count += 1
                return json.loads(data)
            self._miss_count += 1
            return None
        except redis.RedisError:
            self._miss_count += 1
            return None
    
    def set(
        self, 
        key: str, 
        value: Any, 
        ttl: int = 300,
        nx: bool = False
    ) -> bool:
        """Store in cache with configurable TTL"""
        try:
            serialized = json.dumps(value, default=str)
            if nx:
                return self._redis.setex(key, ttl, serialized, nx=True)
            return self._redis.setex(key, ttl, serialized)
        except redis.RedisError:
            return False
    
    def delete(self, key: str) -> bool:
        """Invalidate cache entry"""
        try:
            return self._redis.delete(key) > 0
        except redis.RedisError:
            return False
    
    def delete_pattern(self, pattern: str) -> int:
        """Batch invalidation by pattern"""
        try:
            keys = self._redis.keys(pattern)
            if keys:
                return self._redis.delete(*keys)
            return 0
        except redis.RedisError:
            return 0
    
    def get_metrics(self) -> dict:
        """OCPD: Quantifiable cache performance"""
        total = self._hit_count + self._miss_count
        hit_rate = (self._hit_count / total * 100) if total > 0 else 0
        return {
            "hit_count": self._hit_count,
            "miss_count": self._miss_count,
            "hit_rate_percent": round(hit_rate, 2),
            "total_requests": total,
            "efficiency_score": round(hit_rate / 100, 4)
        }
    
    def health_check(self) -> bool:
        """Verify cache connectivity"""
        try:
            return self._redis.ping()
        except redis.RedisError:
            return False

# Global cache manager instance
cache = CacheManager()

def cached(
    prefix: str,
    ttl: Optional[int] = None,
    key_builder: Optional[Callable] = None
):
    """INTJ: Decorator for deterministic function caching"""
    def decorator(func: Callable) -> Callable:
        @wraps(func)
        async def async_wrapper(*args, **kwargs):
            # Build cache key
            if key_builder:
                cache_key = key_builder(*args, **kwargs)
            else:
                cache_key = CacheStrategy.generate_key(prefix, *args, **kwargs)
            
            # Try cache first
            cached_value = cache.get(cache_key)
            if cached_value is not None:
                return cached_value
            
            # Execute function
            result = await func(*args, **kwargs)
            
            # Cache result
            cache_ttl = ttl or CacheStrategy.ttl_strategy(prefix)
            cache.set(cache_key, result, ttl=cache_ttl)
            
            return result
        
        @wraps(func)
        def sync_wrapper(*args, **kwargs):
            # Build cache key
            if key_builder:
                cache_key = key_builder(*args, **kwargs)
            else:
                cache_key = CacheStrategy.generate_key(prefix, *args, **kwargs)
            
            # Try cache first
            cached_value = cache.get(cache_key)
            if cached_value is not None:
                return cached_value
            
            # Execute function
            result = func(*args, **kwargs)
            
            # Cache result
            cache_ttl = ttl or CacheStrategy.ttl_strategy(prefix)
            cache.set(cache_key, result, ttl=cache_ttl)
            
            return result
        
        return async_wrapper if asyncio.iscoroutinefunction(func) else sync_wrapper
    return decorator

def invalidate_cache(pattern: str):
    """INTJ: Strategic cache invalidation"""
    return cache.delete_pattern(pattern)

# Import asyncio for function type checking
import asyncio
