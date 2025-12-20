import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/repositories/history_repository.dart';

/// OCPD: Deprecated Isar implementation due to Web integer overflow issues.
/// INTJ Strategy: Fallback to SharedPreferences for stability.
class IsarHistoryRepository implements HistoryRepository {
  @override
  Future<List<HistoryItem>> getHistory() async => [];

  @override
  Future<void> addHistoryItem(HistoryItem item) async {}

  @override
  Future<void> removeHistoryItem(HistoryItem item) async {}

  @override
  Future<void> clearHistory() async {}
}
