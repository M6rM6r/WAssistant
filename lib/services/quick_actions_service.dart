import 'package:flutter/foundation.dart';
import 'package:quick_actions/quick_actions.dart';
import 'package:wassistant/utils/logger_service.dart';

/// OCPD: Structured Shortcut Management.
/// INTJ Strategy: Zero-latency access to core features.
class QuickActionsService {
  final QuickActions _quickActions = const QuickActions();

  /// Map of shortcut actions
  static const Map<String, int> actions = {
    'action_direct_chat': 0,
    'action_vcard_gen': 1,
  };

  void initialize(ValueChanged<int> onAction) {
    if (kIsWeb) return; // Quick actions not supported on web

    try {
      _quickActions.setShortcutItems(<ShortcutItem>[
        const ShortcutItem(
          type: 'action_direct_chat',
          localizedTitle: 'Direct Chat',
          icon: 'ic_chat',
        ),
        const ShortcutItem(
          type: 'action_vcard_gen',
          localizedTitle: 'vCard Generator',
          icon: 'ic_contact',
        ),
      ]);

      _quickActions.initialize((String type) {
        final index = actions[type];
        if (index != null) {
          LoggerService.i('Quick Action Triggered: $type');
          onAction(index);
        }
      });
    } catch (e) {
      LoggerService.e('Quick Actions Init Failed', e);
    }
  }
}
