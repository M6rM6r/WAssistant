import 'package:firebase_performance/firebase_performance.dart';
import 'package:logger/logger.dart';

/// Performance monitoring service for tracking app metrics
/// INTJ-aligned: quantifiable performance data, systematic optimization
class PerformanceService {
  PerformanceService({
    required FirebasePerformance performance,
    required Logger logger,
  }) : _performance = performance,
       _logger = logger;
  final FirebasePerformance _performance;
  final Logger _logger;
  final Map<String, Trace> _activeTraces = {};
  final Map<String, HttpMetric> _activeMetrics = {};

  /// Start tracking a custom trace
  Future<void> startTrace(String traceName) async {
    try {
      if (_activeTraces.containsKey(traceName)) {
        _logger.w('Trace $traceName already active');
        return;
      }

      final trace = _performance.newTrace(traceName);
      await trace.start();
      _activeTraces[traceName] = trace;
      _logger.d('Trace started: $traceName');
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to start trace', error: e, stackTrace: stackTrace);
    }
  }

  /// Stop tracking a custom trace
  Future<void> stopTrace(String traceName, {Map<String, int>? metrics}) async {
    try {
      final trace = _activeTraces[traceName];
      if (trace == null) {
        _logger.w('Trace $traceName not found');
        return;
      }

      if (metrics != null) {
        metrics.forEach(trace.setMetric);
      }

      await trace.stop();
      _activeTraces.remove(traceName);
      _logger.d('Trace stopped: $traceName');
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to stop trace', error: e, stackTrace: stackTrace);
    }
  }

  /// Increment a metric in an active trace
  void incrementTraceMetric(String traceName, String metricName, int value) {
    try {
      final trace = _activeTraces[traceName];
      if (trace == null) {
        _logger.w('Trace $traceName not found');
        return;
      }

      trace.incrementMetric(metricName, value);
      _logger.d('Metric incremented: $traceName.$metricName += $value');
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to increment metric', error: e, stackTrace: stackTrace);
    }
  }

  /// Set a custom attribute on a trace
  void setTraceAttribute(String traceName, String attribute, String value) {
    try {
      final trace = _activeTraces[traceName];
      if (trace == null) {
        _logger.w('Trace $traceName not found');
        return;
      }

      trace.putAttribute(attribute, value);
      _logger.d('Attribute set: $traceName.$attribute = $value');
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to set attribute', error: e, stackTrace: stackTrace);
    }
  }

  /// Track HTTP request performance
  Future<HttpMetric?> startHttpMetric({
    required String url,
    required HttpMethod method,
  }) async {
    try {
      final metric = _performance.newHttpMetric(url, method);
      await metric.start();
      final key = '${method.name}_$url';
      _activeMetrics[key] = metric;
      _logger.d('HTTP metric started: $method $url');
      return metric;
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to start HTTP metric',
        error: e,
        stackTrace: stackTrace,
      );
      return null;
    }
  }

  /// Stop HTTP metric with response details
  Future<void> stopHttpMetric({
    required String url,
    required HttpMethod method,
    int? statusCode,
    int? requestPayloadSize,
    int? responsePayloadSize,
  }) async {
    try {
      final key = '${method.name}_$url';
      final metric = _activeMetrics[key];
      if (metric == null) {
        _logger.w('HTTP metric not found: $key');
        return;
      }

      if (statusCode != null) {
        metric.httpResponseCode = statusCode;
      }
      if (requestPayloadSize != null) {
        metric.requestPayloadSize = requestPayloadSize;
      }
      if (responsePayloadSize != null) {
        metric.responsePayloadSize = responsePayloadSize;
      }

      await metric.stop();
      _activeMetrics.remove(key);
      _logger.d('HTTP metric stopped: $method $url (status: $statusCode)');
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to stop HTTP metric', error: e, stackTrace: stackTrace);
    }
  }

  /// Track screen rendering performance
  Future<void> trackScreenRender(String screenName) async {
    final traceName = 'screen_render_$screenName';
    await startTrace(traceName);
    // Stop in your screen's initState completion or build completion
  }

  /// Track link generation performance (core feature)
  Future<void> trackLinkGeneration(Future<void> Function() operation) async {
    const traceName = 'link_generation';
    await startTrace(traceName);

    try {
      await operation();
      await stopTrace(traceName, metrics: {'success': 1});
    } catch (e) {
      await stopTrace(traceName, metrics: {'error': 1});
      rethrow;
    }
  }

  /// Track QR code generation performance
  Future<T> trackQrCodeGeneration<T>(Future<T> Function() operation) async {
    const traceName = 'qr_generation';
    await startTrace(traceName);

    try {
      final result = await operation();
      await stopTrace(traceName, metrics: {'success': 1});
      return result;
    } catch (e) {
      await stopTrace(traceName, metrics: {'error': 1});
      rethrow;
    }
  }

  /// Enable/disable performance collection
  Future<void> setPerformanceCollectionEnabled({required bool enabled}) async {
    try {
      await _performance.setPerformanceCollectionEnabled(enabled);
      _logger.d('Performance collection ${enabled ? 'enabled' : 'disabled'}');
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to set performance collection',
        error: e,
        stackTrace: stackTrace,
      );
    }
  }

  /// Get performance instance for advanced usage
  FirebasePerformance get instance => _performance;
}
