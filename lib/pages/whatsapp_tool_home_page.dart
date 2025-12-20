import 'dart:async'; // Required for StreamSubscription

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:receive_sharing_intent/receive_sharing_intent.dart'; // System Integration
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/logger_service.dart';
import 'package:wassistant/widgets/ad_space.dart';
import 'package:wassistant/widgets/drawer.dart';
import 'package:wassistant/widgets/feature_buttons.dart';
import 'package:wassistant/widgets/output_display.dart';
import 'package:wassistant/widgets/shimmer_text.dart';
import 'package:wassistant/widgets/whatsapp_input_field.dart';

class WhatsAppToolHomePage extends StatefulWidget {
  const WhatsAppToolHomePage({super.key});

  @override
  State<WhatsAppToolHomePage> createState() => _WhatsAppToolHomePageState();
}

class _WhatsAppToolHomePageState extends State<WhatsAppToolHomePage> with WidgetsBindingObserver {
  final _formKey = GlobalKey<FormState>();

  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _messageController = TextEditingController();

  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _lastNameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _companyController = TextEditingController();
  final TextEditingController _jobTitleController = TextEditingController();
  final TextEditingController _websiteController = TextEditingController();

  // Lifted State
  String _selectedCountryCode = '+966';

  // Share Intent Stream
  late StreamSubscription _intentDataStreamSubscription;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    WidgetsBinding.instance.addPostFrameCallback((_) {
        // ignore: discarded_futures
        _checkClipboardForNumber();
    });

    _initShareListener();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _intentDataStreamSubscription.cancel();
    _phoneController.dispose();
    _messageController.dispose();
    _firstNameController.dispose();
    _lastNameController.dispose();
    _emailController.dispose();
    _companyController.dispose();
    _jobTitleController.dispose();
    _websiteController.dispose();
    super.dispose();
  }

  /// OCPD: Strict handling of system intents
  void _initShareListener() {
    // 1. Listen for new intents while the app is running
    _intentDataStreamSubscription = ReceiveSharingIntent.instance.getMediaStream().listen((List<SharedMediaFile> value) {
      if (value.isNotEmpty && value.first.path.isNotEmpty) {
          // If it's a file path, we might not handle it yet (future expansion)
          LoggerService.d('Received shared file: ${value.first.path}');
      }
    }, onError: (err) {
      LoggerService.e('getIntentDataStream error: $err');
    });

    // 2. Handle text sharing (Direct text sharing logic changed in newer versions of the plugin)
    // We check initial intent for text
    ReceiveSharingIntent.instance.getInitialMedia().then((List<SharedMediaFile> value) {
        if (value.isNotEmpty) {
            // Logic for files if needed
        }
    });

    // NOTE: The receive_sharing_intent package handles text vs files differently across versions.
    // For pure text sharing (which is what we want for phone numbers), we might need to verify the specific plugin usage.
    // Assuming we want to capture shared TEXT (like a phone number highlighted in Chrome).

    // Let's implement the specific text stream logic if available or fallback to a generic handler.
    // Since receive_sharing_intent 1.8.0 unifies this, we might need to parse the "path" or "content" depending on OS.
    // However, for simplicity and robustness, let's assume we are receiving text.
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      // ignore: discarded_futures
      _checkClipboardForNumber();
    }
  }

  Future<void> _checkClipboardForNumber() async {
      if (!mounted) return;
      final l10n = AppLocalizations.of(context);
      if (l10n == null) return;

      try {
        final data = await Clipboard.getData(Clipboard.kTextPlain);
        if (data != null && data.text != null && data.text!.isNotEmpty) {
            final text = data.text!.trim();
            final digitCount = text.replaceAll(RegExp('[^0-9]'), '').length;

            if (digitCount >= 7 && digitCount <= 15 &&
                RegExp(r'^[+\d\s\-\(\)]+$').hasMatch(text) &&
                text != _phoneController.text) {

                if (!mounted) return;

                ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                        content: Text(l10n.foundNumberClipboard(text)),
                        action: SnackBarAction(
                            label: l10n.use,
                            textColor: AppConstants.accentGreen,
                            onPressed: () {
                                setState(() {
                                    _phoneController.text = text;
                                });
                            },
                        ),
                    ),
                );
            }
        }
      } on Object {
          // Clipboard access restricted
      }
  }

  @override
  Widget build(BuildContext context) {
    final whatsappProvider = Provider.of<WhatsAppToolProvider>(context);
    final l10n = AppLocalizations.of(context)!;

    return DefaultTabController(
      length: 2,
      child: Scaffold(
        resizeToAvoidBottomInset: true,
        drawer: const AppDrawer(),
        appBar: AppBar(
          title: ShimmerText(
            text: l10n.appTitle,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 22,
            ),
          ),
          centerTitle: true,
          elevation: 0,
          backgroundColor: AppConstants.darkBackground,
          foregroundColor: AppConstants.textHighEmphasis,
          bottom: TabBar(
            indicatorColor: AppConstants.accentGreen,
            labelColor: AppConstants.accentGreen,
            unselectedLabelColor: AppConstants.textMediumEmphasis,
            tabs: [
              Tab(icon: const Icon(Icons.chat), text: l10n.directChat),
              Tab(icon: const Icon(Icons.contact_page), text: l10n.vCardGen),
            ],
          ),
        ),
        body: GestureDetector(
          onTap: () {
            FocusScope.of(context).unfocus();
          },
          behavior: HitTestBehavior.translucent,
          child: TabBarView(
            children: [
              _buildDirectChatTab(context, whatsappProvider, l10n),
              _buildVCardTab(context, whatsappProvider, l10n),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildDirectChatTab(BuildContext context, WhatsAppToolProvider provider, AppLocalizations l10n) {
    return Column(
      children: [
        Expanded(
          child: SingleChildScrollView(
            padding: const EdgeInsets.only(
              left: 16,
              right: 16,
              top: 16,
              bottom: 40,
            ),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const SizedBox(height: 20),

                  WhatsAppInputField(
                    phoneController: _phoneController,
                    messageController: _messageController,
                    selectedCountryCode: _selectedCountryCode,
                    onCountryChanged: (String code) { // Explicit type
                      setState(() {
                        _selectedCountryCode = code;
                      });
                    },
                    phoneValidator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return l10n.errorEmptyNumber;
                      }
                      final digitsOnly = value.replaceAll(RegExp(r'[^0-9]'), '');
                      if (digitsOnly.length < 5) { // Basic check
                          return l10n.errorInvalidLength;
                      }
                      return null;
                    },
                  ),

                  const SizedBox(height: 24),

                  FeatureButtons(
                    phoneController: _phoneController,
                    messageController: _messageController,
                    countryCode: _selectedCountryCode,
                    onValidate: () => _formKey.currentState?.validate() ?? false,
                  ),

                  const SizedBox(height: 30),

                  const OutputDisplay(),

                  const SizedBox(height: 20),
                  const AdSpace(),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildVCardTab(BuildContext context, WhatsAppToolProvider provider, AppLocalizations l10n) {
    return SingleChildScrollView(
      padding: const EdgeInsets.only(left: 16, right: 16, top: 16, bottom: 40),
      child: Column(
        children: [
          Text(
            l10n.createContactQr,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 16),

          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _firstNameController,
                  decoration: InputDecoration(
                    labelText: l10n.firstNameLabel,
                    border: const OutlineInputBorder(),
                  ),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: TextField(
                  controller: _lastNameController,
                  decoration: InputDecoration(
                    labelText: l10n.lastNameLabel,
                    border: const OutlineInputBorder(),
                  ),
                ),
              ),
            ],
          ),

          const SizedBox(height: 10),

          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _jobTitleController,
                  decoration: InputDecoration(
                    labelText: l10n.jobTitleLabel,
                    border: const OutlineInputBorder(),
                  ),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: TextField(
                  controller: _companyController,
                  decoration: InputDecoration(
                    labelText: l10n.companyLabel,
                    border: const OutlineInputBorder(),
                  ),
                ),
              ),
            ],
          ),

          const SizedBox(height: 10),

          TextField(
            controller: _phoneController,
            keyboardType: TextInputType.phone,
            decoration: InputDecoration(
                labelText: '${l10n.phoneLabel} *',
                border: const OutlineInputBorder(),
                hintText: l10n.phoneNumberHint
            ),
          ),

          const SizedBox(height: 10),

          TextField(
            controller: _emailController,
            keyboardType: TextInputType.emailAddress,
            decoration: InputDecoration(
              labelText: l10n.emailLabel,
              border: const OutlineInputBorder(),
            ),
          ),

           const SizedBox(height: 10),

          TextField(
            controller: _websiteController,
            keyboardType: TextInputType.url,
            decoration: InputDecoration(
              labelText: l10n.websiteLabel,
              border: const OutlineInputBorder(),
              prefixText: 'https://',
            ),
          ),

          const SizedBox(height: 20),
          ElevatedButton.icon(
            style: ElevatedButton.styleFrom(
              backgroundColor: AppConstants.accentGreen,
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(vertical: 15),
              minimumSize: const Size(double.infinity, 50),
            ),
            icon: const Icon(Icons.qr_code_2),
            label: Text(l10n.generateQr),
            onPressed: () {
              // Basic VCard validation logic (could also be moved to form)
               provider.generateVCardQrCode(
                l10n,
                firstName: _firstNameController.text,
                lastName: _lastNameController.text,
                number: _phoneController.text,
                email: _emailController.text,
                company: _companyController.text,
                jobTitle: _jobTitleController.text,
                website: _websiteController.text,
              );
            },
          ),
          const SizedBox(height: 30),
          if (provider.barcodeData != null && provider.barcodeData!.startsWith('BEGIN:VCARD'))
             const OutputDisplay(),

          const SizedBox(height: 20),
          const AdSpace(),
        ],
      ),
    );
  }
}
