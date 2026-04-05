import 'dart:async';

import 'package:app_links/app_links.dart';
import 'package:flutter/foundation.dart';
import 'package:url_launcher/url_launcher.dart';

/// INTJ: Deep Linking Service for wa.me URLs and app routing
/// OCPD: Deterministic URL handling with fallback strategies
class DeepLinkService {
  static final DeepLinkService _instance = DeepLinkService._internal();
  factory DeepLinkService() => _instance;
  DeepLinkService._internal();

  final _appLinks = AppLinks();
  StreamSubscription<Uri?>? _linkSubscription;
  final _linkController = StreamController<Uri>.broadcast();
  Stream<Uri> get onLinkReceived => _linkController.stream;

  /// Initialize deep link handling
  Future<void> init() async {
    // Handle initial link (app launched from URL)
    try {
      final initialLink = await _appLinks.getInitialAppLink();
      if (initialLink != null) {
        _handleLink(initialLink);
      }
    } catch (e) {
      debugPrint('Failed to get initial link: $e');
    }

    // Listen for incoming links while app is running
    _linkSubscription = _appLinks.uriLinkStream.listen(
      (Uri? link) {
        if (link != null) {
          _handleLink(link);
        }
      },
      onError: (err) {
        debugPrint('Deep link error: $err');
      },
    );
  }

  /// Handle incoming deep link
  void _handleLink(Uri uri) {
    debugPrint('Received deep link: $uri');

    // Parse wa.me URLs
    if (uri.host == 'wa.me' || uri.path.contains('wa.me')) {
      _handleWhatsAppLink(uri);
    }
    // Handle app-specific schemes
    else if (uri.scheme == 'wassistant') {
      _handleAppScheme(uri);
    }
    // Handle web URLs
    else {
      _linkController.add(uri);
    }
  }

  /// Parse and handle wa.me URLs
  void _handleWhatsAppLink(Uri uri) {
    String? phoneNumber;
    String? message;

    // Extract phone from path: /1234567890
    if (uri.pathSegments.isNotEmpty) {
      phoneNumber = uri.pathSegments.first;
    }

    // Extract message from query: ?text=hello
    message = uri.queryParameters['text'];

    if (phoneNumber != null) {
      _linkController.add(Uri(
        scheme: 'whatsapp',
        host: 'send',
        queryParameters: {
          'phone': phoneNumber,
          if (message != null) 'text': message,
        },
      ));
    }
  }

  /// Handle wassistant:// scheme URLs
  void _handleAppScheme(Uri uri) {
    switch (uri.host) {
      case 'qr':
        _linkController.add(uri);
        break;
      case 'history':
        _linkController.add(uri);
        break;
      case 'template':
        _linkController.add(uri);
        break;
      default:
        debugPrint('Unknown app scheme: ${uri.host}');
    }
  }

  /// Generate wa.me URL from phone and message
  String generateWhatsAppUrl({
    required String phoneNumber,
    String? message,
    bool useWeb = false,
  }) {
    // Clean phone number
    final cleanPhone = phoneNumber.replaceAll(RegExp(r'[^\d+]'), '');

    if (useWeb) {
      // Web WhatsApp
      final baseUrl = 'https://web.whatsapp.com/send';
      final params = <String, String>{
        'phone': cleanPhone,
        if (message != null) 'text': message,
      };
      return Uri.parse(baseUrl).replace(queryParameters: params).toString();
    } else {
      // wa.me short URL
      final baseUrl = 'https://wa.me/$cleanPhone';
      if (message != null) {
        return '$baseUrl?text=${Uri.encodeComponent(message)}';
      }
      return baseUrl;
    }
  }

  /// Open WhatsApp with phone number
  Future<bool> openWhatsApp({
    required String phoneNumber,
    String? message,
  }) async {
    try {
      // Try app first
      final appUrl = _buildWhatsAppAppUrl(phoneNumber, message);
      if (await canLaunchUrl(Uri.parse(appUrl))) {
        return await launchUrl(
          Uri.parse(appUrl),
          mode: LaunchMode.externalApplication,
        );
      }

      // Fall back to web
      final webUrl = generateWhatsAppUrl(
        phoneNumber: phoneNumber,
        message: message,
        useWeb: true,
      );

      return await launchUrl(
        Uri.parse(webUrl),
        mode: LaunchMode.externalApplication,
      );
    } catch (e) {
      debugPrint('Failed to open WhatsApp: $e');
      return false;
    }
  }

  /// Build WhatsApp app URL scheme
  String _buildWhatsAppAppUrl(String phone, String? message) {
    final cleanPhone = phone.replaceAll(RegExp(r'[^\d]'), '');
    if (message != null) {
      return 'whatsapp://send?phone=$cleanPhone&text=${Uri.encodeComponent(message)}';
    }
    return 'whatsapp://send?phone=$cleanPhone';
  }

  /// Register custom URL scheme (for sharing from other apps)
  Future<bool> registerAsDefaultHandler() async {
    // This would integrate with Android Intent Filters
    // and iOS URL Types configuration
    return true;
  }

  /// Dispose resources
  void dispose() {
    _linkSubscription?.cancel();
    _linkController.close();
  }
}

/// Deep link router for navigation
class DeepLinkRouter {
  static String? extractPhoneFromLink(Uri link) {
    if (link.scheme == 'whatsapp') {
      return link.queryParameters['phone'];
    }
    if (link.host == 'wa.me' && link.pathSegments.isNotEmpty) {
      return link.pathSegments.first;
    }
    return null;
  }

  static String? extractMessageFromLink(Uri link) {
    return link.queryParameters['text'];
  }
}
