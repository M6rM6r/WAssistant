import 'package:isar/isar.dart';

part 'history_entity.g.dart';

@collection
class HistoryEntity {
  Id id = Isar.autoIncrement;

  @Index(type: IndexType.value)
  late String type; // 'link', 'qr', 'vcard' - Stored as string for query simplicity

  late String data;
  late String display;
  late DateTime timestamp;
}
