import 'package:flutter_test/flutter_test.dart';
import 'package:wassistant/utils/validators.dart';

void main() {
  group('Validators Logic Tests', () {
    // --- Phone Number Validation ---
    test('validatePhoneNumber returns false for null/empty', () {
      expect(Validators.validatePhoneNumber(null), isFalse);
      expect(Validators.validatePhoneNumber(''), isFalse);
    });

    test('validatePhoneNumber returns false for short numbers', () {
      expect(Validators.validatePhoneNumber('123'), isFalse);
    });

    test('validatePhoneNumber returns false for long numbers', () {
      expect(Validators.validatePhoneNumber('1234567890123456'), isFalse);
    });

    test('validatePhoneNumber returns true for valid numbers', () {
      expect(Validators.validatePhoneNumber('+1234567890'), isTrue);
      expect(Validators.validatePhoneNumber('1234567890'), isTrue);
    });

    // --- Email Validation ---
    test('validateEmail returns false for null/empty', () {
      expect(Validators.validateEmail(null), isFalse);
      expect(Validators.validateEmail(''), isFalse);
    });

    test('validateEmail rejects invalid formats', () {
      expect(Validators.validateEmail('plainaddress'), isFalse);
      expect(Validators.validateEmail('@missingusername.com'), isFalse);
    });

    test('validateEmail accepts valid formats', () {
      expect(Validators.validateEmail('test@example.com'), isTrue);
      expect(Validators.validateEmail('user.name+tag@sub.domain.org'), isTrue);
    });

    // --- URL Validation ---
    test('validateUrl detects invalid URLs', () {
      expect(Validators.validateUrl('http:// exam ple.com'), isFalse);
      expect(Validators.validateUrl(null), isFalse);
      expect(Validators.validateUrl(''), isFalse);
    });

    test('validateUrl accepts valid URLs', () {
      expect(Validators.validateUrl('https://example.com'), isTrue);
      expect(Validators.validateUrl('http://sub.domain.org/path'), isTrue);
    });

    // --- Clean Phone Utility ---
    test('cleanPhone removes non-digits and validates length', () {
      expect(Validators.cleanPhone('+1 (555) 123-4567'), '15551234567');
      expect(Validators.cleanPhone('123'), isNull);
      expect(Validators.cleanPhone(null), isNull);
      expect(Validators.cleanPhone(''), isNull);
    });
  });
}
