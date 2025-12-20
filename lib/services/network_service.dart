import 'dart:async';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:wassistant/utils/logger_service.dart';

/// Live connectivity monitor with ChangeNotifier for UI consumers.
/// Updated for connectivity_plus v5+ API (List based results).
class NetworkService with ChangeNotifier {
  NetworkService() {
    unawaited(_init());
  }

  final Connectivity _connectivity = Connectivity();
  StreamSubscription<List<ConnectivityResult>>? _subscription;
  bool _isOnline = true;

  bool get isOnline => _isOnline;

  Future<void> _init() async {
    final initial = await _connectivity.checkConnectivity();
    _setStatus(initial);

    _subscription = _connectivity.onConnectivityChanged.listen(_setStatus);
  }

  /// OCPD: Robust check for connectivity.
  /// online if ANY of the results is not 'none'.
  void _setStatus(List<ConnectivityResult> results) {
    final nextOnline = results.any(
      (result) => result != ConnectivityResult.none,
    );

    if (nextOnline == _isOnline) return;

    _isOnline = nextOnline;
    LoggerService.i('NetworkStatus: ${_isOnline ? 'online' : 'offline'}');
    notifyListeners();
  }

  @override
  void dispose() {
    unawaited(_subscription?.cancel());
    super.dispose();
  }
}
