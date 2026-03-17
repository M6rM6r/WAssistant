from invoke import task


@task
def setup(c):
    """Initial project setup: Python dev deps, npm, flutter, pre-commit."""
    c.run("python -m pip install --upgrade pip")
    c.run("pip install .[dev]")
    c.run("npm ci || npm i", warn=True)
    c.run("flutter pub get")
    c.run("pre-commit install", warn=True)


@task
def lint(c):
    """Run all linters (Dart, Python, Web)."""
    c.run("dart analyze --fatal-infos", warn=True)
    c.run("ruff check tools backend python_scripts")
    c.run("npm run lint:js")
    c.run("npm run lint:css", warn=True)
    c.run("npm run format:check")


@task
def fix(c):
    """Auto-fix format issues across languages."""
    c.run("dart format lib test")
    c.run("ruff check --fix tools backend python_scripts", warn=True)
    c.run("ruff format tools backend python_scripts", warn=True)
    c.run("npm run format", warn=True)


@task
def test(c):
    """Run Flutter tests with coverage."""
    c.run("flutter test --coverage")


@task
def build_web(c):
    """Build Flutter web release."""
    c.run("flutter build web --release --base-href '/'")


@task
def build_android(c):
    """Build release APK."""
    c.run("flutter build apk --release")


@task
def serve(c):
    """Start FastAPI backend dev server."""
    c.run("uvicorn backend.main:app --reload --port 8000")


@task
def docs(c):
    """Generate project docs."""
    c.run("python tools/generate_docs.py --all")


@task
def all(c):
    """Full pipeline: setup -> lint -> test -> build web."""
    setup(c)
    lint(c)
    test(c)
    build_web(c)
