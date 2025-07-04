// Import necessary packages from Flutter material library.
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
// Import font_awesome_flutter for brand-specific icons like WhatsApp.
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

// FeatureButtons is a StatelessWidget because it doesn't manage its own state.
// It takes callback functions as parameters to notify the parent when a button is pressed.
class FeatureButtons extends StatelessWidget {
  // Callback function for when the "Generate QR Code" button is pressed.
  final VoidCallback onGenerateQrCode;
  // Callback function for when the "Generate Link" button is pressed.
  final VoidCallback onGenerateLink;
  // Callback function for when the "Open WhatsApp Chat" button is pressed.
  final AsyncCallback onOpenChat; // Changed to AsyncCallback for async function
  // Callback function for when the "Send Anonymous Message" button is pressed.
  final AsyncCallback onSendAnonymousMessage; // Changed to AsyncCallback for async function
  // Callback function to show a SnackBar message (used for placeholder features).
  final Function(String message, {bool isError}) onShowSnackBar; // Removed BuildContext

  // Constructor requires all callback functions to be provided.
  const FeatureButtons({
    super.key,
    required this.onGenerateQrCode,
    required this.onGenerateLink,
    required this.onOpenChat,
    required this.onSendAnonymousMessage,
    required this.onShowSnackBar,
  });

  @override
  Widget build(BuildContext context) {
    // Wrap widget arranges its children in a horizontal flow and wraps them to the next line
    // if there's not enough space. This is great for responsive button layouts.
    return Wrap(
      spacing: 15.0, // Horizontal spacing between buttons.
      runSpacing: 15.0, // Vertical spacing between rows of buttons when they wrap.
      alignment: WrapAlignment.center, // Centers the buttons horizontally.
      children: [
        // Button to generate a QR Code.
        SizedBox(
          width: 200, // Fixed width for consistent button size.
          height: 60, // Fixed height for consistent button size.
          child: ElevatedButton.icon(
            onPressed: onGenerateQrCode, // Call the provided callback when pressed.
            icon: const Icon(Icons.qr_code_2), // Material Design QR code icon.
            label: const Text('Generate QR Code'), // Button text.
          ),
        ),
        // Button to generate a WhatsApp Link.
        SizedBox(
          width: 200,
          height: 60,
          child: ElevatedButton.icon(
            onPressed: onGenerateLink, // Call the provided callback when pressed.
            icon: const Icon(Icons.link), // Material Design link icon.
            label: const Text('Generate Link'),
          ),
        ),
        // Button to open WhatsApp Chat directly.
        SizedBox(
          width: 200,
          height: 60,
          child: ElevatedButton.icon(
            onPressed: onOpenChat, // Call the provided callback when pressed.
            icon: const Icon(FontAwesomeIcons.whatsapp), // Font Awesome WhatsApp icon.
            label: const Text('Open WhatsApp Chat'),
          ),
        ),
        // Button to simulate sending an Anonymous Message.
        SizedBox(
          width: 200,
          height: 60,
          child: ElevatedButton.icon(
            onPressed: onSendAnonymousMessage, // Call the provided callback when pressed.
            icon: const Icon(Icons.privacy_tip), // Material Design privacy icon.
            label: const Text('Send Anonymous Msg'),
          ),
        ),
        // Placeholder button for a new feature.
        SizedBox(
          width: 200,
          height: 60,
          child: ElevatedButton.icon(
            onPressed: () {
              // Use the provided onShowSnackBar callback to show a message.
              onShowSnackBar('Another feature coming soon!', isError: true);
            },
            icon: const Icon(Icons.add_box), // Material Design add box icon.
            label: const Text('New Feature 1'),
          ),
        ),
        // Another placeholder button for a new feature.
        SizedBox(
          width: 200,
          height: 60,
          child: ElevatedButton.icon(
            onPressed: () {
              onShowSnackBar('Another feature coming soon!', isError: true);
            },
            icon: const Icon(Icons.settings), // Material Design settings icon.
            label: const Text('New Feature 2'),
          ),
        ),
      ],
    );
  }
}