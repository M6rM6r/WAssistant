import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:image_gallery_saver/image_gallery_saver.dart';
import 'package:provider/provider.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/logger_service.dart';

class OutputDisplay extends StatefulWidget {
  const OutputDisplay({super.key});

  @override
  State<OutputDisplay> createState() => _OutputDisplayState();
}

class _OutputDisplayState extends State<OutputDisplay> {
  final GlobalKey _qrKey = GlobalKey();

  Future<void> _saveQrCode(AppLocalizations l10n) async {
    try {
      final boundary =
          _qrKey.currentContext!.findRenderObject()! as RenderRepaintBoundary;
      final image = await boundary.toImage(pixelRatio: 3);
      final byteData = await image.toByteData(format: ui.ImageByteFormat.png);

      if (byteData != null) {
        final result =
            await ImageGallerySaver.saveImage(byteData.buffer.asUint8List());
        LoggerService.i('Image Saved: $result');
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
             SnackBar(content: Text(l10n.imageSaved)),
          );
        }
      }
    } on Object catch (e) {
      LoggerService.e('Failed to save image', e);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
           SnackBar(content: Text(l10n.imageSaveFailed)),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final provider = Provider.of<WhatsAppToolProvider>(context);
    final l10n = AppLocalizations.of(context)!;

    // We can't easily localize the provider's dynamic outputMessage without refactoring
    // the provider to store state instead of strings.
    // For now, we will handle the initial state string here.

    // Check if the message is exactly the default English one to replace it with localized version
    // or if it's empty/null
    var outputMessage = provider.outputMessage;
    if (outputMessage == 'Your generated output will appear here.') {
        outputMessage = l10n.outputPlaceholder;
    }

    final barcodeData = provider.barcodeData;
    final generatedLink = provider.generatedLink;

    final theme = Theme.of(context);
    final hasQrCode = barcodeData != null && barcodeData.isNotEmpty;
    final hasLink = generatedLink.isNotEmpty;
    final isInitialState = !hasQrCode && !hasLink;

    return AnimatedSwitcher(
      duration: const Duration(milliseconds: 300),
      child: Container(
        key: ValueKey(isInitialState ? 'initial' : (hasQrCode ? 'qr' : 'text')),
        width: double.infinity,
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: theme.cardColor,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: 0.05),
              blurRadius: 10,
              offset: const Offset(0, 5),
            ),
          ],
        ),
        child: Column(
          children: [
            if (isInitialState)
              _buildInitialState(theme, l10n)
            else ...[
              if (hasQrCode)
                _buildSmartQrCard(barcodeData, theme, l10n)
              else if (hasLink)
                _buildSmartLinkCard(generatedLink, l10n),
              const SizedBox(height: 16),
              if (!hasLink && !hasQrCode)
                SelectableText(
                  outputMessage,
                  style: theme.textTheme.bodyLarge
                      ?.copyWith(fontWeight: FontWeight.bold),
                  textAlign: TextAlign.center,
                ),
              const SizedBox(height: 16),
              if (hasLink || hasQrCode) _buildActionButtons(context, provider, l10n),
            ]
          ],
        ),
      ),
    );
  }

  Widget _buildInitialState(ThemeData theme, AppLocalizations l10n) {
    return Column(
      children: [
        Icon(Icons.output, size: 48, color: Colors.grey[400]),
        const SizedBox(height: 10),
        Text(
          l10n.outputPlaceholder,
          style: TextStyle(color: Colors.grey[600]),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Widget _buildSmartQrCard(String data, ThemeData theme, AppLocalizations l10n) {
    final isVCard = data.startsWith('BEGIN:VCARD');
    final label = isVCard ? 'Contact Card' : 'Chat QR'; // Could localize these too if needed
    var subLabel = '';

    if (isVCard) {
      final lines = data.split('\n');
      for (final line in lines) {
        if (line.startsWith('FN:')) subLabel = line.substring(3);
      }
    } else {
      try {
        final uri = Uri.parse(data);
        if (uri.pathSegments.isNotEmpty) {
          subLabel = '+${uri.pathSegments.last}';
        }
      } on Object {
        subLabel = l10n.scanToOpen;
      }
    }

    return Column(
      children: [
        if (isVCard) ...[
          _buildDigitalCardPreview(data, theme),
          const SizedBox(height: 24),
        ],
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
              color: AppConstants.darkSurface,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(
                  color: AppConstants.accentGreen.withValues(alpha: 0.3)),
              boxShadow: [
                BoxShadow(
                    color: AppConstants.accentGreen.withValues(alpha: 0.1),
                    blurRadius: 15,
                    spreadRadius: 1)
              ]),
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.qr_code_2,
                      color: AppConstants.accentGreen, size: 28),
                  const SizedBox(width: 8),
                  Text(label,
                      style: const TextStyle(
                          color: AppConstants.accentGreen,
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          letterSpacing: 1.1)),
                ],
              ),
              const SizedBox(height: 8),
              if (subLabel.isNotEmpty)
                Text(subLabel,
                    style: const TextStyle(
                        color: AppConstants.textMediumEmphasis, fontSize: 14)),
              const SizedBox(height: 20),

              // Wrap QR in RepaintBoundary to capture it
              RepaintBoundary(
                key: _qrKey,
                child: Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.black,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(
                        color: AppConstants.accentGreen.withValues(alpha: 0.5)),
                  ),
                  child: QrImageView(
                    data: data,
                    size: 200,
                    backgroundColor: Colors.black,
                    eyeStyle: const QrEyeStyle(
                      eyeShape: QrEyeShape.square,
                      color: AppConstants.accentGreen,
                    ),
                    dataModuleStyle: const QrDataModuleStyle(
                      dataModuleShape: QrDataModuleShape.square,
                      color: AppConstants.accentGreen,
                    ),
                  ),
                ),
              )
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildSmartLinkCard(String url, AppLocalizations l10n) {
    var displayNumber = 'Unknown';
    try {
      final uri = Uri.parse(url);
      if (uri.pathSegments.isNotEmpty) {
        displayNumber = '+${uri.pathSegments.last}';
      }
    } on Object {
      // Ignored
    }

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
          color: AppConstants.darkSurface,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(
              color: AppConstants.accentGreen.withValues(alpha: 0.3)),
          boxShadow: [
            BoxShadow(
                color: AppConstants.accentGreen.withValues(alpha: 0.1),
                blurRadius: 15,
                spreadRadius: 1)
          ]),
      child: Column(
        children: [
          const Icon(Icons.check_circle_outline,
              color: AppConstants.accentGreen, size: 40),
          const SizedBox(height: 10),
          Text(l10n.linkReady,
              style: const TextStyle(
                  color: AppConstants.accentGreen,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1.2)),
          const SizedBox(height: 20),
          Text(l10n.targetNumber,
              style: const TextStyle(
                  color: AppConstants.textMediumEmphasis, fontSize: 12)),
          const SizedBox(height: 4),
          Text(displayNumber,
              style: const TextStyle(
                  color: AppConstants.textHighEmphasis,
                  fontSize: 24,
                  fontWeight: FontWeight.bold)),
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(
              color: Colors.black26,
              borderRadius: BorderRadius.circular(8),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.link, color: Colors.white54, size: 16),
                const SizedBox(width: 8),
                Flexible(
                  child: Text(
                    url,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                        color: Colors.blueAccent,
                        decoration: TextDecoration.underline),
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _buildDigitalCardPreview(String vCardData, ThemeData theme) {
    var fn = '';
    var org = '';
    var title = '';

    final lines = vCardData.split('\n');
    for (final line in lines) {
      if (line.startsWith('FN:')) fn = line.substring(3);
      if (line.startsWith('ORG:')) org = line.substring(4);
      if (line.startsWith('TITLE:')) title = line.substring(6);
    }

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
          gradient: const LinearGradient(
            colors: [Color(0xFF1E1E1E), Color(0xFF333333)],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          borderRadius: BorderRadius.circular(12),
          boxShadow: [
            BoxShadow(
                color: Colors.black.withValues(alpha: 0.3),
                blurRadius: 10,
                offset: const Offset(0, 5))
          ]),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Icon(Icons.nfc, color: Colors.white54),
              Text(org,
                  style: const TextStyle(
                      color: Colors.white70, fontSize: 12, letterSpacing: 1.5)),
            ],
          ),
          const SizedBox(height: 25),
          Text(fn,
              style: const TextStyle(
                  color: Colors.white,
                  fontSize: 22,
                  fontWeight: FontWeight.bold)),
          if (title.isNotEmpty)
            Text(title,
                style: const TextStyle(
                    color: AppConstants.accentGreen, fontSize: 14)),
        ],
      ),
    );
  }

  Widget _buildActionButtons(
      BuildContext context, WhatsAppToolProvider provider, AppLocalizations l10n) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        IconButton(
          icon: const Icon(Icons.copy),
          tooltip: 'Copy',
          onPressed: () {
            final data = provider.generatedLink.isNotEmpty
                ? provider.generatedLink
                : (provider.barcodeData ?? '');
            Clipboard.setData(ClipboardData(text: data));
            ScaffoldMessenger.of(context).showSnackBar(
                 SnackBar(content: Text(l10n.copied)));
          },
        ),
        IconButton(
          icon: const Icon(Icons.share, color: AppConstants.accentGreen),
          tooltip: 'Share',
          onPressed: () {
            provider.shareContent();
          },
        ),
        if (provider.barcodeData != null)
          IconButton(
            icon: const Icon(Icons.download),
            tooltip: 'Save Image',
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                   SnackBar(content: Text(l10n.savingToGallery)));
              // ignore: discarded_futures
              _saveQrCode(l10n); // Trigger actual save
            },
          ),
        IconButton(
          icon: const Icon(Icons.delete_outline, color: Colors.red),
          tooltip: 'Clear',
          onPressed: () {
            provider.clearOutput();
          },
        ),
      ],
    );
  }
}
