import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:receive_sharing_intent/receive_sharing_intent.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/locator.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/services/analytics_service.dart';
import 'package:wassistant/services/engagement_service.dart';
import 'package:wassistant/services/network_service.dart';
import 'package:wassistant/services/quick_actions_service.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/logger_service.dart';
import 'package:wassistant/utils/responsive_layout.dart';
import 'package:wassistant/utils/validators.dart';
import 'package:wassistant/widgets/banner_ad_widget.dart';
import 'package:wassistant/widgets/drawer.dart';
import 'package:wassistant/widgets/feature_buttons.dart';
import 'package:wassistant/widgets/output_display.dart';
import 'package:wassistant/widgets/shimmer_text.dart';
import 'package:wassistant/widgets/whatsapp_input_field.dart';

/// OCPD: Root page optimized for zero-latency core workflows.
/// INTJ: Strategic placement of features based on usage metrics.
class WhatsAppToolHomePage extends StatefulWidget {
  const WhatsAppToolHomePage({super.key});

  @override
  State<WhatsAppToolHomePage> createState() => _WhatsAppToolHomePageState();
}

class _WhatsAppToolHomePageState extends State<WhatsAppToolHomePage>
    with WidgetsBindingObserver, SingleTickerProviderStateMixin {
  final _formKey = GlobalKey<FormState>();
  late final TabController _tabController;

  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _messageController = TextEditingController();

  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _lastNameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _companyController = TextEditingController();
  final TextEditingController _jobTitleController = TextEditingController();
  final TextEditingController _websiteController = TextEditingController();

  String _selectedCountryCode = '+966';
  StreamSubscription<List<SharedMediaFile>>? _intentDataStreamSubscription;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
    WidgetsBinding.instance.addObserver(this);

    WidgetsBinding.instance.addPostFrameCallback((_) {
      // OCPD: Systematic engagement tracking
      unawaited(locator<EngagementService>().maybePromptForReview());

      // INTJ Strategy: Handle Quick Actions from home screen
      locator<QuickActionsService>().initialize((index) {
        if (mounted) {
          setState(() => _tabController.animateTo(index));
        }
      });

      // Track screen entry
      locator<AnalyticsService>().logScreenView(screenName: 'Home');
    });

    _initShareListener();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    unawaited(_intentDataStreamSubscription?.cancel());
    _tabController.dispose();
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

  void _initShareListener() {
    _intentDataStreamSubscription = ReceiveSharingIntent.instance.getMediaStream().listen(
      (value) {
        if (value.isNotEmpty) {
          _processSharedText(value.first.path);
        }
      },
      onError: (Object err) => LoggerService.e('getIntentDataStream error: $err'),
    );

    unawaited(
      ReceiveSharingIntent.instance.getInitialMedia().then((value) {
        if (value.isNotEmpty) {
          _processSharedText(value.first.path);
        }
      }),
    );
  }

  /// INTJ Logic: Process incoming text from other apps (Direct Share)
  void _processSharedText(String text) {
    LoggerService.i('Processing shared content: $text');
    final cleaned = Validators.cleanPhone(text);
    if (cleaned != null) {
      setState(() {
        _phoneController.text = cleaned;
        _tabController.animateTo(0);
      });
      LoggerService.i('Populated phone from shared intent.');
    }
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;

    return Scaffold(
      resizeToAvoidBottomInset: true,
      drawer: const AppDrawer(),
      appBar: AppBar(
        title: ShimmerText(
          text: l10n.appTitle,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 22),
        ),
        centerTitle: true,
        elevation: 0,
        backgroundColor: AppConstants.darkBackground,
        foregroundColor: AppConstants.textHighEmphasis,
        bottom: TabBar(
          controller: _tabController,
          indicatorColor: AppConstants.accentGreen,
          labelColor: AppConstants.accentGreen,
          unselectedLabelColor: AppConstants.textMediumEmphasis,
          tabs: [
            Tab(icon: const Icon(Icons.chat), text: l10n.directChat),
            Tab(icon: const Icon(Icons.contact_page), text: l10n.vCardGen),
          ],
        ),
      ),
      body: Column(
        children: [
          Selector<NetworkService, bool>(
            selector: (_, net) => net.isOnline,
            builder: (context, isOnline, _) {
              final offline = !isOnline;
              return AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                height: offline ? 40 : 0,
                width: double.infinity,
                color: Colors.orange.shade700,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                alignment: Alignment.centerLeft,
                child: offline
                    ? const Row(
                        children: [
                          Icon(Icons.wifi_off, color: Colors.white),
                          SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              'You are offline. Some actions may pause.',
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                            ),
                          ),
                        ],
                      )
                    : const SizedBox.shrink(),
              );
            },
          ),
          Expanded(
            child: GestureDetector(
              onTap: () => FocusScope.of(context).unfocus(),
              behavior: HitTestBehavior.translucent,
              child: TabBarView(
                controller: _tabController,
                children: [
                  _buildDirectChatTab(context, l10n),
                  _buildVCardTab(context, l10n),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDirectChatTab(BuildContext context, AppLocalizations l10n) {
    final layout = context.responsive;

    return Column(
      children: [
        Expanded(
          child: SingleChildScrollView(
            padding: EdgeInsets.only(
              left: layout.horizontalPadding,
              right: layout.horizontalPadding,
              top: layout.verticalPadding,
              bottom: layout.spacing(40),
            ),
            child: ResponsiveContainer(
              padding: EdgeInsets.zero,
              child: Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    SizedBox(height: layout.spacing(20)),
                    WhatsAppInputField(
                      phoneController: _phoneController,
                      messageController: _messageController,
                      selectedCountryCode: _selectedCountryCode,
                      onCountryChanged: (String code) {
                        setState(() => _selectedCountryCode = code);
                      },
                      phoneValidator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return l10n.errorEmptyNumber;
                        }
                        final digitsOnly = value.replaceAll(RegExp('[^0-9]'), '');
                        if (digitsOnly.length < 5) return l10n.errorInvalidLength;
                        return null;
                      },
                    ),
                    SizedBox(height: layout.spacing(24)),
                    FeatureButtons(
                      phoneController: _phoneController,
                      messageController: _messageController,
                      countryCode: _selectedCountryCode,
                      onValidate: () => _formKey.currentState?.validate() ?? false,
                    ),
                    SizedBox(height: layout.spacing(30)),
                    const OutputDisplay(),
                    SizedBox(height: layout.spacing(20)),
                  ],
                ),
              ),
            ),
          ),
        ),
        const BannerAdWidget(),
      ],
    );
  }

  Widget _buildVCardTab(BuildContext context, AppLocalizations l10n) {
    final layout = context.responsive;

    return Column(
      children: [
        Expanded(
          child: SingleChildScrollView(
            padding: EdgeInsets.only(
              left: layout.horizontalPadding,
              right: layout.horizontalPadding,
              top: layout.verticalPadding,
              bottom: layout.spacing(40),
            ),
            child: ResponsiveContainer(
              padding: EdgeInsets.zero,
              child: Column(
                children: [
                  Semantics(
                    header: true,
                    child: Text(
                      l10n.createContactQr,
                      style: TextStyle(fontSize: layout.fontSize(18), fontWeight: FontWeight.bold),
                    ),
                  ),
                  SizedBox(height: layout.spacing(16)),
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
                      SizedBox(width: layout.spacing(10)),
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
                  SizedBox(height: layout.spacing(10)),
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
                      SizedBox(width: layout.spacing(10)),
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
                  SizedBox(height: layout.spacing(10)),
                  TextField(
                    controller: _phoneController,
                    keyboardType: TextInputType.phone,
                    decoration: InputDecoration(
                      labelText: '${l10n.phoneLabel} *',
                      border: const OutlineInputBorder(),
                      hintText: l10n.phoneNumberHint,
                    ),
                  ),
                  SizedBox(height: layout.spacing(10)),
                  TextField(
                    controller: _emailController,
                    keyboardType: TextInputType.emailAddress,
                    decoration: InputDecoration(
                      labelText: l10n.emailLabel,
                      border: const OutlineInputBorder(),
                    ),
                  ),
                  SizedBox(height: layout.spacing(10)),
                  TextField(
                    controller: _websiteController,
                    keyboardType: TextInputType.url,
                    decoration: InputDecoration(
                      labelText: l10n.websiteLabel,
                      border: const OutlineInputBorder(),
                      prefixText: 'https://',
                    ),
                  ),
                  SizedBox(height: layout.spacing(20)),
                  Semantics(
                    button: true,
                    label: l10n.generateQr,
                    child: ElevatedButton.icon(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppConstants.accentGreen,
                        foregroundColor: Colors.white,
                        padding: EdgeInsets.symmetric(vertical: layout.spacing(15)),
                        minimumSize: const Size(double.infinity, 50),
                      ),
                      icon: Icon(Icons.qr_code_2, size: layout.iconSize(24)),
                      label: Text(l10n.generateQr, style: TextStyle(fontSize: layout.fontSize(16))),
                      onPressed: () {
                        unawaited(HapticFeedback.mediumImpact());
                        context.read<WhatsAppToolProvider>().generateVCardQrCode(
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
                  ),
                  SizedBox(height: layout.spacing(30)),
                  Selector<WhatsAppToolProvider, String?>(
                    selector: (_, p) => p.barcodeData,
                    builder: (context, barcodeData, _) {
                      if (barcodeData != null && barcodeData.startsWith('BEGIN:VCARD')) {
                        return const OutputDisplay();
                      }
                      return const SizedBox.shrink();
                    },
                  ),
                  SizedBox(height: layout.spacing(20)),
                ],
              ),
            ),
          ),
        ),
        const BannerAdWidget(),
      ],
    );
  }
}
