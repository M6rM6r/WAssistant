import 'package:isar/isar.dart';
import 'package:path_provider/path_provider.dart';
import 'package:wassistant/models/history_entity.dart';
import 'package:wassistant/utils/logger_service.dart';

class IsarService {
  late Isar _isar;

  Future<void> init() async {
    final dir = await getApplicationDocumentsDirectory();
    _isar = await Isar.open(
      [HistoryEntitySchema],
      directory: dir.path,
    );
    LoggerService.i('Isar DB Initialized');
  }

  Future<void> addHistory(HistoryEntity item) async {
    await _isar.writeTxn(() async {
      await _isar.historyEntitys.put(item);
    });
  }

  Future<List<HistoryEntity>> getHistory() async {
    return _isar.historyEntitys.where().sortByTimestampDesc().findAll();
  }

  Future<void> deleteHistory(int id) async {
    await _isar.writeTxn(() async {
      await _isar.historyEntitys.delete(id);
    });
  }

  Future<void> clearAll() async {
    await _isar.writeTxn(() async {
      await _isar.historyEntitys.clear();
    });
  }
}
