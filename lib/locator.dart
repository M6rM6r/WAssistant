import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:firebase_performance/firebase_performance.dart';
import 'package:firebase_remote_config/firebase_remote_config.dart';
import 'package:flutter/foundation.dart';
import 'package:get_it/get_it.dart';
import 'package:logger/logger.dart';
import 'package:wassistant/repositories/history_repository.dart';
import 'package:wassistant/repositories/local_history_repository.dart';
import 'package:wassistant/services/analytics_service.dart';
import 'package:wassistant/services/biometric_service.dart';
import 'package:wassistant/services/engagement_service.dart';
import 'package:wassistant/services/local_storage_service.dart';
import 'package:wassistant/services/network_service.dart';
import 'package:wassistant/services/notification_service.dart';
import 'package:wassistant/services/ocr_service.dart';
import 'package:wassistant/services/performance_service.dart';
import 'package:wassistant/services/quick_actions_service.dart';
import 'package:wassistant/services/remote_config_service.dart';
import 'package:wassistant/utils/logger_service.dart';

final GetIt locator = GetIt.instance;

/// Setup for Dependency Injection using Service Locator pattern.
/// OCPD: Ensures a single source of truth for all system dependencies.
/// INTJ Strategy: Zero technical debt, absolute logic isolation.
Future<void> setupLocator() async {
  LoggerService.i('Initializing Service Locator...');

  // --- Core Services ---
  final localStorage = SharedPreferencesService();
  await localStorage.init();

  locator
    ..registerSingleton<LocalStorageService>(localStorage)
    ..registerLazySingleton<OcrService>(OcrService.new)
    ..registerLazySingleton<EngagementService>(() => EngagementService(localStorage))
    ..registerLazySingleton<NetworkService>(NetworkService.new)
    ..registerLazySingleton<QuickActionsService>(QuickActionsService.new)
    ..registerLazySingleton<BiometricService>(BiometricService.new);

  // --- Repositories (Unified Persistence for Web & Stores) ---
  // We use LocalHistoryRepository (SharedPreferences) for all platforms
  // to ensure 100% stability and bypass Isar-Web precision issues.
  locator.registerLazySingleton<HistoryRepository>(() => LocalHistoryRepository(localStorage));

  // --- Firebase Ecosystem (Strategic Value) ---
  try {
    if (!kIsWeb) {
      final logger = Logger(printer: PrettyPrinter(methodCount: 0));
      locator.registerSingleton<Logger>(logger);

      // Always provide a logger-backed AnalyticsService, even when Firebase isn't ready.
      locator.registerLazySingleton<AnalyticsService>(() => AnalyticsService(logger: logger));

      // Skip Firebase-dependent services if no app is initialized (e.g., in tests)
      if (Firebase.apps.isEmpty) {
        LoggerService.w('Firebase not initialized; skipping Firebase-bound services.');
        return;
      }

      final analytics = FirebaseAnalytics.instance;
      locator
        ..registerSingleton<FirebaseAnalytics>(analytics)
        ..registerLazySingleton<AnalyticsService>(
          () => AnalyticsService(analytics: analytics, logger: logger),
        );

      final performance = FirebasePerformance.instance;
      locator
        ..registerSingleton<FirebasePerformance>(performance)
        ..registerLazySingleton<PerformanceService>(
          () => PerformanceService(performance: performance, logger: logger),
        );

      final remoteConfig = FirebaseRemoteConfig.instance;
      final rcService = RemoteConfigService(remoteConfig: remoteConfig, logger: logger);
      await rcService.initialize();
      locator.registerSingleton<RemoteConfigService>(rcService);

      final messaging = FirebaseMessaging.instance;
      final navService = NotificationService(messaging: messaging, logger: logger);
      await navService.initialize();
      locator.registerSingleton<NotificationService>(navService);
    }
  } catch (e) {
    LoggerService.w('Firebase Strategic Services failed to init: $e');
  }

  LoggerService.i('Service Locator Initialized.');
}
