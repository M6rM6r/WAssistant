// Import necessary packages from Flutter material library.
import 'package:flutter/material.dart';
// Import qr_flutter for displaying QR codes.
import 'package:qr_flutter/qr_flutter.dart';

// OutputDisplay is a StatelessWidget because it only displays data provided to it.
// It takes the output message and barcode data as parameters.
class OutputDisplay extends StatelessWidget {
  // The message to be displayed in the output field.
  final String outputMessage;
  // The data for the QR code, can be null if no QR code is generated.
  final String? barcodeData;

  // Constructor requires outputMessage and barcodeData to be provided.
  const OutputDisplay({
    super.key,
    required this.outputMessage,
    this.barcodeData, // barcodeData is optional (nullable).
  });

  @override
  Widget build(BuildContext context) {
    // Container is used to style the output field with a background, rounded corners, and shadow.
    return Container(
      padding: const EdgeInsets.all(20), // Padding inside the container.
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor, // Background color from the app's theme (dark grey).
        borderRadius: BorderRadius.circular(12), // Rounded corners for the container.
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.3), // Shadow color with some transparency.
            spreadRadius: 3, // How far the shadow spreads.
            blurRadius: 10, // How blurry the shadow is.
            offset: const Offset(0, 5), // Offset of the shadow (x, y).
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch, // Stretch children horizontally.
        children: [
          // Title for the output field.
          Text(
            'Output Field',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 20, color: Colors.tealAccent), // Use theme's titleLarge style.
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 20), // Vertical spacing.
          // Display the main output message. SelectableText allows users to copy the text.
          SelectableText(
            outputMessage, // The message passed from the parent.
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(fontSize: 18), // Use theme's bodyLarge style.
          ),
          // Conditionally display the QR code image only if barcodeData is not null and not empty.
          if (barcodeData != null && barcodeData!.isNotEmpty) ...[
            const SizedBox(height: 20), // Vertical spacing before the QR code.
            Center(
              // Center the QR code image.
              child: Container(
                padding: const EdgeInsets.all(10), // Padding around the QR code itself.
                decoration: BoxDecoration(
                  color: Colors.white, // QR code background should typically be white for readability.
                  borderRadius: BorderRadius.circular(8), // Rounded corners for the QR code's container.
                ),
                child: QrImageView(
                  data: barcodeData!, // The data to be encoded in the QR code.
                  version: QrVersions.auto, // Automatically determine the QR code version.
                  size: 200.0, // Size of the QR code image.
                  backgroundColor: Colors.white, // Explicitly white background for the QR code.
                  foregroundColor: Colors.black, // Explicitly black foreground for the QR code.
                  errorCorrectionLevel: QrErrorCorrectLevel.H, // High error correction level for robustness.
                ),
              ),
            ),
          ],
        ],
      ),
    );
  }
}