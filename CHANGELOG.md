# Changelog

All notable changes to this project will be documented in this file.

## [Deployment] - 2025-12-20

### 🌐 Web Hosting

- Deployed Flutter Web build (WASM enabled) to Firebase Hosting.
- Live URL: https://wassistant-707.web.app
- Preview Channel created: https://wassistant-707--preview-20251220-1054-rk76h3pu.web.app (expires in 7 days)

### 🔍 Verification

- Smoke test: homepage loads and Flutter boot scripts present.
- Headers: HTTPS with HSTS; HTML and core assets served with Cache-Control: max-age=3600.
- Note: Lighthouse report generation is blocked by local temp directory permissions on Windows OneDrive. Recommended to run `npx lighthouse` locally with admin or on CI/Linux. Initial metrics from LHCI show FCP ≈ 0.9s.

### ✅ Next improvements (optional)

- Consider adding Firebase Hosting caching rules for hashed static assets (images/fonts) to `Cache-Control: public, max-age=31536000, immutable` while keeping HTML at no-cache.
- Add a GitHub Action to generate Lighthouse reports on preview deployments.

## [1.4.1] - 2024-05-22

### 🏗 Architecture & Logic

- **Functional Refactor**: Implemented `fpdart` with `Either<Failure, String>` for all core WhatsApp link and QR generation logic.
- **Repository Pattern**: Abstracted data persistence using a strict `HistoryRepository` interface, supporting both `Isar` (Mobile) and `SharedPreferences` (Web).
- **Service Layer**: Fully decoupled authentication, engagement, and OCR logic into single-responsibility services.

### 🧠 Intelligent Features

- **OCR Integration**: Added on-device phone number scanning using Google ML Kit.
- **Quick Actions**: Implemented OS-level shortcuts for "Direct Chat" and "vCard Gen".
- **Smart Paste**: Automated detection of phone numbers in the system clipboard.

### 🛡 Security & Auth

- **JWT Backend**: Developed a FastAPI backend with JWT authentication and bcrypt password hashing.
- **Cross-Device Sync**: Established the foundation for cloud-syncing templates and history.

### 📈 Monetization & Engagement

- **Production Ads**: Integrated real AdMob production IDs for immediate revenue generation.
- **RevenueCat**: Added `purchases_flutter` for Pro-tier subscription management.
- **System Feedback**: Integrated `Wiredash` for unified in-app feedback collection.

### 🛠 DevOps & Tooling

- **Makefile Engine**: Unified all development tasks into a single `make` command interface.
- **Python Manager**: Developed `tools/manager.py` for automated clean, check, build, and deploy cycles.
- **Terraform IaC**: Defined cloud infrastructure for backend deployment as code.
- **Multi-Stage Docker**: Optimized the production image for minimal size and maximum security.

## [1.0.0] - Initial Release

- Initial repository hygiene: linters, CI, pre-commit, formatting, tests.
