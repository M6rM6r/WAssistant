import 'package:freezed_annotation/freezed_annotation.dart';

part 'history_item.freezed.dart';
part 'history_item.g.dart';

// Enum to define the type of history item
// Using explicit integer values to maintain backward compatibility
// with previous manual serialization
@JsonEnum()
enum HistoryItemType {
  @JsonValue(0)
  link,
  @JsonValue(1)
  qr,
  @JsonValue(2)
  vcard,
}

// Immutable Model for a single history item using Freezed
// OCPD: Immutability guarantees state predictability.
@freezed
class HistoryItem with _$HistoryItem {
  const factory HistoryItem({
    required HistoryItemType type,
    required String data,
    required DateTime timestamp,
    @Default('Unknown') String display,
  }) = _HistoryItem;

  factory HistoryItem.fromJson(Map<String, dynamic> json) =>
      _$HistoryItemFromJson(json);
}
