# WAssistant - Advanced WhatsApp Utility

![Coverage](https://img.shields.io/badge/coverage-17.5%25-orange)
[![Flutter](https://img.shields.io/badge/Flutter-3.35%2B-blue)](https://flutter.dev)
[![Tests](https://img.shields.io/badge/tests-91%20passing-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![CI](https://github.com/yourusername/wassistant/workflows/CI/badge.svg)](https://github.com/yourusername/wassistant/actions)

WAssistant is a professionally engineered Flutter application designed to enhance productivity for WhatsApp users. It provides a suite of tools for link generation, QR codes, and contact management, built with a focus on privacy, security, and data sovereignty.

## 🚀 Key Features

### 🛠 Core Utilities

- **Direct Chat**: Open WhatsApp chats without saving the number to contacts.
- **Link Generator**: Create shareable `wa.me` links with pre-filled messages.
- **QR Code Generator**: Generate high-res QR codes for chats and vCards.
- **vCard Generator**: Create contact QR codes for instant scanning and saving.
- **Bulk Operations**: CSV-based bulk link generation with QR export capability.

### 🧠 Intelligent Features

- **Smart Paste**: Automatically detects phone numbers in the clipboard on startup/resume and offers to fill them.
- **Quick Templates**: Save, manage, and reuse frequently sent messages (e.g., Location, Pricing).
- **History & Restoration**: Auto-saves your generated links/QRs. Restore previous sessions with one tap.
- **OCR Support**: Extract phone numbers from images using ML Kit.

### 🛡 Security & Data

- **Biometric Lock**: Secure the app using FaceID or Fingerprint (via `local_auth`).
- **Privacy-First**: No data is sent to our servers. Everything processes locally.
- **Crashlytics**: Comprehensive error tracking and crash reporting.

### User Engagement

- **Push Notifications**: Targeted messaging for user retention.
- **In-App Messaging**: Contextual feature announcements.
- **Review Prompts**: Smart prompts for app store reviews.

## 🏗 Architecture & Engineering

The project follows **Clean Architecture** principles:

### Directory Structure

```
lib/
├── l10n/              # Localization (ARB files)
├── models/            # Data Models (HistoryItem, TemplateItem)
├── pages/             # UI Screens (Home, History)
├── providers/         # State Management (ChangeNotifier)
├── services/          # Business Logic & Firebase Integration
│   ├── performance_service.dart        # Operation monitoring
│   ├── remote_config_service.dart      # Feature flags
│   ├── notification_service.dart       # Push notifications
│   └── error_handling_service.dart     # Crash reporting
├── utils/             # Constants, Logging, Error Handling
└── widgets/           # Reusable UI Components
```

### Technical Stack

- **Framework**: Flutter 3.35+ with Dart 3.9+
- **State Management**: `Provider` with `get_it` dependency injection
- **Backend**: Firebase (Performance, Remote Config, Crashlytics, Messaging)
- **Localization**: `flutter_localizations` & `intl` (English, Spanish, Arabic, French, German)
- **Persistence**: `shared_preferences` & JSON File I/O
- **Charts**: `fl_chart` for data visualization
- **Logging**: `logger` with Firebase integration
- **Testing**: `flutter_test`, `mockito`, `build_runner` (91 unit tests, 17.5% coverage)
- **CI/CD**: GitHub Actions with coverage enforcement (17% threshold)
- **Monetization**: Google Mobile Ads SDK
- **Accessibility**: Full Semantics support for screen readers

### INTJ/OCPD Development Principles

- **Functional Purity**: Either<Failure, Success> pattern for all operations
- **Measurable Outcomes**: Feature performance and error tracking
- **Data-Driven Decisions**: Remote Config for A/B testing
- **Systematic Workflows**: Makefile + Python tools for automation
- **Quality Standards**: 17% coverage baseline (91 passing tests), comprehensive linting
- **Documentation**: ADRs for architectural decisions

## 🛠 Setup & Installation

### Prerequisites

- Flutter SDK `^3.35.0`
- Python `3.11+` (for automation tools)
- Firebase CLI (for web deployment)
- Android Studio (for Android builds)
- Xcode (for iOS builds, macOS only)

### Quick Start

```bash
# Clone repository
git clone https://github.com/M6rM6r/WAssistant.git
cd WAssistant

# Install dependencies
flutter pub get

# Run tests
flutter test test/unit

# Run app
flutter run
```

### Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for complete platform-specific instructions:

- **Web**: `.\scripts\deploy_web.ps1`
- **Android**: `.\scripts\build_android.ps1`
- **iOS**: Manual Xcode build and submission
- Node.js `18+` (for pre-commit hooks)

### Quick Start

```bash
# Clone and install dependencies
git clone https://github.com/yourusername/wassistant.git
cd wassistant
make clean  # Installs Flutter, Python, Node.js dependencies

# Run the app
flutter run  # Mobile
flutter run -d chrome  # Web

# Development workflow
make check     # Lint and analyze
make test      # Run tests with coverage
make docs      # Generate documentation
```

## 🧪 Testing & Quality

### Test Coverage

Run tests with coverage reporting:

```bash
make test       # Unit + integration tests
make coverage   # Generate badge and report
```

### Quality Gates (CI/CD)

- ✅ All tests pass
- ✅ Coverage ≥80%
- ✅ No lint errors (`flutter analyze`)
- ✅ Python code formatted (`black`, `isort`)
- ✅ Pre-commit hooks pass

### Performance Benchmarking

```bash
make benchmark  # Run performance benchmarks
```

## 📚 Documentation

### API Documentation

```bash
make docs  # Generate Dart, Python, and OpenAPI docs
```

Documentation available in:

- `doc/api/` - Dart API docs
- `docs/api/` - Python tool docs
- `docs/architecture/` - Architecture Decision Records (ADRs)

### Key ADRs

- [ADR-001: Firebase Backend](docs/architecture/001-firebase-backend.md)

## 🚀 Deployment

### Android

```bash
make build-android  # Builds release AAB
# Output: build/app/outputs/bundle/release/app-release.aab
```

### Web

```bash
make build-web  # Builds production web app
firebase deploy --only hosting
```

### Firebase Setup

1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Download `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
3. Place in `android/app/` and `ios/Runner/` respectively
4. Configure environment variables in `.env`

## 📈 Monitoring

### Firebase Console

Monitor real-time metrics:

- **Performance**: Operation timing, network requests
- **Crashlytics**: Error rates, stability metrics
- **Remote Config**: Feature flag usage

```bash
flutter test
```

## Tooling (Developer-focused)

- Use `Makefile` tasks for common commands: `make deps`, `make analyze`, `make test`.
- Pre-commit hooks configured: Python formatting via `pre-commit` and JS/CSS via `husky`.
- Dependabot configured to keep dependencies up-to-date.
- Run `npm ci` and `npm run lint` to check web assets linting.

## 📄 License

This project is licensed under the MIT License.
