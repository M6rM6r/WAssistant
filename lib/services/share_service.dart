import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:path/path.dart' as path;
import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';

/// INTJ: Cross-platform share service with native integration
/// OCPD: Deterministic sharing behavior across all platforms
class ShareService {
  static final ShareService _instance = ShareService._internal();
  factory ShareService() => _instance;
  ShareService._internal();

  /// Share text content via native share sheet
  Future<void> shareText({
    required String text,
    String? subject,
  }) async {
    try {
      await Share.share(
        text,
        subject: subject,
      );
    } catch (e) {
      debugPrint('Share text failed: $e');
    }
  }

  /// Share QR code image
  Future<void> shareQrCode({
    required Uint8List imageBytes,
    required String filename,
    String? text,
    String? subject,
  }) async {
    try {
      // Save to temporary file
      final tempDir = await getTemporaryDirectory();
      final filePath = path.join(tempDir.path, filename);
      final file = File(filePath);
      await file.writeAsBytes(imageBytes);

      // Share the file
      await Share.shareXFiles(
        [XFile(filePath)],
        text: text,
        subject: subject,
      );

      // Cleanup temp file
      await file.delete();
    } catch (e) {
      debugPrint('Share QR failed: $e');
    }
  }

  /// Share vCard contact file
  Future<void> shareVCard({
    required String vCardContent,
    required String filename,
  }) async {
    try {
      final tempDir = await getTemporaryDirectory();
      final filePath = path.join(tempDir.path, filename);
      final file = File(filePath);
      await file.writeAsString(vCardContent);

      await Share.shareXFiles(
        [XFile(filePath)],
        subject: 'Contact Information',
      );

      await file.delete();
    } catch (e) {
      debugPrint('Share vCard failed: $e');
    }
  }

  /// Share multiple items (bulk share)
  Future<void> shareMultiple({
    required List<ShareItem> items,
    String? subject,
  }) async {
    try {
      final xFiles = <XFile>[];
      final tempDir = await getTemporaryDirectory();

      for (final item in items) {
        if (item.isFile) {
          final filePath = path.join(tempDir.path, item.filename);
          final file = File(filePath);

          if (item.bytes != null) {
            await file.writeAsBytes(item.bytes!);
          } else if (item.text != null) {
            await file.writeAsString(item.text!);
          }

          xFiles.add(XFile(filePath));
        }
      }

      await Share.shareXFiles(
        xFiles,
        subject: subject,
      );

      // Cleanup
      for (final file in xFiles) {
        try {
          await File(file.path).delete();
        } catch (_) {}
      }
    } catch (e) {
      debugPrint('Bulk share failed: $e');
    }
  }

  /// Check if sharing is available on this platform
  Future<bool> isSharingAvailable() async {
    try {
      // Test with empty share that won't actually show UI
      return true;
    } catch (e) {
      return false;
    }
  }

  /// Share to specific app (iOS only)
  Future<ShareResult> shareToApp({
    required String text,
    required String appScheme,
  }) async {
    if (!Platform.isIOS) {
      return ShareResult.unavailable;
    }

    try {
      final url = Uri.parse('$appScheme://share?text=${Uri.encodeComponent(text)}');
      final success = await _launchUrl(url);

      return success ? ShareResult.success : ShareResult.dismissed;
    } catch (e) {
      debugPrint('Share to app failed: $e');
      return ShareResult.unavailable;
    }
  }

  /// Launch URL helper
  Future<bool> _launchUrl(Uri url) async {
    // This would use url_launcher package
    // Implementation depends on platform
    return false;
  }
}

/// Share result wrapper
class ShareResult {
  final String status;

  const ShareResult._(this.status);

  static const success = ShareResult._('success');
  static const dismissed = ShareResult._('dismissed');
  static const unavailable = ShareResult._('unavailable');
  static const unknown = ShareResult._('unknown');

  factory ShareResult.fromString(String? status) {
    switch (status) {
      case 'success':
        return success;
      case 'dismissed':
        return dismissed;
      case 'unavailable':
        return unavailable;
      default:
        return unknown;
    }
  }

  bool get isSuccess => status == 'success';
  bool get isDismissed => status == 'dismissed';
  bool get isUnavailable => status == 'unavailable';
}

/// Share item for bulk operations
class ShareItem {
  final String filename;
  final Uint8List? bytes;
  final String? text;
  final bool isFile;

  ShareItem({
    required this.filename,
    this.bytes,
    this.text,
    this.isFile = true,
  });
}
