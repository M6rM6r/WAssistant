import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:logger/logger.dart';

/// Feature flag and remote configuration service
/// INTJ approach: A/B testing, data-driven decisions, controlled rollouts
class RemoteConfigService {
  RemoteConfigService({
    required FirebaseRemoteConfig remoteConfig,
    required Logger logger,
  }) : _remoteConfig = remoteConfig,
       _logger = logger;
  final FirebaseRemoteConfig _remoteConfig;
  final Logger _logger;

  /// Initialize remote config with default values and fetch policy
  Future<void> initialize() async {
    try {
      await _remoteConfig.setConfigSettings(
        RemoteConfigSettings(
          fetchTimeout: const Duration(seconds: 30),
          minimumFetchInterval: const Duration(hours: 1),
        ),
      );

      await _remoteConfig.setDefaults({
        // Feature flags
        'enable_ads': true,
        'enable_analytics': true,
        'enable_in_app_review': true,
        'enable_whatsapp_business_support': false,
        'enable_bulk_operations': true,
        'enable_premium_features': false,

        // UI Configuration
        'show_upgrade_dialog': true,
        'max_history_items': 100,
        'enable_dark_mode': true,

        // Engagement
        'min_version_code': 1,
        'force_update_version': '0.0.0',
        'show_whats_new': true,
        'review_prompt_delay_days': 7,

        // Performance
        'enable_performance_monitoring': true,
        'cache_duration_minutes': 60,

        // Limits
        'max_qr_size': 1024,
        'max_message_length': 5000,
        'rate_limit_per_hour': 100,

        // URLs
        'support_url': 'https://wassistant.site/faq.html',
        'privacy_policy_url': 'https://wassistant.site/privacy_policy.html',
        'terms_url': 'https://wassistant.site/terms.html',
      });

      await _remoteConfig.fetchAndActivate();
      _logger.d('Remote config initialized and activated');
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to initialize remote config',
        error: e,
        stackTrace: stackTrace,
      );
    }
  }

  /// Fetch latest config from server
  Future<bool> fetchConfig() async {
    try {
      final activated = await _remoteConfig.fetchAndActivate();
      _logger.d('Remote config fetched: $activated');
      return activated;
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to fetch remote config',
        error: e,
        stackTrace: stackTrace,
      );
      return false;
    }
  }

  // === Feature Flags ===

  bool get areAdsEnabled => _remoteConfig.getBool('enable_ads');
  bool get isAnalyticsEnabled => _remoteConfig.getBool('enable_analytics');
  bool get isInAppReviewEnabled =>
      _remoteConfig.getBool('enable_in_app_review');
  bool get isWhatsAppBusinessSupported =>
      _remoteConfig.getBool('enable_whatsapp_business_support');
  bool get areBulkOperationsEnabled =>
      _remoteConfig.getBool('enable_bulk_operations');
  bool get arePremiumFeaturesEnabled =>
      _remoteConfig.getBool('enable_premium_features');
  bool get isPerformanceMonitoringEnabled =>
      _remoteConfig.getBool('enable_performance_monitoring');

  // === UI Configuration ===

  bool get shouldShowUpgradeDialog =>
      _remoteConfig.getBool('show_upgrade_dialog');
  int get maxHistoryItems => _remoteConfig.getInt('max_history_items');
  bool get isDarkModeEnabled => _remoteConfig.getBool('enable_dark_mode');
  bool get shouldShowWhatsNew => _remoteConfig.getBool('show_whats_new');

  // === Engagement ===

  int get minVersionCode => _remoteConfig.getInt('min_version_code');
  String get forceUpdateVersion =>
      _remoteConfig.getString('force_update_version');
  int get reviewPromptDelayDays =>
      _remoteConfig.getInt('review_prompt_delay_days');

  // === Performance ===

  int get cacheDurationMinutes =>
      _remoteConfig.getInt('cache_duration_minutes');

  // === Limits ===

  int get maxQrSize => _remoteConfig.getInt('max_qr_size');
  int get maxMessageLength => _remoteConfig.getInt('max_message_length');
  int get rateLimitPerHour => _remoteConfig.getInt('rate_limit_per_hour');

  // === URLs ===

  String get supportUrl => _remoteConfig.getString('support_url');
  String get privacyPolicyUrl => _remoteConfig.getString('privacy_policy_url');
  String get termsUrl => _remoteConfig.getString('terms_url');

  /// Get custom value with type inference
  T getValue<T>(String key, T defaultValue) {
    try {
      if (T == bool) {
        return _remoteConfig.getBool(key) as T;
      } else if (T == int) {
        return _remoteConfig.getInt(key) as T;
      } else if (T == double) {
        return _remoteConfig.getDouble(key) as T;
      } else if (T == String) {
        return _remoteConfig.getString(key) as T;
      }
      return defaultValue;
    } on Object {
      _logger.w('Failed to get config value for $key, using default');
      return defaultValue;
    }
  }

  /// Check if feature is enabled (with analytics tracking)
  Future<bool> isFeatureEnabled(String featureName) async {
    final enabled = _remoteConfig.getBool('enable_$featureName');
    _logger.d('Feature check: $featureName = $enabled');
    return enabled;
  }

  /// Get all config values (for debugging)
  Map<String, dynamic> getAllConfig() {
    return _remoteConfig.getAll().map(
      (key, value) => MapEntry(key, value.asString()),
    );
  }

  /// Get remote config instance for advanced usage
  FirebaseRemoteConfig get instance => _remoteConfig;
}
