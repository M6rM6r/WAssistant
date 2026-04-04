import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/locator.dart';
import 'package:wassistant/pages/whatsapp_tool_home_page.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/providers/template_provider.dart';
import 'package:wassistant/providers/theme_provider.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/repositories/history_repository.dart';
import 'package:wassistant/repositories/template_repository.dart';
import 'package:wassistant/services/network_service.dart';
import 'package:wassistant/theme/app_theme.dart';
import 'package:wassistant/utils/constants.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await setupLocator();

  final historyRepository = locator<HistoryRepository>();
  final templateRepository = locator<TemplateRepository>();
  final networkService = locator<NetworkService>();

  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
        ChangeNotifierProvider.value(value: networkService),
        ChangeNotifierProvider(create: (_) => HistoryProvider(historyRepository)),
        ChangeNotifierProvider(create: (_) => TemplateProvider(templateRepository)),
        ChangeNotifierProxyProvider<HistoryProvider, WhatsAppToolProvider>(
          create: (context) => WhatsAppToolProvider(),
          update:
              (context, history, tool) =>
                  (tool ?? WhatsAppToolProvider())..historyProvider = history,
        ),
      ],
      child: const WebApp(),
    ),
  );
}

class WebApp extends StatelessWidget {
  const WebApp({super.key});

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);

    return MaterialApp(
      title: AppConstants.appName,
      debugShowCheckedModeBanner: false,

      // CRITICAL: Restore missing localization delegates
      localizationsDelegates: const [
        AppLocalizations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [Locale('en'), Locale('es')],

      themeMode: themeProvider.themeMode,
      theme: AppTheme.darkTheme,
      home: const WhatsAppToolHomePage(),
    );
  }
}
