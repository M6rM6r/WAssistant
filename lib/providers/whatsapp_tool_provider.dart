import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:fpdart/fpdart.dart';
import 'package:phone_numbers_parser/phone_numbers_parser.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/failures.dart';

class WhatsAppToolProvider with ChangeNotifier {
  WhatsAppToolProvider({HistoryProvider? historyProvider})
    : _historyProvider = historyProvider;

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
    }
  }

  Either<Failure, String> _validateAndClean(String number, AppLocalizations l10n) {
    final trimmed = number.trim();
    if (trimmed.isEmpty) return Left(ValidationFailure(l10n.errorEmptyNumber));
    try {
      final parsed = PhoneNumber.parse(trimmed);
      final digitsOnly = parsed.international.replaceAll(RegExp('[^0-9]'), '');
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        return Left(ValidationFailure(l10n.errorInvalidLength));
      }
      return Right(digitsOnly);
    } catch (_) {
      return Left(ValidationFailure(l10n.errorInvalidNumber));
    }
  }

  void generateChatLink(String number, AppLocalizations l10n, {String? message}) {
    _validateAndClean(number, l10n).fold(
      (failure) {
        _outputMessage = failure.message;
        _generatedLink = '';
        _barcodeData = null;
      },
      (cleanNumber) {
        final queryParameters = {if (message != null && message.isNotEmpty) 'text': message};
        final uri = Uri.https(AppConstants.whatsappMobileHost, cleanNumber, queryParameters);
        _generatedLink = uri.toString();
        _outputMessage = '${l10n.generatedLinkPrefix}$_generatedLink';
        _barcodeData = null;
        unawaited(
          _historyProvider?.addHistoryItem(
            HistoryItem(
              type: HistoryItemType.link,
              data: _generatedLink,
              display: cleanNumber,
              timestamp: DateTime.now(),
            ),
          ),
        );
      },
    );
    notifyListeners();
  }

  void generateBarcodeForChat(String number, AppLocalizations l10n, {String? message}) {
    _validateAndClean(number, l10n).fold(
      (failure) {
        _outputMessage = failure.message;
        _barcodeData = null;
        _generatedLink = '';
      },
      (cleanNumber) {
        final queryParameters = {if (message != null && message.isNotEmpty) 'text': message};
        final uri = Uri.https(AppConstants.whatsappMobileHost, cleanNumber, queryParameters);
        _barcodeData = uri.toString();
        _outputMessage = '${l10n.qrGeneratedPrefix}$uri';
        _generatedLink = '';
        unawaited(
          _historyProvider?.addHistoryItem(
            HistoryItem(
              type: HistoryItemType.qr,
              data: _barcodeData!,
              display: cleanNumber,
              timestamp: DateTime.now(),
            ),
          ),
        );
      },
    );
    notifyListeners();
  }

  void generateVCardQrCode(
    AppLocalizations l10n, {
    required String firstName,
    required String number,
    String? lastName,
    String? email,
    String? company,
    String? jobTitle,
    String? website,
  }) {
    _validateAndClean(number, l10n).fold(
      (failure) {
        _outputMessage = failure.message;
        _barcodeData = null;
        _generatedLink = '';
      },
      (cleanNumber) {
        if (firstName.isEmpty) {
          _outputMessage = l10n.vCardMissingName;
          return;
        }
        final name = '$firstName ${lastName ?? ''}'.trim();
        final vCardString = [
          'BEGIN:VCARD',
          'VERSION:3.0',
          'FN:$name',
          'TEL;TYPE=CELL:+$cleanNumber',
          if (email != null && email.isNotEmpty) 'EMAIL:$email',
          if (company != null && company.isNotEmpty) 'ORG:$company',
          if (jobTitle != null && jobTitle.isNotEmpty) 'TITLE:$jobTitle',
          if (website != null && website.isNotEmpty) 'URL:$website',
          'END:VCARD',
        ].where((line) => line.isNotEmpty).join('\n');
        _barcodeData = vCardString;
        _outputMessage = l10n.vCardGenerated(name);
        _generatedLink = '';
        unawaited(
          _historyProvider?.addHistoryItem(
            HistoryItem(
              type: HistoryItemType.vcard,
              data: vCardString,
              display: name,
              timestamp: DateTime.now(),
            ),
          ),
        );
      },
    );
    notifyListeners();
  }

  Future<String> openWhatsAppChat(
    String number,
    AppLocalizations l10n, {
    String? message,
    bool isWeb = false,
  }) async {
    return _validateAndClean(number, l10n).fold((failure) => failure.message, (cleanNumber) async {
      final queryParameters = {if (message != null && message.isNotEmpty) 'text': message};
      final authority = isWeb ? AppConstants.whatsappWebUrl : AppConstants.whatsappMobileHost;
      final path = isWeb ? '/send' : '/$cleanNumber';
      if (isWeb) queryParameters['phone'] = cleanNumber;
      final url = Uri.https(authority, path, queryParameters);
      if (await canLaunchUrl(url)) {
        await launchUrl(url, mode: LaunchMode.externalApplication);
        return l10n.successChatOpened;
      }
      return l10n.errorLaunchFailed;
    });
  }

  Future<void> shareContent() async {
    final data = _generatedLink.isNotEmpty ? _generatedLink : (_barcodeData ?? '');
    if (data.isNotEmpty) await Share.share(data);
  }

  void clearOutput() {
    _generatedLink = '';
    _barcodeData = null;
    _outputMessage = 'Your generated output will appear here.';
    notifyListeners();
  }

  void reuseHistoryItem(HistoryItem item) {
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
