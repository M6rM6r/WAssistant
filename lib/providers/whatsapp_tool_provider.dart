import 'package:flutter/foundation.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/logger_service.dart';

class WhatsAppToolProvider with ChangeNotifier {
  WhatsAppToolProvider({HistoryProvider? historyProvider})
      : _historyProvider = historyProvider;

  // Use a setter for dependency injection to allow updating without recreation
  HistoryProvider? _historyProvider;

  HistoryProvider? get historyProvider => _historyProvider;

  String _generatedLink = '';
  String? _barcodeData;
  String _outputMessage = 'Your generated output will appear here.';

  String get generatedLink => _generatedLink;
  String? get barcodeData => _barcodeData;
  String get outputMessage => _outputMessage;

  set historyProvider(HistoryProvider? value) {
    if (_historyProvider != value) {
      _historyProvider = value;
      // No need to notifyListeners() here usually
    }
  }

  /// Logic: Sanitize input strictly. Remove all non-numeric characters except
  /// a leading '+' sign. This ensures robustness against copy-pasted formats.
  String? _validateAndCleanNumber(String number, AppLocalizations l10n) {
    if (number.isEmpty) {
      _outputMessage = l10n.errorEmptyNumber;
      LoggerService.d('Validation failed: Empty number');
      return null;
    }

    var cleanNumber = number.replaceAll(RegExp('[^0-9+]'), '');

    if (cleanNumber.isEmpty) {
      _outputMessage = l10n.errorNoDigits;
      LoggerService.d('Validation failed: No digits');
      return null;
    }

    if (cleanNumber.startsWith('+')) {
      cleanNumber = cleanNumber.substring(1);
    }

    if (cleanNumber.contains('+')) {
      _outputMessage = l10n.errorInvalidFormat;
      LoggerService.d('Validation failed: Invalid + position');
      return null;
    }

    if (cleanNumber.length < 7 || cleanNumber.length > 15) {
      _outputMessage = l10n.errorInvalidLength;
      LoggerService.d(
        'Validation failed: Invalid length ${cleanNumber.length}',
      );
      return null;
    }

    return cleanNumber;
  }

  void generateChatLink(String number, AppLocalizations l10n, {String? message}) {
    LoggerService.i('Generating Chat Link for $number');
    final cleanNumber = _validateAndCleanNumber(number, l10n);
    if (cleanNumber != null) {
      final queryParameters = {
        if (message != null && message.isNotEmpty) 'text': message,
      };
      final uri = Uri.https(
          AppConstants.whatsappMobileHost, cleanNumber, queryParameters);
      _generatedLink = uri.toString();
      _outputMessage = '${l10n.generatedLinkPrefix}$_generatedLink';
      _barcodeData = null;

      // ignore: discarded_futures -- Fire and forget
      _historyProvider?.addHistoryItem(HistoryItem(
        type: HistoryItemType.link,
        data: _generatedLink,
        display: cleanNumber,
        timestamp: DateTime.now(),
      ));
    } else {
      _generatedLink = '';
      _barcodeData = null;
    }
    notifyListeners();
  }

  void generateBarcodeForChat(String number, AppLocalizations l10n, {String? message}) {
    LoggerService.i('Generating QR Code for $number');
    final cleanNumber = _validateAndCleanNumber(number, l10n);
    if (cleanNumber != null) {
      final queryParameters = {
        if (message != null && message.isNotEmpty) 'text': message,
      };
      final uri = Uri.https(
          AppConstants.whatsappMobileHost, cleanNumber, queryParameters);
      _barcodeData = uri.toString();
      _outputMessage = '${l10n.qrGeneratedPrefix}$uri';
      _generatedLink = ''; // Reset link to avoid confusion

      // ignore: discarded_futures -- Fire and forget
      _historyProvider?.addHistoryItem(HistoryItem(
        type: HistoryItemType.qr,
        data: _barcodeData!,
        display: cleanNumber,
        timestamp: DateTime.now(),
      ));
    } else {
      _barcodeData = null;
      _generatedLink = '';
    }
    notifyListeners();
  }

  void generateVCardQrCode(AppLocalizations l10n, {
    required String firstName,
    required String number,
    String? lastName,
    String? email,
    String? company,
    String? jobTitle,
    String? website,
  }) {
    LoggerService.i('Generating vCard for $firstName');
    final cleanNumber = _validateAndCleanNumber(number, l10n);
    if (cleanNumber == null) {
      _barcodeData = null;
      _generatedLink = '';
      notifyListeners();
      return;
    }
    if (firstName.isEmpty) {
      _outputMessage = l10n.vCardMissingName;
      LoggerService.d('vCard Gen failed: Missing first name');
      _barcodeData = null;
      _generatedLink = '';
      notifyListeners();
      return;
    }

    final name = '$firstName ${lastName ?? ''}'.trim();

    final vCardString = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:${lastName ?? ''};$firstName;;;',
      'FN:$name',
      'TEL;TYPE=CELL:+$cleanNumber',
      if (email != null && email.isNotEmpty) 'EMAIL:$email',
      if (company != null && company.isNotEmpty) 'ORG:$company',
      if (jobTitle != null && jobTitle.isNotEmpty) 'TITLE:$jobTitle',
      if (website != null && website.isNotEmpty) 'URL:$website',
      'END:VCARD'
    ].where((line) => line.isNotEmpty).join('\n');

    _barcodeData = vCardString;
    _outputMessage = l10n.vCardGenerated(name);
    _generatedLink = '';

    // ignore: discarded_futures -- Fire and forget
    _historyProvider?.addHistoryItem(HistoryItem(
      type: HistoryItemType.vcard,
      data: vCardString,
      display: name,
      timestamp: DateTime.now(),
    ));

    notifyListeners();
  }

  Future<String> openWhatsAppChat(String number, AppLocalizations l10n,
      {String? message, bool isWeb = false}) async {
    LoggerService.i('Attempting to open WhatsApp Chat');
    final cleanNumber = _validateAndCleanNumber(number, l10n);
    if (cleanNumber != null) {
      final queryParameters = {
        if (message != null && message.isNotEmpty) 'text': message,
      };

      final authority =
          isWeb ? AppConstants.whatsappWebUrl : AppConstants.whatsappMobileHost;
      final path = isWeb ? '/send' : '/$cleanNumber';

      if (isWeb) {
        queryParameters['phone'] = cleanNumber;
      }

      final url = Uri.https(authority, path, queryParameters);

      if (await canLaunchUrl(url)) {
        await launchUrl(url, mode: LaunchMode.externalApplication);
        return l10n.successChatOpened;
      } else {
        LoggerService.e('Could not launch URL: $url');
        return l10n.errorLaunchFailed;
      }
    } else {
      // Return the friendly error message stored in state if validation fails,
      // or a generic one if something else happened.
      return _outputMessage.isNotEmpty
          ? _outputMessage
          : l10n.errorInvalidNumber;
    }
  }

  Future<void> shareContent() async {
    if (_generatedLink.isNotEmpty) {
      LoggerService.i('Sharing Link');
      await Share.share(_generatedLink);
    } else if (_barcodeData != null && _barcodeData!.isNotEmpty) {
      LoggerService.i('Sharing QR Data');
      await Share.share(_barcodeData!);
    }
  }

  void clearOutput() {
    _generatedLink = '';
    _barcodeData = null;
    _outputMessage = 'Your generated output will appear here.';
    notifyListeners();
  }

  void reuseHistoryItem(HistoryItem item) {
    LoggerService.i('Restoring history item: ${item.type}');
    _outputMessage = 'Reusing: ${item.display}';
    if (item.type == HistoryItemType.link) {
      _generatedLink = item.data;
      _barcodeData = null;
    } else {
      _barcodeData = item.data;
      _generatedLink = '';
    }
    notifyListeners();
  }
}
