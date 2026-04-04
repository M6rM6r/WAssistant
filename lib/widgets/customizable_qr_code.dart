import 'dart:async';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:share_plus/share_plus.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/responsive_layout.dart';

/// QR Code customization options
class QrCustomizationOptions {
  final Color foregroundColor;
  final Color backgroundColor;
  final double size;
  final int errorCorrectionLevel;
  final ui.Image? logo;
  final double logoSize;
  final EdgeInsets logoPadding;

  const QrCustomizationOptions({
    this.foregroundColor = Colors.black,
    this.backgroundColor = Colors.white,
    this.size = 200,
    this.errorCorrectionLevel = QrErrorCorrectLevel.M,
    this.logo,
    this.logoSize = 40,
    this.logoPadding = const EdgeInsets.all(8),
  });

  QrCustomizationOptions copyWith({
    Color? foregroundColor,
    Color? backgroundColor,
    double? size,
    int? errorCorrectionLevel,
    ui.Image? logo,
    double? logoSize,
    EdgeInsets? logoPadding,
  }) {
    return QrCustomizationOptions(
      foregroundColor: foregroundColor ?? this.foregroundColor,
      backgroundColor: backgroundColor ?? this.backgroundColor,
      size: size ?? this.size,
      errorCorrectionLevel: errorCorrectionLevel ?? this.errorCorrectionLevel,
      logo: logo ?? this.logo,
      logoSize: logoSize ?? this.logoSize,
      logoPadding: logoPadding ?? this.logoPadding,
    );
  }
}

/// Preset QR code styles
class QrStylePresets {
  static QrCustomizationOptions get whatsappGreen => const QrCustomizationOptions(
    foregroundColor: Color(0xFF00E676),
    backgroundColor: Colors.white,
    size: 200,
    errorCorrectionLevel: QrErrorCorrectLevel.M,
  );

  static QrCustomizationOptions get cyberpunk => const QrCustomizationOptions(
    foregroundColor: Color(0xFF00FF88),
    backgroundColor: Color(0xFF050505),
    size: 200,
    errorCorrectionLevel: QrErrorCorrectLevel.H,
  );

  static QrCustomizationOptions get minimal => const QrCustomizationOptions(
    foregroundColor: Colors.black,
    backgroundColor: Colors.white,
    size: 200,
    errorCorrectionLevel: QrErrorCorrectLevel.L,
  );

  static QrCustomizationOptions get highContrast => const QrCustomizationOptions(
    foregroundColor: Colors.black,
    backgroundColor: Colors.yellow,
    size: 200,
    errorCorrectionLevel: QrErrorCorrectLevel.H,
  );
}

/// Enhanced QR Code widget with customization
class CustomizableQrCode extends StatelessWidget {
  const CustomizableQrCode({
    required this.data,
    required this.options,
    this.onShare,
    this.onDownload,
    super.key,
  });

  final String data;
  final QrCustomizationOptions options;
  final VoidCallback? onShare;
  final VoidCallback? onDownload;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          padding: EdgeInsets.all(layout.spacing(16)),
          decoration: BoxDecoration(
            color: options.backgroundColor,
            borderRadius: BorderRadius.circular(layout.spacing(12)),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.1),
                blurRadius: 10,
                offset: const Offset(0, 4),
              ),
            ],
          ),
          child: QrImageView(
            data: data,
            size: options.size,
            backgroundColor: options.backgroundColor,
            foregroundColor: options.foregroundColor,
            errorCorrectionLevel: options.errorCorrectionLevel,
            embeddedImage: options.logo != null
                ? MemoryImage(Uint8List(0)) // Placeholder - actual logo handling in service
                : null,
            embeddedImageStyle: options.logo != null
                ? QrEmbeddedImageStyle(
                    size: Size(options.logoSize, options.logoSize),
                  )
                : null,
          ),
        ),
        if (onShare != null || onDownload != null) ...[
          SizedBox(height: layout.spacing(16)),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              if (onShare != null)
                IconButton.filledTonal(
                  onPressed: () {
                    HapticFeedback.mediumImpact();
                    onShare!();
                  },
                  icon: const Icon(Icons.share),
                  style: IconButton.styleFrom(
                    backgroundColor: AppConstants.darkSurface,
                  ),
                ),
              if (onShare != null && onDownload != null)
                SizedBox(width: layout.spacing(12)),
              if (onDownload != null)
                IconButton.filledTonal(
                  onPressed: () {
                    HapticFeedback.mediumImpact();
                    onDownload!();
                  },
                  icon: const Icon(Icons.download),
                  style: IconButton.styleFrom(
                    backgroundColor: AppConstants.darkSurface,
                  ),
                ),
            ],
          ),
        ],
      ],
    );
  }
}

/// QR Code customization dialog
class QrCustomizationDialog extends StatefulWidget {
  const QrCustomizationDialog({
    required this.data,
    required this.initialOptions,
    required this.onOptionsChanged,
    super.key,
  });

  final String data;
  final QrCustomizationOptions initialOptions;
  final ValueChanged<QrCustomizationOptions> onOptionsChanged;

  @override
  State<QrCustomizationDialog> createState() => _QrCustomizationDialogState();
}

class _QrCustomizationDialogState extends State<QrCustomizationDialog> {
  late QrCustomizationOptions _options;

  @override
  void initState() {
    super.initState();
    _options = widget.initialOptions;
  }

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Dialog(
      backgroundColor: AppConstants.darkBackground,
      child: ConstrainedBox(
        constraints: BoxConstraints(
          maxWidth: layout.isMobile ? double.infinity : 500,
          maxHeight: MediaQuery.of(context).size.height * 0.8,
        ),
        child: Padding(
          padding: EdgeInsets.all(layout.spacing(24)),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                'Customize QR Code',
                style: TextStyle(
                  fontSize: layout.fontSize(20),
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: layout.spacing(20)),
              // Preview
              CustomizableQrCode(
                data: widget.data,
                options: _options,
              ),
              SizedBox(height: layout.spacing(24)),
              // Style presets
              Wrap(
                spacing: layout.spacing(8),
                runSpacing: layout.spacing(8),
                alignment: WrapAlignment.center,
                children: [
                  _PresetChip(
                    label: 'WhatsApp',
                    color: const Color(0xFF00E676),
                    onSelected: () => _applyPreset(QrStylePresets.whatsappGreen),
                  ),
                  _PresetChip(
                    label: 'Cyberpunk',
                    color: const Color(0xFF00FF88),
                    onSelected: () => _applyPreset(QrStylePresets.cyberpunk),
                  ),
                  _PresetChip(
                    label: 'Minimal',
                    color: Colors.black,
                    onSelected: () => _applyPreset(QrStylePresets.minimal),
                  ),
                  _PresetChip(
                    label: 'High Contrast',
                    color: Colors.yellow,
                    onSelected: () => _applyPreset(QrStylePresets.highContrast),
                  ),
                ],
              ),
              SizedBox(height: layout.spacing(16)),
              // Error correction level
              _buildErrorCorrectionSelector(layout),
              SizedBox(height: layout.spacing(16)),
              // Size slider
              _buildSizeSlider(layout),
              SizedBox(height: layout.spacing(24)),
              // Actions
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => Navigator.pop(context),
                      child: const Text('Cancel'),
                    ),
                  ),
                  SizedBox(width: layout.spacing(12)),
                  Expanded(
                    child: ElevatedButton(
                      onPressed: () {
                        widget.onOptionsChanged(_options);
                        Navigator.pop(context);
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppConstants.accentGreen,
                      ),
                      child: const Text('Apply'),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _applyPreset(QrCustomizationOptions preset) {
    setState(() {
      _options = preset;
    });
    HapticFeedback.lightImpact();
  }

  Widget _buildErrorCorrectionSelector(ResponsiveLayout layout) {
    final levels = [
      (label: 'Low', level: QrErrorCorrectLevel.L, desc: '7%'),
      (label: 'Medium', level: QrErrorCorrectLevel.M, desc: '15%'),
      (label: 'High', level: QrErrorCorrectLevel.H, desc: '30%'),
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Error Correction',
          style: TextStyle(
            fontSize: layout.fontSize(14),
            fontWeight: FontWeight.w600,
          ),
        ),
        SizedBox(height: layout.spacing(8)),
        SegmentedButton<int>(
          segments: levels.map((l) {
            return ButtonSegment(
              value: l.level,
              label: Text('${l.label}\n${l.desc}'),
            );
          }).toList(),
          selected: {_options.errorCorrectionLevel},
          onSelectionChanged: (selection) {
            setState(() {
              _options = _options.copyWith(
                errorCorrectionLevel: selection.first,
              );
            });
          },
        ),
      ],
    );
  }

  Widget _buildSizeSlider(ResponsiveLayout layout) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              'Size',
              style: TextStyle(
                fontSize: layout.fontSize(14),
                fontWeight: FontWeight.w600,
              ),
            ),
            Text(
              '${_options.size.toInt()}px',
              style: TextStyle(
                fontSize: layout.fontSize(14),
                color: AppConstants.textMediumEmphasis,
              ),
            ),
          ],
        ),
        SizedBox(height: layout.spacing(8)),
        Slider(
          value: _options.size,
          min: 100,
          max: 400,
          divisions: 6,
          activeColor: AppConstants.accentGreen,
          onChanged: (value) {
            setState(() {
              _options = _options.copyWith(size: value);
            });
          },
        ),
      ],
    );
  }
}

/// Style preset chip widget
class _PresetChip extends StatelessWidget {
  const _PresetChip({
    required this.label,
    required this.color,
    required this.onSelected,
  });

  final String label;
  final Color color;
  final VoidCallback onSelected;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return ActionChip(
      avatar: Container(
        width: layout.spacing(16),
        height: layout.spacing(16),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(4),
          border: Border.all(color: Colors.white24),
        ),
      ),
      label: Text(label),
      onPressed: onSelected,
      backgroundColor: AppConstants.darkSurface,
      side: const BorderSide(color: Colors.white10),
    );
  }
}

/// Service for exporting QR codes
class QrExportService {
  /// Capture QR code as image
  static Future<Uint8List?> captureQrImage(
    GlobalKey repaintKey, {
    double pixelRatio = 3.0,
  }) async {
    try {
      final boundary = repaintKey.currentContext?.findRenderObject()
          as RenderRepaintBoundary?;
      if (boundary == null) return null;

      final image = await boundary.toImage(pixelRatio: pixelRatio);
      final byteData = await image.toByteData(format: ui.ImageByteFormat.png);
      return byteData?.buffer.asUint8List();
    } catch (e) {
      return null;
    }
  }

  /// Share QR code
  static Future<void> shareQrCode(String data, String filename) async {
    await Share.share(data, subject: filename);
  }
}
