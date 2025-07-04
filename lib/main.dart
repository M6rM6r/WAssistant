// Import necessary packages from Flutter material library.
import 'package:flutter/material.dart';
// Import the provider package.
import 'package:provider/provider.dart';

// Import the new WhatsAppToolProvider.
import 'providers/whatsapp_tool_provider.dart';
// Import the WhatsAppToolHomePage (now located in the 'pages' folder).
import 'pages/whatsapp_tool_home_page.dart';

// The main entry point of the Flutter application.
void main() {
  // runApp takes a Widget and makes it the root of the widget tree.
  // We wrap the entire app with ChangeNotifierProvider to make WhatsAppToolProvider
  // available to all widgets below it in the widget tree.
  runApp(
    ChangeNotifierProvider(
      // The `create` method tells Provider how to create an instance of our provider.
      // This instance will be managed by Provider and disposed when no longer needed.
      create: (context) => WhatsAppToolProvider(),
      child: const WhatsAppToolApp(), // The child widget tree that can access the provider.
    ),
  );
}

// WhatsAppToolApp is a StatelessWidget, meaning its properties don't change over time.
// It sets up the basic material design structure and the dark theme for the app.
class WhatsAppToolApp extends StatelessWidget {
  const WhatsAppToolApp({super.key}); // Constructor with a key for widget identification.

  @override
  Widget build(BuildContext context) {
    // MaterialApp is a convenient widget that wraps a number of widgets that are
    // commonly required for material design applications.
    return MaterialApp(
      title: 'WAssisTant', // The title of the application shown in the browser tab.
      // Define the theme for the entire application.
      theme: ThemeData(
        brightness: Brightness.dark, // Set the overall theme to dark mode.
        primarySwatch: Colors.teal, // Define a primary color swatch for general UI elements.
        hintColor: Colors.tealAccent, // Color for hints in input fields.
        canvasColor: Colors.grey[900], // Background color of the Scaffold (main screen background).
        cardColor: Colors.grey[850], // Background color for cards and containers like the output field.
        textTheme: const TextTheme(
          bodyLarge: TextStyle(color: Colors.white70), // Default text color for large body text.
          bodyMedium: TextStyle(color: Colors.white60), // Default text color for medium body text.
          titleLarge: TextStyle(color: Colors.white), // Color for app bar titles and main headings.
        ),
        inputDecorationTheme: InputDecorationTheme(
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8.0), // Rounded corners for input field borders.
            borderSide: const BorderSide(color: Colors.teal), // Default border color.
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8.0),
            borderSide: const BorderSide(color: Colors.tealAccent), // Border color when the input is enabled.
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8.0),
            borderSide: const BorderSide(color: Colors.white, width: 2.0), // Border color when the input is focused.
          ),
          labelStyle: const TextStyle(color: Colors.white70), // Label text color.
          hintStyle: const TextStyle(color: Colors.grey), // Hint text color.
          fillColor: Colors.grey[800], // Background fill color for input fields.
          filled: true, // Make sure the fill color is applied.
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.teal, // Background color of elevated buttons.
            foregroundColor: Colors.white, // Text/icon color of elevated buttons.
            padding: const EdgeInsets.symmetric(vertical: 15, horizontal: 20), // Padding inside buttons.
            textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold), // Text style for button labels.
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8.0), // Rounded corners for buttons.
            ),
          ),
        ),
        // VisualDensity adapts the UI to different platforms (desktop, web, mobile) for consistent look.
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      // Set WhatsAppToolHomePage as the initial screen of the app.
      // It's now imported from the 'pages' folder.
      home: const WhatsAppToolHomePage(),
    );
  }
}