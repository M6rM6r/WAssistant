import 'package:flutter/material.dart';

class MessageInputField extends StatelessWidget {
  final TextEditingController controller;

  const MessageInputField({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      maxLines: 3,
      decoration: const InputDecoration(
        labelText: 'Message (Optional)',
        hintText: 'Enter a pre-written message here...',
        border: OutlineInputBorder(),
      ),
    );
  }
}
