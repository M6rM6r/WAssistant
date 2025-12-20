import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:wassistant/services/local_storage_service.dart';
import 'package:wassistant/utils/logger_service.dart';

/// OCPD: Strict JWT-based Authentication Service.
/// INTJ Strategy: Secure user identity management.
class AuthService {
  final String _baseUrl;
  final LocalStorageService _storage;
  static const String _tokenKey = 'auth_token';

  AuthService(this._baseUrl, this._storage);

  String? get token => _storage.getString(_tokenKey);

  Future<bool> signup(String email, String password) async {
    try {
      final response = await http.post(
        Uri.parse('$_baseUrl/signup'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'email': email, 'password': password}),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        await _storage.setString(_tokenKey, data['access_token'] as String);
        return true;
      }
      return false;
    } catch (e) {
      LoggerService.e('Signup Failed', e);
      return false;
    }
  }

  Future<bool> login(String email, String password) async {
    try {
      final response = await http.post(
        Uri.parse('$_baseUrl/token'),
        body: {'username': email, 'password': password},
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        await _storage.setString(_tokenKey, data['access_token'] as String);
        return true;
      }
      return false;
    } catch (e) {
      LoggerService.e('Login Failed', e);
      return false;
    }
  }

  Future<void> logout() async {
    await _storage.remove(_tokenKey);
  }
}
