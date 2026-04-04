/// OCPD: Logic-Pure History Item Model.
/// INTJ Strategy: Zero dependency domain object for cross-platform stability.
enum HistoryItemType { link, qr, vcard }

class HistoryItem {
  HistoryItem({
    this.id,
    required this.type,
    required this.data,
    required this.timestamp,
    this.display = 'Unknown',
  });

  // OCPD: Platform-agnostic identity
  final int? id;
  final HistoryItemType type;
  final String data;
  final DateTime timestamp;
  final String display;

  factory HistoryItem.fromJson(Map<String, dynamic> json) {
    return HistoryItem(
      id: json['id'] as int?,
      type: HistoryItemType.values[json['type'] as int? ?? 0],
      data: json['data'] as String? ?? '',
      timestamp: DateTime.parse(
        json['timestamp'] as String? ?? DateTime.now().toIso8601String(),
      ),
      display: json['display'] as String? ?? 'Unknown',
    );
  }

  Map<String, dynamic> toJson() => {
    if (id != null) 'id': id,
    'type': type.index,
    'data': data,
    'timestamp': timestamp.toIso8601String(),
    'display': display,
  };
}
