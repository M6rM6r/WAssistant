import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/responsive_layout.dart';

/// OCPD: Precision UI for data visualization and output feedback.
/// INTJ Strategy: Zero-latency copying and sharing actions.
class OutputDisplay extends StatelessWidget {
  const OutputDisplay({super.key});

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final theme = Theme.of(context);
    final layout = context.responsive;

    return Selector<WhatsAppToolProvider, ({String output, String? barcode, String link})>(
      selector: (_, p) => (output: p.outputMessage, barcode: p.barcodeData, link: p.generatedLink),
      builder: (context, data, _) {
        final hasOutput =
            data.link.isNotEmpty || (data.barcode != null && data.barcode!.isNotEmpty);

        return AnimatedSwitcher(
          duration: const Duration(milliseconds: 400),
          child: Container(
            key: ValueKey(hasOutput ? 'active' : 'idle'),
            width: double.infinity,
            padding: layout.responsivePadding,
            decoration: BoxDecoration(
              color: theme.cardColor,
              borderRadius: BorderRadius.circular(layout.spacing(16)),
              border: Border.all(color: Colors.white10),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.2),
                  blurRadius: 10,
                  offset: const Offset(0, 5),
                ),
              ],
            ),
            child:
                hasOutput
                    ? _buildActiveState(context, data, l10n, layout)
                    : _buildIdleState(l10n, layout),
          ),
        );
      },
    );
  }

  Widget _buildActiveState(
    BuildContext context,
    dynamic data,
    AppLocalizations l10n,
    ResponsiveLayout layout,
  ) {
    final provider = context.read<WhatsAppToolProvider>();

    return Column(
      children: [
        if (data.barcode != null) ...[
          Semantics(
            label: 'WhatsApp QR Code',
            image: true,
            child: QrImageView(
              data: data.barcode!,
              size: layout.spacing(200),
              backgroundColor: Colors.white,
              padding: const EdgeInsets.all(16),
            ),
          ),
          SizedBox(height: layout.spacing(20)),
        ],
        SelectableText(
          data.output,
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: layout.fontSize(16), fontWeight: FontWeight.w500),
        ),
        SizedBox(height: layout.spacing(24)),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildActionButton(
              icon: Icons.copy,
              label: l10n.copied,
              onTap: () {
                unawaited(
                  Clipboard.setData(
                    ClipboardData(text: data.link.isNotEmpty ? data.link : data.barcode!),
                  ),
                );
                HapticFeedback.lightImpact();
              },
            ),
            SizedBox(width: layout.spacing(16)),
            _buildActionButton(
              icon: Icons.share,
              label: 'Share',
              onTap: () => unawaited(provider.shareContent()),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildIdleState(AppLocalizations l10n, ResponsiveLayout layout) {
    return Column(
      children: [
        Icon(
          Icons.output_rounded,
          size: layout.iconSize(48),
          color: AppConstants.textMediumEmphasis,
        ),
        SizedBox(height: layout.spacing(12)),
        Text(
          l10n.outputPlaceholder,
          style: TextStyle(color: AppConstants.textMediumEmphasis, fontSize: layout.fontSize(14)),
        ),
      ],
    );
  }

  Widget _buildActionButton({
    required IconData icon,
    required String label,
    required VoidCallback onTap,
  }) {
    return Semantics(
      button: true,
      label: label,
      child: IconButton.filledTonal(
        icon: Icon(icon),
        onPressed: onTap,
        style: IconButton.styleFrom(backgroundColor: AppConstants.darkSurface),
      ),
    );
  }
}
