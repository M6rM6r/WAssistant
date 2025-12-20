import 'dart:async';

import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/foundation.dart';
import 'package:logger/logger.dart';

/// Enhanced error handling and observability service
/// INTJ: Systematic error categorization, measurable reliability
class ErrorHandlingService {
  ErrorHandlingService({
    required FirebaseCrashlytics crashlytics,
    required Logger logger,
  }) : _crashlytics = crashlytics,
       _logger = logger;
  final FirebaseCrashlytics _crashlytics;
  final Logger _logger;

  /// Initialize error handling
  Future<void> initialize() async {
    try {
      // Enable crashlytics collection
      await _crashlytics.setCrashlyticsCollectionEnabled(true);

      // Set up Flutter error handlers
      FlutterError.onError = (FlutterErrorDetails details) {
        _logger.e(
          'Flutter Error',
          error: details.exception,
          stackTrace: details.stack,
        );
        unawaited(_crashlytics.recordFlutterFatalError(details));
      };

      // Handle async errors
      PlatformDispatcher.instance.onError = (error, stack) {
        _logger.e('Async Error', error: error, stackTrace: stack);
        unawaited(_crashlytics.recordError(error, stack, fatal: true));
        return true;
      };

      _logger.d('Error handling service initialized');
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to initialize error handling',
        error: e,
        stackTrace: stackTrace,
      );
    }
  }

  /// Record a non-fatal error
  Future<void> recordError(
    dynamic error,
    StackTrace? stackTrace, {
    String? reason,
    Map<String, dynamic>? context,
  }) async {
    try {
      _logger.e(
        reason ?? 'Error occurred',
        error: error,
        stackTrace: stackTrace,
      );

      if (context != null) {
        for (final entry in context.entries) {
          unawaited(
            _crashlytics.setCustomKey(entry.key, entry.value.toString()),
          );
        }
      }

      await _crashlytics.recordError(error, stackTrace, reason: reason);
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to record error', error: e, stackTrace: stackTrace);
    }
  }

  /// Record a handled exception
  Future<void> recordException(
    Exception exception,
    StackTrace? stackTrace, {
    String? context,
  }) async {
    await recordError(
      exception,
      stackTrace,
      reason: context ?? 'Exception handled',
    );
  }

  /// Set user identifier for error tracking
  Future<void> setUserId(String userId) async {
    try {
      await _crashlytics.setUserIdentifier(userId);
      _logger.d('User ID set for crash reporting: $userId');
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to set user ID', error: e, stackTrace: stackTrace);
    }
  }

  /// Set custom key-value pairs for context
  Future<void> setCustomKey(String key, dynamic value) async {
    try {
      await _crashlytics.setCustomKey(key, value.toString());
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to set custom key', error: e, stackTrace: stackTrace);
    }
  }

  /// Log a message to crashlytics
  void log(String message) {
    unawaited(_crashlytics.log(message));
    _logger.d('Crashlytics log: $message');
  }

  /// Check if there are unsent crash reports
  Future<bool> checkForUnsentReports() async {
    try {
      return await _crashlytics.checkForUnsentReports();
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to check for unsent reports',
        error: e,
        stackTrace: stackTrace,
      );
      return false;
    }
  }

  /// Send unsent crash reports
  Future<void> sendUnsentReports() async {
    try {
      await _crashlytics.sendUnsentReports();
      _logger.d('Unsent reports sent');
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to send unsent reports',
        error: e,
        stackTrace: stackTrace,
      );
    }
  }

  /// Delete unsent crash reports
  Future<void> deleteUnsentReports() async {
    try {
      await _crashlytics.deleteUnsentReports();
      _logger.d('Unsent reports deleted');
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to delete unsent reports',
        error: e,
        stackTrace: stackTrace,
      );
    }
  }

  /// Handle errors with retry logic
  Future<T> withRetry<T>({
    required Future<T> Function() operation,
    int maxRetries = 3,
    Duration delay = const Duration(seconds: 1),
    String? operationName,
  }) async {
    int attempt = 0;

    while (true) {
      try {
        return await operation();
      } catch (e, stackTrace) {
        attempt++;

        if (attempt >= maxRetries) {
          await recordError(
            e,
            stackTrace,
            reason:
                '${operationName ?? 'Operation'} failed after $maxRetries attempts',
            context: {'attempts': attempt},
          );
          rethrow;
        }

        _logger.w(
          '${operationName ?? 'Operation'} failed (attempt $attempt/$maxRetries), retrying...',
        );

        await Future<void>.delayed(delay * attempt);
      }
    }
  }

  /// Wrap an operation with error handling
  Future<T?> withErrorHandling<T>({
    required Future<T> Function() operation,
    String? operationName,
    T? fallback,
  }) async {
    try {
      return await operation();
    } on Object catch (e, stackTrace) {
      await recordError(
        e,
        stackTrace,
        reason: '${operationName ?? 'Operation'} failed',
      );
      return fallback;
    }
  }

  /// Get crashlytics instance for advanced usage
  FirebaseCrashlytics get instance => _crashlytics;
}
