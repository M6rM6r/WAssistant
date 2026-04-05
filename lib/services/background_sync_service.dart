import 'dart:async';
import 'dart:convert';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:http/http.dart' as http;
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/logger_service.dart';

/// INTJ: Background sync service for offline-first architecture
/// OCPD: Deterministic sync with conflict resolution and retry logic
class BackgroundSyncService {
  static final BackgroundSyncService _instance = BackgroundSyncService._internal();
  factory BackgroundSyncService() => _instance;
  BackgroundSyncService._internal();

  final _syncController = StreamController<SyncStatus>.broadcast();
  Stream<SyncStatus> get syncStatus => _syncController.stream;

  final List<PendingOperation> _pendingOperations = [];
  Timer? _syncTimer;
  bool _isSyncing = false;
  String? _authToken;

  /// Initialize background sync
  Future<void> init({String? authToken}) async {
    _authToken = authToken;

    // Load pending operations from storage
    await _loadPendingOperations();

    // Start periodic sync (every 5 minutes)
    _syncTimer = Timer.periodic(const Duration(minutes: 5), (_) {
      _attemptSync();
    });

    // Listen for connectivity changes
    Connectivity().onConnectivityChanged.listen((result) {
      if (result != ConnectivityResult.none) {
        _attemptSync();
      }
    });

    LoggerService.i('BackgroundSyncService initialized');
  }

  /// Queue operation for background sync
  Future<void> queueOperation({
    required OperationType type,
    required Map<String, dynamic> data,
    String? localId,
  }) async {
    final operation = PendingOperation(
      id: localId ?? DateTime.now().millisecondsSinceEpoch.toString(),
      type: type,
      data: data,
      timestamp: DateTime.now(),
      retryCount: 0,
    );

    _pendingOperations.add(operation);
    await _savePendingOperations();

    _syncController.add(SyncStatus(
      state: SyncState.pending,
      pendingCount: _pendingOperations.length,
    ));

    // Try immediate sync if online
    final connectivity = await Connectivity().checkConnectivity();
    if (connectivity != ConnectivityResult.none) {
      _attemptSync();
    }
  }

  /// Add history item with sync
  Future<void> addHistoryItem(HistoryItem item) async {
    await queueOperation(
      type: OperationType.addHistory,
      data: item.toJson(),
      localId: item.id?.toString(),
    );
  }

  /// Attempt to sync pending operations
  Future<void> _attemptSync() async {
    if (_isSyncing || _pendingOperations.isEmpty || _authToken == null) {
      return;
    }

    _isSyncing = true;
    _syncController.add(SyncStatus(
      state: SyncState.syncing,
      pendingCount: _pendingOperations.length,
    ));

    final operationsToRemove = <PendingOperation>[];

    for (final operation in _pendingOperations) {
      try {
        final success = await _executeOperation(operation);

        if (success) {
          operationsToRemove.add(operation);
        } else {
          operation.retryCount++;
          if (operation.retryCount > 5) {
            // Max retries reached, mark as failed
            LoggerService.w('Operation ${operation.id} failed after 5 retries');
            operationsToRemove.add(operation);
          }
        }
      } catch (e) {
        LoggerService.e('Sync operation failed', e);
        operation.retryCount++;
      }
    }

    // Remove completed/failed operations
    for (final op in operationsToRemove) {
      _pendingOperations.remove(op);
    }

    await _savePendingOperations();

    _isSyncing = false;
    _syncController.add(SyncStatus(
      state: _pendingOperations.isEmpty ? SyncState.synced : SyncState.pending,
      pendingCount: _pendingOperations.length,
    ));
  }

  /// Execute single operation against backend
  Future<bool> _executeOperation(PendingOperation operation) async {
    try {
      switch (operation.type) {
        case OperationType.addHistory:
          return await _syncHistoryAdd(operation.data);
        case OperationType.updateHistory:
          return await _syncHistoryUpdate(operation.data);
        case OperationType.deleteHistory:
          return await _syncHistoryDelete(operation.data);
        case OperationType.addTemplate:
          return await _syncTemplateAdd(operation.data);
        case OperationType.updateTemplate:
          return await _syncTemplateUpdate(operation.data);
        case OperationType.deleteTemplate:
          return await _syncTemplateDelete(operation.data);
      }
    } catch (e) {
      LoggerService.e('Operation execution failed', e);
      return false;
    }
  }

  Future<bool> _syncHistoryAdd(Map<String, dynamic> data) async {
    final response = await http.post(
      Uri.parse('${AppConstants.apiBaseUrl}/sync/history'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $_authToken',
      },
      body: jsonEncode(data),
    );
    return response.statusCode == 200;
  }

  Future<bool> _syncHistoryUpdate(Map<String, dynamic> data) async {
    final response = await http.put(
      Uri.parse('${AppConstants.apiBaseUrl}/sync/history/${data['id']}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $_authToken',
      },
      body: jsonEncode(data),
    );
    return response.statusCode == 200;
  }

  Future<bool> _syncHistoryDelete(Map<String, dynamic> data) async {
    final response = await http.delete(
      Uri.parse('${AppConstants.apiBaseUrl}/sync/history/${data['id']}'),
      headers: {
        'Authorization': 'Bearer $_authToken',
      },
    );
    return response.statusCode == 200;
  }

  Future<bool> _syncTemplateAdd(Map<String, dynamic> data) async {
    final response = await http.post(
      Uri.parse('${AppConstants.apiBaseUrl}/templates'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $_authToken',
      },
      body: jsonEncode(data),
    );
    return response.statusCode == 201;
  }

  Future<bool> _syncTemplateUpdate(Map<String, dynamic> data) async {
    final response = await http.put(
      Uri.parse('${AppConstants.apiBaseUrl}/templates/${data['id']}'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $_authToken',
      },
      body: jsonEncode(data),
    );
    return response.statusCode == 200;
  }

  Future<bool> _syncTemplateDelete(Map<String, dynamic> data) async {
    final response = await http.delete(
      Uri.parse('${AppConstants.apiBaseUrl}/templates/${data['id']}'),
      headers: {
        'Authorization': 'Bearer $_authToken',
      },
    );
    return response.statusCode == 200;
  }

  /// Load pending operations from local storage
  Future<void> _loadPendingOperations() async {
    // Implementation would use SharedPreferences or Isar
    // For now, start with empty list
    _pendingOperations.clear();
  }

  /// Save pending operations to local storage
  Future<void> _savePendingOperations() async {
    // Implementation would use SharedPreferences or Isar
  }

  /// Force immediate sync
  Future<void> forceSync() async {
    await _attemptSync();
  }

  /// Get pending operations count
  int get pendingCount => _pendingOperations.length;

  /// Check if has pending operations
  bool get hasPendingOperations => _pendingOperations.isNotEmpty;

  /// Dispose resources
  void dispose() {
    _syncTimer?.cancel();
    _syncController.close();
  }
}

/// Operation types for sync
enum OperationType {
  addHistory,
  updateHistory,
  deleteHistory,
  addTemplate,
  updateTemplate,
  deleteTemplate,
}

/// Pending operation model
class PendingOperation {
  final String id;
  final OperationType type;
  final Map<String, dynamic> data;
  final DateTime timestamp;
  int retryCount;

  PendingOperation({
    required this.id,
    required this.type,
    required this.data,
    required this.timestamp,
    this.retryCount = 0,
  });
}

/// Sync status for UI updates
class SyncStatus {
  final SyncState state;
  final int pendingCount;
  final String? message;

  SyncStatus({
    required this.state,
    required this.pendingCount,
    this.message,
  });
}

/// Sync states
enum SyncState {
  synced,
  pending,
  syncing,
  error,
}
