import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';

class FeatureButtons extends StatelessWidget {
  const FeatureButtons({
    required this.phoneController,
    required this.messageController,
    required this.countryCode,
    this.onValidate,
    super.key,
  });

  final TextEditingController phoneController;
  final TextEditingController messageController;
  final String countryCode;
  final bool Function()? onValidate;

  String _getFormattedNumber() {
    final raw = phoneController.text.trim();
    if (raw.startsWith('+')) {
      // User typed their own code, trust it
      return raw;
    }
    // Otherwise, prepend the selected picker code
    return '$countryCode$raw';
  }

  bool _validate() {
    if (onValidate != null) {
      return onValidate!();
    }
    return true; // If no validator provided, assume valid (backward compatibility)
  }

  @override
  Widget build(BuildContext context) {
    final provider = Provider.of<WhatsAppToolProvider>(context, listen: false);
    final l10n = AppLocalizations.of(context)!;

    return Column(
      children: [
        Row(
          children: [
            Expanded(
              child: ElevatedButton.icon(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF25D366),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 12),
                ),
                icon: const Icon(FontAwesomeIcons.whatsapp),
                label: Text(l10n.openChat),
                onPressed: () async {
                  FocusScope.of(context).unfocus(); // Dismiss keyboard first
                  if (!_validate()) return;
                  await HapticFeedback.lightImpact();

                  final fullNumber = _getFormattedNumber();

                  if (!context.mounted) return;

                  final result = await provider.openWhatsAppChat(
                    fullNumber,
                    l10n,
                    message: messageController.text,
                  );

                  if (context.mounted) {
                    ScaffoldMessenger.of(context)
                        .showSnackBar(SnackBar(content: Text(result)));
                  }
                },
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: ElevatedButton.icon(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blueGrey,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 12),
                ),
                icon: const Icon(Icons.link),
                label: Text(l10n.getLink),
                onPressed: () async {
                  FocusScope.of(context).unfocus(); // Dismiss keyboard first
                  if (!_validate()) return;
                  await HapticFeedback.lightImpact();

                  final fullNumber = _getFormattedNumber();

                  provider.generateChatLink(
                    fullNumber,
                    l10n,
                    message: messageController.text,
                  );
                },
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),
        SizedBox(
          width: double.infinity,
          child: OutlinedButton.icon(
            style: OutlinedButton.styleFrom(
              padding: const EdgeInsets.symmetric(vertical: 12),
              side: const BorderSide(color: Color(0xFF075E54)),
            ),
            icon: const Icon(Icons.qr_code, color: Color(0xFF075E54)),
            label: Text(l10n.generateQr,
                style: const TextStyle(color: Color(0xFF075E54))),
            onPressed: () async {
              FocusScope.of(context).unfocus(); // Dismiss keyboard first
              if (!_validate()) return;
              await HapticFeedback.lightImpact();

              final fullNumber = _getFormattedNumber();

              provider.generateBarcodeForChat(
                fullNumber,
                l10n,
                message: messageController.text,
              );
            },
          ),
        ),
      ],
    );
  }
}
