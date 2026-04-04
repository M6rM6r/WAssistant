// This service is registered via dependency injection in locator.dart,
// so the analyzer cannot trace a direct path from main().
// ignore_for_file: unreachable_from_main

import 'dart:convert';

import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:http/http.dart' as http;
import 'package:logger/logger.dart';
import 'package:wassistant/utils/constants.dart';

/// Background message handler (must be top-level function)
@pragma('vm:entry-point')
Future<void> firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  // Handle background messages here - logging happens when service is available
  // Note: Logger not available in isolate, message handled silently
}

/// Push notification service for user engagement and retention
/// INTJ strategy: targeted messaging, measurable engagement, systematic campaigns
class NotificationService {
  NotificationService({
    required FirebaseMessaging messaging,
    required Logger logger,
  }) : _messaging = messaging,
       _logger = logger;
  final FirebaseMessaging _messaging;
  final Logger _logger;

  /// Initialize push notifications
  Future<void> initialize() async {
    try {
      // Request permission (iOS)
      final settings = await _messaging.requestPermission();

      if (settings.authorizationStatus == AuthorizationStatus.authorized) {
        _logger.d('Notification permission granted');
      } else if (settings.authorizationStatus ==
          AuthorizationStatus.provisional) {
        _logger.d('Provisional notification permission granted');
      } else {
        _logger.w('Notification permission denied');
        return;
      }

      // Get FCM token
      final token = await _messaging.getToken();
      if (token != null) {
        _logger.d('FCM Token: $token');
        // INTJ: Register token with backend for systematic campaigns
        await _registerTokenWithBackend(token);
      }

      // Listen for token refresh
      _messaging.onTokenRefresh.listen((newToken) {
        _logger.d('FCM Token refreshed: $newToken');
        _registerTokenWithBackend(newToken);
      });

      // Setup message handlers
      FirebaseMessaging.onMessage.listen(_handleForegroundMessage);
      FirebaseMessaging.onMessageOpenedApp.listen(_handleMessageOpenedApp);

      // Check for initial message (app opened from notification)
      final initialMessage = await _messaging.getInitialMessage();
      if (initialMessage != null) {
        _handleMessageOpenedApp(initialMessage);
      }

      // Setup background handler
      FirebaseMessaging.onBackgroundMessage(firebaseMessagingBackgroundHandler);

      _logger.d('Notification service initialized');
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to initialize notifications',
        error: e,
        stackTrace: stackTrace,
      );
    }
  }

  /// Handle foreground messages
  void _handleForegroundMessage(RemoteMessage message) {
    _logger.d('Foreground message received: ${message.messageId}');

    final notification = message.notification;
    final data = message.data;

    if (notification != null) {
      _logger
        ..d('Title: ${notification.title}')
        ..d('Body: ${notification.body}');
    }

    if (data.isNotEmpty) {
      _logger.d('Data: $data');
      _handleNotificationData(data);
    }
  }

  /// Handle messages that opened the app
  void _handleMessageOpenedApp(RemoteMessage message) {
    _logger.d('App opened from notification: ${message.messageId}');

    final data = message.data;
    if (data.isNotEmpty) {
      _handleNotificationData(data);
    }
  }

  /// Handle notification data payload
  void _handleNotificationData(Map<String, dynamic> data) {
    // Navigate based on notification type
    final type = data['type'] as String?;

    switch (type) {
      case 'new_feature':
        // Navigate to new feature screen
        _logger.d('Navigating to new feature');
      case 'update_available':
        // Show update dialog
        _logger.d('Showing update dialog');
      case 'engagement':
        // Show engagement content
        _logger.d('Showing engagement content');
      case 'promo':
        // Show promotional content
        _logger.d('Showing promo');
      default:
        _logger.d('Unknown notification type: $type');
    }
  }

  /// INTJ: Register FCM token with backend for targeted campaigns
  Future<void> _registerTokenWithBackend(String token) async {
    try {
      final response = await http.post(
        Uri.parse('${AppConstants.apiBaseUrl}/notifications/register'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'fcm_token': token,
          'platform': 'flutter',
          'timestamp': DateTime.now().toIso8601String(),
        }),
      );

      if (response.statusCode == 200) {
        _logger.d('FCM token registered with backend');
      } else {
        _logger.w('Failed to register token: ${response.statusCode}');
        // Retry with exponential backoff (INTJ: systematic retry)
        await Future.delayed(const Duration(seconds: 5));
        await _registerTokenWithBackend(token);
      }
    } catch (e) {
      _logger.e('Error registering FCM token: $e');
    }
  }
  Future<void> subscribeToTopic(String topic) async {
    try {
      await _messaging.subscribeToTopic(topic);
      _logger.d('Subscribed to topic: $topic');
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to subscribe to topic',
        error: e,
        stackTrace: stackTrace,
      );
    }
  }

  /// Unsubscribe from topic
  Future<void> unsubscribeFromTopic(String topic) async {
    try {
      await _messaging.unsubscribeFromTopic(topic);
      _logger.d('Unsubscribed from topic: $topic');
    } on Object catch (e, stackTrace) {
      _logger.e(
        'Failed to unsubscribe from topic',
        error: e,
        stackTrace: stackTrace,
      );
    }
  }

  /// Get FCM token
  Future<String?> getToken() async {
    try {
      return await _messaging.getToken();
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to get FCM token', error: e, stackTrace: stackTrace);
      return null;
    }
  }

  /// Delete FCM token
  Future<void> deleteToken() async {
    try {
      await _messaging.deleteToken();
      _logger.d('FCM token deleted');
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to delete FCM token', error: e, stackTrace: stackTrace);
    }
  }

  /// Enable/disable auto-initialization
  Future<void> setAutoInitEnabled({required bool enabled}) async {
    try {
      await _messaging.setAutoInitEnabled(enabled);
      _logger.d('Auto-init ${enabled ? 'enabled' : 'disabled'}');
    } on Object catch (e, stackTrace) {
      _logger.e('Failed to set auto-init', error: e, stackTrace: stackTrace);
    }
  }

  /// Get messaging instance for advanced usage
  FirebaseMessaging get instance => _messaging;
}
