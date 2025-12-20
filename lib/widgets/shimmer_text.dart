import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';
import 'package:wassistant/utils/constants.dart';

/// OCPD: Consistent loading states for high-quality UX.
class ShimmerText extends StatelessWidget {
  const ShimmerText({required this.text, this.style, super.key});

  final String text;
  final TextStyle? style;

  @override
  Widget build(BuildContext context) {
    return Shimmer.fromColors(
      baseColor: AppConstants.textHighEmphasis,
      highlightColor: AppConstants.accentGreen,
      child: Text(text, style: style),
    );
  }
}
