# Android Release Build Script
# Builds signed Android App Bundle for Play Store

param(
    [switch]$SkipTests,
    [ValidateSet('appbundle', 'apk')]
    [string]$BuildType = 'appbundle'
)

$ErrorActionPreference = "Stop"

Write-Host "🤖 Android Release Build" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Verify keystore exists
if (-not (Test-Path "android/key.properties")) {
    Write-Host "❌ key.properties not found!" -ForegroundColor Red
    Write-Host "Run scripts/generate_keystore.ps1 first" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path "android/app/keystore.jks")) {
    Write-Host "❌ keystore.jks not found!" -ForegroundColor Red
    Write-Host "Run scripts/generate_keystore.ps1 first" -ForegroundColor Yellow
    exit 1
}

# Run tests unless skipped
if (-not $SkipTests) {
    Write-Host "`n✅ Running unit tests..." -ForegroundColor Yellow
    flutter test test/unit --no-pub
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Tests failed! Aborting build." -ForegroundColor Red
        exit 1
    }
}

# Clean and prepare
Write-Host "`n🧹 Cleaning project..." -ForegroundColor Yellow
flutter clean
flutter pub get

# Build
if ($BuildType -eq 'appbundle') {
    Write-Host "`n📦 Building App Bundle (AAB)..." -ForegroundColor Yellow
    flutter build appbundle --release
    $outputPath = "build/app/outputs/bundle/release/app-release.aab"
} else {
    Write-Host "`n📦 Building APK..." -ForegroundColor Yellow
    flutter build apk --release
    $outputPath = "build/app/outputs/flutter-apk/app-release.apk"
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Build successful!" -ForegroundColor Green
    Write-Host "📍 Output: $outputPath" -ForegroundColor Cyan

    # Get file size
    $fileSize = (Get-Item $outputPath).Length / 1MB
    Write-Host "📊 Size: $([math]::Round($fileSize, 2)) MB" -ForegroundColor Cyan

    if ($BuildType -eq 'appbundle') {
        Write-Host "`n📤 Next steps:" -ForegroundColor Yellow
        Write-Host "   1. Upload to Play Console" -ForegroundColor Gray
        Write-Host "   2. Create release in Production track" -ForegroundColor Gray
        Write-Host "   3. Complete release notes" -ForegroundColor Gray
        Write-Host "   4. Rollout to users" -ForegroundColor Gray
    }
} else {
    Write-Host "`n❌ Build failed!" -ForegroundColor Red
    exit 1
}
