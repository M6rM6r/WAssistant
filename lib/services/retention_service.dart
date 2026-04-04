import 'dart:async';

import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/utils/logger_service.dart';

/// INTJ: Behavioral analytics & predictive retention strategy
/// Tracks user engagement patterns, predicts churn, triggers interventions
class RetentionService {
  static const String _lastActiveKey = 'retention_last_active';
  static const String _sessionCountKey = 'retention_session_count';
  static const String _featureUsageKey = 'retention_feature_usage';

  late SharedPreferences _prefs;
  late FirebaseRemoteConfig _remoteConfig;
  Timer? _inactivityTimer;
  final _churnRiskNotifier = ValueNotifier<bool>(false);

  // Stream for churn events
  final _churnStream = StreamController<ChurnEvent>.broadcast();
  Stream<ChurnEvent> get churnEvents => _churnStream.stream;

  /// Initialize retention tracking
  Future<void> init(
    SharedPreferences prefs,
    FirebaseRemoteConfig remoteConfig,
  ) async {
    _prefs = prefs;
    _remoteConfig = remoteConfig;
    _recordSession();
    _startInactivityTracking();
    await _evaluateChurnRisk();
    LoggerService.i('RetentionService initialized');
  }

  /// Record feature usage (QR, Link, vCard)
  void recordFeatureUsage(
    String featureName, {
    Map<String, dynamic>? metadata,
  }) {
    final usage = _prefs.getStringList(_featureUsageKey) ?? [];
    usage.add('$featureName:${DateTime.now().millisecondsSinceEpoch}');
    _prefs.setStringList(_featureUsageKey, usage);
    LoggerService.d('Feature tracked: $featureName');
  }

  /// Track history item creation
  void recordHistoryItem(HistoryItem item) {
    recordFeatureUsage(
      item.type.toString(),
      metadata: {'data_length': item.data.length, 'display': item.display},
    );
  }

  /// Session count increment
  void _recordSession() {
    final count = _prefs.getInt(_sessionCountKey) ?? 0;
    _prefs.setInt(_sessionCountKey, count + 1);
    _prefs.setInt(_lastActiveKey, DateTime.now().millisecondsSinceEpoch);
  }

  /// Inactivity detection (trigger re-engagement)
  void _startInactivityTracking() {
    _inactivityTimer?.cancel();
    final inactivityThresholdMs =
        _remoteConfig.getInt('inactivity_threshold_hours') * 3600 * 1000;

    _inactivityTimer = Timer.periodic(Duration(minutes: 5), (_) {
      final lastActive =
          _prefs.getInt(_lastActiveKey) ??
          DateTime.now().millisecondsSinceEpoch;
      final inactiveDuration =
          DateTime.now().millisecondsSinceEpoch - lastActive;

      if (inactiveDuration > inactivityThresholdMs) {
        _recordInactivity(inactiveDuration);
      }
    });
  }

  /// Churn risk evaluation
  Future<void> _evaluateChurnRisk() async {
    final sessionCount = _prefs.getInt(_sessionCountKey) ?? 0;
    final usage = _prefs.getStringList(_featureUsageKey) ?? [];
    final lastActive =
        _prefs.getInt(_lastActiveKey) ?? DateTime.now().millisecondsSinceEpoch;
    final daysSinceLastActive =
        (DateTime.now().millisecondsSinceEpoch - lastActive) /
        (24 * 3600 * 1000);

    // INTJ: Precise churn prediction
    final isAtRisk =
        sessionCount < 3 || daysSinceLastActive > 7 || usage.isEmpty;
    _churnRiskNotifier.value = isAtRisk;

    if (isAtRisk) {
      _churnStream.add(
        ChurnEvent(
          riskLevel:
              daysSinceLastActive > 14 ? ChurnLevel.critical : ChurnLevel.high,
          reason: _calculateChurnReason(
            sessionCount,
            usage.length,
            daysSinceLastActive,
          ),
        ),
      );
    }
  }

  String _calculateChurnReason(
    int sessions,
    int usageCount,
    double daysSinceActive,
  ) {
    if (daysSinceActive > 14) return 'User inactive for 14+ days';
    if (sessions < 3) return 'Low engagement (${sessions} sessions)';
    if (usageCount == 0) return 'No features used';
    return 'Declining usage pattern';
  }

  void _recordInactivity(int durationMs) {
    _churnStream.add(
      ChurnEvent(
        riskLevel: ChurnLevel.warning,
        reason:
            'Inactivity detected: ${(durationMs / 3600000).toStringAsFixed(1)}h',
      ),
    );
  }

  /// Get engagement metrics
  Future<EngagementMetrics> getMetrics() async {
    final sessionCount = _prefs.getInt(_sessionCountKey) ?? 0;
    final usage = _prefs.getStringList(_featureUsageKey) ?? [];
    final lastActive =
        _prefs.getInt(_lastActiveKey) ?? DateTime.now().millisecondsSinceEpoch;

    return EngagementMetrics(
      sessionCount: sessionCount,
      totalFeatureUsages: usage.length,
      daysSinceLastActive:
          (DateTime.now().millisecondsSinceEpoch - lastActive) /
          (24 * 3600 * 1000),
      churnRisk: _churnRiskNotifier.value,
    );
  }

  /// Trigger re-engagement intervention
  void triggerReEngagement() {
    _recordSession(); // Boost engagement
    _churnStream.add(
      ChurnEvent(
        riskLevel: ChurnLevel.mitigated,
        reason: 'Re-engagement intervention triggered',
      ),
    );
  }

  void dispose() {
    _inactivityTimer?.cancel();
    _churnStream.close();
    _churnRiskNotifier.dispose();
  }

  ValueListenable<bool> get churnRiskNotifier => _churnRiskNotifier;
}

enum ChurnLevel { warning, high, critical, mitigated }

class ChurnEvent {
  final ChurnLevel riskLevel;
  final String reason;
  ChurnEvent({required this.riskLevel, required this.reason});
}

class EngagementMetrics {
  final int sessionCount;
  final int totalFeatureUsages;
  final double daysSinceLastActive;
  final bool churnRisk;

  EngagementMetrics({
    required this.sessionCount,
    required this.totalFeatureUsages,
    required this.daysSinceLastActive,
    required this.churnRisk,
  });
}
