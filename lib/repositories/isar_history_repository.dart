import 'package:wassistant/models/history_entity.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/repositories/history_repository.dart';
import 'package:wassistant/services/isar_service.dart';

class IsarHistoryRepository implements HistoryRepository {
  final IsarService _isarService;

  IsarHistoryRepository(this._isarService);

  @override
  Future<List<HistoryItem>> getHistory() async {
    final entities = await _isarService.getHistory();
    return entities.map((e) {
      final typeEnum = HistoryItemType.values.firstWhere((t) => t.name == e.type);
      return HistoryItem(
        type: typeEnum,
        data: e.data,
        display: e.display,
        timestamp: e.timestamp,
      );
    }).toList();
  }

  @override
  Future<void> addHistoryItem(HistoryItem item) async {
    final entity = HistoryEntity()
      ..type = item.type.name
      ..data = item.data
      ..display = item.display
      ..timestamp = item.timestamp;
    await _isarService.addHistory(entity);
  }

  @override
  Future<void> removeHistoryItem(HistoryItem item) async {
    final entityToDelete = await _isarService.findHistoryByData(item.data);
    if (entityToDelete != null) {
      await _isarService.deleteHistory(entityToDelete.id);
    }
  }

  @override
  Future<void> clearHistory() async {
    await _isarService.clearAll();
  }
}
