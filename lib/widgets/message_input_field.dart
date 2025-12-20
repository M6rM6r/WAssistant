import 'package:flutter/material.dart';

class MessageInputField extends StatelessWidget {

  const MessageInputField({required this.controller, super.key});
  final TextEditingController controller;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    
    return TextField(
      controller: controller,
      maxLines: 3,
      minLines: 1, // Logic: Start small, expand as needed.
      maxLength: 2000, // Logic: Prevent URL overflow issues while allowing detailed messages.
      textCapitalization: TextCapitalization.sentences, // Logic: Better UX for typing messages.
      style: TextStyle(color: theme.colorScheme.onSurface),
      decoration: InputDecoration(
        labelText: 'Message (Optional)',
        hintText: 'Enter a pre-written message here...',
        alignLabelWithHint: true,
        filled: true, // Consistency with other inputs
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12), // Consistency with WhatsAppInputField
          borderSide: BorderSide.none,
        ),
        counterText: '', // Logic: Hide counter to reduce clutter unless near limit (simplified to hide for now)
      ),
    );
  }
}
