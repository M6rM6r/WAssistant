import 'package:flutter/material.dart';
import 'package:wassistant/utils/constants.dart';

/// Centralized Theme Configuration.
/// Ensures consistent Cyberpunk x WhatsApp styling across the entire app.
class AppTheme {
  AppTheme._();

  // --- Border Radius Constants ---
  static const double radiusSmall = 8.0;
  static const double radiusMedium = 12.0;
  static const double radiusLarge = 16.0;
  static const double radiusXLarge = 24.0;

  // --- Animation Durations ---
  static const Duration animFast = Duration(milliseconds: 150);
  static const Duration animMedium = Duration(milliseconds: 300);
  static const Duration animSlow = Duration(milliseconds: 500);

  static ThemeData get darkTheme {
    return ThemeData(
      brightness: Brightness.dark,
      scaffoldBackgroundColor: AppConstants.darkBackground,
      useMaterial3: true,

      // --- Color Scheme ---
      colorScheme: const ColorScheme.dark(
        primary: AppConstants.primaryTeal,
        onPrimary: Colors.white,
        secondary: AppConstants.accentGreen,
        onSecondary: Colors.black,
        surface: AppConstants.darkSurface,
        onSurface: AppConstants.textHighEmphasis,
        surfaceContainerHighest: AppConstants.darkCard,
        error: AppConstants.alertRed,
        onError: Colors.white,
      ),

      // --- Typography ---
      textTheme: _buildTextTheme(),

      // --- AppBar ---
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
        iconTheme: IconThemeData(color: AppConstants.textHighEmphasis, size: 24),
        actionsIconTheme: IconThemeData(color: AppConstants.textHighEmphasis, size: 24),
      ),

      // --- Cards ---
      cardTheme: CardThemeData(
        color: AppConstants.darkCard,
        elevation: 4,
        shadowColor: Colors.black.withValues(alpha: 0.3),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusLarge)),
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      ),

      // --- Buttons ---
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: AppConstants.primaryTeal,
          foregroundColor: Colors.white,
          elevation: 8,
          shadowColor: AppConstants.accentGreen.withValues(alpha: 0.4),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusMedium)),
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
          textStyle: const TextStyle(fontWeight: FontWeight.bold, letterSpacing: 0.5, fontSize: 14),
        ),
      ),

      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          foregroundColor: AppConstants.accentGreen,
          side: BorderSide(color: AppConstants.accentGreen.withValues(alpha: 0.5), width: 1.5),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusMedium)),
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
          textStyle: const TextStyle(fontWeight: FontWeight.w600, letterSpacing: 0.5, fontSize: 14),
        ),
      ),

      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          foregroundColor: AppConstants.accentGreen,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusSmall)),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          textStyle: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14),
        ),
      ),

      iconButtonTheme: IconButtonThemeData(
        style: IconButton.styleFrom(
          foregroundColor: AppConstants.textHighEmphasis,
          backgroundColor: Colors.transparent,
          hoverColor: AppConstants.accentGreen.withValues(alpha: 0.1),
        ),
      ),

      // --- Input Fields ---
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppConstants.darkSurface,
        labelStyle: const TextStyle(
          color: AppConstants.textMediumEmphasis,
          fontSize: 14,
          fontWeight: FontWeight.w500,
        ),
        hintStyle: const TextStyle(color: Colors.white24, fontSize: 14),
        isDense: true,
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusMedium),
          borderSide: BorderSide.none,
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusMedium),
          borderSide: const BorderSide(color: Colors.white10, width: 1),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusMedium),
          borderSide: const BorderSide(color: AppConstants.accentGreen, width: 2),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusMedium),
          borderSide: const BorderSide(color: AppConstants.alertRed, width: 1),
        ),
        focusedErrorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusMedium),
          borderSide: const BorderSide(color: AppConstants.alertRed, width: 2),
        ),
        prefixIconColor: AppConstants.textMediumEmphasis,
        suffixIconColor: AppConstants.textMediumEmphasis,
        helperStyle: const TextStyle(color: AppConstants.textMediumEmphasis, fontSize: 12),
        errorStyle: const TextStyle(
          color: AppConstants.alertRed,
          fontSize: 12,
          fontWeight: FontWeight.w500,
        ),
      ),

      // --- List Tiles ---
      listTileTheme: ListTileThemeData(
        tileColor: Colors.transparent,
        selectedTileColor: AppConstants.accentGreen.withValues(alpha: 0.1),
        iconColor: AppConstants.textMediumEmphasis,
        textColor: AppConstants.textHighEmphasis,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusMedium)),
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        minLeadingWidth: 24,
      ),

      // --- Dividers ---
      dividerTheme: const DividerThemeData(
        color: Colors.white10,
        thickness: 1,
        indent: 16,
        endIndent: 16,
        space: 16,
      ),

      // --- SnackBar ---
      snackBarTheme: SnackBarThemeData(
        backgroundColor: AppConstants.darkCard,
        contentTextStyle: const TextStyle(
          color: AppConstants.textHighEmphasis,
          fontSize: 14,
          fontWeight: FontWeight.w500,
        ),
        actionTextColor: AppConstants.accentGreen,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(radiusMedium),
          side: BorderSide(color: AppConstants.accentGreen.withValues(alpha: 0.3)),
        ),
        elevation: 8,
        insetPadding: const EdgeInsets.all(16),
      ),

      // --- Dialogs ---
      dialogTheme: DialogThemeData(
        backgroundColor: AppConstants.darkCard,
        elevation: 16,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusLarge)),
        titleTextStyle: const TextStyle(
          color: AppConstants.textHighEmphasis,
          fontSize: 20,
          fontWeight: FontWeight.bold,
        ),
        contentTextStyle: const TextStyle(color: AppConstants.textMediumEmphasis, fontSize: 14),
      ),

      // --- TabBar ---
      tabBarTheme: TabBarThemeData(
        indicatorColor: AppConstants.accentGreen,
        indicatorSize: TabBarIndicatorSize.tab,
        labelColor: AppConstants.accentGreen,
        unselectedLabelColor: AppConstants.textMediumEmphasis,
        labelStyle: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14),
        unselectedLabelStyle: const TextStyle(fontWeight: FontWeight.w500, fontSize: 14),
        indicator: UnderlineTabIndicator(
          borderSide: const BorderSide(color: AppConstants.accentGreen, width: 3),
          insets: const EdgeInsets.symmetric(horizontal: 48),
        ),
      ),

      // --- Bottom Sheets ---
      bottomSheetTheme: BottomSheetThemeData(
        backgroundColor: AppConstants.darkCard,
        elevation: 16,
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(top: Radius.circular(radiusLarge)),
        ),
        clipBehavior: Clip.antiAlias,
      ),

      // --- Drawer ---
      drawerTheme: const DrawerThemeData(
        backgroundColor: AppConstants.darkBackground,
        elevation: 16,
        scrimColor: Colors.black54,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.horizontal(right: Radius.circular(radiusLarge)),
        ),
      ),

      // --- Chips ---
      chipTheme: ChipThemeData(
        backgroundColor: AppConstants.darkSurface,
        selectedColor: AppConstants.accentGreen.withValues(alpha: 0.2),
        labelStyle: const TextStyle(
          color: AppConstants.textHighEmphasis,
          fontSize: 12,
          fontWeight: FontWeight.w500,
        ),
        secondaryLabelStyle: TextStyle(
          color: AppConstants.accentGreen,
          fontSize: 12,
          fontWeight: FontWeight.w600,
        ),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusXLarge)),
        side: const BorderSide(color: Colors.white10),
      ),

      // --- Floating Action Button ---
      floatingActionButtonTheme: FloatingActionButtonThemeData(
        backgroundColor: AppConstants.accentGreen,
        foregroundColor: Colors.black,
        elevation: 8,
        highlightElevation: 12,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusXLarge)),
        sizeConstraints: const BoxConstraints.tightFor(width: 56, height: 56),
      ),

      // --- Progress Indicators ---
      progressIndicatorTheme: const ProgressIndicatorThemeData(
        color: AppConstants.accentGreen,
        linearTrackColor: Colors.white10,
        circularTrackColor: Colors.white10,
        linearMinHeight: 4,
      ),

      // --- Text Selection ---
      textSelectionTheme: const TextSelectionThemeData(
        cursorColor: AppConstants.accentGreen,
        selectionColor: Color(0x6600E676),
        selectionHandleColor: AppConstants.accentGreen,
      ),

      // --- Tooltip ---
      tooltipTheme: TooltipThemeData(
        decoration: BoxDecoration(
          color: AppConstants.darkCard,
          borderRadius: BorderRadius.circular(radiusSmall),
          border: Border.all(color: Colors.white10),
        ),
        textStyle: const TextStyle(color: AppConstants.textHighEmphasis, fontSize: 12),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        preferBelow: true,
        waitDuration: const Duration(milliseconds: 500),
        showDuration: const Duration(seconds: 2),
      ),

      // --- Page Transitions ---
      pageTransitionsTheme: const PageTransitionsTheme(
        builders: {
          TargetPlatform.android: ZoomPageTransitionsBuilder(),
          TargetPlatform.iOS: CupertinoPageTransitionsBuilder(),
        },
      ),
    );
  }

  /// Build comprehensive text theme
  static TextTheme _buildTextTheme() {
    return const TextTheme(
      displayLarge: TextStyle(
        fontSize: 32,
        fontWeight: FontWeight.bold,
        color: AppConstants.textHighEmphasis,
        letterSpacing: -0.5,
      ),
      displayMedium: TextStyle(
        fontSize: 28,
        fontWeight: FontWeight.bold,
        color: AppConstants.textHighEmphasis,
        letterSpacing: -0.5,
      ),
      displaySmall: TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.bold,
        color: AppConstants.textHighEmphasis,
      ),
      headlineLarge: TextStyle(
        fontSize: 22,
        fontWeight: FontWeight.bold,
        color: AppConstants.textHighEmphasis,
      ),
      headlineMedium: TextStyle(
        fontSize: 20,
        fontWeight: FontWeight.w600,
        color: AppConstants.textHighEmphasis,
      ),
      headlineSmall: TextStyle(
        fontSize: 18,
        fontWeight: FontWeight.w600,
        color: AppConstants.textHighEmphasis,
      ),
      titleLarge: TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.w600,
        color: AppConstants.textHighEmphasis,
      ),
      titleMedium: TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.w600,
        color: AppConstants.textHighEmphasis,
      ),
      titleSmall: TextStyle(
        fontSize: 12,
        fontWeight: FontWeight.w600,
        color: AppConstants.textMediumEmphasis,
      ),
      bodyLarge: TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.normal,
        color: AppConstants.textHighEmphasis,
        height: 1.5,
      ),
      bodyMedium: TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.normal,
        color: AppConstants.textHighEmphasis,
        height: 1.5,
      ),
      bodySmall: TextStyle(
        fontSize: 12,
        fontWeight: FontWeight.normal,
        color: AppConstants.textMediumEmphasis,
        height: 1.4,
      ),
      labelLarge: TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.w600,
        color: AppConstants.accentGreen,
      ),
      labelMedium: TextStyle(
        fontSize: 12,
        fontWeight: FontWeight.w500,
        color: AppConstants.accentGreen,
      ),
      labelSmall: TextStyle(
        fontSize: 11,
        fontWeight: FontWeight.w500,
        color: AppConstants.textMediumEmphasis,
        letterSpacing: 0.5,
      ),
    );
  }
}
