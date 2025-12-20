import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:wassistant/providers/template_provider.dart';
import 'package:wassistant/repositories/template_repository.dart';

@GenerateMocks([TemplateRepository])
import 'template_provider_test.mocks.dart';

void main() {
  late TemplateProvider provider;
  late MockTemplateRepository mockRepository;

  setUp(() {
    mockRepository = MockTemplateRepository();
  });

  group('TemplateProvider', () {
    group('initialization', () {
      test('loads templates from repository on creation', () async {
        final existingTemplates = [
          MessageTemplate(
            id: '1',
            title: 'Greeting',
            content: 'Hello, how are you?',
          ),
        ];

        when(
          mockRepository.getTemplates(),
        ).thenAnswer((_) async => existingTemplates);

        provider = TemplateProvider(mockRepository);

        // Wait for async initialization to complete
        await Future<void>.delayed(const Duration(milliseconds: 100));

        verify(mockRepository.getTemplates()).called(1);
        expect(provider.templates.length, 1);
        expect(provider.templates.first.title, 'Greeting');
      });

      test('handles empty templates on load', () async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(provider.templates, isEmpty);
      });

      test('handles repository error gracefully on load', () async {
        when(
          mockRepository.getTemplates(),
        ).thenThrow(Exception('Storage error'));

        // Should not throw
        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(provider.templates, isEmpty);
      });
    });

    group('addTemplate', () {
      test('adds template and persists to repository', () async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        await provider.addTemplate('New Template', 'Template content');

        expect(provider.templates.length, 1);
        expect(provider.templates.first.title, 'New Template');
        expect(provider.templates.first.content, 'Template content');
        verify(mockRepository.saveTemplates(any)).called(1);
      });

      test('generates unique ID based on timestamp', () async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        await provider.addTemplate('Template 1', 'Content 1');
        await Future<void>.delayed(const Duration(milliseconds: 10));
        await provider.addTemplate('Template 2', 'Content 2');

        expect(provider.templates.length, 2);
        expect(provider.templates[0].id, isNot(provider.templates[1].id));
      });

      test('preserves existing templates when adding new one', () async {
        final existingTemplate = MessageTemplate(
          id: '1',
          title: 'Existing',
          content: 'Existing content',
        );

        when(
          mockRepository.getTemplates(),
        ).thenAnswer((_) async => [existingTemplate]);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        await provider.addTemplate('New Template', 'New content');

        expect(provider.templates.length, 2);
        expect(provider.templates.any((t) => t.title == 'Existing'), isTrue);
        expect(
          provider.templates.any((t) => t.title == 'New Template'),
          isTrue,
        );
      });
    });

    group('removeTemplate', () {
      test('removes template by ID and persists', () async {
        final template = MessageTemplate(
          id: '123',
          title: 'To Remove',
          content: 'Content',
        );

        when(mockRepository.getTemplates()).thenAnswer((_) async => [template]);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(provider.templates.length, 1);

        await provider.removeTemplate('123');

        expect(provider.templates, isEmpty);
        verify(mockRepository.saveTemplates(any)).called(1);
      });

      test('removes only the specified template', () async {
        final template1 = MessageTemplate(
          id: '1',
          title: 'Template 1',
          content: 'Content 1',
        );
        final template2 = MessageTemplate(
          id: '2',
          title: 'Template 2',
          content: 'Content 2',
        );

        when(
          mockRepository.getTemplates(),
        ).thenAnswer((_) async => [template1, template2]);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        await provider.removeTemplate('1');

        expect(provider.templates.length, 1);
        expect(provider.templates.first.id, '2');
      });

      test('handles removing non-existent template gracefully', () async {
        final template = MessageTemplate(
          id: '1',
          title: 'Template',
          content: 'Content',
        );

        when(mockRepository.getTemplates()).thenAnswer((_) async => [template]);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        await provider.removeTemplate('non-existent');

        expect(provider.templates.length, 1);
      });
    });

    group('deleteTemplate', () {
      test('is an alias for removeTemplate', () async {
        final template = MessageTemplate(
          id: '123',
          title: 'To Delete',
          content: 'Content',
        );

        when(mockRepository.getTemplates()).thenAnswer((_) async => [template]);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        await provider.deleteTemplate('123');

        expect(provider.templates, isEmpty);
      });
    });

    group('templates property', () {
      test('returns unmodifiable list', () async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);

        provider = TemplateProvider(mockRepository);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(
          () => provider.templates.add(
            MessageTemplate(id: 'test', title: 'test', content: 'test'),
          ),
          throwsUnsupportedError,
        );
      });
    });
  });

  group('MessageTemplate', () {
    test('creates correctly from constructor', () {
      final template = MessageTemplate(
        id: '1',
        title: 'Test Title',
        content: 'Test Content',
      );

      expect(template.id, '1');
      expect(template.title, 'Test Title');
      expect(template.content, 'Test Content');
    });

    test('creates correctly from JSON', () {
      final json = {
        'id': '2',
        'title': 'JSON Title',
        'content': 'JSON Content',
      };

      final template = MessageTemplate.fromJson(json);

      expect(template.id, '2');
      expect(template.title, 'JSON Title');
      expect(template.content, 'JSON Content');
    });

    test('serializes to JSON correctly', () {
      final template = MessageTemplate(
        id: '3',
        title: 'Serialize Test',
        content: 'Serialize Content',
      );

      final json = template.toJson();

      expect(json['id'], '3');
      expect(json['title'], 'Serialize Test');
      expect(json['content'], 'Serialize Content');
    });

    test('roundtrip JSON serialization works', () {
      final original = MessageTemplate(
        id: '4',
        title: 'Roundtrip',
        content: 'Roundtrip Content',
      );

      final json = original.toJson();
      final restored = MessageTemplate.fromJson(json);

      expect(restored.id, original.id);
      expect(restored.title, original.title);
      expect(restored.content, original.content);
    });
  });
}
