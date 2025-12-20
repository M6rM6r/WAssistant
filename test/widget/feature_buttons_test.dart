import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/widgets/feature_buttons.dart';

void main() {
  late TextEditingController phoneController;
  late TextEditingController messageController;
  late WhatsAppToolProvider provider;

  setUp(() {
    phoneController = TextEditingController();
    messageController = TextEditingController();
    provider = WhatsAppToolProvider();
  });

  tearDown(() {
    phoneController.dispose();
    messageController.dispose();
    provider.dispose();
  });

  Widget createTestWidget({
    bool Function()? onValidate,
    String countryCode = '+1',
  }) {
    return MaterialApp(
      localizationsDelegates: const [
        AppLocalizations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [Locale('en'), Locale('ar')],
      locale: const Locale('en'),
      home: Scaffold(
        body: ChangeNotifierProvider<WhatsAppToolProvider>.value(
          value: provider,
          child: Builder(
            builder: (context) {
              return FeatureButtons(
                phoneController: phoneController,
                messageController: messageController,
                countryCode: countryCode,
                onValidate: onValidate,
              );
            },
          ),
        ),
      ),
    );
  }

  group('FeatureButtons Precision Audit', () {
    testWidgets('renders all core action buttons with semantic integrity', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // OCPD: Check for Icons instead of potentially shifting text
      expect(find.byIcon(FontAwesomeIcons.whatsapp), findsOneWidget);
      expect(find.byIcon(Icons.link), findsOneWidget);
      expect(find.byIcon(Icons.qr_code), findsOneWidget);
    });

    testWidgets('triggers validation callback on interaction', (tester) async {
      bool validationCalled = false;

      await tester.pumpWidget(
        createTestWidget(
          onValidate: () {
            validationCalled = true;
            return true;
          },
        ),
      );
      await tester.pumpAndSettle();

      // Tap 'Open Chat'
      await tester.tap(find.byIcon(FontAwesomeIcons.whatsapp));
      await tester.pumpAndSettle();

      expect(validationCalled, isTrue);
    });

    testWidgets('respects validation guardrails', (tester) async {
      await tester.pumpWidget(createTestWidget(onValidate: () => false));
      await tester.pumpAndSettle();

      await tester.tap(find.byIcon(Icons.link));
      await tester.pumpAndSettle();

      // Logic: provider should remain empty if validation fails
      expect(provider.generatedLink, isEmpty);
    });
  });
}
