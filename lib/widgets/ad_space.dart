import 'package:flutter/material.dart';

/// A widget that displays a placeholder for an advertisement.
class AdSpaceWidget extends StatelessWidget {
  /// The number of quarter turns the ad space should be rotated.
  final int quarterTurns;

  /// Creates an ad space widget.
  const AdSpaceWidget({
    super.key,
    required this.quarterTurns,
  });

  static const Widget _adSpaceText = Text(
    'AD SPACE',
    style: TextStyle(
      color: Colors.white24,
      fontSize: 30,
      fontWeight: FontWeight.bold,
    ),
  );

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blueGrey[900],
      alignment: Alignment.center,
      child: RotatedBox(
        quarterTurns: quarterTurns,
        child: _adSpaceText,
      ),
    );
  }
}
