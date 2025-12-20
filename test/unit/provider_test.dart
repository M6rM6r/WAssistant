import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';

// Generate Mocks
@GenerateMocks([HistoryProvider, AppLocalizations])
import 'provider_test.mocks.dart';

void main() {
  group('WhatsAppToolProvider Logic', () {
    late WhatsAppToolProvider provider;
    late MockHistoryProvider mockHistory;
    late MockAppLocalizations mockL10n;

    setUp(() {
      mockHistory = MockHistoryProvider();
      mockL10n = MockAppLocalizations();
      provider = WhatsAppToolProvider(historyProvider: mockHistory);

      // Setup default mock responses for l10n
      when(mockL10n.errorEmptyNumber).thenReturn('Empty Number');
      when(mockL10n.errorNoDigits).thenReturn('No Digits');
      when(mockL10n.errorInvalidFormat).thenReturn('Invalid Format');
      when(mockL10n.errorInvalidLength).thenReturn('Invalid Length');
      when(mockL10n.generatedLinkPrefix).thenReturn('Link: ');
    });

    test('validates empty number correctly', () {
      provider.generateChatLink('', mockL10n);
      expect(provider.outputMessage, 'Empty Number');
      expect(provider.generatedLink, isEmpty);
    });

    test('validates invalid characters', () {
      provider.generateChatLink('abc', mockL10n);
      expect(provider.outputMessage, 'No Digits');
    });

    test('validates short numbers', () {
      provider.generateChatLink('123', mockL10n);
      expect(provider.outputMessage, 'Invalid Length');
    });

    test('generates link for valid number', () {
      provider.generateChatLink('+1234567890', mockL10n);
      expect(provider.generatedLink, contains('wa.me/1234567890'));
      expect(provider.outputMessage, contains('Link: '));

      // Verify history was called
      verify(mockHistory.addHistoryItem(any)).called(1);
    });

    test('generates link with message', () {
      provider.generateChatLink('1234567890', mockL10n, message: 'Hello');
      expect(provider.generatedLink, contains('text=Hello'));
    });
  });
}
