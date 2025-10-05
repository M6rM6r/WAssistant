import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart'; // Import for HapticFeedback
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class FeatureButtons extends StatelessWidget {
  final bool isLoading;
  final VoidCallback onGenerateQrCode;
  final VoidCallback onGenerateLink;
  final AsyncCallback onOpenChat;
  final AsyncCallback onOpenChatWeb;
  final VoidCallback onGenerateVCard;
  final Function(String message, {bool isError}) onShowSnackBar;
  final VoidCallback onClearAll;
  final VoidCallback onCopyLink;
  final VoidCallback onDownloadQrCode;

  const FeatureButtons({
    super.key,
    required this.isLoading,
    required this.onGenerateQrCode,
    required this.onGenerateLink,
    required this.onOpenChat,
    required this.onOpenChatWeb,
    required this.onGenerateVCard,
    required this.onShowSnackBar,
    required this.onClearAll,
    required this.onCopyLink,
    required this.onDownloadQrCode,
  });

  @override
  Widget build(BuildContext context) {
    // Common onPressed handler
    void handlePress(VoidCallback callback) {
      if (isLoading) return;
      HapticFeedback.mediumImpact();
      callback();
    }

    // Helper for consistent button styling for primary actions
    Widget buildButton({
      required VoidCallback onPressed,
      required IconData icon,
      required String label,
    }) {
      return ElevatedButton.icon(
        onPressed: () => handlePress(onPressed),
        icon: Icon(icon),
        label: FittedBox(
          child: Text(label),
        ),
        style: ElevatedButton.styleFrom(
          // Dim the button when loading
          backgroundColor: isLoading ? Colors.grey : Theme.of(context).colorScheme.primary,
        ),
      );
    }

    return Column(
      children: [
        Wrap(
          spacing: 20,
          runSpacing: 20,
          alignment: WrapAlignment.center,
          children: [
            buildButton(
              onPressed: onOpenChat,
              icon: FontAwesomeIcons.whatsapp,
              label: 'Open Chat',
            ),
            buildButton(
              onPressed: onOpenChatWeb,
              icon: FontAwesomeIcons.globe,
              label: 'Open in Web',
            ),
            buildButton(
              onPressed: onGenerateLink,
              icon: Icons.link,
              label: 'Generate Link',
            ),
            buildButton(
              onPressed: onGenerateQrCode,
              icon: Icons.qr_code,
              label: 'Generate QR Code',
            ),
            buildButton(
              onPressed: onGenerateVCard,
              icon: Icons.contact_mail,
              label: 'Generate vCard',
            ),
          ],
        ),
        const SizedBox(height: 20), // Spacing between the rows
        Wrap(
          spacing: 20,
          runSpacing: 20,
          alignment: WrapAlignment.center,
          children: [
            // "Copy Link" as an OutlinedButton for a secondary look
            Flexible(
              child: OutlinedButton.icon(
                onPressed: () => handlePress(onCopyLink),
                icon: const Icon(Icons.copy),
                label: const Text('Copy Link'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: isLoading ? Colors.grey : Theme.of(context).colorScheme.primary,
                  side: BorderSide(color: isLoading ? Colors.grey : Theme.of(context).colorScheme.primary),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
            ),
            // "Download QR" button
            Flexible(
              child: OutlinedButton.icon(
                onPressed: () => handlePress(onDownloadQrCode),
                icon: const Icon(Icons.download),
                label: const Text('Download QR'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: isLoading ? Colors.grey : Theme.of(context).colorScheme.primary,
                  side: BorderSide(color: isLoading ? Colors.grey : Theme.of(context).colorScheme.primary),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
            ),
            // "Clear All" with a red background for a destructive action
            Expanded(
              child: ElevatedButton.icon(
                onPressed: () => handlePress(onClearAll),
                icon: const Icon(Icons.clear_all),
                label: const Text('Clear All'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: isLoading ? Colors.grey : Colors.red[700],
                  foregroundColor: Colors.white,
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
