import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:wassistant/services/local_storage_service.dart';
import 'package:wassistant/utils/logger_service.dart';

// OCPD: Structured Template Model
class MessageTemplate {
  MessageTemplate({required this.id, required this.title, required this.content});

  factory MessageTemplate.fromJson(Map<String, dynamic> json) {
    return MessageTemplate(
      id: json['id'] as String,
      title: json['title'] as String,
      content: json['content'] as String,
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
}

class TemplateProvider with ChangeNotifier {
  // ignore: avoid_unused_constructor_parameters -- reserved for future DI
  TemplateProvider(this._storageService) {
    _loadTemplates();
  }

  final LocalStorageService _storageService;
  static const String _storageKey = 'message_templates';

  List<MessageTemplate> _templates = [];
  List<MessageTemplate> get templates => List.unmodifiable(_templates);

  Future<void> _loadTemplates() async {
    try {
      await _storageService.init();
      final List<String>? stored = _storageService.getStringList(_storageKey);
      if (stored != null) {
        _templates = stored
            .map((e) => MessageTemplate.fromJson(
                jsonDecode(e) as Map<String, dynamic>))
            .toList();
      } else {
        // Default Templates
        _templates = [
          MessageTemplate(
              id: '1',
              title: 'Quick Greeting',
              content: 'Hello! I would like to inquire about...'),
          MessageTemplate(
              id: '2', title: 'Location', content: 'Here is my location: '),
        ];
      }
      notifyListeners();
    } on Object catch (e) {
      LoggerService.e('Failed to load templates', e);
    }
  }

  Future<void> addTemplate(String title, String content) async {
    final newTemplate = MessageTemplate(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      title: title,
      content: content,
    );
    _templates.add(newTemplate);
    notifyListeners();
    // ignore: discarded_futures -- fire and forget save
    _saveTemplates();
  }

  Future<void> removeTemplate(String id) async {
    _templates.removeWhere((t) => t.id == id);
    notifyListeners();
    // ignore: discarded_futures -- fire and forget save
    _saveTemplates();
  }

  Future<void> deleteTemplate(String id) async {
      await removeTemplate(id);
  }

  Future<void> _saveTemplates() async {
    try {
      final List<String> encoded =
          _templates.map((e) => jsonEncode(e.toJson())).toList();
      await _storageService.setStringList(_storageKey, encoded);
    } on Object catch (e) {
      LoggerService.e('Failed to save templates', e);
    }
  }
}
