# Android Keystore Generation Script
# Generates a keystore for signing Android release builds

param(
    [string]$KeystorePassword = "",
    [string]$KeyAlias = "wassistant-release-key",
    [string]$KeyPassword = "",
    [string]$Validity = "10000"
)

$ErrorActionPreference = "Stop"

Write-Host "🔐 Android Keystore Generator" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Validate keytool is available
if (-not (Get-Command keytool -ErrorAction SilentlyContinue)) {
    Write-Host "❌ keytool not found. Please install Java JDK." -ForegroundColor Red
    exit 1
}

$keystorePath = "android/app/keystore.jks"
$keyPropertiesPath = "android/key.properties"

# Check if keystore already exists
if (Test-Path $keystorePath) {
    Write-Host "⚠️  Keystore already exists at: $keystorePath" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (yes/no)"
    if ($overwrite -ne "yes") {
        Write-Host "❌ Aborted." -ForegroundColor Red
        exit 0
    }
}

# Prompt for passwords if not provided
if ([string]::IsNullOrEmpty($KeystorePassword)) {
    $securePassword = Read-Host "Enter keystore password" -AsSecureString
    $KeystorePassword = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
        [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword))
}

if ([string]::IsNullOrEmpty($KeyPassword)) {
    $KeyPassword = $KeystorePassword  # Use same password for simplicity
}

Write-Host "`n📝 Generating keystore..." -ForegroundColor Yellow
Write-Host "Alias: $KeyAlias" -ForegroundColor Gray
Write-Host "Validity: $Validity days" -ForegroundColor Gray

# Generate keystore
keytool -genkey -v `
    -keystore $keystorePath `
    -alias $KeyAlias `
    -keyalg RSA `
    -keysize 2048 `
    -validity $Validity `
    -storepass $KeystorePassword `
    -keypass $KeyPassword

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Keystore generation failed!" -ForegroundColor Red
    exit 1
}

# Create key.properties file
Write-Host "`n📄 Creating key.properties..." -ForegroundColor Yellow
@"
storePassword=$KeystorePassword
keyPassword=$KeyPassword
keyAlias=$KeyAlias
storeFile=keystore.jks
"@ | Out-File -FilePath $keyPropertiesPath -Encoding UTF8

Write-Host "✅ Keystore generated successfully!" -ForegroundColor Green
Write-Host "`n📍 Keystore location: $keystorePath" -ForegroundColor Cyan
Write-Host "📍 Properties file: $keyPropertiesPath" -ForegroundColor Cyan
Write-Host "`n⚠️  IMPORTANT: Never commit these files to Git!" -ForegroundColor Yellow
Write-Host "   They are already in .gitignore" -ForegroundColor Gray
