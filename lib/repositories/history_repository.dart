import 'package:wassistant/models/history_item.dart';

abstract class HistoryRepository {
  Future<List<HistoryItem>> getHistory();
  Future<void> addHistoryItem(HistoryItem item);
  Future<void> removeHistoryItem(HistoryItem item);
  Future<void> clearHistory();
}
