import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart'; // Env vars
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:provider/provider.dart';
import 'package:sentry_flutter/sentry_flutter.dart'; // Crash Reporting
import 'package:upgrader/upgrader.dart'; // Update prompts
import 'package:wiredash/wiredash.dart'; // Feedback Loop
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/locator.dart';
import 'package:wassistant/pages/whatsapp_tool_home_page.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/providers/template_provider.dart';
import 'package:wassistant/providers/theme_provider.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/services/isar_service.dart';
import 'package:wassistant/services/local_storage_service.dart';
import 'package:wassistant/utils/app_theme.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/error_handler.dart';
import 'package:wassistant/utils/logger_service.dart';

Future<void> main() async {
  // Fire and forget runZonedGuarded as it runs the app loop
  // ignore: unawaited_futures
  runZonedGuarded(() async {
    WidgetsFlutterBinding.ensureInitialized();

    // Load Environment Variables
    try {
      await dotenv.load();
    } on Object {
      LoggerService.w('No .env file found. Using default settings.');
    }

    // OCPD: UI Stability
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
      systemNavigationBarColor: AppConstants.darkBackground,
      systemNavigationBarIconBrightness: Brightness.light,
      systemNavigationBarDividerColor: Colors.transparent,
    ));

    await setupLocator();

    final localStorage = locator<LocalStorageService>();
    final isarService = locator<IsarService>();

    if (!kIsWeb) {
      try {
        await MobileAds.instance.initialize();
      } on Object catch (e) {
        LoggerService.e('AdMob init failed', e);
      }
    }

    final sentryDsn = dotenv.env['SENTRY_DSN'];

    // Only initialize Sentry if a DSN is provided
    if (sentryDsn != null && sentryDsn.isNotEmpty) {
      await SentryFlutter.init(
        (options) {
          options
            ..dsn = sentryDsn
            ..tracesSampleRate = 1.0
            ..debug = kDebugMode;
        },
        appRunner: () => runApp(_buildApp(localStorage, isarService)),
      );
    } else {
      LoggerService.i('Sentry DSN not found. Running without crash reporting.');
      runApp(_buildApp(localStorage, isarService));
    }

  }, (error, stack) async {
    LoggerService.e('Uncaught error', error, stack);
    if (dotenv.env['SENTRY_DSN']?.isNotEmpty ?? false) {
       await Sentry.captureException(error, stackTrace: stack);
    }
    ErrorHandler.handleError(error, stack);
  });
}

Widget _buildApp(LocalStorageService localStorage, IsarService isarService) {
  return MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => ThemeProvider()),
      ChangeNotifierProvider(create: (_) => HistoryProvider(isarService)),
      ChangeNotifierProvider(create: (_) => TemplateProvider(localStorage)),
      ChangeNotifierProxyProvider<HistoryProvider, WhatsAppToolProvider>(
        create: (context) => WhatsAppToolProvider(
          historyProvider: Provider.of<HistoryProvider>(
            context,
            listen: false,
          ),
        ),
        update: (context, history, tool) {
          if (tool == null) throw ArgumentError.notNull('tool');
          tool.historyProvider = history;
          return tool;
        },
      ),
    ],
    child: const WassistantApp(),
  );
}

class WassistantApp extends StatelessWidget {
  const WassistantApp({super.key});

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);
    final wiredashId = dotenv.env['WIREDASH_PROJECT_ID'] ?? '';
    final wiredashSecret = dotenv.env['WIREDASH_SECRET'] ?? '';

    // Advanced Feedback Loop
    return Wiredash(
      projectId: wiredashId,
      secret: wiredashSecret,
      theme: WiredashThemeData(
        brightness: Brightness.dark,
        primaryColor: AppConstants.accentGreen,
        secondaryColor: AppConstants.primaryTeal,
      ),
      child: MaterialApp(
        title: AppConstants.appName,
        debugShowCheckedModeBanner: false,

        localizationsDelegates: const [
          AppLocalizations.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
        ],
        supportedLocales: const [
          Locale('en'),
          Locale('es'),
        ],

        themeMode: themeProvider.themeMode,
        theme: AppTheme.darkTheme,

        // UpgradeAlert checks for app updates automatically
        home: UpgradeAlert(
          child: const WhatsAppToolHomePage(),
        ),
      ),
    );
  }
}
