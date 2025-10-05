import 'package:flutter/material.dart';

const Color primaryColor = Color(0xFF4CAF50); // Green
const Color accentColor = Color(0xFF607D8B); // Blue Grey

// Dark Theme Colors
const Color surfaceColor = Color(0xFF212121); // Material dark surface
const Color backgroundColor = Color(0xFF000000); // Black
const Color errorColor = Color(0xFFCF6679); // Material dark error

const Color onPrimaryColor = Colors.white;
const Color onAccentColor = Colors.white;
const Color onSurfaceColor = Colors.white;
const Color onBackgroundColor = Colors.white;
const Color onErrorColor = Colors.black;

final ThemeData appTheme = ThemeData(
  useMaterial3: true,
  brightness: Brightness.dark,
  colorScheme: const ColorScheme(
    primary: primaryColor,
    secondary: accentColor,
    surface: surfaceColor,
    background: backgroundColor,
    error: errorColor,
    onPrimary: onPrimaryColor,
    onSecondary: onAccentColor,
    onSurface: onSurfaceColor,
    onBackground: onBackgroundColor,
    onError: onErrorColor,
    brightness: Brightness.dark,
  ),
  scaffoldBackgroundColor: backgroundColor,
  appBarTheme: const AppBarTheme(
    color: surfaceColor,
    titleTextStyle: TextStyle(color: onSurfaceColor, fontSize: 20, fontWeight: FontWeight.bold),
    iconTheme: IconThemeData(color: onSurfaceColor),
  ),
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: primaryColor,
      foregroundColor: onPrimaryColor,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
    ),
  ),
  outlinedButtonTheme: OutlinedButtonThemeData(
    style: OutlinedButton.styleFrom(
      foregroundColor: primaryColor,
      side: const BorderSide(color: primaryColor),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
    ),
  ),
  inputDecorationTheme: InputDecorationTheme(
    filled: true,
    fillColor: surfaceColor,
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(10),
      borderSide: BorderSide.none,
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(10),
      borderSide: const BorderSide(color: primaryColor, width: 2),
    ),
    labelStyle: TextStyle(color: onSurfaceColor.withOpacity(0.6)),
  ),
  textTheme: const TextTheme(
    titleLarge: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: onBackgroundColor),
    bodyMedium: TextStyle(fontSize: 16, color: onBackgroundColor),
  ),
  checkboxTheme: CheckboxThemeData(
    checkColor: MaterialStateProperty.all(onPrimaryColor),
    fillColor: MaterialStateProperty.all(primaryColor),
  ),
);
