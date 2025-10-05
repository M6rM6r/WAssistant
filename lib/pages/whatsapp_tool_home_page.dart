// [CORRECTION] Forcing a complete overwrite to fix file corruption.
// Import necessary Flutter packages.
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:image_gallery_saver/image_gallery_saver.dart';
import 'package:provider/provider.dart'; // For accessing the provider.

// Import the custom widgets that this page uses.
import '../widgets/banner_ad_widget.dart';
import '../widgets/feature_buttons.dart';
import '../widgets/message_input_field.dart';
import '../widgets/output_display.dart';
import '../widgets/whatsapp_input_field.dart';

// Import the WhatsAppToolProvider, located one directory up (../).
import '../providers/whatsapp_tool_provider.dart';

class WhatsAppToolHomePage extends StatefulWidget {
  const WhatsAppToolHomePage({super.key});

  @override
  State<WhatsAppToolHomePage> createState() => _WhatsAppToolHomePageState();
}

class _WhatsAppToolHomePageState extends State<WhatsAppToolHomePage> {
  // Controllers for all text input fields
  final TextEditingController _numberController = TextEditingController();
  final TextEditingController _messageController = TextEditingController();
  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _lastNameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _companyController = TextEditingController();

  final GlobalKey _qrCodeKey = GlobalKey();
  bool _isLoading = false;
  bool _showVCardFields = false;
  String _countryCode = '+966'; // Default to Saudi Arabia

  @override
  void dispose() {
    _numberController.dispose();
    _messageController.dispose();
    _firstNameController.dispose();
    _lastNameController.dispose();
    _emailController.dispose();
    _companyController.dispose();
    super.dispose();
  }

  void _showSnackBar(String message, {bool isError = false}) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: isError ? Theme.of(context).colorScheme.error : Theme.of(context).colorScheme.primary,
        duration: const Duration(seconds: 3),
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _setLoading(bool loading) {
    if (mounted) {
      setState(() {
        _isLoading = loading;
      });
    }
  }

  void _clearAll() {
    _numberController.clear();
    _messageController.clear();
    _firstNameController.clear();
    _lastNameController.clear();
    _emailController.clear();
    _companyController.clear();
    context.read<WhatsAppToolProvider>().clearOutput();
    setState(() {
      _showVCardFields = false;
    });
    _showSnackBar('Cleared all fields.');
  }

  void _copyLink() {
    final provider = context.read<WhatsAppToolProvider>();
    if (provider.generatedLink.isNotEmpty) {
      Clipboard.setData(ClipboardData(text: provider.generatedLink));
      _showSnackBar('Link copied to clipboard!');
    } else {
      _showSnackBar('No link to copy.', isError: true);
    }
  }

  Future<void> _downloadQrCode() async {
    final provider = context.read<WhatsAppToolProvider>();
    if (provider.barcodeData == null || provider.barcodeData!.isEmpty) {
      _showSnackBar('No QR Code to download.', isError: true);
      return;
    }

    _setLoading(true);
    try {
      RenderRepaintBoundary boundary = _qrCodeKey.currentContext!.findRenderObject() as RenderRepaintBoundary;
      ui.Image image = await boundary.toImage(pixelRatio: 3.0);
      ByteData? byteData = await image.toByteData(format: ui.ImageByteFormat.png);
      Uint8List pngBytes = byteData!.buffer.asUint8List();

      await ImageGallerySaver.saveImage(pngBytes, name: 'wassistant_qr_code');
      _showSnackBar('QR Code saved to gallery!');
    } catch (e) {
      _showSnackBar('Failed to save QR Code: $e', isError: true);
    } finally {
      _setLoading(false);
    }
  }
  
  String get _fullPhoneNumber => '$_countryCode${_numberController.text.trim()}';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          LayoutBuilder(
            builder: (context, constraints) {
              if (constraints.maxWidth > 800) {
                return _buildWideLayout();
              } else {
                return _buildNarrowLayout();
              }
            },
          ),
          if (_isLoading)
            Container(
              color: Colors.black.withOpacity(0.5),
              child: const Center(
                child: CircularProgressIndicator(),
              ),
            ),
        ],
      ),
    );
  }

  Widget _buildWideLayout() {
    return Row(
      children: [
        const Expanded(flex: 1, child: BannerAdWidget(adSize: AdSize.leaderboard)),
        Expanded(flex: 4, child: _buildMainContent()),
        const Expanded(flex: 1, child: BannerAdWidget(adSize: AdSize.leaderboard)),
      ],
    );
  }

  Widget _buildNarrowLayout() {
    return SafeArea(
      child: Column(
        children: [
          Expanded(child: _buildMainContent()),
          const BannerAdWidget(),
        ],
      ),
    );
  }

  Widget _buildMainContent() {
    return AbsorbPointer(
      absorbing: _isLoading,
      child: Container(
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surface,
          borderRadius: BorderRadius.circular(20.0),
        ),
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(30.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              RichText(
                textAlign: TextAlign.center,
                text: TextSpan(
                  children: [
                    TextSpan(
                      text: 'WA',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 48, color: Theme.of(context).colorScheme.primary, letterSpacing: 3.0),
                    ),
                    TextSpan(
                      text: 'ssistant',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 48, color: Theme.of(context).colorScheme.secondary, letterSpacing: 3.0),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 50),
              WhatsAppInputField(
                numberController: _numberController,
                firstNameController: _firstNameController,
                lastNameController: _lastNameController,
                emailController: _emailController,
                companyController: _companyController,
                showVCardFields: _showVCardFields,
                onCountryChanged: (CountryCode countryCode) {
                  setState(() {
                    _countryCode = countryCode.dialCode!;
                  });
                },
                onVCardToggle: (value) {
                  setState(() {
                    _showVCardFields = value;
                  });
                },
              ),
              const SizedBox(height: 20),
              MessageInputField(controller: _messageController),
              const SizedBox(height: 50),
              FeatureButtons(
                isLoading: _isLoading,
                onGenerateQrCode: () => context.read<WhatsAppToolProvider>().generateBarcodeForChat(
                      _fullPhoneNumber,
                      message: _messageController.text.trim(),
                    ),
                onGenerateLink: () => context.read<WhatsAppToolProvider>().generateChatLink(
                      _fullPhoneNumber,
                      message: _messageController.text.trim(),
                    ),
                onGenerateVCard: () => context.read<WhatsAppToolProvider>().generateVCardQrCode(
                      firstName: _firstNameController.text.trim(),
                      lastName: _lastNameController.text.trim(),
                      number: _fullPhoneNumber,
                      email: _emailController.text.trim(),
                      company: _companyController.text.trim(),
                    ),
                onOpenChat: () async {
                  _setLoading(true);
                  try {
                    final result = await context.read<WhatsAppToolProvider>().openWhatsAppChat(
                          _fullPhoneNumber,
                          message: _messageController.text.trim(),
                        );
                    if (result.startsWith('Error')) {
                      _showSnackBar(result, isError: true);
                    } else {
                      _showSnackBar(result);
                    }
                  } finally {
                    _setLoading(false);
                  }
                },
                onOpenChatWeb: () async {
                  _setLoading(true);
                  try {
                    final result = await context.read<WhatsAppToolProvider>().openWhatsAppChat(
                          _fullPhoneNumber,
                          message: _messageController.text.trim(),
                          isWeb: true,
                        );
                    if (result.startsWith('Error')) {
                      _showSnackBar(result, isError: true);
                    } else {
                      _showSnackBar(result);
                    }
                  } finally {
                    _setLoading(false);
                  }
                },
                onShowSnackBar: _showSnackBar,
                onClearAll: _clearAll,
                onCopyLink: _copyLink,
                onDownloadQrCode: _downloadQrCode,
              ),
              const SizedBox(height: 50),
              RepaintBoundary(
                key: _qrCodeKey,
                child: Consumer<WhatsAppToolProvider>(
                  builder: (context, provider, child) {
                    return OutputDisplay(
                      outputMessage: provider.outputMessage,
                      barcodeData: provider.barcodeData,
                    );
                  },
                ),
              ),
              const SizedBox(height: 30),
            ],
          ),
        ),
      ),
    );
  }
}
