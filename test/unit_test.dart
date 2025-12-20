
import 'package:flutter_test/flutter_test.dart';

// We are testing logic, but since it is inside a mixin/class with ChangeNotifier, 
// we will extract the pure logic function for testing or mock the class.
// For this example, we will simulate the validation logic which is critical.

String? validateAndCleanNumber(String number) {
    if (number.isEmpty) return null;
    var cleanNumber = number.replaceAll(RegExp('[^0-9+]'), '');
    if (cleanNumber.isEmpty) return null;
    if (cleanNumber.startsWith('+')) cleanNumber = cleanNumber.substring(1);
    if (cleanNumber.contains('+')) return null;
    if (cleanNumber.length < 7 || cleanNumber.length > 15) return null;
    return cleanNumber;
}

void main() {
  group('Phone Number Validation Logic', () {
    test('Valid Number returns clean string', () {
      expect(validateAndCleanNumber('+1234567890'), '1234567890');
      expect(validateAndCleanNumber('1234567890'), '1234567890');
      expect(validateAndCleanNumber('+966 55 123 4567'), '966551234567');
    });

    test('Invalid characters are ignored', () {
      expect(validateAndCleanNumber('(555) 123-4567'), '5551234567');
    });

    test('Empty returns null', () {
      expect(validateAndCleanNumber(''), null);
    });

    test('Too short returns null', () {
      expect(validateAndCleanNumber('123'), null);
    });

    test('Too long returns null', () {
      expect(validateAndCleanNumber('12345678901234567890'), null);
    });

    test('Invalid + position returns null', () {
      expect(validateAndCleanNumber('123+456'), null);
    });
  });
}
