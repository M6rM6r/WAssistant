
import 'package:flutter_test/flutter_test.dart';
import 'package:wassistant/utils/validators.dart';

void main() {
  group('Validators Logic Tests', () {
    
    // --- Phone Number Validation ---
    test('validatePhoneNumber returns error for null/empty', () {
      expect(Validators.validatePhoneNumber(null), 'Phone number is required');
      expect(Validators.validatePhoneNumber(''), 'Phone number is required');
    });

    test('validatePhoneNumber returns error for short numbers', () {
      expect(Validators.validatePhoneNumber('123'), 'Enter a valid phone number (7-15 digits)');
    });

    test('validatePhoneNumber returns error for long numbers', () {
      expect(Validators.validatePhoneNumber('1234567890123456'), 'Enter a valid phone number (7-15 digits)');
    });

    test('validatePhoneNumber returns null for valid numbers', () {
      expect(Validators.validatePhoneNumber('+1234567890'), null);
      expect(Validators.validatePhoneNumber('0551234567'), null);
    });

    // --- Email Validation ---
    test('validateEmail allows null/empty (optional field)', () {
      expect(Validators.validateEmail(null), null);
      expect(Validators.validateEmail(''), null);
    });

    test('validateEmail rejects invalid formats', () {
      expect(Validators.validateEmail('plainaddress'), 'Enter a valid email address');
      expect(Validators.validateEmail('@missingusername.com'), 'Enter a valid email address');
    });

    test('validateEmail accepts valid formats', () {
      expect(Validators.validateEmail('test@example.com'), null);
      expect(Validators.validateEmail('user.name+tag@sub.domain.org'), null);
    });

    // --- URL Validation ---
    test('validateUrl detects spaces', () {
      expect(Validators.validateUrl('http:// exam ple.com'), 'URL should not contain spaces');
    });
  });
}
