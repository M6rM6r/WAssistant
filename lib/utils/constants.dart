import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

/// Centralized configuration for the WAssistant app.
/// OCPD NOTE: Constants are grouped logically for ease of maintenance.
class AppConstants {
  // Prevent instantiation
  AppConstants._();

  // --- Cyberpunk x WhatsApp Theme Colors ---
  static const Color darkBackground = Color(0xFF050505);
  static const Color darkSurface = Color(0xFF101D25);
  static const Color darkCard = Color(0xFF202C33);

  static const Color primaryTeal = Color(0xFF00A884);
  static const Color accentGreen = Color(0xFF00E676);
  static const Color alertRed = Color(0xFFCF6679);
  static const Color neonGlow = Color(0xFF00FF88);

  // Typography Colors
  static const Color textHighEmphasis = Color(0xFFE9EDEF);
  static const Color textMediumEmphasis = Color(0xFF8696A0);

  // --- App Metadata ---
  static const String appName = 'WAssistant';
  static const String appVersion = '1.4.1';

  // --- Error Messages ---
  static const String errorInvalidNumber = 'Error: Invalid number provided.';
  static const String errorLaunchFailed = 'Error: Could not launch WhatsApp.';

  // --- Backend API Configuration ---
  static String get apiBaseUrl {
    return dotenv.env['API_BASE_URL']?.trim().isNotEmpty ?? false
        ? dotenv.env['API_BASE_URL']!.trim()
        : 'https://api.wassistant.site';
  }

  // --- AdMob Configuration (Production IDs Integrated) ---
  // Publisher: pub-7083858358486869

  static const String androidBannerProdId =
      'ca-app-pub-7083858358486869/5812941671';
  static const String iosBannerProdId =
      'ca-app-pub-7083858358486869/5812941671'; // Using same ID as placeholder for iOS if not provided

  static const String androidBannerTestId =
      'ca-app-pub-3940256099942544/6300978111';
  static const String iosBannerTestId =
      'ca-app-pub-3940256099942544/2934735716';

  static String get androidBannerAdUnitId {
    try {
      return dotenv.env['ADMOB_BANNER_AD_UNIT_ID_ANDROID']?.trim().isNotEmpty ??
              false
          ? dotenv.env['ADMOB_BANNER_AD_UNIT_ID_ANDROID']!.trim()
          : androidBannerProdId;
    } catch (_) {
      return androidBannerTestId; // Use test ID if dotenv not loaded
    }
  }

  static String get iosBannerAdUnitId {
    try {
      return dotenv.env['ADMOB_BANNER_AD_UNIT_ID_IOS']?.trim().isNotEmpty ??
              false
          ? dotenv.env['ADMOB_BANNER_AD_UNIT_ID_IOS']!.trim()
          : iosBannerProdId;
    } catch (_) {
      return iosBannerTestId; // Use test ID if dotenv not loaded
    }
  }

  // --- URI & Network ---
  static const String whatsappWebUrl = 'web.whatsapp.com';
  static const String whatsappMobileHost = 'wa.me';
}
