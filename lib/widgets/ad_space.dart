// Import necessary packages from Flutter material library.
import 'package:flutter/material.dart';

// AdSpaceWidget is a StatelessWidget, as its content (the "AD SPACE" text) doesn't change.
class AdSpaceWidget extends StatelessWidget {
  // isRotated determines if the "AD SPACE" text should be rotated.
  // This is useful for placing ads vertically on the left or right.
  final bool isRotated;

  // Constructor requires 'isRotated' to be provided.
  const AdSpaceWidget({
    super.key,
    required this.isRotated,
  });

  @override
  Widget build(BuildContext context) {
    // Container is a versatile widget for styling and positioning.
    return Container(
      color: Colors.blueGrey[900], // Dark background color for the ad area.
      alignment: Alignment.center, // Centers the child widget within this container.
      child: isRotated // Conditionally apply rotation based on 'isRotated' property.
          ? const RotatedBox(
        quarterTurns: 3, // Rotates the child widget 270 degrees (3 quarter turns).
        child: Text(
          'AD SPACE',
          style: TextStyle(
            color: Colors.white24, // Faded white color for the text.
            fontSize: 30, // Large font size.
            fontWeight: FontWeight.bold, // Bold text.
          ),
        ),
      )
          : const RotatedBox(
        quarterTurns: 1, // Rotates the child widget 90 degrees (1 quarter turn).
        child: Text(
          'AD SPACE',
          style: TextStyle(
            color: Colors.white24, // Faded white color for the text.
            fontSize: 30, // Large font size.
            fontWeight: FontWeight.bold, // Bold text.
          ),
        ),
      ),
    );
  }
}