import 'dart:convert';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/repositories/history_repository.dart';
import 'package:wassistant/services/local_storage_service.dart';

class LocalHistoryRepository implements HistoryRepository {
  LocalHistoryRepository(this._storage);

  final LocalStorageService _storage;
  static const String _key = 'history';

  @override
  Future<List<HistoryItem>> getHistory() async {
    final raw = _storage.getStringList(_key) ?? [];
    return raw
        .map((s) => HistoryItem.fromJson(jsonDecode(s) as Map<String, dynamic>))
        .toList();
  }

  @override
  Future<void> addHistoryItem(HistoryItem item) async {
    final raw =
        _storage.getStringList(_key) ?? []
          ..insert(0, jsonEncode(item.toJson()));
    await _storage.setStringList(_key, raw);
  }

  @override
  Future<void> removeHistoryItem(HistoryItem item) async {
    final raw =
        _storage.getStringList(_key) ?? []
          ..removeWhere((s) {
            final decoded = HistoryItem.fromJson(
              jsonDecode(s) as Map<String, dynamic>,
            );
            return decoded.data == item.data &&
                decoded.timestamp == item.timestamp;
          });
    await _storage.setStringList(_key, raw);
  }

  @override
  Future<void> clearHistory() async {
    await _storage.remove(_key);
  }
}
