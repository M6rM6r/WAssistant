# Production-Grade Prompts for Coding Agent: wassistant Enhancement

## Backend
1. Refactor all Python code in `backend/` to enforce SOLID, DRY, and dependency injection principles. Add type hints and docstrings everywhere. Use mypy, black, isort, and bandit for static analysis and formatting. Ensure 100% test coverage with pytest.
2. Expand API documentation in `backend/main.py` and `backend/routes.py` using OpenAPI/Swagger. Ensure all endpoints are documented, validated, and tested.
3. Modularize business logic in `backend/analytics.py`, `backend/auth.py`, and `backend/utils.py` for testability and scalability. Extract reusable components.

## Frontend
4. Audit and refactor all Dart code in `lib/` for state management best practices. Migrate to Riverpod or Bloc if not already used. Add golden tests and integration tests for all UI components.
5. Enhance accessibility and responsiveness in all UI code under `lib/pages/` and `lib/widgets/`. Use semantic widgets, ARIA roles, and test with accessibility tools.
6. Standardize and optimize all CSS/HTML in `web/` and `public/`. Enforce BEM or similar methodology. Use Prettier and ESLint for JS/TS code.

## Analytics
7. Implement unified analytics event schema in both backend (`backend/analytics.py`) and frontend (`lib/`). Add automated validation and privacy-preserving defaults. Document all tracked events.
8. Integrate opt-in/opt-out logic for analytics in both backend and frontend. Ensure GDPR compliance and document data flow in `docs/ANALYTICS_REMOVAL_SUMMARY.md`.

## DevOps
9. Automate CI/CD for all services using GitHub Actions or similar. Ensure reproducible builds, automated tests, linting, and security scans. Reference `Dockerfile*`, `docker-compose.yml`, and `.github/workflows/`.
10. Harden all containers and infrastructure. Use Trivy for image scanning, Snyk for dependency checks, and Terraform for infrastructure as code in `infrastructure/`.

## Security
11. Audit and refactor authentication in `backend/auth.py` for secure defaults, token management, and role-based access control. Add automated secret scanning and rotate secrets regularly.
12. Implement dependency scanning and auto-updates for Python (`requirements.txt`, `pyproject.toml`), Node.js (`package.json`), and PHP (`composer.json`).

## Documentation
13. Generate and maintain API docs, architecture diagrams, and onboarding guides in `docs/` and `README.md`. Use MkDocs or Docusaurus. Add Mermaid diagrams for architecture.
14. Add and maintain Architecture Decision Records (ADRs) in `docs/architecture/`.

## Innovation
15. Propose and implement an AI-powered feature (e.g., LLM assistant) in a new module. Integrate with OpenAI API or similar. Document architecture and usage.
16. Automate repetitive tasks (e.g., code formatting, dependency updates, analytics reporting) using scripts in `tools/` and `scripts/`.

---
Each prompt must be executed with production-level rigor, full test coverage, and code review. All changes must be documented and validated against INTJ/OCPD standards: logic, automation, scalability, maintainability, and security.

