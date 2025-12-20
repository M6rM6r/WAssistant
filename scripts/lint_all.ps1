# Windows lint script for all languages
$ErrorActionPreference = "Stop"

Write-Host "==> Lint: Dart" -ForegroundColor Cyan
try { dart analyze --fatal-infos } catch { Write-Host "Dart analyze failed" -ForegroundColor Red; exit 1 }

Write-Host "==> Lint: Python (ruff)" -ForegroundColor Cyan
try { ruff check tools backend python_scripts } catch { Write-Host "Ruff lint failed" -ForegroundColor Red; exit 1 }

Write-Host "==> Lint: Web (eslint/stylelint)" -ForegroundColor Cyan
try { npm run lint:js } catch { Write-Host "ESLint failed" -ForegroundColor Red; exit 1 }
try { npm run lint:css } catch { Write-Host "Stylelint failed (non-blocking)" -ForegroundColor Yellow }

Write-Host "==> Prettier check" -ForegroundColor Cyan
try { npm run format:check } catch { Write-Host "Prettier check failed" -ForegroundColor Red; exit 1 }

Write-Host "==> Lint all completed" -ForegroundColor Green
