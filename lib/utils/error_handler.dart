import 'package:flutter/material.dart';
import 'package:sentry_flutter/sentry_flutter.dart';
import 'package:wassistant/utils/logger_service.dart';

/// Centralized Error Handling logic.
/// OCPD: Ensures no error goes unnoticed and UI feedback is consistent.
class ErrorHandler {
  // Prevent instantiation
  ErrorHandler._();

  static Future<void> handleError(Object error, StackTrace stackTrace) async {
    LoggerService.e('Global Error Caught', error, stackTrace);
    if (Sentry.isEnabled) {
      await Sentry.captureException(error, stackTrace: stackTrace);
    }
  }

  static void showUIError(BuildContext context, String message) {
    // Ensure context is still valid before showing UI
    if (!context.mounted) return;

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Row(
          children: [
            const Icon(Icons.error_outline, color: Colors.white),
            const SizedBox(width: 10),
            Expanded(
              child: Text(
                message,
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
        backgroundColor: const Color(0xFFCF6679), // Consistent Error Red
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        margin: const EdgeInsets.all(16),
        action: SnackBarAction(
          label: 'DISMISS',
          textColor: Colors.white,
          onPressed: () => ScaffoldMessenger.of(context).hideCurrentSnackBar(),
        ),
      ),
    );
  }
}
