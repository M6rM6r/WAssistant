import 'package:flutter/material.dart';

/// Responsive layout utilities for smooth scaling across all screen sizes
/// INTJ: Systematic, predictable UI behavior
class ResponsiveLayout {
  ResponsiveLayout(this.context);

  final BuildContext context;

  /// Get screen width
  double get width => MediaQuery.of(context).size.width;

  /// Get screen height
  double get height => MediaQuery.of(context).size.height;

  /// Check if mobile screen (<600px)
  bool get isMobile => width < 600;

  /// Check if tablet screen (600-900px)
  bool get isTablet => width >= 600 && width < 900;

  /// Check if desktop screen (≥900px)
  bool get isDesktop => width >= 900;

  /// Check if small mobile (<360px)
  bool get isSmallMobile => width < 360;

  /// Check if landscape orientation
  bool get isLandscape => width > height;

  /// Get responsive padding based on screen size
  EdgeInsets get responsivePadding {
    if (isSmallMobile) {
      return const EdgeInsets.all(12);
    } else if (isMobile) {
      return const EdgeInsets.all(16);
    } else if (isTablet) {
      return const EdgeInsets.all(24);
    } else {
      return const EdgeInsets.all(32);
    }
  }

  /// Get horizontal padding
  double get horizontalPadding {
    if (isSmallMobile) return 12;
    if (isMobile) return 16;
    if (isTablet) return 24;
    return 32;
  }

  /// Get vertical padding
  double get verticalPadding {
    if (isSmallMobile) return 12;
    if (isMobile) return 16;
    if (isTablet) return 20;
    return 24;
  }

  /// Get responsive spacing
  double spacing(double baseSize) {
    if (isSmallMobile) return baseSize * 0.75;
    if (isTablet) return baseSize * 1.25;
    if (isDesktop) return baseSize * 1.5;
    return baseSize;
  }

  /// Get responsive font size
  double fontSize(double baseSize) {
    if (isSmallMobile) return baseSize * 0.9;
    if (isTablet) return baseSize * 1.1;
    if (isDesktop) return baseSize * 1.2;
    return baseSize;
  }

  /// Get responsive icon size
  double iconSize(double baseSize) {
    if (isSmallMobile) return baseSize * 0.85;
    if (isTablet) return baseSize * 1.15;
    if (isDesktop) return baseSize * 1.3;
    return baseSize;
  }

  /// Get content max width (for centering on large screens)
  double get maxContentWidth {
    if (isDesktop) return 1200;
    if (isTablet) return 900;
    return width;
  }

  /// Get safe area padding
  EdgeInsets get safeAreaPadding => MediaQuery.of(context).padding;

  /// Get keyboard height
  double get keyboardHeight => MediaQuery.of(context).viewInsets.bottom;

  /// Check if keyboard is visible
  bool get isKeyboardVisible => keyboardHeight > 0;

  /// Get bottom padding (safe area + keyboard)
  double get bottomPadding {
    final safePadding = safeAreaPadding.bottom;
    final keyboardPadding = keyboardHeight;
    return safePadding + keyboardPadding;
  }

  /// Value based on screen size
  T valueWhen<T>({required T mobile, T? tablet, T? desktop}) {
    if (isDesktop && desktop != null) return desktop;
    if (isTablet && tablet != null) return tablet;
    return mobile;
  }

  /// Get responsive banner ad height
  double get bannerAdHeight {
    if (isSmallMobile) return 50;
    if (isTablet || isDesktop) return 90;
    return 60; // Standard banner height
  }

  /// Get adaptive grid column count
  int get gridColumnCount {
    if (isDesktop) return 4;
    if (isTablet) return 3;
    if (isSmallMobile) return 1;
    return 2;
  }
}

/// Extension method for easy access
extension ResponsiveExtension on BuildContext {
  ResponsiveLayout get responsive => ResponsiveLayout(this);
}

/// Responsive widget builder
class ResponsiveBuilder extends StatelessWidget {
  const ResponsiveBuilder({required this.builder, super.key});

  final Widget Function(BuildContext context, ResponsiveLayout layout) builder;

  @override
  Widget build(BuildContext context) {
    return builder(context, ResponsiveLayout(context));
  }
}

/// Center content on large screens
class ResponsiveContainer extends StatelessWidget {
  const ResponsiveContainer({required this.child, this.padding, super.key});

  final Widget child;
  final EdgeInsets? padding;

  @override
  Widget build(BuildContext context) {
    final layout = ResponsiveLayout(context);

    return Center(
      child: Container(
        constraints: BoxConstraints(maxWidth: layout.maxContentWidth),
        padding: padding ?? layout.responsivePadding,
        child: child,
      ),
    );
  }
}

/// Responsive safe area wrapper
class ResponsiveSafeArea extends StatelessWidget {
  const ResponsiveSafeArea({
    required this.child,
    this.includeKeyboard = true,
    super.key,
  });

  final Widget child;
  final bool includeKeyboard;

  @override
  Widget build(BuildContext context) {
    final layout = ResponsiveLayout(context);

    return SafeArea(
      child: Padding(
        padding: EdgeInsets.only(
          bottom: includeKeyboard ? layout.bottomPadding : 0,
        ),
        child: child,
      ),
    );
  }
}
