/// OCPD: Centralized Data Validation Engine.
/// INTJ Strategy: Mathematical certainty for all user inputs.
class Validators {
  Validators._();

  static final RegExp _phoneRegex = RegExp(r'^\+?[1-9]\d{6,14}$');
  static final RegExp _emailRegex = RegExp(
    r'^[a-zA-Z0-9.!#$%&'
    "'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?"
    r'(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$',
  );
  static final RegExp _urlRegex = RegExp(
    r'^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$',
  );

  /// Validates a phone number and returns true if it matches international standards.
  static bool validatePhoneNumber(String? input) {
    if (input == null || input.isEmpty) return false;
    return _phoneRegex.hasMatch(input);
  }

  /// Validates an email address using a strict RFC-compliant regex.
  static bool validateEmail(String? input) {
    if (input == null || input.isEmpty) return false;
    return _emailRegex.hasMatch(input);
  }

  /// Validates a URL for web compatibility.
  static bool validateUrl(String? input) {
    if (input == null || input.isEmpty) return false;
    return _urlRegex.hasMatch(input);
  }

  /// Utility: Cleans a phone number to digits-only for system processing.
  static String? cleanPhone(String? input) {
    if (input == null || input.isEmpty) return null;
    final digitsOnly = input.replaceAll(RegExp('[^0-9]'), '');
    if (digitsOnly.length < 7 || digitsOnly.length > 15) return null;
    return digitsOnly;
  }
}
