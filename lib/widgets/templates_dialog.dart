import 'dart:async';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/providers/template_provider.dart';
import 'package:wassistant/utils/constants.dart';

class TemplatesDialog extends StatelessWidget {
  const TemplatesDialog({required this.onSelect, super.key});
  final void Function(String) onSelect;

  @override
  Widget build(BuildContext context) {
    final templateProvider = Provider.of<TemplateProvider>(context);
    final templates = templateProvider.templates;
    final l10n = AppLocalizations.of(context)!;

    return AlertDialog(
      title: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(l10n.templateTitle),
          IconButton(
            icon: const Icon(Icons.add, color: AppConstants.accentGreen),
            onPressed: () {
              _showAddTemplateDialog(context, l10n);
            },
          ),
        ],
      ),
      content: SizedBox(
        width: double.maxFinite,
        child:
            templates.isEmpty
                ? Center(child: Text(l10n.noTemplates))
                : ListView.separated(
                  shrinkWrap: true,
                  itemCount: templates.length,
                  separatorBuilder: (ctx, i) => const Divider(),
                  itemBuilder: (context, index) {
                    final item = templates[index];
                    return ListTile(
                      title: Text(
                        item.title,
                        style: const TextStyle(fontWeight: FontWeight.bold),
                      ),
                      subtitle: Text(
                        item.content,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                      ),
                      onTap: () {
                        onSelect(item.content);
                        Navigator.pop(context);
                      },
                      trailing: IconButton(
                        icon: const Icon(
                          Icons.delete_outline,
                          color: Colors.grey,
                        ),
                        onPressed: () {
                          // Confirm deletion
                          unawaited(templateProvider.removeTemplate(item.id));
                        },
                      ),
                    );
                  },
                ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: Text(l10n.close),
        ),
      ],
    );
  }

  void _showAddTemplateDialog(BuildContext context, AppLocalizations l10n) {
    final titleController = TextEditingController();
    final contentController = TextEditingController();

    unawaited(
      showDialog<void>(
        context: context,
        builder:
            (ctx) => AlertDialog(
              title: Text(l10n.addTemplate),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextField(
                    controller: titleController,
                    decoration: InputDecoration(
                      labelText: l10n.templateTitleHint,
                    ),
                  ),
                  const SizedBox(height: 10),
                  TextField(
                    controller: contentController,
                    decoration: InputDecoration(
                      labelText: l10n.templateContentHint,
                    ),
                    maxLines: 3,
                  ),
                ],
              ),
              actions: [
                TextButton(
                  child: Text(l10n.cancel),
                  onPressed: () => Navigator.pop(ctx),
                ),
                ElevatedButton(
                  child: Text(l10n.save),
                  onPressed: () {
                    if (titleController.text.isNotEmpty &&
                        contentController.text.isNotEmpty) {
                      unawaited(
                        Provider.of<TemplateProvider>(
                          context,
                          listen: false,
                        ).addTemplate(
                          titleController.text,
                          contentController.text,
                        ),
                      );
                      Navigator.pop(ctx);
                    }
                  },
                ),
              ],
            ),
      ),
    );
  }
}
