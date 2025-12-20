import 'package:in_app_review/in_app_review.dart';
import 'package:wassistant/services/local_storage_service.dart';
import 'package:wassistant/utils/logger_service.dart';

/// OCPD: Systematic engagement tracking to ensure high retention
/// INTJ: Strategic user feedback loops
class EngagementService {
  EngagementService(this._storage);

  final LocalStorageService _storage;
  final InAppReview _inAppReview = InAppReview.instance;

  static const String _launchCountKey = 'app_launch_count';
  static const String _lastReviewRequestKey = 'last_review_prompt_timestamp';

  /// Logic: Record app launch to identify loyal users for review prompts
  Future<void> recordAppOpen() async {
    final currentCount = _storage.getInt(_launchCountKey) ?? 0;
    await _storage.setInt(_launchCountKey, currentCount + 1);
    LoggerService.i('Engagement: launch #${currentCount + 1} recorded.');
  }

  /// Strategic Logic: Only prompt for review when the user is "warmed up"
  /// Criteria: > 10 launches and > 7 days since last prompt.
  Future<void> maybePromptForReview() async {
    final launchCount = _storage.getInt(_launchCountKey) ?? 0;
    final lastPrompt = _storage.getInt(_lastReviewRequestKey) ?? 0;
    final now = DateTime.now().millisecondsSinceEpoch;

    if (launchCount >= 10 && (now - lastPrompt) > (1000 * 60 * 60 * 24 * 7)) {
      if (await _inAppReview.isAvailable()) {
        await _inAppReview.requestReview();
        await _storage.setInt(_lastReviewRequestKey, now);
        LoggerService.i('Engagement: In-app review requested.');
      }
    }
  }
}
