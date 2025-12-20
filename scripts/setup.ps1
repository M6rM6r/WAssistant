# Windows setup script for WAssistant
param(
  [switch]$NoPython
)

Write-Host "==> Starting setup" -ForegroundColor Cyan

# Python virtual environment
if (-not $NoPython) {
  if (-not (Test-Path .\.venv)) {
    Write-Host "Creating Python venv (.venv)" -ForegroundColor Cyan
    python -m venv .venv
  }
  Write-Host "Activating venv" -ForegroundColor Cyan
  .\.venv\Scripts\Activate.ps1
  Write-Host "Installing Python dev extras (pyproject)" -ForegroundColor Cyan
  python -m pip install --upgrade pip
  pip install .[dev]
}

# Node.js deps
Write-Host "Installing npm packages" -ForegroundColor Cyan
npm i

# Flutter deps
Write-Host "Fetching Flutter packages" -ForegroundColor Cyan
flutter pub get

# Pre-commit install
Write-Host "Installing pre-commit hooks" -ForegroundColor Cyan
pre-commit install

Write-Host "==> Setup complete" -ForegroundColor Green
