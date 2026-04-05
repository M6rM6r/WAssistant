# WAssistant Architecture Documentation

## System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           WASSISTANT PLATFORM                               │
│                    INTJ Architecture - Version 1.4.1                          │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   WEB APP    │    │  MOBILE APP  │    │ LANDING PAGE │    │  EXTENSION   │
│   (Flutter)  │    │  (Flutter)   │    │   (React)    │    │   (Web)      │
└──────┬───────┘    └──────┬───────┘    └──────┬───────┘    └──────┬───────┘
       │                   │                   │                   │
       └───────────────────┴───────────────────┴───────────────────┘
                           │
                    ┌──────┴──────┐
                    │   CDN/Edge  │
                    │  (CloudFlare)│
                    └──────┬──────┘
                           │
              ┌────────────┴────────────┐
              │      LOAD BALANCER      │
              │       (NGINX)           │
              └────────────┬────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────┴────┐       ┌────┴────┐       ┌────┴────┐
   │  API    │       │  API    │       │  API    │
   │ Server 1│       │ Server 2│       │ Server N│
   │ (FastAPI)      │ (FastAPI)      │ (FastAPI)     │
   └────┬────┘       └────┬────┘       └────┬────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
       ┌───────────────────┼───────────────────┐
       │                   │                   │
  ┌────┴────┐        ┌────┴────┐        ┌────┴────┐
  │  REDIS  │        │POSTGRES │        │PROMETHEUS│
  │  Cache  │        │   DB    │        │ Metrics  │
  └─────────┘        └─────────┘        └─────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                           BACKGROUND SERVICES                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Webhook    │  │    Bulk     │  │    ML       │  │   Security  │        │
│  │  Processor  │  │  Operations │  │  Inference  │  │   Scanner   │        │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Component Architecture

### 1. Frontend Layer

#### Flutter Application
```
lib/
├── main.dart                    # Entry point
├── main_web.dart               # Web entry point
├── theme/
│   └── app_theme.dart          # Unified theme system
├── pages/
│   ├── whatsapp_tool_home_page.dart
│   └── history_page.dart
├── widgets/
│   ├── output_display.dart     # QR/link output
│   ├── whatsapp_input_field.dart
│   ├── feature_buttons.dart
│   └── customizable_qr_code.dart
├── providers/
│   ├── template_provider.dart  # OCPD pattern
│   └── history_provider.dart   # Sync logic
├── services/
│   ├── notification_service.dart
│   ├── performance_service.dart
│   └── api_service.dart
└── repositories/
    ├── template_repository.dart
    └── history_repository.dart
```

#### Landing Page (React + TypeScript)
```
landing/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CTASection.tsx
│   │   └── FAQSection.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── Blog.tsx
│   │   ├── Features.tsx
│   │   └── UseCases.tsx
│   └── App.tsx
├── tailwind.config.ts
└── package.json
```

### 2. Backend Layer (Python/FastAPI)

```
backend/
├── main.py                      # FastAPI application
├── config.py                   # Configuration management
├── database.py                 # SQLAlchemy setup
├── models.py                   # Database models
├── routes.py                   # API endpoints
├── middleware.py               # Custom middleware
├── auth.py                     # Authentication logic
├── analytics.py               # Analytics API
├── analytics_service.py       # Event tracking
├── cache_manager.py           # Redis caching
├── webhook_manager.py         # Webhook system
├── bulk_operations.py         # Batch processing
├── security_manager.py        # Security layer
└── ml/
    ├── template_recommender.py
    └── engagement_predictor.py
```

### 3. Data Layer

#### Database Schema (PostgreSQL)
```sql
-- Core Tables
users (id, email, hashed_password, created_at, updated_at)
histor_items (id, user_id, type, data, display, created_at)
templates (id, user_id, title, content, created_at)
qr_codes (id, user_id, data, data_hash, size, created_at)
analytics_events (id, user_id, event_type, metadata, created_at)
webhooks (id, user_id, url, events, secret, is_active)
webhook_deliveries (id, webhook_id, event_type, payload, success)
bulk_operations (id, user_id, operation_type, status, total_items, ...)
security_audits (id, user_id, event_type, resource_type, timestamp, ...)
```

#### Redis Cache Structure
```
Key Patterns:
- qr:{hash}              → QR code data (TTL: 24h)
- user:{id}:profile       → User profile (TTL: 5m)
- template:{id}           → Template data (TTL: 30m)
- analytics:{date}         → Daily stats (TTL: 1m)
- webhook:{id}            → Webhook config (TTL: 1h)
- rate_limit:{ip}         → Rate limit counter (TTL: 1m)
- session:{token}         → Session data (TTL: 24h)
```

## API Endpoints

### Authentication
```
POST /signup              → Register new user
POST /token             → Login (OAuth2)
GET  /sync/history      → Get user history
POST /sync/history      → Add history item
```

### QR Code Generation
```
POST /qr                → Generate QR code (PNG)
Body: {
  data: string
  error_correction: "L" | "M" | "Q" | "H"
  foreground_color: string (hex)
  background_color: string (hex)
  size: number
}
```

### WhatsApp Links
```
POST /whatsapp/links           → Create WhatsApp link
POST /whatsapp/bulk           → Bulk link generation
GET  /whatsapp/links/{id}     → Get link details
```

### vCards
```
POST /vcards/generate         → Generate vCard
GET  /vcards/{id}/download    → Download vCard file
```

### Analytics
```
POST /api/v1/analytics/events           → Track event
GET  /api/v1/analytics/user/metrics     → User metrics
GET  /api/v1/analytics/cohorts          → Cohort analysis
GET  /api/v1/analytics/features/top     → Top features
POST /api/v1/analytics/interventions    → Trigger intervention
```

### Webhooks
```
POST /webhooks/register       → Register webhook
DELETE /webhooks/{id}         → Delete webhook
GET  /webhooks/{id}/stats     → Delivery statistics
POST /webhooks/{id}/test      → Test webhook
```

## Performance Characteristics

### Response Times (P95)
- QR Generation: < 200ms
- Link Creation: < 100ms
- History Fetch: < 50ms
- User Auth: < 150ms
- Analytics Write: < 50ms (async)

### Throughput
- API Requests: 10,000 RPM
- QR Generation: 5,000/min
- Webhook Deliveries: 1,000/min
- Bulk Operations: 500 items/min

### Cache Hit Rates (Target)
- QR Codes: > 90%
- User Profiles: > 80%
- Templates: > 70%

## Security Model

### Authentication Flow
```
1. Client → POST /token (email, password)
2. Server → Validate credentials
3. Server → Generate JWT (access_token, 24h expiry)
4. Client → Include token in Authorization header
5. Server → Validate JWT on each request
6. Server → Refresh token if < 1h to expiry
```

### Authorization Matrix
```
Endpoint                Anonymous   User    Admin
/signup                 ✓           ✗       ✗
/token                  ✓           ✗       ✗
/sync/history           ✗           ✓       ✓
/qr                     ✗           ✓       ✓
/api/v1/analytics/*     ✗           ✓       ✓
/webhooks/*             ✗           ✓       ✗
/admin/*                ✗           ✗       ✓
```

### Data Protection
- Passwords: Argon2id hashing
- API Keys: HMAC-SHA256
- PII: AES-256-GCM encryption at rest
- Transport: TLS 1.3
- Webhooks: HMAC signature verification

## Monitoring & Observability

### Metrics (Prometheus)
```
# Application Metrics
wassistant_requests_total{method, endpoint, status}
wassistant_request_duration_seconds{endpoint}
wassistant_active_users
wassistant_qr_generated_total

# Business Metrics
wassistant_conversion_rate
wassistant_user_retention_7d
wassistant_user_retention_30d
wassistant_template_usage_total

# Infrastructure Metrics
wassistant_cache_hit_rate
wassistant_db_query_duration_seconds
wassistant_webhook_delivery_success_rate
```

### Alerts
```yaml
Critical:
  - Error rate > 5% for 5m
  - P95 latency > 2s for 5m
  - Database connections > 80%
  - Webhook delivery success < 90%

Warning:
  - Error rate > 1% for 10m
  - Cache hit rate < 70%
  - CPU usage > 80%
  - Memory usage > 80%
```

## Deployment Architecture

### Docker Compose (Development)
```yaml
version: '3.8'
services:
  api:
    build: .
    ports: ["8000:8000"]
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/wassistant
      - REDIS_URL=redis://redis:6379/0
  
  db:
    image: postgres:15
    volumes: ["postgres_data:/var/lib/postgresql/data"]
  
  redis:
    image: redis:7
    volumes: ["redis_data:/data"]
  
  frontend:
    build: ./landing
    ports: ["3000:80"]
```

### Kubernetes (Production)
```yaml
# Deployment with HPA
apiVersion: apps/v1
kind: Deployment
metadata:
  name: wassistant-api
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: api
        image: ghcr.io/m6rm6r/wassistant:latest
        resources:
          requests:
            cpu: 500m
            memory: 512Mi
          limits:
            cpu: 2000m
            memory: 2Gi
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: wassistant-api-hpa
spec:
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

## Development Workflow

### Git Strategy
```
main (production)
  ↑
develop (integration)
  ↑
feature/* (feature branches)
  ↑
hotfix/* (emergency fixes)
```

### CI/CD Pipeline
```
1. Code Push → Trigger GitHub Actions
2. Security Scan (Bandit, Safety)
3. Lint & Format Check
4. Unit Tests (pytest)
5. Integration Tests
6. Build Docker Image
7. Push to Registry
8. Deploy to Staging
9. Smoke Tests
10. Deploy to Production
```

## Scaling Strategy

### Horizontal Scaling
- Stateless API servers behind load balancer
- Read replicas for database (1 primary, 3 replicas)
- Redis cluster for cache (3 master, 3 slave)

### Vertical Scaling
- Database: CPU → 16 cores, RAM → 64GB
- API servers: CPU → 8 cores, RAM → 16GB

### Data Sharding (Future)
- User data by region
- Analytics by time buckets
- History by user_id hash

## Disaster Recovery

### Backup Strategy
- Database: Continuous WAL archiving + daily full backup
- Redis: Hourly RDB snapshots
- File storage: Cross-region replication

### RPO/RTO
- Recovery Point Objective (RPO): 1 hour
- Recovery Time Objective (RTO): 4 hours

### Failover Procedure
```
1. Detect primary database failure
2. Promote read replica to primary
3. Update connection strings
4. Verify data consistency
5. Resume operations
```

## Cost Optimization

### Resource Optimization
- Spot instances for non-critical workloads
- Auto-scaling to match demand
- CDN for static assets
- Image compression and caching

### Database Optimization
- Query optimization (EXPLAIN ANALYZE)
- Index tuning
- Connection pooling
- Read replicas for analytics

### Caching Strategy
- L1: In-memory (LRU cache)
- L2: Redis (distributed)
- L3: CDN (edge caching)

---

**Architecture Version:** 1.4.1  
**Last Updated:** 2024-12-19  
**Maintained by:** INTJ/OCPD Architecture Team
