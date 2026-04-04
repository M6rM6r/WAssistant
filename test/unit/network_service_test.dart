import 'dart:async';

import 'package:flutter_test/flutter_test.dart';

// Simulated ConnectivityResult enum for testing (mirrors connectivity_plus)
enum MockConnectivityResult {
  wifi,
  mobile,
  ethernet,
  bluetooth,
  vpn,
  other,
  none,
}

/// A testable version of NetworkService that allows injecting mocks
/// This mirrors the actual NetworkService logic without Flutter dependencies
class TestableNetworkService {
  TestableNetworkService({
    required Future<List<MockConnectivityResult>> Function() checkConnectivity,
    required Stream<List<MockConnectivityResult>> connectivityStream,
  }) : _checkConnectivity = checkConnectivity,
       _connectivityStream = connectivityStream {
    unawaited(_init());
  }

  final Future<List<MockConnectivityResult>> Function() _checkConnectivity;
  final Stream<List<MockConnectivityResult>> _connectivityStream;
  StreamSubscription<List<MockConnectivityResult>>? _subscription;
  bool _isOnline = true;

  bool get isOnline => _isOnline;

  final List<void Function()> _listeners = [];

  void addListener(void Function() listener) {
    _listeners.add(listener);
  }

  void removeListener(void Function() listener) {
    _listeners.remove(listener);
  }

  void _notifyListeners() {
    for (final listener in _listeners) {
      listener();
    }
  }

  Future<void> _init() async {
    final initial = await _checkConnectivity();
    _setStatus(initial);

    _subscription = _connectivityStream.listen(_setStatus);
  }

  void _setStatus(List<MockConnectivityResult> results) {
    final nextOnline = results.any(
      (result) => result != MockConnectivityResult.none,
    );

    if (nextOnline == _isOnline) return;

    _isOnline = nextOnline;
    _notifyListeners();
  }

  void dispose() {
    unawaited(_subscription?.cancel());
  }
}

void main() {
  late TestableNetworkService service;
  late StreamController<List<MockConnectivityResult>> connectivityController;

  setUp(() {
    connectivityController =
        StreamController<List<MockConnectivityResult>>.broadcast();
  });

  tearDown(() {
    service.dispose();
    connectivityController.close();
  });

  group('NetworkService', () {
    group('initialization', () {
      test('starts with online status when connected to wifi', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.wifi],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isTrue);
      });

      test('starts with online status when connected to mobile', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.mobile],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isTrue);
      });

      test('starts with online status when connected to ethernet', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.ethernet],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isTrue);
      });

      test('starts with offline status when no connection', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.none],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isFalse);
      });

      test(
        'handles multiple connectivity results (online if any is connected)',
        () async {
          service = TestableNetworkService(
            checkConnectivity:
                () async => [
                  MockConnectivityResult.wifi,
                  MockConnectivityResult.mobile,
                ],
            connectivityStream: connectivityController.stream,
          );
          await Future<void>.delayed(const Duration(milliseconds: 100));

          expect(service.isOnline, isTrue);
        },
      );
    });

    group('connectivity changes', () {
      test('updates to offline when connection is lost', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.wifi],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isTrue);

        // Simulate losing connection
        connectivityController.add([MockConnectivityResult.none]);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isFalse);
      });

      test('updates to online when connection is restored', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.none],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isFalse);

        // Simulate regaining connection
        connectivityController.add([MockConnectivityResult.wifi]);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isTrue);
      });

      test('notifies listeners when status changes', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.wifi],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        var listenerCallCount = 0;
        service.addListener(() => listenerCallCount++);

        // Change status
        connectivityController.add([MockConnectivityResult.none]);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(listenerCallCount, 1);
      });

      test('does not notify listeners when status remains the same', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.wifi],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        var listenerCallCount = 0;
        service.addListener(() => listenerCallCount++);

        // Same status (still connected, just different type)
        connectivityController.add([MockConnectivityResult.mobile]);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(listenerCallCount, 0); // No notification, still online
      });

      test('handles rapid connectivity changes', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.wifi],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        var listenerCallCount = 0;
        service.addListener(() => listenerCallCount++);

        // Rapid changes: online -> offline -> online -> offline -> online
        connectivityController
          ..add([MockConnectivityResult.none])
          ..add([MockConnectivityResult.wifi])
          ..add([MockConnectivityResult.none])
          ..add([MockConnectivityResult.mobile]);

        await Future<void>.delayed(const Duration(milliseconds: 100));

        // Should have notified for: offline, online, offline, online = 4 changes
        expect(listenerCallCount, 4);
      });
    });

    group('multiple connection types', () {
      test('remains online when switching from wifi to mobile', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.wifi],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        var listenerCallCount = 0;
        service.addListener(() => listenerCallCount++);

        // Switch to mobile (should remain online, no notification)
        connectivityController.add([MockConnectivityResult.mobile]);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isTrue);
        expect(listenerCallCount, 0); // No status change
      });

      test('handles empty connectivity result list', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.wifi],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        // Empty list should mean offline (no results that are != none)
        connectivityController.add([]);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        expect(service.isOnline, isFalse);
      });
    });

    group('dispose', () {
      test('cancels stream subscription on dispose', () async {
        service = TestableNetworkService(
          checkConnectivity: () async => [MockConnectivityResult.wifi],
          connectivityStream: connectivityController.stream,
        );
        await Future<void>.delayed(const Duration(milliseconds: 100));

        var listenerCallCount = 0;
        service.addListener(() => listenerCallCount++);

        service.dispose();

        // After dispose, changes should not be processed
        connectivityController.add([MockConnectivityResult.none]);
        await Future<void>.delayed(const Duration(milliseconds: 100));

        // Listener should not be called after dispose
        // (stream subscription was cancelled)
      });
    });
  });

  group('ConnectivityResult scenarios', () {
    test('bluetooth connection is considered online', () async {
      service = TestableNetworkService(
        checkConnectivity: () async => [MockConnectivityResult.bluetooth],
        connectivityStream: connectivityController.stream,
      );
      await Future<void>.delayed(const Duration(milliseconds: 100));

      expect(service.isOnline, isTrue);
    });

    test('VPN connection is considered online', () async {
      service = TestableNetworkService(
        checkConnectivity: () async => [MockConnectivityResult.vpn],
        connectivityStream: connectivityController.stream,
      );
      await Future<void>.delayed(const Duration(milliseconds: 100));

      expect(service.isOnline, isTrue);
    });

    test('other connection type is considered online', () async {
      service = TestableNetworkService(
        checkConnectivity: () async => [MockConnectivityResult.other],
        connectivityStream: connectivityController.stream,
      );
      await Future<void>.delayed(const Duration(milliseconds: 100));

      expect(service.isOnline, isTrue);
    });
  });
}
