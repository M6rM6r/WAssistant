import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/locator.dart';
import 'package:wassistant/services/ocr_service.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/widgets/templates_dialog.dart';

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

  @override
  void initState() {
    super.initState();
  }

  void _onCountryChange(CountryCode countryCode) {
    final newCode = countryCode.dialCode ?? '+966';
    widget.onCountryChanged(newCode);
  }

  void _showTemplates() {
    showDialog<void>(
      context: context,
      builder: (context) => TemplatesDialog(
        onSelect: (content) {
          widget.messageController.text = content;
        },
      ),
    );
  }

  Future<void> _scanNumber() async {
    setState(() => _isScanning = true);
    try {
      final number = await locator<OcrService>().scanNumberFromCamera();
      if (number != null && mounted) {
        // OCPD: Strip country code if it matches the selected one to keep it clean,
        // or just paste it all. For now, we paste what we found.
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
    // Defensive check: Fallback if null
    final currentCode = widget.selectedCountryCode ?? '+966';

    final themeOverride = Theme.of(context).copyWith(
      canvasColor: AppConstants.darkBackground,
      scaffoldBackgroundColor: AppConstants.darkBackground,
      cardColor: AppConstants.darkCard,
      dialogTheme: const DialogThemeData(
        backgroundColor: AppConstants.darkCard,
      ),
    );

    return Column(
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              decoration: BoxDecoration(
                color: AppConstants.darkSurface,
                border: Border.all(color: Colors.white10),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Theme(
                data: themeOverride,
                child: CountryCodePicker(
                  onChanged: _onCountryChange,
                  initialSelection: currentCode, // Safe usage
                  favorite: const ['+966', 'SA'],

                  backgroundColor: AppConstants.darkBackground,
                  dialogBackgroundColor: AppConstants.darkCard,
                  barrierColor: Colors.black87,

                  textStyle: const TextStyle(
                      color: AppConstants.textHighEmphasis,
                      fontWeight: FontWeight.bold),
                  dialogTextStyle:
                      const TextStyle(color: AppConstants.textHighEmphasis),
                  searchStyle:
                      const TextStyle(color: AppConstants.textHighEmphasis),

                  searchDecoration: InputDecoration(
                    filled: true,
                    fillColor: AppConstants.darkBackground,
                    labelText: l10n.searchCountry,
                    labelStyle:
                        const TextStyle(color: AppConstants.textMediumEmphasis),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8),
                      borderSide:
                          const BorderSide(color: AppConstants.accentGreen),
                    ),
                    prefixIcon: const Icon(Icons.search,
                        color: AppConstants.accentGreen),
                  ),
                  closeIcon:
                      const Icon(Icons.close, color: AppConstants.accentGreen),
                ),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: TextFormField(
                controller: widget.phoneController,
                keyboardType: TextInputType.phone,
                validator: widget.phoneValidator,
                decoration: InputDecoration(
                  labelText: l10n.phoneLabel,
                  hintText: l10n.phoneNumberHint,
                  border: const OutlineInputBorder(),
                  suffixIcon: IconButton(
                    icon: _isScanning
                      ? const SizedBox(
                          width: 24,
                          height: 24,
                          child: CircularProgressIndicator(strokeWidth: 2)
                        )
                      : const Icon(Icons.document_scanner_outlined),
                    color: AppConstants.accentGreen,
                    tooltip: 'Scan Number (OCR)',
                    onPressed: _isScanning ? null : _scanNumber,
                  ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 16),
        Stack(
          alignment: Alignment.topRight,
          children: [
            TextField(
              controller: widget.messageController,
              maxLines: 3,
              decoration: InputDecoration(
                labelText: l10n.messageLabel,
                border: const OutlineInputBorder(),
                alignLabelWithHint: true,
                contentPadding: const EdgeInsets.fromLTRB(16, 16, 48, 16),
              ),
            ),
            IconButton(
              icon: const Icon(Icons.bookmark_border,
                  color: AppConstants.accentGreen),
              tooltip: l10n.templateTitle,
              onPressed: _showTemplates,
            ),
          ],
        ),
      ],
    );
  }
}
