import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/responsive_layout.dart';
import 'package:wassistant/widgets/customizable_qr_code.dart';

/// OCPD: Precision UI for data visualization and output feedback.
/// INTJ Strategy: Zero-latency copying and sharing actions.
class OutputDisplay extends StatefulWidget {
  const OutputDisplay({super.key});

  @override
  State<OutputDisplay> createState() => _OutputDisplayState();
}

class _OutputDisplayState extends State<OutputDisplay> {
  QrCustomizationOptions _qrOptions = const QrCustomizationOptions();

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final layout = context.responsive;

    return Selector<WhatsAppToolProvider, ({String output, String? barcode, String link})>(
      selector: (_, p) => (output: p.outputMessage, barcode: p.barcodeData, link: p.generatedLink),
      builder: (context, data, _) {
        final hasOutput =
            data.link.isNotEmpty || (data.barcode != null && data.barcode!.isNotEmpty);

        return AnimatedSwitcher(
          duration: const Duration(milliseconds: 300),
          transitionBuilder: (child, animation) {
            return FadeTransition(
              opacity: animation,
              child: ScaleTransition(
                scale: Tween<double>(begin: 0.95, end: 1.0).animate(animation),
                child: child,
              ),
            );
          },
          child: Card(
            key: ValueKey(hasOutput ? 'active' : 'idle'),
            child: Container(
              width: double.infinity,
              padding: layout.responsivePadding,
              decoration: BoxDecoration(
                border: Border.all(color: Colors.white10),
                borderRadius: BorderRadius.circular(16),
              ),
              child:
                  hasOutput
                      ? _buildActiveState(context, data, l10n, layout)
                      : _buildIdleState(l10n, layout),
            ),
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
    final hasQr = data.barcode != null && data.barcode!.isNotEmpty;

    return Column(
      children: [
        if (hasQr) ...[
          Stack(
            alignment: Alignment.topRight,
            children: [
              CustomizableQrCode(data: data.barcode!, options: _qrOptions),
              Positioned(
                top: 8,
                right: 8,
                child: IconButton.filledTonal(
                  onPressed: () => _showQrCustomizationDialog(context, data.barcode!),
                  icon: const Icon(Icons.tune, size: 20),
                ),
              ),
            ],
          ),
          SizedBox(height: layout.spacing(20)),
        ],
        Container(
          padding: EdgeInsets.all(layout.spacing(12)),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.surface,
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            children: [
              Expanded(
                child: SelectableText(
                  data.output,
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: layout.fontSize(16), fontWeight: FontWeight.w500),
                ),
              ),
              IconButton(
                onPressed: () => _copyToClipboard(data.output),
                icon: const Icon(Icons.copy, size: 20),
                tooltip: 'Copy',
              ),
            ],
          ),
        ),
        SizedBox(height: layout.spacing(24)),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildActionButton(
              icon: Icons.copy_all,
              label: 'Copy Link',
              onTap: () => _copyToClipboard(data.link.isNotEmpty ? data.link : data.barcode!),
            ),
            SizedBox(width: layout.spacing(16)),
            _buildActionButton(
              icon: Icons.share,
              label: 'Share',
              onTap: () => unawaited(provider.shareContent()),
            ),
            if (hasQr) ...[
              SizedBox(width: layout.spacing(16)),
              _buildActionButton(
                icon: Icons.download,
                label: 'Save QR',
                onTap: () => _downloadQrCode(data.barcode!),
              ),
            ],
          ],
        ),
      ],
    );
  }

  void _showQrCustomizationDialog(BuildContext context, String data) {
    showDialog(
      context: context,
      builder:
          (context) => QrCustomizationDialog(
            data: data,
            initialOptions: _qrOptions,
            onOptionsChanged: (options) {
              setState(() {
                _qrOptions = options;
              });
            },
          ),
    );
  }

  Future<void> _copyToClipboard(String text) async {
    await Clipboard.setData(ClipboardData(text: text));
    HapticFeedback.mediumImpact();
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Copied to clipboard'), duration: Duration(seconds: 2)),
      );
    }
  }

  Future<void> _downloadQrCode(String data) async {
    // TODO: Implement QR download using QrExportService
    HapticFeedback.mediumImpact();
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
      ),
    );
  }
}
