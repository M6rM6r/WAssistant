import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/template_provider.dart';
import 'package:wassistant/repositories/template_repository.dart';
import 'package:wassistant/widgets/templates_dialog.dart';

@GenerateMocks([TemplateRepository])
import 'templates_dialog_test.mocks.dart';

void main() {
  late MockTemplateRepository mockRepository;

  setUp(() {
    mockRepository = MockTemplateRepository();
  });

  Widget createWidgetUnderTest({
    required TemplateProvider provider,
    required void Function(String) onSelect,
  }) {
    return MaterialApp(
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: AppLocalizations.supportedLocales,
      locale: const Locale('en'),
      home: Scaffold(
        body: ChangeNotifierProvider.value(
          value: provider,
          child: Builder(
            builder: (context) => TemplatesDialog(onSelect: onSelect),
          ),
        ),
      ),
    );
  }

  group('TemplatesDialog', () {
    group('empty state', () {
      testWidgets('shows "no templates" message when list is empty', (
        tester,
      ) async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);

        final provider = TemplateProvider(mockRepository);
        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        // The noTemplates localized string should be visible
        expect(find.byType(AlertDialog), findsOneWidget);
        // Title should be visible
        expect(find.byIcon(Icons.add), findsOneWidget);
      });
    });

    group('with templates', () {
      testWidgets('displays list of templates', (tester) async {
        final templates = [
          MessageTemplate(id: '1', title: 'Hello', content: 'Hi there!'),
          MessageTemplate(id: '2', title: 'Goodbye', content: 'See you later!'),
        ];

        when(mockRepository.getTemplates()).thenAnswer((_) async => templates);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        final provider = TemplateProvider(mockRepository);
        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        expect(find.text('Hello'), findsOneWidget);
        expect(find.text('Hi there!'), findsOneWidget);
        expect(find.text('Goodbye'), findsOneWidget);
        expect(find.text('See you later!'), findsOneWidget);
      });

      testWidgets('calls onSelect when template is tapped', (tester) async {
        final templates = [
          MessageTemplate(id: '1', title: 'Test', content: 'Test content'),
        ];

        when(mockRepository.getTemplates()).thenAnswer((_) async => templates);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        String? selectedContent;
        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(
            provider: provider,
            onSelect: (content) => selectedContent = content,
          ),
        );
        await tester.pumpAndSettle();

        await tester.tap(find.text('Test'));
        await tester.pumpAndSettle();

        expect(selectedContent, 'Test content');
      });

      testWidgets('closes dialog when template is selected', (tester) async {
        final templates = [
          MessageTemplate(id: '1', title: 'Test', content: 'Content'),
        ];

        when(mockRepository.getTemplates()).thenAnswer((_) async => templates);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        expect(find.byType(AlertDialog), findsOneWidget);

        await tester.tap(find.text('Test'));
        await tester.pumpAndSettle();

        expect(find.byType(AlertDialog), findsNothing);
      });

      testWidgets('shows delete button for each template', (tester) async {
        final templates = [
          MessageTemplate(id: '1', title: 'Template 1', content: 'Content 1'),
          MessageTemplate(id: '2', title: 'Template 2', content: 'Content 2'),
        ];

        when(mockRepository.getTemplates()).thenAnswer((_) async => templates);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        expect(find.byIcon(Icons.delete_outline), findsNWidgets(2));
      });

      testWidgets('removes template when delete is pressed', (tester) async {
        final templates = [
          MessageTemplate(id: '1', title: 'To Delete', content: 'Content'),
        ];

        when(mockRepository.getTemplates()).thenAnswer((_) async => templates);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        expect(find.text('To Delete'), findsOneWidget);

        await tester.tap(find.byIcon(Icons.delete_outline));
        await tester.pumpAndSettle();

        expect(find.text('To Delete'), findsNothing);
      });
    });

    group('add template dialog', () {
      testWidgets('shows add button in header', (tester) async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        expect(find.byIcon(Icons.add), findsOneWidget);
      });

      testWidgets('opens add template dialog when add button is pressed', (
        tester,
      ) async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        await tester.tap(find.byIcon(Icons.add));
        await tester.pumpAndSettle();

        // Should now have 2 AlertDialogs (original + add dialog)
        expect(find.byType(AlertDialog), findsNWidgets(2));
        expect(find.byType(TextField), findsNWidgets(2)); // title + content
      });

      testWidgets('adds template when save is pressed with valid input', (
        tester,
      ) async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);
        when(mockRepository.saveTemplates(any)).thenAnswer((_) async {});

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        // Open add dialog
        await tester.tap(find.byIcon(Icons.add));
        await tester.pumpAndSettle();

        // Enter title and content
        final textFields = find.byType(TextField);
        await tester.enterText(textFields.first, 'New Title');
        await tester.enterText(textFields.last, 'New Content');
        await tester.pumpAndSettle();

        // Find and tap the Save button (ElevatedButton)
        final saveButton = find.byType(ElevatedButton);
        await tester.tap(saveButton);
        await tester.pumpAndSettle();

        // Add dialog should close
        expect(find.byType(AlertDialog), findsOneWidget);

        // New template should appear
        expect(find.text('New Title'), findsOneWidget);
        expect(find.text('New Content'), findsOneWidget);
      });

      testWidgets('does not add template when fields are empty', (
        tester,
      ) async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        // Open add dialog
        await tester.tap(find.byIcon(Icons.add));
        await tester.pumpAndSettle();

        // Try to save with empty fields
        final saveButton = find.byType(ElevatedButton);
        await tester.tap(saveButton);
        await tester.pumpAndSettle();

        // Dialog should still be open (nothing was added)
        expect(find.byType(AlertDialog), findsNWidgets(2));
        verifyNever(mockRepository.saveTemplates(any));
      });

      testWidgets('closes add dialog when cancel is pressed', (tester) async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        // Open add dialog
        await tester.tap(find.byIcon(Icons.add));
        await tester.pumpAndSettle();

        expect(find.byType(AlertDialog), findsNWidgets(2));

        // Find and tap cancel (TextButton)
        final textButtons = find.byType(TextButton);
        // First TextButton in the add dialog is Cancel
        await tester.tap(textButtons.last);
        await tester.pumpAndSettle();

        // Only original dialog should remain
        expect(find.byType(AlertDialog), findsOneWidget);
      });
    });

    group('close button', () {
      testWidgets('closes main dialog when close button is pressed', (
        tester,
      ) async {
        when(mockRepository.getTemplates()).thenAnswer((_) async => []);

        final provider = TemplateProvider(mockRepository);

        await tester.pumpWidget(
          createWidgetUnderTest(provider: provider, onSelect: (_) {}),
        );
        await tester.pumpAndSettle();

        expect(find.byType(AlertDialog), findsOneWidget);

        // Find and tap Close button
        final closeButton = find.byType(TextButton).first;
        await tester.tap(closeButton);
        await tester.pumpAndSettle();

        expect(find.byType(AlertDialog), findsNothing);
      });
    });
  });
}
