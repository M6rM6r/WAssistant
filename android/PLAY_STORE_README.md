Play Store release — keystore & CI setup

Steps to produce a signed AAB locally and/or enable automated uploads via GitHub Actions.

1. Install Java (JDK 11+)

- Ensure `keytool` is on your PATH. Verify with:

```powershell
keytool -version
```

2. Create a release keystore (PowerShell example)

```powershell
#$pw: generate a random secure password (optional), or set manually
#$pw = Read-Host -AsSecureString "Enter keystore password"
keytool -genkeypair -v -keystore android/app/keystore.jks -alias upload -keyalg RSA -keysize 2048 -validity 10000
```

After running the command you'll be prompted for the keystore password and key alias details.

3. Create `key.properties` in the repo root (DO NOT COMMIT)

```
storePassword=<your-keystore-password>
keyPassword=<your-key-password>
keyAlias=upload
storeFile=android/app/keystore.jks
```

4. Build an App Bundle locally

```powershell
flutter clean
flutter pub get
flutter build appbundle --release
```

Output AAB: `build/app/outputs/bundle/release/*.aab`

5. Optional: automate upload via GitHub Actions

- Create a Google Play service account (JSON key) with the Release Manager permission and add it to the repository secrets as `GOOGLE_PLAY_JSON_KEY`.
- (Optional) To avoid storing the keystore file in the repo, create a base64-encoded version and add as `ANDROID_KEYSTORE_BASE64`, along with `ANDROID_KEYSTORE_PASSWORD` and `ANDROID_KEY_ALIAS`.
- The repository already contains a workflow `.github/workflows/play_store_deploy.yml` that will build and upload the AAB when those secrets exist and you push to `main`.

Security notes

- Never commit `keystore.jks` or `key.properties`. The repo `.gitignore` contains default entries for them.
- Use GitHub Secrets for credentials. Rotate the service account key if it is exposed.

Troubleshooting

- If `flutter build appbundle` fails with plugin or codegen errors, run `flutter pub get` and `flutter pub run build_runner build --delete-conflicting-outputs` locally to regenerate generated files first.
