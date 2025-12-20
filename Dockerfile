# ═══════════════════════════════════════════════════════════════════════════════
# WASSISTANT - Multi-Stage Docker Build (INTJ/OCPD: Optimized & Secure)
# ═══════════════════════════════════════════════════════════════════════════════
# Build: docker build -t wassistant .
# Run:   docker run -p 8000:8000 wassistant

# ─────────────────────────────────────────────────────────────────────────────
# STAGE 1: Flutter Web Build
# ─────────────────────────────────────────────────────────────────────────────
FROM ghcr.io/cirruslabs/flutter:3.35.0 AS flutter-builder

WORKDIR /app

# Copy only pubspec first for better caching
COPY pubspec.yaml pubspec.lock ./
RUN flutter pub get

# Copy source and build
COPY lib/ lib/
COPY web/ web/
COPY assets/ assets/
RUN flutter build web --release --web-renderer html --dart-define=FLUTTER_WEB_CANVASKIT_URL=/canvaskit/

# ─────────────────────────────────────────────────────────────────────────────
# STAGE 2: Python Dependencies
# ─────────────────────────────────────────────────────────────────────────────
FROM python:3.12-slim AS python-deps

WORKDIR /deps

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
COPY backend/requirements.txt ./backend-requirements.txt

RUN pip install --no-cache-dir --target=/deps/packages \
    -r requirements.txt \
    -r backend-requirements.txt \
    uvloop httptools

# ─────────────────────────────────────────────────────────────────────────────
# STAGE 3: Production Runtime
# ─────────────────────────────────────────────────────────────────────────────
FROM python:3.12-slim AS runtime

# Security: Run as non-root
RUN groupadd -r wassistant && useradd -r -g wassistant wassistant

# Install runtime dependencies only
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq5 curl \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

WORKDIR /app

# Copy Python packages
COPY --from=python-deps /deps/packages /usr/local/lib/python3.12/site-packages

# Copy backend source
COPY backend/ ./backend/
COPY python_scripts/ ./python_scripts/

# Copy Flutter web build
COPY --from=flutter-builder /app/build/web ./static

# Environment
ENV PYTHONPATH=/app \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    ENV=production \
    PORT=8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Switch to non-root user
USER wassistant

EXPOSE 8000

# Start with optimized settings
CMD ["python", "-m", "uvicorn", "backend.main:app", \
     "--host", "0.0.0.0", \
     "--port", "8000", \
     "--workers", "4", \
     "--loop", "uvloop", \
     "--http", "httptools", \
     "--log-level", "warning"]
