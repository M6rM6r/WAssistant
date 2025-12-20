import 'dart:async';

import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:provider/provider.dart';
import 'package:sentry_flutter/sentry_flutter.dart';
import 'package:upgrader/upgrader.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/locator.dart';
import 'package:wassistant/pages/whatsapp_tool_home_page.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/providers/template_provider.dart';
import 'package:wassistant/providers/theme_provider.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/repositories/history_repository.dart';
import 'package:wassistant/repositories/template_repository.dart';
import 'package:wassistant/services/engagement_service.dart';
import 'package:wassistant/services/network_service.dart';
import 'package:wassistant/utils/app_theme.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/error_handler.dart';
import 'package:wassistant/utils/logger_service.dart';

Future<void> main() async {
  runZonedGuarded(
    () async {
      WidgetsFlutterBinding.ensureInitialized();

      try {
        await dotenv.load();
      } on Object {
        LoggerService.w('No .env file found. Using default settings.');
      }

      final sentryDsn = _getEnv('SENTRY_DSN');
      if (sentryDsn.isNotEmpty) {
        await SentryFlutter.init(
          (options) =>
              options
                ..dsn = sentryDsn
                ..tracesSampleRate = 0.2,
        );
      }

      try {
        if (!kIsWeb) {
          await Firebase.initializeApp();
          LoggerService.i('Firebase initialized.');
        }
      } on Object catch (e) {
        LoggerService.w('Firebase init failed: $e');
      }

      SystemChrome.setSystemUIOverlayStyle(
        const SystemUiOverlayStyle(
          statusBarColor: Colors.transparent,
          statusBarIconBrightness: Brightness.light,
          systemNavigationBarColor: AppConstants.darkBackground,
          systemNavigationBarIconBrightness: Brightness.light,
          systemNavigationBarDividerColor: Colors.transparent,
        ),
      );

      await setupLocator();

      final engagementService = locator<EngagementService>();

      if (!kIsWeb) {
        try {
          await MobileAds.instance.initialize();
        } on Object catch (e, st) {
          LoggerService.e('AdMob init failed', e, st);
        }
      }

      await engagementService.recordAppOpen();

      runApp(const WassistantApp());
    },
    (error, stack) async {
      LoggerService.e('Global Error Caught', error, stack);
      if (Sentry.isEnabled) {
        await Sentry.captureException(error, stackTrace: stack);
      }
      ErrorHandler.handleError(error, stack);
    },
  );
}

/// Helper to safely access env vars even in test environments
String _getEnv(String key) {
  try {
    return dotenv.env[key] ?? '';
  } catch (_) {
    return '';
  }
}

class WassistantApp extends StatelessWidget {
  const WassistantApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
        ChangeNotifierProvider.value(value: locator<NetworkService>()),
        ChangeNotifierProvider(create: (_) => HistoryProvider(locator<HistoryRepository>())),
        ChangeNotifierProvider(create: (_) => TemplateProvider(locator<TemplateRepository>()),
        ),
        ChangeNotifierProxyProvider<HistoryProvider, WhatsAppToolProvider>(
          create: (context) => WhatsAppToolProvider(),
          update: (context, history, tool) {
            return (tool ?? WhatsAppToolProvider())..historyProvider = history;
          },
        ),
      ],
      child: const _WassistantMaterialApp(),
    );
  }
}

class _WassistantMaterialApp extends StatelessWidget {
  const _WassistantMaterialApp();

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);
    return MaterialApp(
      title: AppConstants.appName,
      debugShowCheckedModeBanner: false,
      navigatorObservers: [if (Sentry.isEnabled) SentryNavigatorObserver()],
      localizationsDelegates: const [
        AppLocalizations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [
        Locale('en'), // OCPD: Strictly English only. Redundant locales purged.
      ],
      themeMode: themeProvider.themeMode,
      theme: AppTheme.darkTheme,
      home: UpgradeAlert(child: const WhatsAppToolHomePage()),
    );
  }
}
