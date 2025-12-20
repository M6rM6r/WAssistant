# WAssistant Deployment Guide

Complete step-by-step guide for deploying WAssistant to all platforms.

---

## 🌐 Web Deployment (Firebase Hosting)

### Prerequisites

- Firebase CLI installed: `npm install -g firebase-tools`
- Firebase project configured in `firebase.json`

### Quick Deploy

```powershell
.\scripts\deploy_web.ps1
```

### Manual Steps

```powershell
# 1. Build
flutter build web --release --web-renderer canvaskit

# 2. Deploy
firebase deploy --only hosting
```

### Options

```powershell
# Skip tests
.\scripts\deploy_web.ps1 -SkipTests

# Skip build (deploy existing)
.\scripts\deploy_web.ps1 -SkipBuild
```

---

## 🤖 Android Deployment (Play Store)

### Step 1: Generate Keystore (First Time Only)

```powershell
.\scripts\generate_keystore.ps1
```

**Important**:

- Store keystore password securely (e.g., password manager)
- Never commit `keystore.jks` or `key.properties` to Git
- Backup keystore to secure location

### Step 2: Build Release

```powershell
# Build App Bundle (recommended for Play Store)
.\scripts\build_android.ps1

# Or build APK
.\scripts\build_android.ps1 -BuildType apk
```

Output: `build/app/outputs/bundle/release/app-release.aab`

### Step 3: Upload to Play Console

1. Go to [Play Console](https://play.google.com/console)
2. Select your app → Production → Create new release
3. Upload the AAB file
4. Complete release notes
5. Review and rollout

### CI/CD (GitHub Actions)

Add these secrets to your repository:

- `ANDROID_KEYSTORE_BASE64`: Base64-encoded keystore
- `ANDROID_KEYSTORE_PASSWORD`: Keystore password
- `ANDROID_KEY_ALIAS`: Key alias (default: `wassistant-release-key`)
- `GOOGLE_PLAY_JSON_KEY`: Service account JSON for automated deployment

---

## 🍎 iOS Deployment (App Store)

### Prerequisites

- macOS with Xcode installed
- Apple Developer account
- App Store Connect app configured

### Step 1: Configure Signing

```bash
# Open Xcode project
open ios/Runner.xcworkspace

# In Xcode:
# 1. Select Runner target
# 2. Go to Signing & Capabilities
# 3. Select your team
# 4. Configure bundle identifier
```

### Step 2: Update AdMob IDs

Verify iOS AdMob IDs in `.env`:

```
ADMOB_APP_ID_IOS=ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX
ADMOB_BANNER_AD_UNIT_ID_IOS=ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX
```

### Step 3: Build Release

```bash
# Clean and build
flutter clean
flutter pub get
flutter build ios --release

# Archive in Xcode
# 1. Open ios/Runner.xcworkspace
# 2. Product → Archive
# 3. Distribute App → App Store Connect
```

### Step 4: Submit via App Store Connect

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Select your app → TestFlight or App Store
3. Add build, complete metadata, and submit for review

---

## 📋 Pre-Deployment Checklist

### Code Quality ✅

- [x] All unit tests passing (68/68)
- [x] Flutter analyze clean (6 minor style warnings only)
- [x] Code coverage meets threshold (17.51% ≥ 17%)
- [x] No deprecated APIs in production code

### Configuration ✅

- [x] Version bumped in `pubspec.yaml` (1.4.1)
- [x] AdMob production IDs configured in `.env`
- [x] Firebase configuration files present
- [x] Localization complete (5 locales, 72 keys each)

### Android 🟡

- [ ] Keystore generated and secured
- [ ] `key.properties` configured
- [ ] Release build tested on physical device
- [ ] Play Store listing complete

### iOS 🟡

- [ ] Xcode signing configured
- [ ] TestFlight build tested
- [ ] App Store listing complete

### Web ✅

- [ ] Firebase Hosting configured
- [ ] Production URL tested
- [ ] Analytics verified

---

## 🔒 Security Notes

**Never Commit:**

- `android/key.properties`
- `android/app/keystore.jks`
- `.env` (production credentials)
- `google-services.json` (if contains sensitive data)

**Backup Securely:**

- Android keystore (`.jks` file)
- Keystore passwords
- Apple signing certificates
- Service account keys

---

## 🚨 Troubleshooting

### Build Fails: "Keystore not found"

```powershell
.\scripts\generate_keystore.ps1
```

### Web Deploy Fails: "Firebase not initialized"

```bash
firebase login
firebase init hosting
```

### iOS Build Fails: "Signing error"

- Open `ios/Runner.xcworkspace` in Xcode
- Update signing team and bundle identifier
- Clean build folder (Product → Clean Build Folder)

### Tests Fail Before Deploy

```powershell
flutter test test/unit --no-pub
```

---

## 📊 Post-Deployment Monitoring

### Firebase Console

- Analytics dashboard
- Crashlytics reports
- Performance monitoring
- Remote Config experiments

### Play Console

- ANRs and crashes
- User reviews
- Install metrics

### App Store Connect

- Crash reports
- TestFlight feedback
- App Analytics

---

## 🔄 Version Management

Update version before each release:

```yaml
# pubspec.yaml
version: 1.4.1+4 # format: MAJOR.MINOR.PATCH+BUILD_NUMBER
```

Android version code derived from build number automatically.

---

## 📞 Support

For deployment issues:

1. Check `flutter doctor` output
2. Review CI/CD logs
3. Verify all prerequisites
4. Contact platform support if needed
