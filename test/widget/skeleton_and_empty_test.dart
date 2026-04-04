import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';
import 'package:shimmer/shimmer.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/widgets/empty_states.dart';
import 'package:wassistant/widgets/skeleton_loader.dart';

// Mock classes
class MockWhatsAppToolProvider extends Mock implements WhatsAppToolProvider {}

class MockAppLocalizations extends Mock implements AppLocalizations {
  @override
  String get openChat => 'Open Chat';

  @override
  String get getLink => 'Get Link';

  @override
  String get generateQr => 'Generate QR';

  @override
  String get successChatOpened => 'Chat opened successfully';

  @override
  String get errorLaunchFailed => 'Failed to open WhatsApp';
}

void main() {
  group('Skeleton Loaders', () {
    testWidgets('SkeletonLoader renders with correct dimensions', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: SkeletonLoader(
              width: 100,
              height: 50,
            ),
          ),
        ),
      );

      final container = find.byType(Container);
      expect(container, findsOneWidget);

      final Container widget = tester.widget(container);
      expect(widget.constraints?.maxWidth, 100);
      expect(widget.constraints?.maxHeight, 50);
    });

    testWidgets('HistorySkeletonItem renders all elements', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: HistorySkeletonItem(),
          ),
        ),
      );

      expect(find.byType(SkeletonLoader), findsNWidgets(4));
    });

    testWidgets('HistorySkeletonList renders correct item count', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: HistorySkeletonList(itemCount: 3),
          ),
        ),
      );

      expect(find.byType(HistorySkeletonItem), findsNWidgets(3));
    });

    testWidgets('OcrSkeleton renders camera loading state', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: OcrSkeleton(),
          ),
        ),
      );

      expect(find.byType(SkeletonLoader), findsNWidgets(4));
    });

    testWidgets('QrSkeleton renders QR placeholder', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: QrSkeleton(),
          ),
        ),
      );

      expect(find.byType(Shimmer), findsOneWidget);
    });

    testWidgets('FormSkeleton renders correct field count', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: FormSkeleton(fieldCount: 4),
          ),
        ),
      );

      expect(find.byType(SkeletonLoader), findsNWidgets(4));
    });

    testWidgets('LoadingOverlay renders with progress indicator', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: LoadingOverlay(
              message: 'Loading...',
              showProgress: true,
            ),
          ),
        ),
      );

      expect(find.byType(CircularProgressIndicator), findsOneWidget);
      expect(find.text('Loading...'), findsOneWidget);
    });
  });

  group('Empty States', () {
    testWidgets('EmptyState renders all elements', (tester) async {
      var actionPressed = false;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: EmptyState(
              icon: Icons.search,
              title: 'Test Title',
              description: 'Test Description',
              actionLabel: 'Action',
              onAction: () => actionPressed = true,
            ),
          ),
        ),
      );

      expect(find.byIcon(Icons.search), findsOneWidget);
      expect(find.text('Test Title'), findsOneWidget);
      expect(find.text('Test Description'), findsOneWidget);
      expect(find.text('Action'), findsOneWidget);

      await tester.tap(find.text('Action'));
      await tester.pump();
      expect(actionPressed, isTrue);
    });

    testWidgets('EmptyHistoryState renders correctly', (tester) async {
      var createPressed = false;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: EmptyHistoryState(
              onCreateNew: () => createPressed = true,
            ),
          ),
        ),
      );

      expect(find.text('No History Yet'), findsOneWidget);
      expect(find.text('Create Link'), findsOneWidget);

      await tester.tap(find.text('Create Link'));
      await tester.pump();
      expect(createPressed, isTrue);
    });

    testWidgets('EmptyOcrState renders with retry and manual options', (tester) async {
      var retryPressed = false;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: EmptyOcrState(
              onRetry: () => retryPressed = true,
            ),
          ),
        ),
      );

      expect(find.text('No Phone Number Found'), findsOneWidget);
      expect(find.text('Scan Again'), findsOneWidget);
      expect(find.text('Enter Manually'), findsOneWidget);

      await tester.tap(find.text('Scan Again'));
      await tester.pump();
      expect(retryPressed, isTrue);
    });

    testWidgets('EmptyTemplatesState renders correctly', (tester) async {
      var addPressed = false;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: EmptyTemplatesState(
              onCreateTemplate: () => addPressed = true,
            ),
          ),
        ),
      );

      expect(find.text('No Templates Yet'), findsOneWidget);
      expect(find.text('Add Template'), findsOneWidget);

      await tester.tap(find.text('Add Template'));
      await tester.pump();
      expect(addPressed, isTrue);
    });

    testWidgets('WelcomeEmptyState renders feature pills', (tester) async {
      var getStartedPressed = false;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: WelcomeEmptyState(
              onGetStarted: () => getStartedPressed = true,
            ),
          ),
        ),
      );

      expect(find.text('Welcome to WAssistant'), findsOneWidget);
      expect(find.text('Get Started'), findsOneWidget);
      expect(find.text('QR Codes'), findsOneWidget);
      expect(find.text('Links'), findsOneWidget);
      expect(find.text('OCR'), findsOneWidget);

      await tester.tap(find.text('Get Started'));
      await tester.pump();
      expect(getStartedPressed, isTrue);
    });

    testWidgets('ErrorState renders with error details', (tester) async {
      var retryPressed = false;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: ErrorState(
              message: 'Network error',
              onRetry: () => retryPressed = true,
              error: 'Connection timeout',
            ),
          ),
        ),
      );

      expect(find.text('Something Went Wrong'), findsOneWidget);
      expect(find.text('Network error'), findsOneWidget);
      expect(find.textContaining('Connection timeout'), findsOneWidget);

      await tester.tap(find.text('Try Again'));
      await tester.pump();
      expect(retryPressed, isTrue);
    });
  });
}
