import 'package:flutter/material.dart';
import 'package:wassistant/services/auth_service.dart';

/// OCPD: Structured Session Management.
/// INTJ Strategy: State-driven access control.
class AuthProvider with ChangeNotifier {
  final AuthService _authService;

  AuthProvider(this._authService);

  bool get isAuthenticated => _authService.token != null;
  String? get token => _authService.token;

  Future<bool> login(String email, String password) async {
    final success = await _authService.login(email, password);
    if (success) notifyListeners();
    return success;
  }

  Future<bool> signup(String email, String password) async {
    final success = await _authService.signup(email, password);
    if (success) notifyListeners();
    return success;
  }

  Future<void> logout() async {
    await _authService.logout();
    notifyListeners();
  }
}
