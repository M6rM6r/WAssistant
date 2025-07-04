// Import necessary Flutter packages.
import 'package:flutter/material.dart';
import 'package:provider/provider.dart'; // For accessing the provider.

// Import the custom widgets that this page uses.
import '../widgets/ad_space.dart';
import '../widgets/feature_buttons.dart';
import '../widgets/output_display.dart';
import '../widgets/whatsapp_input_field.dart';

// Import the WhatsAppToolProvider, located one directory up (../).
import '../providers/whatsapp_tool_provider.dart';

// WhatsAppToolHomePage is now a StatefulWidget because it manages its own
// TextEditingController and the _showSnackBar function.
class WhatsAppToolHomePage extends StatefulWidget {
  const WhatsAppToolHomePage({super.key}); // Constructor.

  @override
  // createState creates the mutable state for this widget.
  State<WhatsAppToolHomePage> createState() => _WhatsAppToolHomePageState();
}

// _WhatsAppToolHomePageState holds the state for WhatsAppToolHomePage.
class _WhatsAppToolHomePageState extends State<WhatsAppToolHomePage> {
  // TextEditingController still lives here because it's closely tied to this widget's lifecycle
  // and direct interaction with the TextField.
  final TextEditingController _whatsAppNumberController = TextEditingController();

  @override
  // dispose is called when this State object will be removed from the tree permanently.
  // It's crucial to dispose of controllers to prevent memory leaks.
  void dispose() {
    _whatsAppNumberController.dispose(); // Dispose the text editing controller.
    super.dispose(); // Call the superclass's dispose method.
  }

  // This function remains here because it interacts with the UI context (ScaffoldMessenger)
  // and is not directly part of the core business logic in the provider.
  void _showSnackBar(String message, {bool isError = false}) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message), // The text content of the SnackBar.
        backgroundColor: isError ? Colors.red[700] : Colors.green[700], // Red for error, green for success.
        duration: const Duration(seconds: 3), // How long the SnackBar is visible.
        behavior: SnackBarBehavior.floating, // Makes the SnackBar float above content.
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // Scaffold provides the basic visual structure for a Material Design app.
    return Scaffold(
      // AppBar displays a title and other common actions at the top of the screen.
      appBar: AppBar(
        title: const Text(
          'WAssisTant',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 24,
            letterSpacing: 2.0,
          ),
        ),
        centerTitle: true, // Centers the title in the app bar.
        backgroundColor: Colors.grey[900], // Dark background for the app bar.
        elevation: 5, // Adds a shadow below the app bar.
      ),
      // Body of the Scaffold contains the main content of the page, arranged in a Row.
      body: Row(
        children: [
          // Left AD placeholder column, using the custom AdSpaceWidget.
          const Expanded(
            flex: 1, // Takes 1 part of the available horizontal space.
            child: AdSpaceWidget(isRotated: true), // Pass true to rotate text for left ad.
          ),
          // Main content area, which is scrollable and contains the input, buttons, and output.
          Expanded(
            flex: 4, // Takes 4 parts of the available horizontal space (wider than AD columns).
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(30.0), // Padding around the content.
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center, // Center content vertically within the column.
                crossAxisAlignment: CrossAxisAlignment.stretch, // Stretch children horizontally to fill space.
                children: [
                  // Title for the input field section.
                  Text(
                    'Enter WhatsApp Number',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 22), // Use theme's titleLarge style.
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20), // Vertical spacing.

                  // WhatsApp Number Input Field, using the custom WhatsAppInputField widget.
                  WhatsAppInputField(
                    controller: _whatsAppNumberController, // Pass the controller.
                  ),
                  const SizedBox(height: 40), // Vertical spacing.

                  // Feature Buttons, using the custom FeatureButtons widget.
                  // We use `context.read<WhatsAppToolProvider>()` to access the provider's methods
                  // without causing this widget to rebuild when the provider's data changes.
                  // We only need to *call* the methods, not react to their state.
                  FeatureButtons(
                    onGenerateQrCode: () => context.read<WhatsAppToolProvider>().generateBarcodeForChat(_whatsAppNumberController.text.trim()),
                    onGenerateLink: () => context.read<WhatsAppToolProvider>().generateChatLink(_whatsAppNumberController.text.trim()),
                    onOpenChat: () async {
                      // We need to await the result and use it for the SnackBar.
                      final result = await context.read<WhatsAppToolProvider>().openWhatsAppChat(_whatsAppNumberController.text.trim());
                      // Check if the result string indicates an error (as designed in the provider).
                      if (result.startsWith('Error')) {
                        _showSnackBar(result.substring(7), isError: true); // Remove "Error: " prefix for cleaner message.
                      } else {
                        _showSnackBar(result); // Show success message directly from provider.
                      }
                    },
                    onSendAnonymousMessage: () async {
                      final result = await context.read<WhatsAppToolProvider>().sendAnonymousMessage(_whatsAppNumberController.text.trim());
                      if (result.startsWith('Error')) {
                        _showSnackBar(result.substring(7), isError: true);
                      } else {
                        _showSnackBar(result);
                      }
                    },
                    onShowSnackBar: _showSnackBar, // Pass the local snackbar function.
                  ),
                  const SizedBox(height: 50), // Vertical spacing.

                  // Output Field Container, using the custom OutputDisplay widget.
                  // We use `Consumer<WhatsAppToolProvider>` to listen for changes
                  // in the provider and rebuild this widget when the data changes.
                  Consumer<WhatsAppToolProvider>(
                    builder: (context, provider, child) {
                      return OutputDisplay(
                        outputMessage: provider.outputMessage, // Get message from provider.
                        barcodeData: provider.barcodeData, // Get barcode data from provider.
                      );
                    },
                  ),
                  const SizedBox(height: 30), // Vertical spacing at the bottom.
                ],
              ),
            ),
          ),
          // Right AD placeholder column, using the custom AdSpaceWidget.
          const Expanded(
            flex: 1, // Takes 1 part of the available horizontal space.
            child: AdSpaceWidget(isRotated: false), // Pass false for right ad (no rotation needed for right).
          ),
        ],
      ),
    );
  }
}