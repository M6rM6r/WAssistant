import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

class OutputDisplay extends StatelessWidget {
  final String outputMessage;
  final String? barcodeData;

  const OutputDisplay({
    super.key,
    required this.outputMessage,
    this.barcodeData,
  });

  @override
  Widget build(BuildContext context) {
    // Check if the display is in its initial, empty state.
    final bool isInitialState = barcodeData == null &&
        outputMessage == 'Your generated output will appear here.';

    return Container(
      padding: const EdgeInsets.all(20.0),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surface,
        borderRadius: BorderRadius.circular(15.0),
        border: Border.all(
          color: Theme.of(context).colorScheme.primary,
          width: 2.0,
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            spreadRadius: 3,
            blurRadius: 7,
            offset: const Offset(0, 3),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Output Field',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 20),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 15),
          // If it's the initial state, show a welcome message.
          if (isInitialState)
            Column(
              children: [
                const SizedBox(height: 20),
                Icon(
                  Icons.touch_app_outlined,
                  size: 60,
                  color: Colors.grey[700],
                ),
                const SizedBox(height: 20),
                Text(
                  'Enter a number and select an option to see the magic happen!',
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        color: Colors.grey[500],
                        fontStyle: FontStyle.italic,
                      ),
                ),
                const SizedBox(height: 20),
              ],
            )
          // Otherwise, show the generated output.
          else ...[
            Text(
              outputMessage,
              style: Theme.of(context).textTheme.bodyMedium,
              textAlign: TextAlign.center,
            ),
            if (barcodeData != null && barcodeData!.isNotEmpty) ...[
              const SizedBox(height: 20),
              Center(
                child: QrImageView(
                  data: barcodeData!,
                  version: QrVersions.auto,
                  size: 150.0,
                  backgroundColor: Colors.white,
                  foregroundColor: Colors.black,
                  errorStateBuilder: (cxt, err) {
                    return const Center(
                      child: Text(
                        "Uh oh! Something went wrong :(",
                        textAlign: TextAlign.center,
                      ),
                    );
                  },
                ),
              ),
            ],
          ]
        ],
      ),
    );
  }
}
