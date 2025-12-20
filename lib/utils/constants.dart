import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

/// Centralized configuration for the Wassistant app.
/// OCPD NOTE: Constants are grouped logically for ease of maintenance.
class AppConstants {
  // Prevent instantiation
  AppConstants._();

  // --- Cyberpunk x WhatsApp Theme Colors ---

  // Backgrounds: Deep blacks for OLED efficiency and "Hacker" vibe.
  static const Color darkBackground = Color(0xFF050505);
  static const Color darkSurface = Color(
    0xFF101D25,
  ); // WhatsApp Web Dark Mode Tone
  static const Color darkCard = Color(0xFF202C33); // Card background

  // Accents: High contrast neons for visibility and style.
  static const Color primaryTeal = Color(0xFF00A884); // Classic WA Teal
  static const Color accentGreen = Color(0xFF00E676); // Neon Green (Actionable)
  static const Color alertRed = Color(0xFFCF6679); // Error/Destructive
  static const Color neonGlow = Color(0xFF00FF88); // For shadow effects

  // Typography Colors
  static const Color textHighEmphasis = Color(0xFFE9EDEF);
  static const Color textMediumEmphasis = Color(0xFF8696A0); // Muted text

  // --- App Metadata ---
  static const String appName = 'WAssistant';
  static const String appVersion = '1.4.1';

  // --- Error Messages ---
  static const String errorInvalidNumber = 'Error: Invalid number provided.';
  static const String errorLaunchFailed = 'Error: Could not launch WhatsApp.';

  // --- AdMob Configuration ---
  // Test IDs fall back when env vars are missing. Set in .env (see .env.example):
  // ADMOB_APP_ID_ANDROID, ADMOB_BANNER_AD_UNIT_ID_ANDROID, ADMOB_APP_ID_IOS, ADMOB_BANNER_AD_UNIT_ID_IOS
  static const String androidBannerTestId =
      'ca-app-pub-3940256099942544/6300978111';
  static const String iosBannerTestId =
      'ca-app-pub-3940256099942544/2934735716';

  static String get androidBannerAdUnitId =>
      dotenv.env['ADMOB_BANNER_AD_UNIT_ID_ANDROID']?.trim().isNotEmpty ?? false
          ? dotenv.env['ADMOB_BANNER_AD_UNIT_ID_ANDROID']!.trim()
          : androidBannerTestId;

  static String get iosBannerAdUnitId =>
      dotenv.env['ADMOB_BANNER_AD_UNIT_ID_IOS']?.trim().isNotEmpty ?? false
          ? dotenv.env['ADMOB_BANNER_AD_UNIT_ID_IOS']!.trim()
          : iosBannerTestId;

  // --- URI & Network ---
  static const String whatsappWebUrl = 'web.whatsapp.com';
  static const String whatsappMobileHost = 'wa.me';
}
