import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';
import 'package:wassistant/utils/responsive_layout.dart';

/// OCPD: Comprehensive skeleton loading widgets for consistent UX.
/// INTJ Strategy: Predictable loading states reduce user anxiety.
class SkeletonLoader extends StatelessWidget {
  const SkeletonLoader({this.width, this.height, this.borderRadius, this.margin, super.key});

  final double? width;
  final double? height;
  final double? borderRadius;
  final EdgeInsets? margin;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Shimmer.fromColors(
      baseColor: Theme.of(context).colorScheme.surface,
      highlightColor: Theme.of(context).colorScheme.surfaceContainerHighest.withValues(alpha: 0.8),
      child: Container(
        width: width ?? double.infinity,
        height: height ?? layout.spacing(20),
        margin: margin ?? EdgeInsets.zero,
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surface,
          borderRadius: BorderRadius.circular(borderRadius ?? layout.spacing(8)),
        ),
      ),
    );
  }
}

/// Skeleton for history list items
class HistorySkeletonItem extends StatelessWidget {
  const HistorySkeletonItem({super.key});

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Container(
      padding: EdgeInsets.all(layout.spacing(16)),
      margin: EdgeInsets.only(bottom: layout.spacing(12)),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(layout.spacing(12)),
        border: Border.all(color: Colors.white10),
      ),
      child: Row(
        children: [
          SkeletonLoader(
            width: layout.spacing(48),
            height: layout.spacing(48),
            borderRadius: layout.spacing(12),
          ),
          SizedBox(width: layout.spacing(16)),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SkeletonLoader(
                  width: layout.spacing(120),
                  height: layout.spacing(16),
                  borderRadius: layout.spacing(4),
                ),
                SizedBox(height: layout.spacing(8)),
                SkeletonLoader(
                  width: layout.spacing(80),
                  height: layout.spacing(12),
                  borderRadius: layout.spacing(4),
                ),
              ],
            ),
          ),
          SkeletonLoader(
            width: layout.spacing(24),
            height: layout.spacing(24),
            borderRadius: layout.spacing(4),
          ),
        ],
      ),
    );
  }
}

/// Skeleton for history list with multiple items
class HistorySkeletonList extends StatelessWidget {
  const HistorySkeletonList({this.itemCount = 5, super.key});

  final int itemCount;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      itemCount: itemCount,
      itemBuilder: (context, index) => const HistorySkeletonItem(),
    );
  }
}

/// Skeleton for OCR camera initialization
class OcrSkeleton extends StatelessWidget {
  const OcrSkeleton({super.key});

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Container(
      padding: EdgeInsets.all(layout.spacing(24)),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(layout.spacing(16)),
        border: Border.all(color: Colors.white10),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          SkeletonLoader(
            width: layout.spacing(80),
            height: layout.spacing(80),
            borderRadius: layout.spacing(40),
          ),
          SizedBox(height: layout.spacing(20)),
          SkeletonLoader(
            width: layout.spacing(200),
            height: layout.spacing(16),
            borderRadius: layout.spacing(4),
          ),
          SizedBox(height: layout.spacing(12)),
          SkeletonLoader(
            width: layout.spacing(150),
            height: layout.spacing(12),
            borderRadius: layout.spacing(4),
          ),
          SizedBox(height: layout.spacing(24)),
          SkeletonLoader(
            width: double.infinity,
            height: layout.spacing(48),
            borderRadius: layout.spacing(12),
          ),
        ],
      ),
    );
  }
}

/// Skeleton for QR code generation
class QrSkeleton extends StatelessWidget {
  const QrSkeleton({super.key});

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Container(
      padding: EdgeInsets.all(layout.spacing(32)),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surface,
        borderRadius: BorderRadius.circular(layout.spacing(16)),
        border: Border.all(color: Colors.white10),
      ),
      child: Shimmer.fromColors(
        baseColor: Theme.of(context).colorScheme.surfaceContainerHighest,
        highlightColor: Theme.of(context).colorScheme.surface,
        child: Container(
          width: layout.spacing(200),
          height: layout.spacing(200),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.surfaceContainerHighest,
            borderRadius: BorderRadius.circular(layout.spacing(8)),
          ),
        ),
      ),
    );
  }
}

/// Skeleton for form inputs
class FormSkeleton extends StatelessWidget {
  const FormSkeleton({this.fieldCount = 3, super.key});

  final int fieldCount;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Column(
      children: List.generate(fieldCount, (index) {
        return Padding(
          padding: EdgeInsets.only(bottom: layout.spacing(16)),
          child: SkeletonLoader(
            width: double.infinity,
            height: layout.spacing(56),
            borderRadius: layout.spacing(12),
          ),
        );
      }),
    );
  }
}

/// Animated loading overlay with message
class LoadingOverlay extends StatelessWidget {
  const LoadingOverlay({required this.message, this.showProgress = true, super.key});

  final String message;
  final bool showProgress;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Container(
      color: Theme.of(context).scaffoldBackgroundColor.withValues(alpha: 0.9),
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (showProgress)
              SizedBox(
                width: layout.spacing(48),
                height: layout.spacing(48),
                child: CircularProgressIndicator(
                  valueColor: AlwaysStoppedAnimation<Color>(
                    Theme.of(context).colorScheme.secondary,
                  ),
                  strokeWidth: 3,
                ),
              ),
            if (showProgress) SizedBox(height: layout.spacing(20)),
            Shimmer.fromColors(
              baseColor: Theme.of(context).colorScheme.onSurface,
              highlightColor: Theme.of(context).colorScheme.secondary,
              child: Text(
                message,
                style: TextStyle(fontSize: layout.fontSize(16), fontWeight: FontWeight.w500),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
