// Import necessary packages from Flutter material library.
import 'package:flutter/material.dart';

// WhatsAppInputField is a StatelessWidget because it doesn't manage its own internal state.
// It receives a TextEditingController from its parent to control the text.
class WhatsAppInputField extends StatelessWidget {
  // The TextEditingController to be used by the TextField.
  // This controller is provided by the parent widget (WhatsAppToolHomePageState).
  final TextEditingController controller;

  // Constructor requires a TextEditingController to be provided.
  const WhatsAppInputField({
    super.key,
    required this.controller,
  });

  @override
  Widget build(BuildContext context) {
    // TextField is a Material Design text input field.
    return TextField(
      controller: controller, // Assign the provided controller to the TextField.
      keyboardType: TextInputType.phone, // Optimize the keyboard for phone number input.
      decoration: const InputDecoration(
        labelText: 'WhatsApp Number (e.g., 9665XXXXXXXX)', // Label text displayed above the input.
        hintText: 'Include country code without +', // Hint text displayed inside the input when empty.
        prefixIcon: Icon(Icons.phone), // An icon displayed at the beginning of the input field.
      ),
    );
  }
}