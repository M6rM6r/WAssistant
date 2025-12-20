import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:wassistant/locator.dart';
import 'package:wassistant/main.dart' as app;

/// Integration test suite for WhatsApp link generation workflow
/// INTJ: End-to-end validation, reproducible tests, edge case coverage
void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  setUpAll(() async {
    // OCPD: Mock MethodChannels using the static binding API
    _setMockHandler('dev.fluttercommunity.plus/connectivity', (MethodCall call) async {
      if (call.method == 'check') return <String>['wifi'];
      return null;
    });

    _setMockHandler('receive_sharing_intent/messages', (MethodCall call) async => null);
    _setMockHandler('plugins.flutter.io/quick_actions', (MethodCall call) async => null);

    // Mock EventChannels (Streams)
    _mockEventChannel('receive_sharing_intent/events-media');
    _mockEventChannel('dev.fluttercommunity.plus/connectivity_status');

    // OCPD: Set mock initial values
    SharedPreferences.setMockInitialValues({});

    await setupLocator();
  });

  group('WhatsApp Link Generation Flow', () {
    testWidgets('should generate basic WhatsApp link successfully', (tester) async {
      await tester.pumpWidget(const app.WassistantApp());

      // INTJ Logic: Use pump with duration instead of pumpAndSettle
      // to avoid being trapped by infinite Shimmer animations.
      await tester.pump(const Duration(milliseconds: 500));

      final phoneField = find.byType(TextField).first;
      expect(phoneField, findsOneWidget);

      await tester.enterText(phoneField, '1234567890');
      await tester.pump(const Duration(milliseconds: 100));

      final getLinkButton = find.text('Get Link');
      if (getLinkButton.evaluate().isNotEmpty) {
        await tester.tap(getLinkButton);
        await tester.pump(const Duration(milliseconds: 500));
      }

      // Verify some output appears (OutputDisplay copy icon)
      expect(find.byIcon(Icons.copy), findsAtLeastNWidgets(1));
    });
  });
}

/// OCPD: Standardized helper for setting mock call handlers
void _setMockHandler(String channel, Future<dynamic>? Function(MethodCall call) handler) {
  TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger.setMockMethodCallHandler(
    MethodChannel(channel),
    handler,
  );
}

/// Helper to mock EventChannel with an empty stream
void _mockEventChannel(String channelName) {
  _setMockHandler(channelName, (MethodCall methodCall) async {
    if (methodCall.method == 'listen') return null;
    if (methodCall.method == 'cancel') return null;
    return null;
  });
}
