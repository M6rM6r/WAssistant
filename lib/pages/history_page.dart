import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:timeago/timeago.dart' as timeago;
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/utils/constants.dart';

class HistoryPage extends StatelessWidget {
  const HistoryPage({super.key});

  @override
  Widget build(BuildContext context) {
    final historyProvider = Provider.of<HistoryProvider>(context);
    final history = historyProvider.history;
    final l10n = AppLocalizations.of(context)!;

    return Scaffold(
      appBar: AppBar(
        title: Text(l10n.history),
        backgroundColor: AppConstants.primaryTeal,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.delete_sweep),
            onPressed: () async {
              await showDialog<void>(
                context: context,
                builder: (ctx) => AlertDialog(
                  title: Text(l10n.clearHistory),
                  content: Text(l10n.clearHistoryConfirmation),
                  actions: [
                    TextButton(
                      child: Text(l10n.cancel),
                      onPressed: () => Navigator.of(ctx).pop(),
                    ),
                    TextButton(
                      child: Text(l10n.clear,
                          style: const TextStyle(color: Colors.red)),
                      onPressed: () {
                        historyProvider.clearHistory().ignore();
                        Navigator.of(ctx).pop();
                      },
                    ),
                  ],
                ),
              );
            },
            tooltip: l10n.clearAll,
          ),
        ],
      ),
      body: history.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.history, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  Text(l10n.noHistory, style: const TextStyle(color: Colors.grey)),
                ],
              ),
            )
          : ListView.builder(
              itemCount: history.length,
              itemBuilder: (context, index) {
                final item = history[index];

                final (icon, color) = switch (item.type) {
                  HistoryItemType.link => (Icons.link, Colors.blue),
                  HistoryItemType.qr => (Icons.qr_code, Colors.green),
                  HistoryItemType.vcard => (Icons.contact_page, Colors.orange),
                };

                return Dismissible(
                  key: ValueKey(item.timestamp.toIso8601String()),
                  background: Container(color: Colors.red),
                  onDismissed: (_) {
                     historyProvider.removeHistoryItem(item);
                  },
                  child: ListTile(
                    leading: CircleAvatar(
                      backgroundColor: color.withValues(alpha: 0.1),
                      child: Icon(icon, color: color),
                    ),
                    title: Text(item.display,
                        style: const TextStyle(fontWeight: FontWeight.bold)),
                    subtitle: Text(timeago.format(item.timestamp)),
                    trailing: IconButton(
                      icon: const Icon(Icons.restore),
                      onPressed: () {
                        context
                            .read<WhatsAppToolProvider>()
                            .reuseHistoryItem(item);
                        Navigator.pop(context);
                      },
                    ),
                    onTap: () {
                      context
                          .read<WhatsAppToolProvider>()
                          .reuseHistoryItem(item);
                      Navigator.pop(context);
                    },
                  ),
                );
              },
            ),
    );
  }
}
