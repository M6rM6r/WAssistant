import 'package:equatable/equatable.dart';

class TemplateItem extends Equatable {

  const TemplateItem({
    required this.id,
    required this.title,
    required this.content,
  });

  factory TemplateItem.fromJson(Map<String, dynamic> json) {
    if (json['id'] == null || json['title'] == null) {
       throw const FormatException('Invalid JSON for TemplateItem');
    }
    return TemplateItem(
      id: json['id'] as String,
      title: json['title'] as String,
      content: json['content'] as String? ?? '',
    );
  }
  final String id;
  final String title;
  final String content;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'content': content,
      };

  @override
  List<Object?> get props => [id, title, content];
}
