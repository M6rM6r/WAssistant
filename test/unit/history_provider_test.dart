import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/repositories/history_repository.dart';

@GenerateMocks([HistoryRepository])
import 'history_provider_test.mocks.dart';

void main() {
  late HistoryProvider provider;
  late MockHistoryRepository mockRepository;

  setUp(() {
    mockRepository = MockHistoryRepository();
  });

  group('HistoryProvider', () {
    group('initialization', () {
      test('loads history from repository on creation', () async {
        final existingHistory = [
          HistoryItem(
            type: HistoryItemType.link,
            data: 'https://wa.me/1234567890',
            display: '1234567890',
            timestamp: DateTime.now(),
          ),
        ];

        when(
          mockRepository.getHistory(),
        ).thenAnswer((_) async => existingHistory);

        provider = HistoryProvider(mockRepository);

        // Wait for async initialization to complete
        await Future<void>.delayed(const Duration(milliseconds: 100));

        verify(mockRepository.getHistory()).called(1);
        expect(provider.history.length, 1);
        expect(provider.history.first.data, 'https://wa.me/1234567890');
      });

      test('handles empty history on load', () async {
        when(mockRepository.getHistory()).thenAnswer((_) async => []);

        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(provider.history, isEmpty);
      });

      test('handles repository error gracefully on load', () async {
        when(
          mockRepository.getHistory(),
        ).thenThrow(Exception('Database error'));

        // Should not throw
        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(provider.history, isEmpty);
      });
    });

    group('addHistoryItem', () {
      test('adds item to history and persists', () async {
        when(mockRepository.getHistory()).thenAnswer((_) async => []);
        when(mockRepository.addHistoryItem(any)).thenAnswer((_) async {});

        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        final newItem = HistoryItem(
          type: HistoryItemType.link,
          data: 'https://wa.me/9876543210',
          display: '9876543210',
          timestamp: DateTime.now(),
        );

        await provider.addHistoryItem(newItem);

        expect(provider.history.length, 1);
        expect(provider.history.first.data, 'https://wa.me/9876543210');
        verify(mockRepository.addHistoryItem(newItem)).called(1);
      });

      test('prevents duplicate items based on data', () async {
        final existingItem = HistoryItem(
          type: HistoryItemType.link,
          data: 'https://wa.me/1234567890',
          display: '1234567890',
          timestamp: DateTime.now(),
        );

        when(
          mockRepository.getHistory(),
        ).thenAnswer((_) async => [existingItem]);
        when(mockRepository.addHistoryItem(any)).thenAnswer((_) async {});

        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        final duplicateItem = HistoryItem(
          type: HistoryItemType.link,
          data: 'https://wa.me/1234567890', // Same data
          display: '1234567890',
          timestamp: DateTime.now().add(const Duration(hours: 1)),
        );

        await provider.addHistoryItem(duplicateItem);

        expect(provider.history.length, 1); // Still 1
        verifyNever(mockRepository.addHistoryItem(duplicateItem));
      });

      test('adds item at the beginning of history list', () async {
        final existingItem = HistoryItem(
          type: HistoryItemType.link,
          data: 'https://wa.me/1111111111',
          display: '1111111111',
          timestamp: DateTime.now(),
        );

        when(
          mockRepository.getHistory(),
        ).thenAnswer((_) async => [existingItem]);
        when(mockRepository.addHistoryItem(any)).thenAnswer((_) async {});

        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        final newItem = HistoryItem(
          type: HistoryItemType.qr,
          data: 'https://wa.me/2222222222',
          display: '2222222222',
          timestamp: DateTime.now(),
        );

        await provider.addHistoryItem(newItem);

        expect(provider.history.length, 2);
        expect(provider.history.first.data, 'https://wa.me/2222222222');
      });
    });

    group('removeHistoryItem', () {
      test('removes item from history and repository', () async {
        final item = HistoryItem(
          type: HistoryItemType.link,
          data: 'https://wa.me/1234567890',
          display: '1234567890',
          timestamp: DateTime(2024, 1, 1, 12),
        );

        when(mockRepository.getHistory()).thenAnswer((_) async => [item]);
        when(mockRepository.removeHistoryItem(any)).thenAnswer((_) async {});

        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(provider.history.length, 1);

        await provider.removeHistoryItem(item);

        expect(provider.history, isEmpty);
        verify(mockRepository.removeHistoryItem(item)).called(1);
      });

      test('removes correct item when multiple items exist', () async {
        final item1 = HistoryItem(
          type: HistoryItemType.link,
          data: 'https://wa.me/1111111111',
          display: '1111111111',
          timestamp: DateTime(2024, 1, 1, 12),
        );
        final item2 = HistoryItem(
          type: HistoryItemType.qr,
          data: 'https://wa.me/2222222222',
          display: '2222222222',
          timestamp: DateTime(2024, 1, 1, 13),
        );

        when(
          mockRepository.getHistory(),
        ).thenAnswer((_) async => [item1, item2]);
        when(mockRepository.removeHistoryItem(any)).thenAnswer((_) async {});

        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        await provider.removeHistoryItem(item1);

        expect(provider.history.length, 1);
        expect(provider.history.first.data, 'https://wa.me/2222222222');
      });
    });

    group('clearHistory', () {
      test('clears all history and repository', () async {
        final items = [
          HistoryItem(
            type: HistoryItemType.link,
            data: 'https://wa.me/1111111111',
            display: '1111111111',
            timestamp: DateTime.now(),
          ),
          HistoryItem(
            type: HistoryItemType.qr,
            data: 'https://wa.me/2222222222',
            display: '2222222222',
            timestamp: DateTime.now(),
          ),
        ];

        when(mockRepository.getHistory()).thenAnswer((_) async => items);
        when(mockRepository.clearHistory()).thenAnswer((_) async {});

        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(provider.history.length, 2);

        await provider.clearHistory();

        expect(provider.history, isEmpty);
        verify(mockRepository.clearHistory()).called(1);
      });
    });

    group('history property', () {
      test('returns unmodifiable list', () async {
        when(mockRepository.getHistory()).thenAnswer((_) async => []);

        provider = HistoryProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(
          () => provider.history.add(
            HistoryItem(
              type: HistoryItemType.link,
              data: 'test',
              display: 'test',
              timestamp: DateTime.now(),
            ),
          ),
          throwsUnsupportedError,
        );
      });
    });
  });
}
