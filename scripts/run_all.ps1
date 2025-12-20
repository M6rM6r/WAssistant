# Orchestrate full pipeline: setup -> lint -> test -> build -> deploy preview
$ErrorActionPreference = "Stop"

Write-Host "==> Setup" -ForegroundColor Cyan
& "$PSScriptRoot\setup.ps1"

Write-Host "==> Lint" -ForegroundColor Cyan
& "$PSScriptRoot\lint_all.ps1"

Write-Host "==> Tests" -ForegroundColor Cyan
flutter test --reporter=compact

Write-Host "==> Build web" -ForegroundColor Cyan
flutter build web --release --base-href '/'

Write-Host "==> Deploy preview channel" -ForegroundColor Cyan
$channel = "run-" + (Get-Date -Format "yyyyMMdd-HHmm")
firebase hosting:channel:deploy $channel --expires 7d

Write-Host "==> Done" -ForegroundColor Green
