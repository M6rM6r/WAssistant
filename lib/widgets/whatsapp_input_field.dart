import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';

class WhatsAppInputField extends StatefulWidget {
  final TextEditingController numberController;
  final TextEditingController firstNameController;
  final TextEditingController lastNameController;
  final TextEditingController emailController;
  final TextEditingController companyController;
  final Function(CountryCode) onCountryChanged;
  final bool showVCardFields;
  final Function(bool) onVCardToggle;

  const WhatsAppInputField({
    super.key,
    required this.numberController,
    required this.firstNameController,
    required this.lastNameController,
    required this.emailController,
    required this.companyController,
    required this.onCountryChanged,
    required this.showVCardFields,
    required this.onVCardToggle,
  });

  @override
  State<WhatsAppInputField> createState() => _WhatsAppInputFieldState();
}

class _WhatsAppInputFieldState extends State<WhatsAppInputField> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        LayoutBuilder(builder: (context, constraints) {
          return Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: TextField(
                  controller: widget.numberController,
                  keyboardType: TextInputType.phone,
                  style: TextStyle(color: Theme.of(context).colorScheme.onSurface),
                  decoration: InputDecoration(
                    labelText: 'Enter Phone Number',
                    prefixIcon: FractionallySizedBox(
                      widthFactor: 0.35,
                      child: CountryCodePicker(
                        onChanged: widget.onCountryChanged,
                        initialSelection: 'SA',
                        favorite: const ['+966', 'SA', '+1', 'US'],
                        showCountryOnly: false,
                        showOnlyCountryWhenClosed: false,
                        alignLeft: false,
                        textStyle: TextStyle(color: Theme.of(context).colorScheme.onSurface),
                        dialogBackgroundColor: Theme.of(context).colorScheme.surface,
                        dialogTextStyle: TextStyle(color: Theme.of(context).colorScheme.onSurface),
                        searchStyle: TextStyle(color: Theme.of(context).colorScheme.onSurface),
                        searchDecoration: InputDecoration(
                          border: OutlineInputBorder(
                            borderSide: BorderSide(color: Theme.of(context).colorScheme.primary),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          );
        }),
        const SizedBox(height: 20),
        CheckboxListTile(
          title: const Text('Add Contact Information (for vCard)'),
          value: widget.showVCardFields,
          onChanged: (bool? value) {
            widget.onVCardToggle(value ?? false);
          },
          controlAffinity: ListTileControlAffinity.leading,
        ),
        if (widget.showVCardFields)
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: Column(
              children: [
                Row(
                  children: [
                    Expanded(
                      child: TextField(
                        controller: widget.firstNameController,
                        decoration: const InputDecoration(
                          labelText: 'First Name',
                          prefixIcon: Icon(Icons.person),
                        ),
                      ),
                    ),
                    const SizedBox(width: 16),
                    Expanded(
                      child: TextField(
                        controller: widget.lastNameController,
                        decoration: const InputDecoration(
                          labelText: 'Last Name',
                          prefixIcon: Icon(Icons.person_outline),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                TextField(
                  controller: widget.emailController,
                  keyboardType: TextInputType.emailAddress,
                  decoration: const InputDecoration(
                    labelText: 'Email Address',
                    prefixIcon: Icon(Icons.email),
                  ),
                ),
                const SizedBox(height: 16),
                TextField(
                  controller: widget.companyController,
                  decoration: const InputDecoration(
                    labelText: 'Company / Organization',
                    prefixIcon: Icon(Icons.business),
                  ),
                ),
              ],
            ),
          ),
      ],
    );
  }
}
