import 'dart:async';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:wassistant/utils/logger_service.dart';

// OCPD: Single source of truth for network state.
class NetworkService with ChangeNotifier {
  final Connectivity _connectivity = Connectivity();
  late StreamSubscription<List<ConnectivityResult>> _subscription;

  bool _isOnline = true;
  bool get isOnline => _isOnline;

  NetworkService() {
    _init();
  }

  void _init() {
    _subscription = _connectivity.onConnectivityChanged.listen(_updateConnectionStatus);
    // Initial check
    _connectivity.checkConnectivity().then(_updateConnectionStatus);
  }

  void _updateConnectionStatus(List<ConnectivityResult> results) {
    final isDeviceConnected = results.contains(ConnectivityResult.mobile) ||
                              results.contains(ConnectivityResult.wifi) ||
                              results.contains(ConnectivityResult.ethernet);

    if (isDeviceConnected != _isOnline) {
      _isOnline = isDeviceConnected;
      LoggerService.i('Network Status Changed: ${_isOnline ? "ONLINE" : "OFFLINE"}');
      notifyListeners();
    }
  }

  @override
  void dispose() {
    _subscription.cancel();
    super.dispose();
  }
}
