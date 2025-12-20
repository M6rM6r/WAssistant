import 'package:shared_preferences/shared_preferences.dart';
import 'package:wassistant/utils/logger_service.dart';

/// Abstract interface for local storage.
/// Allows for easy mocking and swapping of implementations (e.g., Hive).
abstract class LocalStorageService {
  Future<void> init();

  // OCPD: Balanced API for all basic types
  String? getString(String key);
  Future<bool> setString(String key, String value);

  List<String>? getStringList(String key);
  Future<bool> setStringList(String key, List<String> value);

  int? getInt(String key);
  Future<bool> setInt(String key, int value);

  Future<bool> remove(String key);
  Future<bool> clear();
}

/// Concrete implementation using SharedPreferences.
class SharedPreferencesService implements LocalStorageService {
  SharedPreferences? _prefs;

  @override
  Future<void> init() async {
    if (_prefs != null) return;
    LoggerService.i('Initializing Local Storage (SharedPreferences)...');
    _prefs = await SharedPreferences.getInstance();
  }

  @override
  String? getString(String key) {
    _ensureInitialized();
    return _prefs?.getString(key);
  }

  @override
  Future<bool> setString(String key, String value) async {
    _ensureInitialized();
    return _prefs!.setString(key, value);
  }

  @override
  List<String>? getStringList(String key) {
    _ensureInitialized();
    return _prefs?.getStringList(key);
  }

  @override
  Future<bool> setStringList(String key, List<String> value) async {
    _ensureInitialized();
    return _prefs!.setStringList(key, value);
  }

  @override
  int? getInt(String key) {
    _ensureInitialized();
    return _prefs?.getInt(key);
  }

  @override
  Future<bool> setInt(String key, int value) async {
    _ensureInitialized();
    return _prefs!.setInt(key, value);
  }

  @override
  Future<bool> remove(String key) async {
    _ensureInitialized();
    return _prefs!.remove(key);
  }

  @override
  Future<bool> clear() async {
    _ensureInitialized();
    return _prefs!.clear();
  }

  void _ensureInitialized() {
    if (_prefs == null) {
      throw StateError(
        'LocalStorageService not initialized. Call init() first.',
      );
    }
  }
}
