// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'history_item.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_HistoryItem _$HistoryItemFromJson(Map<String, dynamic> json) => _HistoryItem(
  type: $enumDecode(_$HistoryItemTypeEnumMap, json['type']),
  data: json['data'] as String,
  timestamp: DateTime.parse(json['timestamp'] as String),
  display: json['display'] as String? ?? 'Unknown',
);

Map<String, dynamic> _$HistoryItemToJson(_HistoryItem instance) =>
    <String, dynamic>{
      'type': _$HistoryItemTypeEnumMap[instance.type]!,
      'data': instance.data,
      'timestamp': instance.timestamp.toIso8601String(),
      'display': instance.display,
    };

const _$HistoryItemTypeEnumMap = {
  HistoryItemType.link: 0,
  HistoryItemType.qr: 1,
  HistoryItemType.vcard: 2,
};
