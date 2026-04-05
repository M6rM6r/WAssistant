import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:qr_flutter/qr_flutter.dart';

/// INTJ: Progressive Web App Service for offline capabilities
/// OCPD: Deterministic offline behavior with measurable reliability
class PwaService {
  static final PwaService _instance = PwaService._internal();
  factory PwaService() => _instance;
  PwaService._internal();

  bool _isOnline = true;
  bool get isOnline => _isOnline;

  final _onlineStatusController = StreamController<bool>.broadcast();
  Stream<bool> get onlineStatus => _onlineStatusController.stream;

  /// Initialize PWA capabilities
  Future<void> init() async {
    if (!kIsWeb) return;

    _setupOnlineStatusListener();
    await _registerServiceWorker();
    await _cacheCriticalResources();
  }

  /// Monitor online/offline status
  void _setupOnlineStatusListener() {
    html.window.onOnline.listen((_) {
      _isOnline = true;
      _onlineStatusController.add(true);
      _syncOfflineData();
    });

    html.window.onOffline.listen((_) {
      _isOnline = false;
      _onlineStatusController.add(false);
    });

    _isOnline = html.window.navigator.onLine ?? true;
  }

  /// Register service worker for offline support
  Future<void> _registerServiceWorker() async {
    final serviceWorker = html.window.navigator.serviceWorker;
    if (serviceWorker == null) {
      debugPrint('Service workers not supported');
      return;
    }

    try {
      final registration = await serviceWorker.register('/service_worker.js');

      // Handle updates via event listener
      registration.addEventListener('updatefound', (_) {
        final newWorker = registration.installing;
        if (newWorker != null) {
          newWorker.addEventListener('statechange', (_) {
            if (newWorker.state == 'installed') {
              if (registration.active != null) {
                _showUpdateNotification();
              }
            }
          });
        }
      });

      debugPrint('Service worker registered: ${registration.scope}');
    } catch (e) {
      debugPrint('Service worker registration failed: $e');
    }
  }

  /// Cache critical app resources
  Future<void> _cacheCriticalResources() async {
    if (!_isOnline) return;

    final cacheRequest = <String, dynamic>{
      'action': 'CACHE_RESOURCES',
      'resources': [
        '/',
        '/index.html',
        '/main.dart.js',
        '/assets/fonts/MaterialIcons-Regular.otf',
        '/assets/packages/country_code_picker/flags/',
      ],
    };

    _sendMessageToServiceWorker(cacheRequest);
  }

  /// Generate QR code offline
  Future<Uint8List?> generateQrOffline({
    required String data,
    int size = 512,
    Color foregroundColor = Colors.black,
    Color backgroundColor = Colors.white,
  }) async {
    try {
      // Check if we have cached QR generation capability
      final cachedData = await _getCachedQrData(data);
      if (cachedData != null) {
        return cachedData;
      }

      // Generate QR using local library
      final qrValidationResult = QrValidator.validate(
        data: data,
        version: QrVersions.auto,
        errorCorrectionLevel: QrErrorCorrectLevel.H,
      );

      if (!qrValidationResult.isValid) {
        throw Exception('Invalid QR data');
      }

      final painter = QrPainter.withQr(
        qr: qrValidationResult.qrCode!,
        color: foregroundColor,
        gapless: true,
        embeddedImageStyle: null,
        embeddedImage: null,
      );

      // Convert to image
      final recorder = ui.PictureRecorder();
      final canvas = ui.Canvas(recorder);

      // Paint background
      canvas.drawRect(
        ui.Rect.fromLTWH(0, 0, size.toDouble(), size.toDouble()),
        ui.Paint()..color = backgroundColor,
      );

      // Paint QR
      painter.paint(canvas, ui.Size(size.toDouble(), size.toDouble()));

      final picture = recorder.endRecording();
      final image = await picture.toImage(size, size);
      final byteData = await image.toByteData(format: ui.ImageByteFormat.png);

      if (byteData == null) return null;

      final bytes = byteData.buffer.asUint8List();

      // Cache for future offline use
      await _cacheQrData(data, bytes);

      return bytes;
    } catch (e) {
      debugPrint('Offline QR generation failed: $e');
      return null;
    }
  }

  /// Cache QR data for offline use
  Future<void> _cacheQrData(String data, Uint8List bytes) async {
    try {
      final cache = await html.window.caches?.open('qr-cache-v1');
      if (cache == null) return;

      final request = html.Request('qr://$data');
      final response = html.Response(
        bytes,
        status: 200,
        headers: {'Content-Type': 'image/png'},
      );

      await cache.put(request, response);
    } catch (e) {
      debugPrint('Cache storage failed: $e');
    }
  }

  /// Retrieve cached QR data
  Future<Uint8List?> _getCachedQrData(String data) async {
    try {
      final cache = await html.window.caches?.open('qr-cache-v1');
      if (cache == null) return null;

      final request = html.Request('qr://$data');
      final response = await cache.match(request);

      if (response == null) return null;

      final blob = await response.blob();
      final arrayBuffer = await html.window.fetch(blob.toString())
          .then((r) => r.arrayBuffer());

      return Uint8List.view(arrayBuffer);
    } catch (e) {
      return null;
    }
  }

  /// Sync offline data when coming back online
  Future<void> _syncOfflineData() async {
    try {
      final pendingOps = await _getPendingOperations();

      for (final op in pendingOps) {
        try {
          await _executeOperation(op);
          await _removePendingOperation(op['id']);
        } catch (e) {
          debugPrint('Failed to sync operation: $e');
        }
      }
    } catch (e) {
      debugPrint('Offline sync failed: $e');
    }
  }

  /// Queue operation for offline execution
  Future<void> queueOfflineOperation(Map<String, dynamic> operation) async {
    final storage = html.window.localStorage;
    final pending = _getPendingOperationsSync();

    pending.add({
      ...operation,
      'id': DateTime.now().millisecondsSinceEpoch.toString(),
      'timestamp': DateTime.now().toIso8601String(),
    });

    storage['pending_operations'] = jsonEncode(pending);
  }

  List<Map<String, dynamic>> _getPendingOperationsSync() {
    final storage = html.window.localStorage;
    final data = storage['pending_operations'];
    if (data == null || data.isEmpty) return [];

    try {
      return List<Map<String, dynamic>>.from(jsonDecode(data));
    } catch (e) {
      return [];
    }
  }

  Future<List<Map<String, dynamic>>> _getPendingOperations() async {
    return _getPendingOperationsSync();
  }

  Future<void> _executeOperation(Map<String, dynamic> op) async {
    // Execute based on operation type
    switch (op['type']) {
      case 'qr_generate':
        // Re-generate QR and save to cloud
        break;
      case 'history_add':
        // Sync history to backend
        break;
      default:
        break;
    }
  }

  Future<void> _removePendingOperation(String id) async {
    final pending = _getPendingOperationsSync();
    pending.removeWhere((op) => op['id'] == id);
    html.window.localStorage['pending_operations'] = jsonEncode(pending);
  }

  /// Send message to service worker
  void _sendMessageToServiceWorker(Map<String, dynamic> message) {
    final controller = html.window.navigator.serviceWorker?.controller;
    if (controller != null) {
      controller.postMessage(jsonEncode(message));
    }
  }

  /// Show update notification
  void _showUpdateNotification() {
    // Trigger app update notification
    // User can refresh to get new version
  }

  /// Install PWA prompt (for mobile)
  Future<void> showInstallPrompt() async {
    if (!kIsWeb) return;

    final deferredPrompt = _getBeforeInstallPrompt();
    if (deferredPrompt != null) {
      deferredPrompt.prompt();

      final result = await deferredPrompt.userChoice;
      if (result.outcome == 'accepted') {
        debugPrint('PWA installed');
      }
    }
  }

  dynamic _getBeforeInstallPrompt() {
    // Store reference from beforeinstallprompt event
    return null;
  }

  /// Get storage usage
  Future<Map<String, dynamic>> getStorageUsage() async {
    if (!kIsWeb) return {'usage': 0, 'quota': 0};

    try {
      final storage = await html.window.navigator.storage?.estimate();
      return {
        'usage': storage?['usage'] ?? 0,
        'quota': storage?['quota'] ?? 0,
        'percent': storage?['quota'] != null && storage!['quota'] > 0
            ? ((storage['usage'] / storage['quota']) * 100).toStringAsFixed(2)
            : '0',
      };
    } catch (e) {
      return {'usage': 0, 'quota': 0, 'error': e.toString()};
    }
  }

  void dispose() {
    _onlineStatusController.close();
  }
}
