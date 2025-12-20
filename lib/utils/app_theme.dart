import 'package:flutter/material.dart';
import 'package:wassistant/utils/constants.dart';

/// Centralized Theme Configuration.
/// Ensures consistent Cyberpunk x WhatsApp styling across the entire app.
class AppTheme {
  AppTheme._();

  static ThemeData get darkTheme {
    return ThemeData(
      brightness: Brightness.dark,
      scaffoldBackgroundColor: AppConstants.darkBackground,
      colorScheme: const ColorScheme.dark(
        primary: AppConstants.primaryTeal,
        secondary: AppConstants.accentGreen,
        surface: AppConstants.darkSurface,
        onSurface: AppConstants.textHighEmphasis,
      ),
      
      snackBarTheme: SnackBarThemeData(
        backgroundColor: AppConstants.darkSurface,
        contentTextStyle: const TextStyle(color: AppConstants.textHighEmphasis),
        actionTextColor: AppConstants.accentGreen,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
          side: BorderSide(
            color: AppConstants.accentGreen.withValues(alpha: 0.3),
          ),
        ),
        elevation: 4,
      ),
      
      appBarTheme: const AppBarTheme(
        backgroundColor: AppConstants.darkBackground,
        foregroundColor: AppConstants.textHighEmphasis,
        elevation: 0,
        centerTitle: true,
        titleTextStyle: TextStyle(
          color: AppConstants.accentGreen,
          fontSize: 22,
          fontWeight: FontWeight.bold,
          letterSpacing: 1.2,
        ),
      ),
      
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: AppConstants.primaryTeal,
          foregroundColor: Colors.white,
          elevation: 8,
          shadowColor: const Color(0x6600E676),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          textStyle: const TextStyle(
            fontWeight: FontWeight.bold,
            letterSpacing: 1,
          ),
        ),
      ),
      
      cardColor: AppConstants.darkCard,
      
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppConstants.darkSurface,
        labelStyle: const TextStyle(color: AppConstants.textMediumEmphasis),
        hintStyle: const TextStyle(color: Colors.white24),
        isDense: true,
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide.none,
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Colors.white10),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: AppConstants.accentGreen, width: 2),
        ),
        prefixIconColor: AppConstants.textMediumEmphasis,
      ),
      
      textSelectionTheme: const TextSelectionThemeData(
        cursorColor: AppConstants.accentGreen,
        selectionColor: Color(0x6600E676),
        selectionHandleColor: AppConstants.accentGreen,
      ), dialogTheme: const DialogThemeData(backgroundColor: AppConstants.darkCard),
    );
  }
}
