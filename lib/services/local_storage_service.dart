import 'package:shared_preferences/shared_preferences.dart';
import 'package:wassistant/utils/logger_service.dart';

/// Abstract interface for local storage.
/// Allows for easy mocking and swapping of implementations (e.g., Hive).
abstract class LocalStorageService {
  Future<void> init();
  List<String>? getStringList(String key);
  Future<bool> setStringList(String key, List<String> value);
  Future<bool> remove(String key);
  Future<bool> clear();
}

/// Concrete implementation using SharedPreferences.
class SharedPreferencesService implements LocalStorageService {
  SharedPreferences? _prefs;

  @override
  Future<void> init() async {
    if (_prefs != null) return; // Already initialized
    LoggerService.i('Initializing Local Storage (SharedPreferences)...');
    _prefs = await SharedPreferences.getInstance();
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
