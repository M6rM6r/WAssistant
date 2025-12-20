# Contributing & Developer Notes

This file contains quick commands and tooling guidance to keep the project strict, reproducible, and OCPD-friendly.

Local setup

1. Install Flutter (project targets 3.7.x+)
2. Install Node.js (for web linting) and Python 3.11 (for scripts)

Common commands

- Install Dart/Flutter deps:
  ```bash
  flutter pub get
  ```
- Run analyzer:
  ```bash
  flutter analyze
  ```
- Run tests with coverage:
  ```bash
  flutter test --coverage
  ```
- Run web/js/cs linters (requires Node):
  ```bash
  npm ci
  npm run lint
  ```

CI

GitHub Actions is configured at `.github/workflows/ci.yml` to run Flutter analyze/tests, Python linters, and Node linting on PRs and pushes.

Formatting & Pre-commit

- Use `prettier` for JS/CSS/MD formatting. Use `flutter format .` for Dart.

Notes

- Generated files (`*.g.dart`) are excluded from analyzer checks.
- Linter rules are intentionally strict but relaxed for line length and some stylistic rules to match project preferences.
