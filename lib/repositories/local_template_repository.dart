import 'dart:convert';

import 'package:wassistant/providers/template_provider.dart';
import 'package:wassistant/repositories/template_repository.dart';
import 'package:wassistant/services/local_storage_service.dart';

class LocalTemplateRepository implements TemplateRepository {
  LocalTemplateRepository(this._storage);

  final LocalStorageService _storage;
  static const String _key = 'message_templates';

  @override
  Future<List<MessageTemplate>> getTemplates() async {
    final stored = _storage.getStringList(_key);
    if (stored == null) return _getDefaultTemplates();

    return stored
        .map(
          (e) =>
              MessageTemplate.fromJson(jsonDecode(e) as Map<String, dynamic>),
        )
        .toList();
  }

  @override
  Future<void> saveTemplates(List<MessageTemplate> templates) async {
    final encoded = templates.map((e) => jsonEncode(e.toJson())).toList();
    await _storage.setStringList(_key, encoded);
  }

  List<MessageTemplate> _getDefaultTemplates() {
    return [
      MessageTemplate(
        id: '1',
        title: 'Quick Greeting',
        content: 'Hello! I would like to inquire about...',
      ),
      MessageTemplate(
        id: '2',
        title: 'Location',
        content: 'Here is my location: ',
      ),
    ];
  }
}
