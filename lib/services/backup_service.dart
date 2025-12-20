import 'dart:convert';
import 'dart:io';

import 'package:file_picker/file_picker.dart';
import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/repositories/history_repository.dart';
import 'package:wassistant/repositories/template_repository.dart';
import 'package:wassistant/utils/logger_service.dart';

/// OCPD: Systematic Data Portability and Recovery Service.
/// INTJ Strategy: Zero-account data sovereignty.
class BackupService {
  const BackupService(this._historyRepo, this._templateRepo);

  final HistoryRepository _historyRepo;
  final TemplateRepository _templateRepo;

  /// Compiles all user data into a portable JSON file and triggers system share.
  Future<void> exportData() async {
    try {
      final history = await _historyRepo.getHistory();
      final templates = await _templateRepo.getTemplates();

      final data = {
        'version': '1.0.0',
        'timestamp': DateTime.now().toIso8601String(),
        'history': history.map((h) => h.toJson()).toList(),
        'templates': templates.map((t) => t.toJson()).toList(),
      };

      final String jsonStr = jsonEncode(data);
      final Directory tempDir = await getTemporaryDirectory();
      final File file = File('${tempDir.path}/wassistant_backup.json');
      await file.writeAsString(jsonStr);

      await Share.shareXFiles([XFile(file.path)], text: 'WAssistant Data Backup');
      LoggerService.i('Backup: Data exported successfully.');
    } catch (e, stackTrace) {
      LoggerService.e('Backup: Export failed', e, stackTrace);
    }
  }

  /// Opens file picker and merges imported data with current state.
  Future<bool> importData() async {
    try {
      final FilePickerResult? result = await FilePicker.platform.pickFiles(
        type: FileType.custom,
        allowedExtensions: ['json'],
      );

      if (result == null || result.files.single.path == null) return false;

      final File file = File(result.files.single.path!);
      final String jsonStr = await file.readAsString();
      final Map<String, dynamic> data = jsonDecode(jsonStr) as Map<String, dynamic>;

      // Logic: Atomic merge strategy to prevent data corruption
      if (data['history'] != null) {
        final imported = (data['history'] as List<dynamic>).map(
          (e) => HistoryItem.fromJson(e as Map<String, dynamic>),
        );
        for (final item in imported) {
          await _historyRepo.addHistoryItem(item);
        }
      }

      LoggerService.i('Backup: Data imported successfully.');
      return true;
    } catch (e, stackTrace) {
      LoggerService.e('Backup: Import failed', e, stackTrace);
      return false;
    }
  }
}
