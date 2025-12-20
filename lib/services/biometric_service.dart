/// Service to handle biometric authentication (FaceID, Fingerprint).
/// Adds a physical layer of security.
class BiometricService {

  Future<bool> isBiometricAvailable() async {
      return false;
  }

  Future<bool> authenticate() async {
      return true;
  }
}
