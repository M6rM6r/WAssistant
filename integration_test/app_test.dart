import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:wassistant/main.dart' as app;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('app launches', (WidgetTester tester) async {
    app.main();
    await tester.pumpAndSettle();
    // Basic smoke test: app renders without crashing
    expect(find.byType(Object), isNotNull);
  });
}
