import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:provider/provider.dart';

import 'pages/whatsapp_tool_home_page.dart';
import 'providers/whatsapp_tool_provider.dart';
import 'theme/app_theme.dart'; // Import the new theme file

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  MobileAds.instance.initialize();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => WhatsAppToolProvider()),
      ],
      child: MaterialApp(
        title: 'WAssisTant',
        debugShowCheckedModeBanner: false,
        theme: appTheme, // Use the theme from app_theme.dart
        home: const WhatsAppToolHomePage(),
      ),
    );
  }
}
