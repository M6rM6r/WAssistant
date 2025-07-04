// Import necessary Flutter foundation classes for ChangeNotifier.
import 'package:flutter/foundation.dart';
// Import url_launcher for opening external URLs.
import 'package:url_launcher/url_launcher.dart';

// WhatsAppToolProvider extends ChangeNotifier, which allows it to notify its listeners
// (widgets) when its data changes. This is the core of the Provider package.
class WhatsAppToolProvider with ChangeNotifier {
  // --- Internal State Variables ---
  // These variables hold the data that the UI needs to display and react to.
  String _generatedLink = '';
  String? _barcodeData;
  String _outputMessage = 'Your generated output will appear here.';

  // --- Getters to Access State Variables ---
  // Widgets will use these getters to read the current state without directly modifying it.
  String get generatedLink => _generatedLink;
  String? get barcodeData => _barcodeData;
  String get outputMessage => _outputMessage;

  // --- Business Logic Methods ---
  // These methods contain the core logic for your app's features.
  // They modify the internal state and then call notifyListeners() to trigger UI updates.

  // Converts the WhatsApp number to a chat link.
  void generateChatLink(String number) {
    if (number.isNotEmpty) {
      _generatedLink = 'https://wa.me/$number';
      _outputMessage = 'Generated Link:\n$_generatedLink';
      _barcodeData = null; // Clear barcode when generating a link.
    } else {
      _generatedLink = '';
      _outputMessage = 'Please enter a WhatsApp number to generate a link.';
      _barcodeData = null;
    }
    notifyListeners(); // Notify all listening widgets that the state has changed.
  }

  // Generates a QR code that takes the user to the chat page.
  void generateBarcodeForChat(String number) {
    if (number.isNotEmpty) {
      _barcodeData = 'https://wa.me/$number';
      _outputMessage = 'QR Code generated for:\nhttps://wa.me/$number';
      _generatedLink = ''; // Clear link when generating a barcode.
    } else {
      _barcodeData = null;
      _outputMessage = 'Please enter a WhatsApp number to generate a QR Code.';
      _generatedLink = '';
    }
    notifyListeners(); // Notify all listening widgets.
  }

  // Opens the WhatsApp chat directly.
  Future<String> openWhatsAppChat(String number) async {
    if (number.isNotEmpty) {
      final url = Uri.parse('https://wa.me/$number');
      if (await canLaunchUrl(url)) {
        await launchUrl(url);
        _outputMessage = 'Attempted to open WhatsApp chat with $number.';
        _generatedLink = '';
        _barcodeData = null;
        notifyListeners(); // Notify all listening widgets.
        return 'Success'; // Return a success indicator.
      } else {
        _outputMessage = 'Could not open WhatsApp chat. Please check the number or WhatsApp installation.';
        _generatedLink = '';
        _barcodeData = null;
        notifyListeners(); // Notify all listening widgets.
        return 'Error: Could not launch URL'; // Return an error indicator.
      }
    } else {
      _outputMessage = 'Please enter a WhatsApp number to open a chat.';
      _generatedLink = '';
      _barcodeData = null;
      notifyListeners(); // Notify all listening widgets.
      return 'Error: Empty number'; // Return an error indicator.
    }
  }

  // Function to simulate sending an anonymous message.
  // NOTE: This is a placeholder. Real anonymous messaging requires a backend service.
  Future<String> sendAnonymousMessage(String number) async {
    if (number.isNotEmpty) {
      _outputMessage = 'Simulating sending an anonymous message to $number.\n(This feature requires a backend service to be fully functional)';
      _generatedLink = '';
      _barcodeData = null;
      notifyListeners(); // Notify all listening widgets.
      return 'Success: Simulated'; // Return a success indicator.
    } else {
      _outputMessage = 'Please enter a WhatsApp number to simulate sending an anonymous message.';
      _generatedLink = '';
      _barcodeData = null;
      notifyListeners(); // Notify all listening widgets.
      return 'Error: Empty number'; // Return an error indicator.
    }
  }

  // Method to clear all outputs and reset the state.
  void clearOutputs() {
    _generatedLink = '';
    _barcodeData = null;
    _outputMessage = 'Your generated output will appear here.';
    notifyListeners(); // Notify all listening widgets.
  }
}