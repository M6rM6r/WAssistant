# WASSISTANT MULTI-AGENT PROTOCOL (ELITE EDITION)

This document defines the specialized operational instructions for AI agents contributing to the WAssistant ecosystem.

**Architectural Context**:

- **Frontend**: Flutter (Provider + GetIt + Repository Pattern)
- **Backend**: Python FastAPI (JWT + SQLAlchemy + PostgreSQL)
- **Infrastructure**: Docker (Multi-stage) + Terraform (IaC)
- **Automation**: Makefile + Python Manager

---

## 1. Code Review Agent (Logic Integrity)

> "Review the wassistant project for code quality. Focus on:
>
> - Dart/Python best practices and idiomatic patterns.
> - Provider state management correctness and state immutability.
> - Functional error handling consistency (fpdart/Either).
> - Performance optimizations in widgets and DB queries.
> - Memory leak risks (dispose methods, StreamSubscriptions, DB connections).
>
> **Standard**: INTJ Strategic Clarity & OCPD Precision."

## 2. Testing Agent (Verification & Coverage)

> "Improve test coverage for WAssistant.
>
> - Add unit tests for WhatsAppToolProvider (link/QR generation, validation logic).
> - Add widget tests for OutputDisplay, TemplatesDialog, and responsive wrappers.
> - Mock dependencies using Mockito (already configured).
> - Test edge cases: empty inputs, invalid phone numbers, SQL injection patterns.
>
> **Commands**: `flutter test` | `pytest backend/tests`"

## 3. UI/UX Enhancement Agent (Aesthetics & Accessibility)

> "Enhance the WAssistant interface (WhatsApp-themed Dark Mode #050505).
>
> - Audit strictly against the `ResponsiveLayout` engine for tablet/desktop scaling.
> - Implement animation polish using `flutter_animate`.
> - Ensure accessibility compliance (semantic labels, contrast ratios).
> - Standardize loading states with the `ShimmerText` system.
>
> **Focus**: lib/widgets/output_display.dart, lib/pages/whatsapp_tool_home_page.dart"

## 4. Localization Agent (Internationalization)

> "Expand localization support. Current: English, Spanish.
>
> - Add ARB files: Arabic (app_ar.arb), French (app_fr.arb), German (app_de.arb).
> - Translate all ~70 strings including UI labels, errors, and success messages.
> - Verify right-to-left (RTL) layout consistency for Arabic support.
>
> **Command**: `flutter gen-l10n`"

## 5. Documentation Agent (Clarity & Architecture)

> "Maintain the system's technical reference.
>
> - Generate API documentation for all Dart services and Python endpoints.
> - Maintain the Architecture Diagram (Provider + GetIt + Repository pattern).
> - Update README with setup instructions, feature sets, and screenshots.
> - Maintain the `CHANGELOG.md` and Contributing guide.
>
> **Command**: `make docs`"

## 6. Performance Agent (Efficiency & Optimization)

> "Optimize for speed and resource conservation across Web, Mobile, and Backend.
>
> - Minimize widget rebuild frequency using `Selector` and `const`.
> - Implement tree shaking and deferred loading for Web builds.
> - Optimize Python DB sessions and connection pooling.
> - Benchmark core logic using `tools/benchmark.py`.
>
> **Standard**: O(1) rebuild performance and linear backend scaling."

## 7. Security Audit Agent (System Protection)

> "Audit the system for vulnerabilities.
>
> - Verify JWT token rotation and password hashing (bcrypt) in the backend.
> - Ensure input sanitization for phone numbers and messages (No side-effects).
> - Audit local storage encryption and Firebase security rules.
> - Run dependency vulnerability scans: `flutter pub outdated` | `safety check`.
>
> **Focus**: backend/auth.py, lib/services/biometric_service.dart"

## 8. CI/CD & DevOps Agent (Automation)

> "Ensure Zero Manual Intervention build and deploy cycles.
>
> - Maintain GitHub Actions for automated testing and coverage reporting.
> - Automate Firebase Hosting deployment on the `main` branch.
> - Optimize the Multi-stage Docker build for artifact size reduction.
> - Verify Terraform IaC state for cloud infrastructure.
>
> **Tools**: Makefile, manager.py, terraform/, Dockerfile"
