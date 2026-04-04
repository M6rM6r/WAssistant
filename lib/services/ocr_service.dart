import 'package:google_mlkit_text_recognition/google_mlkit_text_recognition.dart';
import 'package:image_picker/image_picker.dart';
import 'package:wassistant/utils/logger_service.dart';

/// OCPD: Intelligent Data Extraction Service.
/// INTJ Strategy: Reduce user friction via machine learning.
class OcrService {
  final TextRecognizer _textRecognizer = TextRecognizer();
  final ImagePicker _picker = ImagePicker();

  /// Captures an image and extracts the first valid phone number found.
  Future<String?> scanNumberFromCamera() async {
    try {
      final XFile? image = await _picker.pickImage(source: ImageSource.camera);
      if (image == null) return null;

      final inputImage = InputImage.fromFilePath(image.path);
      final RecognizedText recognizedText = await _textRecognizer.processImage(
        inputImage,
      );

      // OCPD Logic: Strict regex for international phone numbers
      final RegExp phoneRegex = RegExp(r'\+?[1-9]\d{6,14}');

      for (TextBlock block in recognizedText.blocks) {
        for (TextLine line in block.lines) {
          final String cleanedLine = line.text.replaceAll(RegExp(r'\s+'), '');
          final match = phoneRegex.firstMatch(cleanedLine);
          if (match != null) {
            LoggerService.i('OCR: Found phone number: ${match.group(0)}');
            return match.group(0);
          }
        }
      }
      return null;
    } catch (e, stackTrace) {
      LoggerService.e('OCR: Scanning failed', e, stackTrace);
      return null;
    }
  }

  void dispose() {
    _textRecognizer.close();
  }
}
