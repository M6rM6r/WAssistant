# ═══════════════════════════════════════════════════════════════════════════════
# WASSISTANT - PowerShell Task Runner (Windows Alternative to Make/Just)
# ═══════════════════════════════════════════════════════════════════════════════
# Usage: .\run.ps1 <command>
# Example: .\run.ps1 setup
# ═══════════════════════════════════════════════════════════════════════════════

param(
    [Parameter(Position=0)]
    [ValidateSet("help", "setup", "clean", "refresh", "icons", "check", "lint", "fix", "test", "test-cov", "coverage", "build-web", "build-android", "build-aab", "serve", "api", "validate", "status", "docker", "docker-down", "deploy", "deploy-check", "monitor", "load-test")]
    [string]$Command = "help"
)

$ErrorActionPreference = "Continue"

function Write-Header($text) {
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "  $text" -ForegroundColor Cyan
    Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor Cyan
}

function Write-Success($text) {
    Write-Host "✅ $text" -ForegroundColor Green
}

function Write-Step($text) {
    Write-Host "➤ $text" -ForegroundColor Yellow
}

function Write-Warn($text) {
    Write-Host "⚠ $text" -ForegroundColor DarkYellow
}

# ─────────────────────────────────────────────────────────────────────────────
# COMMANDS
# ─────────────────────────────────────────────────────────────────────────────

switch ($Command) {
    "help" {
        Write-Header "WAssistant Development Commands"
        Write-Host ""
        Write-Host "  SETUP & MAINTENANCE" -ForegroundColor Magenta
        Write-Host "    .\run.ps1 setup         - Initial project setup"
        Write-Host "    .\run.ps1 clean         - Clean and refresh dependencies"
        Write-Host "    .\run.ps1 refresh       - Update all dependencies"
        Write-Host "    .\run.ps1 icons         - Generate launcher icons"
        Write-Host ""
        Write-Host "  QUALITY ASSURANCE" -ForegroundColor Magenta
        Write-Host "    .\run.ps1 check         - Run all quality checks"
        Write-Host "    .\run.ps1 lint          - Run linters"
        Write-Host "    .\run.ps1 fix           - Auto-fix formatting"
        Write-Host "    .\run.ps1 test          - Run Flutter tests"
        Write-Host "    .\run.ps1 coverage      - Generate coverage report"
        Write-Host ""
        Write-Host "  BUILD" -ForegroundColor Magenta
        Write-Host "    .\run.ps1 build-web     - Build for web"
        Write-Host "    .\run.ps1 build-android - Build Android APK"
        Write-Host "    .\run.ps1 build-aab     - Build Android App Bundle"
        Write-Host ""
        Write-Host "  DEVELOPMENT" -ForegroundColor Magenta
        Write-Host "    .\run.ps1 serve         - Start Flutter + Backend servers"
        Write-Host "    .\run.ps1 api           - Start backend API only"
        Write-Host ""
        Write-Host "  DOCKER" -ForegroundColor Magenta
        Write-Host "    .\run.ps1 docker        - Start Docker containers"
        Write-Host "    .\run.ps1 docker-down   - Stop Docker containers"
        Write-Host ""
        Write-Host "  DEPLOYMENT" -ForegroundColor Magenta
        Write-Host "    .\run.ps1 deploy        - Deploy to Firebase"
        Write-Host "    .\run.ps1 deploy-check  - Check deployment readiness"
        Write-Host ""
        Write-Host "  MONITORING" -ForegroundColor Magenta
        Write-Host "    .\run.ps1 monitor       - Performance monitor"
        Write-Host "    .\run.ps1 load-test     - Run load test"
        Write-Host ""
        Write-Host "  OTHER" -ForegroundColor Magenta
        Write-Host "    .\run.ps1 validate      - Validate project"
        Write-Host "    .\run.ps1 status        - Show project status"
        Write-Host ""
    }

    "setup" {
        Write-Header "Project Setup"
        Write-Step "Installing Python dependencies..."
        pip install -e .[dev] --quiet
        Write-Step "Installing Node.js dependencies..."
        npm install --silent
        Write-Step "Installing Flutter dependencies..."
        flutter pub get
        Write-Step "Installing pre-commit hooks..."
        python -m pre_commit install 2>$null
        Write-Success "Setup complete!"
    }

    "clean" {
        Write-Header "Clean Project"
        Write-Step "Cleaning Flutter..."
        flutter clean
        Write-Step "Getting dependencies..."
        flutter pub get
        Write-Success "Clean complete!"
    }

    "refresh" {
        Write-Header "Refresh Dependencies"
        flutter clean
        flutter pub get
        pip install -e .[dev] --upgrade --quiet
        npm update --silent
        Write-Success "Dependencies refreshed!"
    }

    "icons" {
        Write-Header "Generate Assets"
        dart run flutter_launcher_icons
        dart run flutter_native_splash:create
        Write-Success "Assets generated!"
    }

    "check" {
        Write-Header "Quality Checks"
        Write-Step "Dart analysis..."
        dart analyze .
        Write-Step "Python lint..."
        python -m ruff check tools backend python_scripts
        Write-Step "Web lint..."
        npm run lint
        Write-Success "Checks complete!"
    }

    "lint" {
        Write-Header "Linting"
        dart analyze .
        python -m ruff check tools backend python_scripts
        npm run lint
    }

    "fix" {
        Write-Header "Auto-Fix"
        Write-Step "Formatting Dart..."
        dart format lib test
        Write-Step "Fixing Python..."
        python -m ruff check --fix tools backend python_scripts
        python -m ruff format tools backend python_scripts
        Write-Step "Formatting JS/CSS..."
        npm run format
        Write-Success "Fixes applied!"
    }

    "test" {
        Write-Header "Flutter Tests"
        flutter test --coverage
        Write-Success "Tests complete!"
    }

    "coverage" {
        Write-Header "Coverage Report"
        flutter test --coverage
        python tools/generate_coverage_badge.py
        Write-Success "Coverage report generated!"
    }

    "build-web" {
        Write-Header "Build Web"
        flutter build web --release --base-href '/'
        Write-Success "Web build: build/web"
    }

    "build-android" {
        Write-Header "Build Android"
        flutter build apk --release
        Write-Success "APK: build/app/outputs/flutter-apk/app-release.apk"
    }

    "build-aab" {
        Write-Header "Build Android App Bundle"
        flutter build appbundle --release
        Write-Success "AAB: build/app/outputs/bundle/release/app-release.aab"
    }

    "serve" {
        Write-Header "Development Servers"
        Write-Step "Starting Backend API on port 8000..."
        $backendJob = Start-Job -ScriptBlock {
            Set-Location $using:PWD
            python -m uvicorn backend.main:app --reload --port 8000
        }
        Write-Step "Starting Flutter Web on port 8080..."
        flutter run -d chrome --web-port 8080
        Stop-Job $backendJob -ErrorAction SilentlyContinue
    }

    "api" {
        Write-Header "Backend API Server"
        python -m uvicorn backend.main:app --reload --port 8000
    }

    "docker" {
        Write-Header "Docker Compose Up"
        docker-compose up -d --build
        Write-Success "Containers started! API: http://localhost:8000"
    }

    "docker-down" {
        Write-Header "Docker Compose Down"
        docker-compose down
        Write-Success "Containers stopped"
    }

    "deploy" {
        Write-Header "Deploy to Firebase"
        Write-Step "Building web..."
        flutter build web --release --base-href '/'
        Write-Step "Deploying to Firebase Hosting..."
        if (Get-Command firebase -ErrorAction SilentlyContinue) {
            firebase deploy --only hosting
            Write-Success "Deployed to Firebase!"
        } else {
            Write-Warn "Firebase CLI not installed. Run: npm install -g firebase-tools"
        }
    }

    "deploy-check" {
        Write-Header "Deployment Readiness Check"
        python deploy/check_readiness.py
    }

    "monitor" {
        Write-Header "Performance Monitor"
        python tools/monitor.py
    }

    "load-test" {
        Write-Header "Load Test"
        python tools/load_test.py http://localhost:8000/health 100 10
    }

    "validate" {
        Write-Header "Project Validation"
        python scripts/validate_project.py
    }

    "status" {
        Write-Header "Project Status"
        python -m tools.cli status
    }
}
