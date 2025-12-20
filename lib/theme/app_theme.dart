import 'package:flutter/material.dart';

class AppTheme {
  static const Color _primarySeedColor = Color(
    0xFF075E54,
  ); // A classic WhatsApp-like green

  static ThemeData get lightTheme {
    return ThemeData(
      brightness: Brightness.light,
      colorScheme: ColorScheme.fromSeed(seedColor: _primarySeedColor),
      useMaterial3: true,
      scaffoldBackgroundColor: const Color(
        0xFFECE5DD,
      ), // WhatsApp-like light background
      cardColor: Colors.white,
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.grey[200],
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black87),
        titleTextStyle: const TextStyle(
          color: Colors.black87,
          fontSize: 20,
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }

  static ThemeData get darkTheme {
    return ThemeData(
      brightness: Brightness.dark,
      colorScheme: ColorScheme.fromSeed(
        seedColor: _primarySeedColor,
        brightness: Brightness.dark,
        primary: const Color(
          0xFF25D366,
        ), // Use the vibrant green for primary actions in dark mode
      ),
      useMaterial3: true,
      scaffoldBackgroundColor: const Color(0xFF121212),
      cardColor: const Color(0xFF1E1E1E),
      appBarTheme: const AppBarTheme(
        backgroundColor: Color(0xFF1F2C34),
        elevation: 0,
      ),
    );
  }
}
