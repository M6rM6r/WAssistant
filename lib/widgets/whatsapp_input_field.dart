import 'package:flutter/material.dart';

class WhatsAppInputField extends StatelessWidget {
  final TextEditingController controller;

  const WhatsAppInputField({
    super.key,
    required this.controller,
  });

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      keyboardType: TextInputType.phone, // Suggests phone number keyboard
      style: TextStyle(color: Theme.of(context).colorScheme.onSurface), // Ensure text color is readable
      decoration: InputDecoration(
        labelText: 'Enter WhatsApp Number (e.g., 9665XXXXXXXX)',
        // labelStyle and hintStyle are now defined in main.dart's InputDecorationTheme
        // focusedBorder and enabledBorder are also defined globally in main.dart
        prefixIcon: const Icon(Icons.phone),
        // prefixIconColor will be handled by the global InputDecorationTheme
      ),
    );
  }
}