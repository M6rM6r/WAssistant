import 'package:flutter/material.dart';

// Helper function to create a MaterialColor from a single Color
MaterialColor createMaterialColor(Color color) {
  List strengths = <double>[.05];
  Map<int, Color> swatch = {};
  final int r = color.red, g = color.green, b = color.blue;

  for (int i = 1; i < 10; i++) {
    strengths.add(0.1 * i);
  }
  strengths.forEach((strength) {
    final double ds = 0.5 - strength;
    swatch[(strength * 1000).round()] = Color.fromRGBO(
      r + ((ds < 0 ? r : (255 - r)) * ds).round(),
      g + ((ds < 0 ? g : (255 - g)) * ds).round(),
      b + ((ds < 0 ? b : (255 - b)) * ds).round(),
      1,
    );
  });
  return MaterialColor(color.value, swatch);
}

// Define your custom green color privately
final MaterialColor _customGreen = createMaterialColor(Colors.green[500]!);

// Export the final theme data
final ThemeData appTheme = ThemeData(
  // Use our custom green as the primary color swatch
  primarySwatch: _customGreen,
  // Set overall brightness for a dark theme
  brightness: Brightness.dark,
  // Define the color scheme for a modern look
  colorScheme: ColorScheme.dark(
    primary: _customGreen, // Your main accent color
    onPrimary: Colors.black, // Text/icons on primary color background
    secondary: _customGreen, // Secondary accent color
    onSecondary: Colors.black,
    surface: Colors.black, // Overall app background
    onSurface: Colors.white, // Text color on surfaces
  ),
  // Text Theme
  textTheme: const TextTheme(
    titleLarge: TextStyle(color: Colors.white),
    bodyLarge: TextStyle(color: Colors.white),
    bodyMedium: TextStyle(color: Colors.white70),
  ),
  // Elevated Button Theme for global button styling
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      foregroundColor: Colors.black, // Set button text/icon color to black
      backgroundColor: _customGreen, // Set button background color to your primary green
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      textStyle: const TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.bold,
      ),
    ),
  ),
  // Input Decoration Theme for global input field styling
  inputDecorationTheme: InputDecorationTheme(
    filled: true,
    fillColor: Colors.grey[800], // Dark background for input fields
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(12),
      borderSide: BorderSide.none, // No border by default
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(12),
      borderSide: BorderSide(color: Colors.grey[700]!, width: 1.0), // Grey border when enabled
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(12),
      borderSide: BorderSide(color: _customGreen, width: 2.0), // Green border when focused
    ),
    labelStyle: TextStyle(color: Colors.grey[400]), // Label text color
    hintStyle: TextStyle(color: Colors.grey[500]), // Hint text color
    prefixIconColor: Colors.grey[400], // Icon color in text field
  ),
);
