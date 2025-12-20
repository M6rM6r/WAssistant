# Release Notes

Follow this minimal release process for reproducible releases:

1. Bump version in `pubspec.yaml` (Semantic Versioning).
2. Run `flutter pub get` and `flutter test --coverage` locally.
3. Create a changelog entry in `CHANGELOG.md` (one-line per change).
4. Tag a release: `git tag -a vX.Y.Z -m "Release X.Y.Z"` and push tags.

Keep releases atomic and small.
