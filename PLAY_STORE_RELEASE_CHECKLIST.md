# Play Store release checklist (concise)

## Automated Scripts Available

- **Validation**: `.\scripts\validate_deployment.ps1`
- **Keystore Gen**: `.\scripts\generate_keystore.ps1`
- **Build**: `.\scripts\build_android.ps1`

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for complete instructions.

---

1. Keystore & signing

- Ensure `android/app/keystore.jks` exists locally and `key.properties` points to it (not committed).
- In CI, set secrets: `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`.

2. AdMob production IDs

- Set in `.env`: `ADMOB_APP_ID_ANDROID`, `ADMOB_BANNER_AD_UNIT_ID_ANDROID`, `ADMOB_APP_ID_IOS`, `ADMOB_BANNER_AD_UNIT_ID_IOS`.
- Verify `android/app/src/main/AndroidManifest.xml` uses the production `ADMOB_APP_ID_ANDROID` meta-data if required (Flutter 5 ads auto-registers; adjust if needed).

3. Sentry (optional)

- If using Sentry, add `SENTRY_DSN` to `.env` and re-enable the package/init in `lib/main.dart`.

4. Build commands (local)

```bash
flutter clean
flutter pub get
flutter build appbundle --release
```

- Output: `build/app/outputs/bundle/release/app-release.aab`

5. Play Console upload

- In Play Console: Production track → Upload the new AAB → Complete release notes → Rollout.

6. CI deployment (if enabled)

- Ensure GitHub Actions secrets: `GOOGLE_PLAY_JSON_KEY` (service account JSON), keystore secrets above.
- Push to `main` to trigger workflow (if configured).

7. Smoke tests

- Install the internal/shared test build; verify WhatsApp link/QR generation and ads banner visibility on a real device.

8. Post-release

- Monitor ANRs/Crashes; verify revenue/ad fill with production AdMob IDs.
