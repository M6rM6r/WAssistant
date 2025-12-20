import 'package:wassistant/providers/template_provider.dart';

/// OCPD: Strict contract for Template Data Operations.
/// INTJ Strategy: Decouple persistence from business logic.
abstract class TemplateRepository {
  Future<List<MessageTemplate>> getTemplates();
  Future<void> saveTemplates(List<MessageTemplate> templates);
}
