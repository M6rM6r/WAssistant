# WAssistant Web Deployment Script
# Builds and deploys the Flutter web app to Firebase Hosting

param(
    [switch]$SkipTests,
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

Write-Host "🚀 WAssistant Web Deployment" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Step 1: Run tests unless skipped
if (-not $SkipTests) {
    Write-Host "`n✅ Running unit tests..." -ForegroundColor Yellow
    flutter test test/unit --no-pub
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Tests failed! Aborting deployment." -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ All tests passed!" -ForegroundColor Green
}

# Step 2: Build web release unless skipped
if (-not $SkipBuild) {
    Write-Host "`n📦 Building web release..." -ForegroundColor Yellow
    flutter clean
    flutter pub get
    flutter build web --release --wasm
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Build failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Build completed!" -ForegroundColor Green
}

# Step 3: Deploy to Firebase
Write-Host "`n🔥 Deploying to Firebase Hosting..." -ForegroundColor Yellow
firebase deploy --only hosting

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your app is live at your Firebase Hosting URL" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Deployment failed!" -ForegroundColor Red
    exit 1
}
