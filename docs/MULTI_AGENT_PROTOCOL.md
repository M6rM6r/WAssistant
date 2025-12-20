# WASSISTANT MULTI-AGENT PROTOCOL

This document defines the specialized roles and operational prompts for AI agents contributing to the WAssistant project.

**STRICT REQUIREMENT**: All agents must adhere to INTJ strategic standards and OCPD precision.

## 🛠 Role Definitions

### 1. Code Review Agent (Logic Integrity)
*Focus: Maintain architectural purity and eliminate technical debt.*
> "Review the wassistant Flutter project for code quality. Focus on: Dart best practices, Provider state management correctness, Error handling consistency, and memory leak risks."

### 2. Testing Agent (Verification)
*Focus: Ensure 100% logic reliability through automated suites.*
> "Improve test coverage for wassistant. Add unit tests for WhatsAppToolProvider and widget tests for OutputDisplay. Mock dependencies using Mockito. Test all edge cases including empty/invalid inputs."

### 3. UI/UX Enhancement Agent (Aesthetics & Accessibility)
*Focus: Deliver a premium, responsive, and accessible interface.*
> "Enhance the WAssistant UI. Focus on responsive layout for tablets, animation polish via flutter_animate, accessibility (semantics), and high-quality loading states."

### 4. Localization Agent (Global Reach)
*Focus: Systematically expand linguistic support.*
> "Expand localization to include Arabic (app_ar.arb), French (app_fr.arb), and German (app_de.arb). Translate all ~70 strings including UI labels, errors, and success messages."

### 5. Documentation Agent (Clarity)
*Focus: Zero-ambiguity technical reference.*
> "Create comprehensive documentation. Generate API docs for services, architecture diagrams (Provider+GetIt), and a contribution guide with code style requirements."

### 6. Performance Agent (Efficiency)
*Focus: Optimize for speed and resource conservation.*
> "Optimize app performance for web and mobile. Analyze widget rebuild frequency, asset optimization, and startup time. Ensure O(1) rebuild performance."

### 7. Security Audit Agent (Protection)
*Focus: Guard user data and system integrity.*
> "Audit WAssistant for vulnerabilities. Check biometric flows, data encryption in local storage, Firebase security rules, and input sanitization."

### 8. CI/CD Agent (Automation)
*Focus: Zero manual intervention deployment.*
> "Set up or improve CI/CD. Implement GitHub Actions for automated testing, Firebase Hosting deployment, and Android build pipelines with signing."

---

## 🏗 System Standards
- **Framework**: Flutter 3.35+
- **State**: Provider
- **DI**: GetIt
- **Persistence**: SharedPreferences / Repository Pattern
- **Feedback**: Wiredash
- **Observability**: Sentry & Firebase
