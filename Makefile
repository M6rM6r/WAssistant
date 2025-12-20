## Makefile - common development tasks

.PHONY: deps analyze test format lint js-lint py-lint

deps:
	flutter pub get

analyze:
	flutter analyze

test:
	flutter test --coverage

release:
	@echo "Use semantic tag and push to create a GitHub release. Example:"
	@echo "  git tag -a vX.Y.Z -m 'Release vX.Y.Z' && git push origin --tags"


format:
	flutter format .
	npm run format || true

lint:
	flutter analyze
	npm run lint || true

js-lint:
	npm run lint || true

py-lint:
	pip install -r requirements.txt
black --check .
flake8 .
.PHONY: clean get format analyze test build-apk icons check run-script

# Environment Variables
PYTHON := python
FLUTTER := flutter

# --- 🚀 Initialization ---
setup:
	@echo "Installing Flutter dependencies..."
	$(FLUTTER) pub get
	@echo "Installing Python dependencies..."
	pip install -r requirements.txt

# --- 🧠 Quality Control (OCPD Approved) ---
# Runs all checks to ensure logic and structure are sound.
check: format analyze test

format:
	@echo "Formatting code..."
	dart format .

analyze:
	@echo "Analyzing code for strict adherence to rules..."
	$(FLUTTER) analyze

test:
	@echo "Running unit tests..."
	$(FLUTTER) test

# --- 🔨 Build Commands ---
build-apk:
	$(FLUTTER) build apk --release

build-web:
	$(FLUTTER) build web --release --web-renderer html

# --- 🐍 Python Tools ---
# Resize icons using the Pillow library
icons:
	$(PYTHON) python_scripts/resize_icons.py

# Validate a link manually via CLI
validate-link:
	$(PYTHON) python_scripts/validate_links.py

# --- 🧹 Maintenance ---
clean:
	$(FLUTTER) clean
	@echo "Project cleaned."
