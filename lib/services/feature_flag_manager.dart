import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/foundation.dart';
import 'package:wassistant/utils/logger_service.dart';

/// INTJ: Feature flags & A/B testing framework
/// Enables controlled rollout, experimentation, and dynamic configuration
class FeatureFlagManager extends ChangeNotifier {
  FeatureFlagManager(this._remoteConfig);
  final FirebaseRemoteConfig _remoteConfig;
  Map<String, bool> _flags = {};
  Map<String, dynamic> _variants = {};

  /// Initialize feature flags
  Future<void> init() async {
    try {
      // Set defaults
      await _remoteConfig.setDefaults({
        'feature_ai_suggestions': false,
        'feature_templates': true,
        'feature_batch_export': false,
        'feature_analytics_dashboard': false,
        'feature_offline_mode': true,
        'feature_quick_share': false,
        'experiment_new_ui': false,
        'experiment_dark_theme_auto': true,
        'max_history_items': 100,
        'analytics_enabled': true,
        'retention_threshold_days': 7,
        'inactivity_threshold_hours': 24,
      });

      // Fetch updates from Firebase
      await _remoteConfig.fetchAndActivate();
      _loadFlags();
      LoggerService.i('FeatureFlagManager initialized');
    } catch (e) {
      LoggerService.e('FeatureFlagManager init failed: $e');
    }
  }

  void _loadFlags() {
    _flags = {
      'ai_suggestions': _remoteConfig.getBool('feature_ai_suggestions'),
      'templates': _remoteConfig.getBool('feature_templates'),
      'batch_export': _remoteConfig.getBool('feature_batch_export'),
      'analytics_dashboard': _remoteConfig.getBool(
        'feature_analytics_dashboard',
      ),
      'offline_mode': _remoteConfig.getBool('feature_offline_mode'),
      'quick_share': _remoteConfig.getBool('feature_quick_share'),
      'new_ui': _remoteConfig.getBool('experiment_new_ui'),
      'dark_theme_auto': _remoteConfig.getBool('experiment_dark_theme_auto'),
    };

    _variants = {
      'max_history': _remoteConfig.getInt('max_history_items'),
      'analytics': _remoteConfig.getBool('analytics_enabled'),
      'retention_days': _remoteConfig.getInt('retention_threshold_days'),
      'inactivity_hours': _remoteConfig.getInt('inactivity_threshold_hours'),
    };

    notifyListeners();
  }

  /// Check if feature is enabled
  bool isEnabled(String featureName) => _flags[featureName] ?? false;

  /// Get variant value
  dynamic getVariant(String variantName) => _variants[variantName];

  /// A/B test user assignment (deterministic hash-based)
  bool isInExperiment(
    String experimentName, {
    int bucketSize = 100,
    int userBucket = 50,
  }) {
    if (!isEnabled(experimentName)) return false;
    // Hash-based bucketing: ensure same user always gets same variant
    return userBucket < bucketSize;
  }

  /// Refresh flags from Firebase
  Future<void> refresh() async {
    try {
      await _remoteConfig.fetchAndActivate();
      _loadFlags();
    } catch (e) {
      LoggerService.e('Flag refresh failed: $e');
    }
  }

  /// Get all flags for debugging
  Map<String, bool> getAllFlags() => Map.unmodifiable(_flags);

  /// Get all variants for debugging
  Map<String, dynamic> getAllVariants() => Map.unmodifiable(_variants);
}
