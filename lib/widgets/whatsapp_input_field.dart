import 'dart:async';

import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/locator.dart';
import 'package:wassistant/services/ocr_service.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/responsive_layout.dart';
import 'package:wassistant/widgets/templates_dialog.dart';

/// OCPD: Strictly structured input field with responsive scaling.
/// INTJ Strategy: Efficient data entry via OCR and Templates.
class WhatsAppInputField extends StatefulWidget {
  const WhatsAppInputField({
    required this.phoneController,
    required this.messageController,
    required this.selectedCountryCode,
    required this.onCountryChanged,
    this.phoneValidator,
    super.key,
  });

  final TextEditingController phoneController;
  final TextEditingController messageController;
  final String? selectedCountryCode;
  final ValueChanged<String> onCountryChanged;
  final String? Function(String?)? phoneValidator;

  @override
  State<WhatsAppInputField> createState() => _WhatsAppInputFieldState();
}

class _WhatsAppInputFieldState extends State<WhatsAppInputField> {
  bool _isScanning = false;

  void _onCountryChange(CountryCode countryCode) {
    final newCode = countryCode.dialCode ?? '+966';
    widget.onCountryChanged(newCode);
  }

  void _showTemplates() {
    unawaited(HapticFeedback.lightImpact());
    unawaited(
      showDialog<void>(
        context: context,
        builder:
            (context) => TemplatesDialog(
              onSelect: (content) {
                widget.messageController.text = content;
              },
            ),
      ),
    );
  }

  Future<void> _scanNumber() async {
    await HapticFeedback.mediumImpact();
    setState(() => _isScanning = true);
    try {
      final number = await locator<OcrService>().scanNumberFromCamera();
      if (number != null && mounted) {
        widget.phoneController.text = number;
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Number scanned successfully!')),
        );
      }
    } finally {
      if (mounted) setState(() => _isScanning = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final layout = context.responsive;
    final currentCode = widget.selectedCountryCode ?? '+966';

    return Column(
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Country Picker Container with responsive scaling
            Container(
              height: layout.spacing(56), // Match standard TextFormField height
              decoration: BoxDecoration(
                color: AppConstants.darkSurface,
                border: Border.all(color: Colors.white10),
                borderRadius: BorderRadius.circular(layout.spacing(12)),
              ),
              child: CountryCodePicker(
                onChanged: _onCountryChange,
                initialSelection: currentCode,
                favorite: const ['+966', 'SA'],
                backgroundColor: AppConstants.darkBackground,
                dialogBackgroundColor: AppConstants.darkCard,
                barrierColor: Colors.black87,
                textStyle: TextStyle(
                  color: AppConstants.textHighEmphasis,
                  fontWeight: FontWeight.bold,
                  fontSize: layout.fontSize(14),
                ),
                searchDecoration: InputDecoration(
                  filled: true,
                  fillColor: AppConstants.darkBackground,
                  labelText: l10n.searchCountry,
                  labelStyle: const TextStyle(
                    color: AppConstants.textMediumEmphasis,
                  ),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8),
                    borderSide: const BorderSide(
                      color: AppConstants.accentGreen,
                    ),
                  ),
                  prefixIcon: const Icon(
                    Icons.search,
                    color: AppConstants.accentGreen,
                  ),
                ),
              ),
            ),
            SizedBox(width: layout.spacing(10)),
            // Phone Number Input
            Expanded(
              child: TextFormField(
                controller: widget.phoneController,
                keyboardType: TextInputType.phone,
                validator: widget.phoneValidator,
                style: TextStyle(fontSize: layout.fontSize(16)),
                decoration: InputDecoration(
                  labelText: l10n.phoneLabel,
                  hintText: l10n.phoneNumberHint,
                  suffixIcon: IconButton(
                    icon:
                        _isScanning
                            ? SizedBox(
                              width: layout.spacing(24),
                              height: layout.spacing(24),
                              child: const CircularProgressIndicator(
                                strokeWidth: 2,
                              ),
                            )
                            : Icon(
                              Icons.document_scanner_outlined,
                              size: layout.iconSize(24),
                            ),
                    color: AppConstants.accentGreen,
                    tooltip: 'Scan Number (OCR)',
                    onPressed: _isScanning ? null : _scanNumber,
                  ),
                ),
              ),
            ),
          ],
        ),
        SizedBox(height: layout.spacing(16)),
        // Message Input with Template trigger
        Stack(
          alignment: Alignment.topRight,
          children: [
            TextField(
              controller: widget.messageController,
              maxLines: 3,
              style: TextStyle(fontSize: layout.fontSize(16)),
              decoration: InputDecoration(
                labelText: l10n.messageLabel,
                alignLabelWithHint: true,
                contentPadding: EdgeInsets.fromLTRB(
                  layout.horizontalPadding,
                  layout.verticalPadding,
                  layout.horizontalPadding * 3, // Space for the template icon
                  layout.verticalPadding,
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.only(
                top: layout.spacing(4),
                right: layout.spacing(4),
              ),
              child: IconButton(
                icon: Icon(
                  Icons.bookmark_border,
                  color: AppConstants.accentGreen,
                  size: layout.iconSize(24),
                ),
                tooltip: l10n.templateTitle,
                onPressed: _showTemplates,
              ),
            ),
          ],
        ),
      ],
    );
  }
}
