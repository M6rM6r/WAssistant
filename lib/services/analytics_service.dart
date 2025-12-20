import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:logger/logger.dart';

/// Centralized analytics service for tracking user behavior and engagement
/// Follows INTJ principles: systematic tracking, measurable outcomes
class AnalyticsService {
  AnalyticsService({
    required Logger logger,
    FirebaseAnalytics? analytics,
  })  : _analytics = analytics,
        _logger = logger;

  final FirebaseAnalytics? _analytics;
  final Logger _logger;

  /// Track screen views with automatic naming
  Future<void> logScreenView({
    required String screenName,
    String? screenClass,
  }) async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logScreenView(
        screenName: screenName,
        screenClass: screenClass ?? screenName,
      );
      _logger.d('Screen view logged: $screenName');
    } catch (e, stackTrace) {
      _logger.e('Failed to log screen view', error: e, stackTrace: stackTrace);
    }
  }

  /// Track WhatsApp link generation (core feature)
  Future<void> logLinkGenerated({
    required String linkType,
    bool includesMessage = false,
    String? countryCode,
  }) async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logEvent(
        name: 'link_generated',
        parameters: <String, Object>{
          'link_type': linkType,
          'includes_message': includesMessage,
          if (countryCode != null) 'country_code': countryCode,
          'timestamp': DateTime.now().toIso8601String(),
        },
      );
      _logger.d('Link generation tracked: $linkType');
    } catch (e, stackTrace) {
      _logger.e('Failed to log link generation', error: e, stackTrace: stackTrace);
    }
  }

  /// Track QR code generation
  Future<void> logQrCodeGenerated({
    required String source,
    String? linkType,
  }) async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logEvent(
        name: 'qr_code_generated',
        parameters: <String, Object>{
          'source': source,
          if (linkType != null) 'link_type': linkType,
          'timestamp': DateTime.now().toIso8601String(),
        },
      );
      _logger.d('QR code generation tracked: $source');
    } catch (e, stackTrace) {
      _logger.e('Failed to log QR generation', error: e, stackTrace: stackTrace);
    }
  }

  /// Track sharing actions
  Future<void> logShare({
    required String contentType,
    required String method,
  }) async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logShare(
        contentType: contentType,
        itemId: method,
        method: method,
      );
      _logger.d('Share tracked: $contentType via $method');
    } catch (e, stackTrace) {
      _logger.e('Failed to log share', error: e, stackTrace: stackTrace);
    }
  }

  /// Track ad impressions for monetization analysis
  Future<void> logAdImpression({
    required String adUnit,
    required String adFormat,
  }) async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logEvent(
        name: 'ad_impression',
        parameters: <String, Object>{
          'ad_unit': adUnit,
          'ad_format': adFormat,
          'timestamp': DateTime.now().toIso8601String(),
        },
      );
      _logger.d('Ad impression tracked: $adUnit ($adFormat)');
    } catch (e, stackTrace) {
      _logger.e('Failed to log ad impression', error: e, stackTrace: stackTrace);
    }
  }

  /// Track feature usage for engagement metrics
  Future<void> logFeatureUsed({
    required String featureName,
    Map<String, Object>? additionalParams,
  }) async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logEvent(
        name: 'feature_used',
        parameters: <String, Object>{
          'feature_name': featureName,
          'timestamp': DateTime.now().toIso8601String(),
          if (additionalParams != null) ...additionalParams,
        },
      );
      _logger.d('Feature usage tracked: $featureName');
    } catch (e, stackTrace) {
      _logger.e('Failed to log feature usage', error: e, stackTrace: stackTrace);
    }
  }

  /// Track errors for quality monitoring
  Future<void> logError({
    required String errorType,
    required String errorMessage,
    String? stackTrace,
  }) async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logEvent(
        name: 'app_error',
        parameters: <String, Object>{
          'error_type': errorType,
          'error_message': errorMessage,
          if (stackTrace != null) 'stack_trace': stackTrace.substring(0, stackTrace.length > 100 ? 100 : stackTrace.length),
          'timestamp': DateTime.now().toIso8601String(),
        },
      );
      _logger.d('Error tracked: $errorType');
    } catch (e, stackTrace) {
      _logger.e('Failed to log error event', error: e, stackTrace: stackTrace);
    }
  }

  /// Set user properties for segmentation
  Future<void> setUserProperty({
    required String name,
    required String value,
  }) async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.setUserProperty(name: name, value: value);
      _logger.d('User property set: $name = $value');
    } catch (e, stackTrace) {
      _logger.e('Failed to set user property', error: e, stackTrace: stackTrace);
    }
  }

  /// Track app session start
  Future<void> logAppOpen() async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logAppOpen();
      _logger.d('App open tracked');
    } catch (e, stackTrace) {
      _logger.e('Failed to log app open', error: e, stackTrace: stackTrace);
    }
  }

  /// Track tutorial/onboarding completion
  Future<void> logTutorialComplete() async {
    try {
      final analytics = _analytics;
      if (analytics == null) return;
      await analytics.logTutorialComplete();
      _logger.d('Tutorial completion tracked');
    } catch (e, stackTrace) {
      _logger.e('Failed to log tutorial complete', error: e, stackTrace: stackTrace);
    }
  }

  /// Get analytics instance for advanced usage
  FirebaseAnalytics? get instance => _analytics;
}
