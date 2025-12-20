import 'dart:async';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:timeago/timeago.dart' as timeago;
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/providers/whatsapp_tool_provider.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/responsive_layout.dart';

class HistoryPage extends StatelessWidget {
  const HistoryPage({super.key});

  @override
  Widget build(BuildContext context) {
    final historyProvider = Provider.of<HistoryProvider>(context);
    final history = historyProvider.history;
    final l10n = AppLocalizations.of(context)!;
    final layout = context.responsive;

    return Scaffold(
      appBar: AppBar(
        title: Text(l10n.history),
        backgroundColor: AppConstants.primaryTeal,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: Icon(Icons.delete_sweep, size: layout.iconSize(24)),
            onPressed: () async {
              await showDialog<void>(
                context: context,
                builder:
                    (ctx) => AlertDialog(
                      title: Text(l10n.clearHistory),
                      content: Text(l10n.clearHistoryConfirmation),
                      actions: [
                        TextButton(
                          child: Text(l10n.cancel),
                          onPressed: () => Navigator.of(ctx).pop(),
                        ),
                        TextButton(
                          child: Text(
                            l10n.clear,
                            style: const TextStyle(color: Colors.red),
                          ),
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
      body:
          history.isEmpty
              ? Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      Icons.history,
                      size: layout.iconSize(64),
                      color: Colors.grey,
                    ),
                    SizedBox(height: layout.spacing(16)),
                    Text(
                      l10n.noHistory,
                      style: TextStyle(
                        color: Colors.grey,
                        fontSize: layout.fontSize(16),
                      ),
                    ),
                  ],
                ),
              )
              : ListView.builder(
                padding: EdgeInsets.symmetric(
                  horizontal: layout.horizontalPadding,
                  vertical: layout.verticalPadding,
                ),
                itemCount: history.length,
                itemBuilder: (context, index) {
                  final item = history[index];

                  final (icon, color) = switch (item.type) {
                    HistoryItemType.link => (Icons.link, Colors.blue),
                    HistoryItemType.qr => (Icons.qr_code, Colors.green),
                    HistoryItemType.vcard => (
                      Icons.contact_page,
                      Colors.orange,
                    ),
                  };

                  return Dismissible(
                    key: ValueKey(item.timestamp.toIso8601String()),
                    background: Container(color: Colors.red),
                    onDismissed: (_) {
                      unawaited(historyProvider.removeHistoryItem(item));
                    },
                    child: ListTile(
                      contentPadding: EdgeInsets.symmetric(
                        horizontal: layout.spacing(16),
                        vertical: layout.spacing(8),
                      ),
                      leading: CircleAvatar(
                        radius: layout.iconSize(20),
                        backgroundColor: color.withValues(alpha: 0.1),
                        child: Icon(
                          icon,
                          color: color,
                          size: layout.iconSize(24),
                        ),
                      ),
                      title: Text(
                        item.display,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: layout.fontSize(16),
                        ),
                      ),
                      subtitle: Text(
                        timeago.format(item.timestamp),
                        style: TextStyle(fontSize: layout.fontSize(14)),
                      ),
                      trailing: IconButton(
                        icon: Icon(Icons.restore, size: layout.iconSize(24)),
                        onPressed: () {
                          context.read<WhatsAppToolProvider>().reuseHistoryItem(
                            item,
                          );
                          Navigator.pop(context);
                        },
                      ),
                      onTap: () {
                        context.read<WhatsAppToolProvider>().reuseHistoryItem(
                          item,
                        );
                        Navigator.pop(context);
                      },
                    ),
                  );
                },
              ),
    );
  }
}
