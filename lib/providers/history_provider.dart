import 'dart:async';

import 'package:flutter/material.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/repositories/history_repository.dart';
import 'package:wassistant/utils/logger_service.dart';

/// OCPD: High-Rigor Synchronization Engine.
/// INTJ Strategy: Unified state management across local and cloud repositories.
class HistoryProvider with ChangeNotifier {
  HistoryProvider(this._localRepository, [this._cloudRepository]) {
    _init();
  }

  final HistoryRepository _localRepository;
  HistoryRepository? _cloudRepository;

  List<HistoryItem> _history = [];
  bool _isSyncing = false;
  bool _isLoading = true;

  List<HistoryItem> get history => List.unmodifiable(_history);
  bool get isSyncing => _isSyncing;
  bool get isLoading => _isLoading;

  /// OCPD: Balanced Getter/Setter for repository management
  HistoryRepository? get cloudRepository => _cloudRepository;

  set cloudRepository(HistoryRepository? repo) {
    if (_cloudRepository != repo) {
      _cloudRepository = repo;
      if (repo != null) unawaited(_syncCloudToLocal());
    }
  }

  Future<void> _init() async {
    await _loadLocalHistory();
    if (_cloudRepository != null) await _syncCloudToLocal();
  }

  Future<void> _loadLocalHistory() async {
    try {
      _history = await _localRepository.getHistory();
    } catch (e) {
      LoggerService.e('Local load failure', e);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  /// Public refresh method for pull-to-refresh
  Future<void> refresh() async {
    _isLoading = true;
    notifyListeners();
    await _loadLocalHistory();
    if (_cloudRepository != null) {
      await _syncCloudToLocal();
    }
  }

  /// INTJ Strategy: "Cloud-First" Merge for data sovereignty
  Future<void> _syncCloudToLocal() async {
    if (_cloudRepository == null) return;

    _isSyncing = true;
    notifyListeners();

    try {
      final cloudHistory = await _cloudRepository!.getHistory();

      // Logic: Merge strategy - Use unique data fingerprints
      final localData = _history.map((h) => h.data).toSet();
      final itemsToMigrate = cloudHistory.where((c) => !localData.contains(c.data));

      if (itemsToMigrate.isNotEmpty) {
        for (final item in itemsToMigrate) {
          await _localRepository.addHistoryItem(item);
        }
        await _loadLocalHistory();
      }
    } finally {
      _isSyncing = false;
      notifyListeners();
    }
  }

  Future<void> addHistoryItem(HistoryItem item) async {
    if (_history.any((h) => h.data == item.data)) return;

    _history = [item, ..._history]; // Atomic update
    notifyListeners();

    // 1. Persist Locally (Blocking)
    await _localRepository.addHistoryItem(item);

    // 2. Persist to Cloud (Asynchronous/Non-blocking)
    if (_cloudRepository != null) {
      unawaited(_cloudRepository!.addHistoryItem(item));
    }
  }

  Future<void> removeHistoryItem(HistoryItem item) async {
    _history = _history.where((h) => h.data != item.data).toList();
    notifyListeners();

    await _localRepository.removeHistoryItem(item);
    if (_cloudRepository != null) {
      unawaited(_cloudRepository!.removeHistoryItem(item));
    }
  }

  Future<void> clearHistory() async {
    _history = [];
    notifyListeners();

    await _localRepository.clearHistory();
    if (_cloudRepository != null) {
      unawaited(_cloudRepository!.clearHistory());
    }
  }
}
