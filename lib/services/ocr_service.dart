import 'package:google_mlkit_text_recognition/google_mlkit_text_recognition.dart';
import 'package:image_picker/image_picker.dart';
import 'package:wassistant/utils/logger_service.dart';

class OcrService {
  final _textRecognizer = TextRecognizer();
  final _picker = ImagePicker();

  Future<String?> scanNumberFromCamera() async {
    try {
      // 1. Capture Image
      final pickedFile = await _picker.pickImage(source: ImageSource.camera);
      if (pickedFile == null) return null;

      // 2. Process Image
      final inputImage = InputImage.fromFilePath(pickedFile.path);
      final recognizedText = await _textRecognizer.processImage(inputImage);

      // 3. Intelligent Filtering (INTJ Logic)
      // We don't just return text; we find the *phone number*.
      return _extractPhoneNumber(recognizedText.text);
    } on Object catch (e) {
      LoggerService.e('OCR Scan Failed', e);
      return null;
    }
  }

  String? _extractPhoneNumber(String rawText) {
    // Regex logic: Look for patterns that resemble phone numbers
    // Supports: +123, (123) 456-7890, 123-456-7890, etc.
    final phoneRegex = RegExp(r'(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}');
    final match = phoneRegex.firstMatch(rawText);

    if (match != null) {
      // Clean it up: Remove noise characters
      final number = match.group(0)?.replaceAll(RegExp(r'[^0-9+]'), '');
      LoggerService.i('OCR Found Number: $number');
      return number;
    }

    LoggerService.w('OCR: No valid phone number found in text block.');
    return null;
  }

  void dispose() {
    _textRecognizer.close();
  }
}
