#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# WASSISTANT - Production Deployment Script
# ═══════════════════════════════════════════════════════════════════════════════
# Usage: ./deploy/deploy.sh [environment]

set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────────────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ENV="${1:-production}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() { echo -e "${BLUE}[INFO]${NC} $1"; }
success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# ─────────────────────────────────────────────────────────────────────────────
# FUNCTIONS
# ─────────────────────────────────────────────────────────────────────────────
check_prerequisites() {
    log "Checking prerequisites..."

    command -v flutter >/dev/null 2>&1 || error "Flutter not installed"
    command -v python3 >/dev/null 2>&1 || error "Python3 not installed"
    command -v docker >/dev/null 2>&1 || error "Docker not installed"
    command -v gcloud >/dev/null 2>&1 || warn "gcloud not installed (needed for GCP deployment)"

    success "Prerequisites OK"
}

build_flutter_web() {
    log "Building Flutter web..."
    cd "$PROJECT_ROOT"

    flutter pub get
    flutter build web --release --web-renderer html

    success "Flutter web build complete"
}

build_docker() {
    log "Building Docker image..."
    cd "$PROJECT_ROOT"

    docker build -t wassistant-api:latest .

    success "Docker build complete"
}

deploy_firebase() {
    log "Deploying to Firebase Hosting..."
    cd "$PROJECT_ROOT"

    if command -v firebase >/dev/null 2>&1; then
        firebase deploy --only hosting
        success "Firebase deployment complete"
    else
        warn "Firebase CLI not installed, skipping..."
    fi
}

deploy_cloud_run() {
    log "Deploying to Cloud Run..."
    cd "$PROJECT_ROOT"

    if command -v gcloud >/dev/null 2>&1; then
        gcloud run deploy wassistant-api \
            --source . \
            --region us-central1 \
            --allow-unauthenticated \
            --platform managed
        success "Cloud Run deployment complete"
    else
        warn "gcloud not installed, skipping Cloud Run deployment"
    fi
}

deploy_docker_compose() {
    log "Deploying with Docker Compose..."
    cd "$PROJECT_ROOT"

    docker-compose down || true
    docker-compose up -d --build

    success "Docker Compose deployment complete"
}

run_tests() {
    log "Running tests..."
    cd "$PROJECT_ROOT"

    # Flutter tests
    flutter test || warn "Flutter tests failed"

    # Python tests
    python -m pytest backend/tests -v || warn "Python tests failed"

    success "Tests complete"
}

# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────
main() {
    echo "═══════════════════════════════════════════════════════════════════════════════"
    echo "                    WASSISTANT DEPLOYMENT - $ENV"
    echo "═══════════════════════════════════════════════════════════════════════════════"

    check_prerequisites

    case "$ENV" in
        production)
            run_tests
            build_flutter_web
            deploy_firebase
            deploy_cloud_run
            ;;
        staging)
            build_flutter_web
            deploy_docker_compose
            ;;
        local)
            deploy_docker_compose
            ;;
        web-only)
            build_flutter_web
            deploy_firebase
            ;;
        api-only)
            build_docker
            deploy_cloud_run
            ;;
        *)
            error "Unknown environment: $ENV. Use: production, staging, local, web-only, api-only"
            ;;
    esac

    echo ""
    success "Deployment complete! 🚀"
}

main "$@"
