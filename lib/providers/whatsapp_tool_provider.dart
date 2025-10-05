import 'package:flutter/foundation.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:vcard/vcard.dart';

class WhatsAppToolProvider with ChangeNotifier {
  String _generatedLink = '';
  String? _barcodeData;
  String _outputMessage = 'Your generated output will appear here.';

  String get generatedLink => _generatedLink;
  String? get barcodeData => _barcodeData;
  String get outputMessage => _outputMessage;

  String? _validateAndCleanNumber(String number) {
    String cleanNumber = number.trim();

    if (cleanNumber.startsWith('+')) {
      cleanNumber = cleanNumber.substring(1);
    }

    if (RegExp(r'[^\d]').hasMatch(cleanNumber)) {
      _outputMessage = 'Error: Invalid characters found. Please use digits (0-9) only.';
      return null;
    }

    if (cleanNumber.isEmpty) {
      _outputMessage = 'Error: The number cannot be empty.';
      return null;
    }

    if (cleanNumber.length < 7 || cleanNumber.length > 15) {
      _outputMessage = 'Error: The number has an invalid length. Please double-check it.';
      return null;
    }

    return cleanNumber;
  }

  void generateChatLink(String number, {String? message}) {
    final cleanNumber = _validateAndCleanNumber(number);
    if (cleanNumber != null) {
      final queryParameters = {
        if (message != null && message.isNotEmpty) 'text': message,
      };
      final uri = Uri.https('wa.me', cleanNumber, queryParameters);
      _generatedLink = uri.toString();
      _outputMessage = 'Generated Link:\n$_generatedLink';
      _barcodeData = null;
    } else {
      _generatedLink = '';
      _barcodeData = null;
    }
    notifyListeners();
  }

  void generateBarcodeForChat(String number, {String? message}) {
    final cleanNumber = _validateAndCleanNumber(number);
    if (cleanNumber != null) {
      final queryParameters = {
        if (message != null && message.isNotEmpty) 'text': message,
      };
      final uri = Uri.https('wa.me', cleanNumber, queryParameters);
      _barcodeData = uri.toString();
      _outputMessage = 'QR Code generated for:\n$uri';
      _generatedLink = '';
    } else {
      _barcodeData = null;
      _generatedLink = '';
    }
    notifyListeners();
  }

  void generateVCardQrCode(String name, String number) {
    final cleanNumber = _validateAndCleanNumber(number);
    if (cleanNumber != null) {
      VCard vCard = VCard();
      vCard.firstName = name;
      vCard.cellPhone = cleanNumber;
      _barcodeData = vCard.getFormattedString();
      _outputMessage = 'vCard QR code generated for $name.';
      _generatedLink = '';
    } else {
      _barcodeData = null;
      _generatedLink = '';
    }
    notifyListeners();
  }

  Future<String> openWhatsAppChat(String number, {String? message, bool isWeb = false}) async {
    final cleanNumber = _validateAndCleanNumber(number);
    if (cleanNumber != null) {
      final queryParameters = {
        if (message != null && message.isNotEmpty) 'text': message,
      };
      final authority = isWeb ? 'web.whatsapp.com' : 'wa.me';
      final path = isWeb ? '/send' : '/' + cleanNumber;
      if(isWeb) queryParameters['phone'] = cleanNumber;

      final url = isWeb
          ? Uri.https(authority, path, queryParameters)
          : Uri.https(authority, path, queryParameters);

      if (await canLaunchUrl(url)) {
        await launchUrl(url);
        _outputMessage = 'Attempted to open WhatsApp chat with $cleanNumber.';
        _generatedLink = '';
        _barcodeData = null;
        notifyListeners();
        return 'Success: Opening chat...';
      } else {
        _outputMessage = 'Error: Could not open WhatsApp. Ensure it is installed and the number is correct.';
        _generatedLink = '';
        _barcodeData = null;
        notifyListeners();
        return 'Error: Could not launch URL';
      }
    } else {
      _generatedLink = '';
      _barcodeData = null;
      notifyListeners();
      return 'Error: Invalid number provided.';
    }
  }

  void clearOutput() {
    _generatedLink = '';
    _barcodeData = null;
    _outputMessage = 'Your generated output will appear here.';
    notifyListeners();
  }
}
