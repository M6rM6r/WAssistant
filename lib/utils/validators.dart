
/// Centralized validation logic.
/// Ensures consistency across the application.
class Validators {
  Validators._();

  static String? validatePhoneNumber(String? value) {
    if (value == null || value.isEmpty) {
      return 'Phone number is required';
    }
    // Logic: Use a Pattern instead of RegExp for simple checks or pre-compile
    final clean = value.replaceAll(RegExp('[^0-9]'), '');
    if (clean.length < 7 || clean.length > 15) {
      return 'Enter a valid phone number (7-15 digits)';
    }
    return null;
  }

  static String? validateName(String? value) {
    if (value == null || value.isEmpty) {
      return 'Name is required';
    }
    return null;
  }

  static String? validateEmail(String? value) {
    if (value == null || value.isEmpty) {
      return null; // Optional
    }
    // Basic, permissive email regex (no spaces, has @ and a domain)
    final emailRegExp = RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$');
    if (!emailRegExp.hasMatch(value)) {
      return 'Enter a valid email address';
    }
    return null;
  }

  static String? validateUrl(String? value) {
    if (value == null || value.isEmpty) {
      return null; // Optional
    }
    // We append https:// if missing in logic, but here we just check structure
    if (value.contains(' ')) {
      return 'URL should not contain spaces';
    }
    return null;
  }
}
