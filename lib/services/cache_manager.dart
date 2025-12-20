/// Lightweight cache manager placeholder to unblock builds.
class CacheManager {
  CacheManager._();
  static final CacheManager _instance = CacheManager._();
  factory CacheManager() => _instance;

  Future<void> init() async {}
  Future<dynamic> get(String url, {Duration? cacheDuration, bool forceRefresh = false}) async =>
      null;
  Future<void> set(String key, dynamic value, {Duration? ttl}) async {}
  dynamic getCached(String key) => null;
  Future<void> clear(String key) async {}
  Future<void> clearAll() async {}
  Map<String, dynamic> getStats() => const {'cache_size': 0, 'cache_keys': <String>[]};
  Future<void> dispose() async {}
}

final cacheManager = CacheManager();
