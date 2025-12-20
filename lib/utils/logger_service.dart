import 'package:logger/logger.dart';

/// OCPD: Structured Logging System.
/// INTJ Strategy: Quantifiable diagnostics without visual noise.
class LoggerService {
  static bool testMode = false;

  static final Logger _logger = Logger(
    printer: PrettyPrinter(
      methodCount: 0,
      dateTimeFormat: DateTimeFormat.onlyTimeAndSinceStart,
    ),
    level: Level.debug,
  );

  static void i(String message) {
    if (testMode) return;
    _logger.i('ℹ️ $message');
  }

  static void d(String message) {
    if (testMode) return;
    _logger.d('🐛 $message');
  }

  static void w(String message) {
    if (testMode) return;
    _logger.w('⚠️ $message');
  }

  static void e(String message, [dynamic error, StackTrace? stackTrace]) {
    if (testMode) return;
    _logger.e('🚨 $message', error: error, stackTrace: stackTrace);
  }

  static void v(String message) {
    if (testMode) return;
    _logger.t('🔍 $message'); // Trace
  }
}
