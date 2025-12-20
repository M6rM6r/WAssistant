import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:wassistant/repositories/template_repository.dart';
import 'package:wassistant/utils/logger_service.dart';

// OCPD: Structured Template Model
class MessageTemplate {
  MessageTemplate({
    required this.id,
    required this.title,
    required this.content,
  });

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

/// OCPD: Refactored Provider using Repository Pattern.
/// INTJ Strategy: Zero side-effects, predictable state transitions.
class TemplateProvider with ChangeNotifier {
  TemplateProvider(this._repository) {
    unawaited(_loadTemplates());
  }

  final TemplateRepository _repository;

  List<MessageTemplate> _templates = [];
  List<MessageTemplate> get templates => List.unmodifiable(_templates);

  Future<void> _loadTemplates() async {
    try {
      _templates = await _repository.getTemplates();
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
    _templates = [..._templates, newTemplate]; // Immutable update
    notifyListeners();
    await _repository.saveTemplates(_templates);
  }

  Future<void> removeTemplate(String id) async {
    _templates = _templates.where((t) => t.id != id).toList();
    notifyListeners();
    await _repository.saveTemplates(_templates);
  }

  Future<void> deleteTemplate(String id) async {
    await removeTemplate(id);
  }

  @override
  void dispose() {
    // Clean up resources if needed in the future
    super.dispose();
  }
}
