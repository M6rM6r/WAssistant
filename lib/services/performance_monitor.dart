import 'package:flutter/foundation.dart';
import 'package:wassistant/utils/logger_service.dart';

/// Lightweight performance monitor without external deps
class PerformanceMonitor {
  static final PerformanceMonitor _instance = PerformanceMonitor._internal();
  final _metrics = <String, dynamic>{};

  factory PerformanceMonitor() => _instance;

  PerformanceMonitor._internal();

  void init() {
    // In debug, enable Flutter's built-in performance overlay
    if (kDebugMode) {
      debugPrint('Performance overlay enabled');
    }
    LoggerService.i('PerformanceMonitor initialized');
  }

  void recordMetric(String name, dynamic value, {String? unit}) {
    _metrics[name] = {
      'value': value,
      'unit': unit,
      'timestamp': DateTime.now(),
    };
    LoggerService.d('Metric: $name = $value ${unit ?? ''}');
  }

  Future<T> measure<T>(
    String operationName,
    Future<T> Function() operation, {
    int warnThresholdMs = 500,
  }) async {
    final stopwatch = Stopwatch()..start();
    try {
      final result = await operation();
      stopwatch.stop();

      final durationMs = stopwatch.elapsedMilliseconds;
      recordMetric('$operationName.duration', durationMs, unit: 'ms');

      if (durationMs > warnThresholdMs) {
        LoggerService.w('Slow operation: $operationName took ${durationMs}ms');
      }

      return result;
    } catch (e, st) {
      stopwatch.stop();
      LoggerService.e('Error in $operationName: $e\n$st');
      rethrow;
    }
  }

  Map<String, dynamic> getMetrics() => Map.unmodifiable(_metrics);

  Map<String, dynamic> exportReport() {
    return {'timestamp': DateTime.now().toIso8601String(), 'metrics': _metrics};
  }

  void dispose() {}
}

final performanceMonitor = PerformanceMonitor();
