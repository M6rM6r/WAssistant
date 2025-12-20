
import 'package:logger/logger.dart';

class LoggerService {
  static final Logger _logger = Logger(
    printer: PrettyPrinter(
      methodCount: 0,
      // Use DateTimeFormat instead of deprecated printTime
      dateTimeFormat: DateTimeFormat.onlyTimeAndSinceStart,
    ),
    // OCPD: Strict level control
    level: Level.debug, 
  );

  static void i(String message) {
    _logger.i('ℹ️ $message');
  }

  static void d(String message) {
    _logger.d('🐛 $message');
  }
  
  static void w(String message) {
    _logger.w('⚠️ $message');
  }

  static void e(String message, [dynamic error, StackTrace? stackTrace]) {
    _logger.e('🚨 $message', error: error, stackTrace: stackTrace);
  }
  
  static void v(String message) {
    _logger.t('🔍 $message'); // Trace/Verbose
  }
}
