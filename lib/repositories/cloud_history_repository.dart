import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/repositories/history_repository.dart';

/// OCPD: Structured Cloud Sync Implementation.
/// INTJ Strategy: Centralized data authority for multi-device sync.
class CloudHistoryRepository implements HistoryRepository {
  final String _apiBaseUrl;
  final String _authToken;

  CloudHistoryRepository(this._apiBaseUrl, this._authToken);

  @override
  Future<List<HistoryItem>> getHistory() async {
    // Logic: Fetch from FastAPI /sync/history endpoint
    // Return empty for now until API integration is triggered in providers
    return [];
  }

  @override
  Future<void> addHistoryItem(HistoryItem item) async {
    // Logic: POST to FastAPI /sync/history
  }

  @override
  Future<void> removeHistoryItem(HistoryItem item) async {
    // Logic: DELETE from FastAPI
  }

  @override
  Future<void> clearHistory() async {
    // Logic: DELETE all from FastAPI
  }
}
