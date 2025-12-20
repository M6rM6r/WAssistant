import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/responsive_layout.dart';

/// OCPD: Strictly structured action panel with responsive scaling.
/// INTJ Strategy: Zero-latency execution of primary business functions.
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
    if (raw.startsWith('+')) return raw;
    return '$countryCode$raw';
  }

  bool _validate() => onValidate?.call() ?? true;

  @override
  Widget build(BuildContext context) {
    final provider = context.read<WhatsAppToolProvider>();
    final l10n = AppLocalizations.of(context)!;
    final layout = context.responsive;

    return Column(
      children: [
        Row(
          children: [
            Expanded(
              child: Semantics(
                label: l10n.openChat,
                button: true,
                child: ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppConstants.accentGreen,
                    foregroundColor: Colors.white,
                    padding: EdgeInsets.symmetric(vertical: layout.spacing(12)),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(layout.spacing(12)),
                    ),
                  ),
                  icon: Icon(FontAwesomeIcons.whatsapp, size: layout.iconSize(20)),
                  label: Text(l10n.openChat, style: TextStyle(fontSize: layout.fontSize(14))),
                  onPressed: () async {
                    FocusScope.of(context).unfocus();
                    if (!_validate()) return;
                    await HapticFeedback.mediumImpact();
                    final fullNumber = _getFormattedNumber();
                    if (!context.mounted) return;
                    final result = await provider.openWhatsAppChat(
                      fullNumber,
                      l10n,
                      message: messageController.text,
                    );
                    if (context.mounted) {
                      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(result)));
                    }
                  },
                ),
              ),
            ),
            SizedBox(width: layout.spacing(10)),
            Expanded(
              child: Semantics(
                label: l10n.getLink,
                button: true,
                child: ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppConstants.darkSurface,
                    foregroundColor: AppConstants.accentGreen,
                    padding: EdgeInsets.symmetric(vertical: layout.spacing(12)),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(layout.spacing(12)),
                      side: const BorderSide(color: Colors.white10),
                    ),
                  ),
                  icon: Icon(Icons.link, size: layout.iconSize(20)),
                  label: Text(l10n.getLink, style: TextStyle(fontSize: layout.fontSize(14))),
                  onPressed: () async {
                    FocusScope.of(context).unfocus();
                    if (!_validate()) return;
                    await HapticFeedback.lightImpact();
                    provider.generateChatLink(
                      _getFormattedNumber(),
                      l10n,
                      message: messageController.text,
                    );
                  },
                ),
              ),
            ),
          ],
        ),
        SizedBox(height: layout.spacing(12)),
        SizedBox(
          width: double.infinity,
          child: Semantics(
            label: l10n.generateQr,
            button: true,
            child: OutlinedButton.icon(
              style: OutlinedButton.styleFrom(
                padding: EdgeInsets.symmetric(vertical: layout.spacing(14)),
                side: BorderSide(color: AppConstants.accentGreen.withValues(alpha: 0.5)),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(layout.spacing(12)),
                ),
              ),
              icon: Icon(Icons.qr_code, color: AppConstants.accentGreen, size: layout.iconSize(22)),
              label: Text(
                l10n.generateQr,
                style: TextStyle(color: AppConstants.accentGreen, fontSize: layout.fontSize(16)),
              ),
              onPressed: () async {
                FocusScope.of(context).unfocus();
                if (!_validate()) return;
                await HapticFeedback.heavyImpact();
                provider.generateBarcodeForChat(
                  _getFormattedNumber(),
                  l10n,
                  message: messageController.text,
                );
              },
            ),
          ),
        ),
      ],
    );
  }
}
