import 'package:get_it/get_it.dart';
import 'package:wassistant/services/biometric_service.dart';
import 'package:wassistant/services/isar_service.dart';
import 'package:wassistant/services/local_storage_service.dart';
import 'package:wassistant/services/ocr_service.dart';
import 'package:wassistant/utils/logger_service.dart';

final GetIt locator = GetIt.instance;

/// Setup for Dependency Injection using Service Locator pattern.
/// Keeps main.dart clean and dependencies decoupled.
Future<void> setupLocator() async {
  LoggerService.i('Initializing Service Locator...');

  // --- Services ---
  // Lazy Singletons: Created only when requested
  locator.registerLazySingleton<BiometricService>(BiometricService.new);
  locator.registerLazySingleton<OcrService>(OcrService.new);

  // Async Singletons: Need initialization

  // 1. Local Storage (Legacy/Settings)
  final localStorage = SharedPreferencesService();
  await localStorage.init();
  locator.registerSingleton<LocalStorageService>(localStorage);

  // 2. Isar Database (History)
  final isarService = IsarService();
  // We don't await init() here to speed up app launch.
  // It handles its own lazy init internally or we await it if critical.
  // For safety, let's await it.
  await isarService.init();
  locator.registerSingleton<IsarService>(isarService);

  LoggerService.i('Service Locator Initialized.');
}
