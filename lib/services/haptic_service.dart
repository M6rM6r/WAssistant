import 'package:flutter/services.dart';

/// INTJ: Haptic feedback service with strategic pattern mapping
/// OCPD: Deterministic tactile responses for measurable UX improvement
class HapticService {
  static final HapticService _instance = HapticService._internal();
  factory HapticService() => _instance;
  HapticService._internal();

  bool _enabled = true;
  bool get isEnabled => _enabled;

  void setEnabled(bool value) => _enabled = value;

  /// Light impact - subtle feedback for minor interactions
  void lightImpact() {
    if (!_enabled) return;
    HapticFeedback.lightImpact();
  }

  /// Medium impact - standard feedback for primary actions
  void mediumImpact() {
    if (!_enabled) return;
    HapticFeedback.mediumImpact();
  }

  /// Heavy impact - strong feedback for major actions
  void heavyImpact() {
    if (!_enabled) return;
    HapticFeedback.heavyImpact();
  }

  /// Selection click - for picker/selector interactions
  void selectionClick() {
    if (!_enabled) return;
    HapticFeedback.selectionClick();
  }

  /// Vibrate - custom duration feedback
  void vibrate({Duration duration = const Duration(milliseconds: 50)}) {
    if (!_enabled) return;
    HapticFeedback.vibrate();
  }

  /// Success pattern - positive confirmation
  void success() {
    if (!_enabled) return;
    _pattern([
      HapticType.light,
      HapticType.medium,
    ]);
  }

  /// Error pattern - negative feedback
  void error() {
    if (!_enabled) return;
    _pattern([
      HapticType.heavy,
      HapticType.light,
      HapticType.heavy,
    ]);
  }

  /// Warning pattern - caution feedback
  void warning() {
    if (!_enabled) return;
    _pattern([
      HapticType.medium,
      HapticType.medium,
    ]);
  }

  /// Completion pattern - task finished
  void completion() {
    if (!_enabled) return;
    _pattern([
      HapticType.light,
      HapticType.light,
      HapticType.medium,
    ]);
  }

  /// Button press - standard button feedback
  void buttonPress() {
    lightImpact();
  }

  /// Long press - sustained interaction
  void longPress() {
    mediumImpact();
  }

  /// Scroll tick - continuous scroll feedback
  void scrollTick() {
    selectionClick();
  }

  /// Page change - major navigation
  void pageChange() {
    mediumImpact();
  }

  /// QR generated - success feedback
  void qrGenerated() {
    success();
  }

  /// Link copied - subtle confirmation
  void linkCopied() {
    lightImpact();
  }

  /// Share initiated - action started
  void shareStarted() {
    mediumImpact();
  }

  /// Delete confirm - destructive action warning
  void deleteConfirm() {
    warning();
  }

  /// Execute haptic pattern with delays
  void _pattern(List<HapticType> pattern) async {
    for (var i = 0; i < pattern.length; i++) {
      switch (pattern[i]) {
        case HapticType.light:
          lightImpact();
          break;
        case HapticType.medium:
          mediumImpact();
          break;
        case HapticType.heavy:
          heavyImpact();
          break;
      }
      
      if (i < pattern.length - 1) {
        await Future.delayed(const Duration(milliseconds: 100));
      }
    }
  }
}

enum HapticType {
  light,
  medium,
  heavy,
}
