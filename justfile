# ═══════════════════════════════════════════════════════════════════════════════
# JUSTFILE - Modern Task Runner (INTJ/OCPD: Clean, Minimal, Powerful)
# ═══════════════════════════════════════════════════════════════════════════════
# Install: cargo install just OR winget install just OR brew install just
# Usage: just <recipe>
# List all: just --list

set shell := ["pwsh", "-NoLogo", "-Command"]
set windows-shell := ["pwsh", "-NoLogo", "-Command"]

# Default recipe: show help
default:
    @just --list --unsorted

# ─────────────────────────────────────────────────────────────────────────────
# SETUP & INITIALIZATION
# ─────────────────────────────────────────────────────────────────────────────

# 📦 Initial project setup (run once after clone)
setup:
    pip install -e .[dev]
    npm install
    flutter pub get
    pre-commit install
    @Write-Host "✅ Setup complete!" -ForegroundColor Green

# 🔄 Refresh all dependencies
refresh:
    flutter clean
    flutter pub get
    pip install -e .[dev] --upgrade
    npm update
    @Write-Host "✅ Dependencies refreshed!" -ForegroundColor Green

# ─────────────────────────────────────────────────────────────────────────────
# FLUTTER COMMANDS
# ─────────────────────────────────────────────────────────────────────────────

# 🐦 Run Flutter app (debug)
run:
    flutter run

# 🧪 Run Flutter tests with coverage
test:
    flutter test --coverage
    python tools/generate_coverage_badge.py

# 📊 Analyze Dart code
analyze:
    dart analyze .

# 🎨 Format Dart code
format-dart:
    dart format lib test

# 🔨 Generate code (freezed, json_serializable)
codegen:
    dart run build_runner build --delete-conflicting-outputs

# 🖼️ Generate launcher icons and splash
icons:
    dart run flutter_launcher_icons
    dart run flutter_native_splash:create

# 🌐 Build for web
build-web:
    flutter build web --release --base-href '/'

# 📱 Build Android APK
build-apk:
    flutter build apk --release

# 📱 Build Android Bundle
build-aab:
    flutter build appbundle --release

# 🍎 Build iOS (macOS only)
build-ios:
    flutter build ios --release --no-codesign

# ─────────────────────────────────────────────────────────────────────────────
# PYTHON COMMANDS
# ─────────────────────────────────────────────────────────────────────────────

# 🐍 Lint Python code
lint-py:
    ruff check tools backend python_scripts

# 🐍 Fix Python lint issues
fix-py:
    ruff check --fix tools backend python_scripts
    black tools backend python_scripts

# 🐍 Type check Python
typecheck-py:
    mypy tools backend python_scripts

# 🐍 Run Python tests
test-py:
    pytest -v

# ─────────────────────────────────────────────────────────────────────────────
# WEB COMMANDS
# ─────────────────────────────────────────────────────────────────────────────

# 🌐 Lint JS/CSS
lint-web:
    npm run lint

# 🌐 Format JS
format-web:
    npm run format

# 🌐 TypeScript check
typecheck-web:
    npm run tsc

# ─────────────────────────────────────────────────────────────────────────────
# BACKEND COMMANDS
# ─────────────────────────────────────────────────────────────────────────────

# ⚡ Start FastAPI server
serve port="8000":
    uvicorn backend.main:app --host 0.0.0.0 --port {{port}} --reload

# 🐳 Build Docker image
docker-build:
    docker build -t wassistant-backend .

# 🐳 Run Docker container
docker-run:
    docker run -d -p 8000:8000 --name wassistant-api wassistant-backend

# 🐳 Stop Docker container
docker-stop:
    docker stop wassistant-api; docker rm wassistant-api

# ─────────────────────────────────────────────────────────────────────────────
# QUALITY ASSURANCE
# ─────────────────────────────────────────────────────────────────────────────

# 🔍 Run ALL quality checks
check: analyze lint-py lint-web typecheck-py typecheck-web
    @Write-Host "✅ All checks passed!" -ForegroundColor Green

# 🔧 Fix ALL formatting and lint issues
fix: format-dart fix-py format-web
    @Write-Host "✅ All fixes applied!" -ForegroundColor Green

# 🎯 Pre-commit checks (run before committing)
pre-commit:
    pre-commit run --all-files

# ─────────────────────────────────────────────────────────────────────────────
# PROJECT MANAGEMENT
# ─────────────────────────────────────────────────────────────────────────────

# ✅ Validate project structure
validate:
    python scripts/validate_project.py

# 📚 Generate documentation
docs:
    python tools/generate_docs.py --all

# ⚡ Run benchmarks
benchmark:
    python tools/benchmark.py

# 📊 Show project status
status:
    @Write-Host "═══ WAssistant Status ═══" -ForegroundColor Cyan
    flutter --version | Select-Object -First 1
    python --version
    node --version
    git status --short

# 🚀 Full deployment pipeline
deploy msg="Auto-deploy":
    just check
    just test
    just build-web
    git add .
    git commit -m "{{msg}}" || true
    git push
    @Write-Host "🚀 Deployed!" -ForegroundColor Green

# ─────────────────────────────────────────────────────────────────────────────
# UTILITIES
# ─────────────────────────────────────────────────────────────────────────────

# 📏 Count lines of code
loc:
    python tools/print_lines.py

# 🧹 Deep clean (remove all generated files)
clean:
    flutter clean
    Remove-Item -Recurse -Force build, .dart_tool, coverage -ErrorAction SilentlyContinue
    Remove-Item -Recurse -Force __pycache__, .pytest_cache, .mypy_cache, .ruff_cache -ErrorAction SilentlyContinue
    Remove-Item -Recurse -Force node_modules/.cache -ErrorAction SilentlyContinue
    @Write-Host "🧹 Cleaned!" -ForegroundColor Green

# 🔄 Full rebuild from scratch
rebuild: clean setup icons codegen
    @Write-Host "🔨 Rebuild complete!" -ForegroundColor Green
