import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:timeago/timeago.dart' as timeago;
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';

class HistoryPanel extends StatelessWidget {
  const HistoryPanel({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Consumer<HistoryProvider>(
      builder: (context, historyProvider, child) {
        final history = historyProvider.history;

        return Drawer(
          child: Column(
            children: [
              AppBar(
                title: const Text('History'),
                automaticallyImplyLeading: false, // No back button
                actions: [
                  if (history.isNotEmpty)
                    IconButton(
                      icon: const Icon(Icons.delete_sweep_rounded),
                      tooltip: 'Clear History',
                      onPressed: () {
                        _showClearHistoryDialog(context, historyProvider);
                      },
                    ),
                ],
              ),
              if (history.isEmpty)
                _buildEmptyState(theme)
              else
                _buildHistoryList(history, context),
            ],
          ),
        );
      },
    );
  }

  Widget _buildEmptyState(ThemeData theme) {
    return Expanded(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.history_rounded, size: 80, color: theme.colorScheme.onSurface.withValues(alpha: 0.4)),
            const SizedBox(height: 20),
            Text(
              'No history yet.',
              style: theme.textTheme.headlineSmall?.copyWith(fontWeight: FontWeight.w300),
            ),
            const SizedBox(height: 8),
            Text(
              'Generated items will appear here.',
              textAlign: TextAlign.center,
              style: theme.textTheme.bodyMedium?.copyWith(color: theme.colorScheme.onSurface.withValues(alpha: 0.6)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHistoryList(List<HistoryItem> history, BuildContext context) {
    return Expanded(
      child: ListView.builder(
        itemCount: history.length,
        itemBuilder: (context, index) {
          final item = history[index];
          return ListTile(
            leading: Icon(_getIconForItem(item.type)),
            title: Text(item.display, maxLines: 1, overflow: TextOverflow.ellipsis),
            subtitle: Text(timeago.format(item.timestamp)),
            trailing: IconButton(
              icon: const Icon(Icons.replay_rounded),
              tooltip: 'Reuse this item',
              onPressed: () {
                context.read<WhatsAppToolProvider>().reuseHistoryItem(item);
                Navigator.of(context).pop(); // Close the drawer
              },
            ),
          );
        },
      ),
    );
  }

  IconData _getIconForItem(HistoryItemType type) {
    switch (type) {
      case HistoryItemType.link:
        return Icons.link_rounded;
      case HistoryItemType.qr:
        return Icons.qr_code_2_rounded;
      case HistoryItemType.vcard:
        return Icons.person_add_alt_1_rounded;
    }
  }

  void _showClearHistoryDialog(BuildContext context, HistoryProvider provider) {
    showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Clear History?'),
          content: const Text('This will permanently delete all your generated items. This action cannot be undone.'),
          actions: [
            TextButton(
              child: const Text('Cancel'),
              onPressed: () => Navigator.of(context).pop(),
            ),
            FilledButton(
              child: const Text('Clear'),
              onPressed: () {
                provider.clearHistory();
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }
}
