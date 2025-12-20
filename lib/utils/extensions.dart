import 'package:flutter/material.dart';

// OCPD: Extension Methods for Clean & readable code
// Reduces boilerplate in UI widgets.

extension ContextExtensions on BuildContext {
  // Theme Shortcuts
  ThemeData get theme => Theme.of(this);
  TextTheme get textTheme => theme.textTheme;
  ColorScheme get colorScheme => theme.colorScheme;

  // Size Shortcuts
  double get width => MediaQuery.of(this).size.width;
  double get height => MediaQuery.of(this).size.height;

  // Navigation Shortcuts
  void pop<T>([T? result]) => Navigator.pop(this, result);

  Future<T?> push<T>(Widget page) =>
      Navigator.push(this, MaterialPageRoute(builder: (_) => page));

  // Snackbar Shortcut
  void showSnackBar(String message, {Color? color}) {
    ScaffoldMessenger.of(this).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: color,
        behavior: SnackBarBehavior.floating,
      ),
    );
  }
}

extension StringExtensions on String {
  // Logic: Quick validation or formatting helpers
  bool get isValidPhoneNumber {
    final clean = replaceAll(RegExp('[^0-9]'), '');
    return clean.length >= 7 && clean.length <= 15;
  }

  String get capitalize {
    if (isEmpty) return this;
    return '${this[0].toUpperCase()}${substring(1)}';
  }
}
