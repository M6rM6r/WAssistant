import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';

import 'whatsapp_tool_provider_test.mocks.dart';

@GenerateMocks([HistoryProvider, AppLocalizations])
void main() {
  late WhatsAppToolProvider provider;
  late MockHistoryProvider mockHistoryProvider;
  late MockAppLocalizations mockL10n;

  setUp(() {
    mockHistoryProvider = MockHistoryProvider();
    mockL10n = MockAppLocalizations();

    // OCPD: Standardized Mock Setup
    when(mockL10n.errorEmptyNumber).thenReturn('Phone number cannot be empty');
    when(mockL10n.errorInvalidLength).thenReturn('Invalid phone number length');
    when(mockL10n.errorNoDigits).thenReturn('Phone number must contain digits');
    when(mockL10n.errorInvalidFormat).thenReturn('Invalid phone number format');
    when(mockL10n.generatedLinkPrefix).thenReturn('Link: ');
    when(mockL10n.qrGeneratedPrefix).thenReturn('QR: ');
    when(mockL10n.vCardGenerated(any)).thenReturn('vCard generated');
    when(mockL10n.vCardMissingName).thenReturn('Name is required');

    provider = WhatsAppToolProvider(historyProvider: mockHistoryProvider);
  });

  group('WhatsAppToolProvider', () {
    group('generateChatLink', () {
      test('valid international number', () {
        provider.generateChatLink('+966501234567', mockL10n);
        expect(provider.generatedLink, contains('966501234567'));
        expect(provider.outputMessage, contains('Link:'));
        expect(provider.barcodeData, isNull);
      });

      test('adds history item', () async {
        when(mockHistoryProvider.addHistoryItem(any)).thenAnswer((_) async {});

        provider.generateChatLink('+966501234567', mockL10n);

        // Logical Delay for async history persistence
        await Future<void>.delayed(const Duration(milliseconds: 50));
        verify(mockHistoryProvider.addHistoryItem(any)).called(1);
      });
    });

    group('generateBarcodeForChat', () {
      test('generates QR for valid number', () {
        provider.generateBarcodeForChat('+966501234567', mockL10n);
        expect(provider.barcodeData, isNotNull);
        expect(provider.barcodeData, contains('966501234567'));
        expect(provider.generatedLink, isEmpty);
      });
    });

    group('generateVCardQrCode', () {
      test('all fields included', () {
        provider.generateVCardQrCode(
          mockL10n,
          firstName: 'John',
          lastName: 'Doe',
          number: '+966501234567',
          email: 'john@example.com',
          company: 'ACME',
          jobTitle: 'Dev',
          website: 'https://example.com',
        );
        expect(provider.barcodeData, contains('BEGIN:VCARD'));
        expect(provider.barcodeData, contains('FN:John Doe'));
        expect(provider.barcodeData, contains('EMAIL:john@example.com'));
      });
    });

    group('reuseHistoryItem', () {
      test('reuses link item', () {
        final item = HistoryItem(
          type: HistoryItemType.link,
          data: 'https://wa.me/966501234567',
          display: '966501234567',
          timestamp: DateTime.now(),
        );
        provider.reuseHistoryItem(item);
        expect(provider.generatedLink, item.data);
        expect(provider.barcodeData, isNull);
      });
    });
  });
}
