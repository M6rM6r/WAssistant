import 'package:flutter/material.dart';

class SecurityProvider with ChangeNotifier {
  SecurityProvider() {
    // ignore: discarded_futures -- fire and forget
    _loadSettings();
  }

  bool _isBiometricEnabled = false;

  bool get isBiometricEnabled => _isBiometricEnabled;
  bool get isAuthenticated => true;

  Future<void> _loadSettings() async {
    // Force disable biometrics even if previously enabled
    _isBiometricEnabled = false;
    notifyListeners();
  }

  Future<void> toggleBiometric({required bool enable}) async {
    // Disable toggling
    _isBiometricEnabled = false;
    notifyListeners();
  }

  Future<bool> authenticate() async {
    return true;
  }

  void lockApp() {
    // No locking
  }
}
