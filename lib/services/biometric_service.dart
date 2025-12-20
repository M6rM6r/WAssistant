import 'package:wassistant/utils/logger_service.dart';

/// Service to handle biometric authentication.
/// CURRENT STATUS: Disabled (No Security Implementation needed).
class BiometricService {
  Future<bool> isBiometricAvailable() async {
    // Logic disabled as per requirement
    return false;
  }

  Future<bool> authenticate({String reason = 'Authenticate'}) async {
    LoggerService.i('Biometric check bypassed (Security disabled).');
    return true;
  }
}
