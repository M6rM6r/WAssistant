import 'package:flutter/material.dart';

class ThemeProvider with ChangeNotifier {
  // Always Dark Mode
  ThemeMode get themeMode => ThemeMode.dark;

  // Getter mostly for legacy compatibility if other widgets check it
  bool get isDarkMode => true;

  // No-op for toggling, or we can just ignore it
  void toggleTheme() {
    // Feature disabled: Always dark mode.
  }
}
