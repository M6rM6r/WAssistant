
import 'package:flutter/material.dart';
import 'package:wassistant/utils/constants.dart';

class ShimmerText extends StatefulWidget {
  
  const ShimmerText({
    required this.text, required this.style, super.key,
  });
  final String text;
  final TextStyle style;

  @override
  State<ShimmerText> createState() => _ShimmerTextState();
}

class _ShimmerTextState extends State<ShimmerText> with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 3),
    )..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        return ShaderMask(
          blendMode: BlendMode.srcIn,
          shaderCallback: (bounds) {
            // Logic: Move a "White" band across the "Neon Green" text
            // We shift the alignment from left (negative) to right (positive)
            return LinearGradient(
              colors: const [
                AppConstants.accentGreen,
                Colors.white,
                AppConstants.accentGreen,
              ],
              stops: const [0.45, 0.5, 0.55], // Tight beam of light
              // Calculate dynamic alignment based on controller value
              // -2.0 is off-screen left, 2.0 is off-screen right
              begin: Alignment(-2.5 + (_controller.value * 5), 0),
              end: Alignment(-1.5 + (_controller.value * 5), 0),
            ).createShader(bounds);
          },
          child: Text(
            widget.text,
            style: widget.style,
          ),
        );
      },
    );
  }
}
