import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/responsive_layout.dart';

/// OCPD: Empty state UI components for better first-time user experience.
/// INTJ Strategy: Guide users to action with clear visual hierarchy.
class EmptyState extends StatelessWidget {
  const EmptyState({
    required this.icon,
    required this.title,
    required this.description,
    this.actionLabel,
    this.onAction,
    this.secondaryAction,
    super.key,
  });

  final IconData icon;
  final String title;
  final String description;
  final String? actionLabel;
  final VoidCallback? onAction;
  final Widget? secondaryAction;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Center(
      child: Padding(
        padding: EdgeInsets.all(layout.spacing(32)),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Animated icon container
            Container(
              width: layout.spacing(120),
              height: layout.spacing(120),
              decoration: BoxDecoration(
                color: AppConstants.accentGreen.withValues(alpha: 0.1),
                shape: BoxShape.circle,
                border: Border.all(
                  color: AppConstants.accentGreen.withValues(alpha: 0.3),
                  width: 2,
                ),
              ),
              child: Icon(icon, size: layout.iconSize(56), color: AppConstants.accentGreen),
            ),
            SizedBox(height: layout.spacing(24)),
            // Title
            Text(
              title,
              style: Theme.of(context).textTheme.headlineMedium,
              textAlign: TextAlign.center,
            ),
            SizedBox(height: layout.spacing(12)),
            // Description
            Text(
              description,
              style: Theme.of(
                context,
              ).textTheme.bodyMedium?.copyWith(color: AppConstants.textMediumEmphasis),
              textAlign: TextAlign.center,
            ),
            if (actionLabel != null && onAction != null) ...[
              SizedBox(height: layout.spacing(32)),
              ElevatedButton.icon(
                onPressed: () {
                  HapticFeedback.mediumImpact();
                  onAction!();
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppConstants.accentGreen,
                  padding: EdgeInsets.symmetric(
                    horizontal: layout.spacing(24),
                    vertical: layout.spacing(14),
                  ),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(layout.spacing(12)),
                  ),
                ),
                icon: const Icon(Icons.add),
                label: Text(actionLabel!),
              ),
            ],
            if (secondaryAction != null) ...[
              SizedBox(height: layout.spacing(16)),
              secondaryAction!,
            ],
          ],
        ),
      ),
    );
  }
}

/// Empty state for history list
class EmptyHistoryState extends StatelessWidget {
  const EmptyHistoryState({required this.onCreateNew, super.key});

  final VoidCallback onCreateNew;

  @override
  Widget build(BuildContext context) {
    return EmptyState(
      icon: Icons.history_outlined,
      title: 'No History Yet',
      description:
          'Your generated QR codes, links, and vCards will appear here. Start by creating your first WhatsApp link!',
      actionLabel: 'Create Link',
      onAction: onCreateNew,
    );
  }
}

/// Empty state for OCR when no number detected
class EmptyOcrState extends StatelessWidget {
  const EmptyOcrState({required this.onRetry, super.key});

  final VoidCallback onRetry;

  @override
  Widget build(BuildContext context) {
    return EmptyState(
      icon: Icons.document_scanner_outlined,
      title: 'No Phone Number Found',
      description:
          'We couldn\'t detect a valid phone number in the image. Try taking a clearer photo or manually enter the number.',
      actionLabel: 'Scan Again',
      onAction: onRetry,
      secondaryAction: TextButton.icon(
        onPressed: () {
          HapticFeedback.lightImpact();
          Navigator.pop(context);
        },
        icon: const Icon(Icons.edit),
        label: const Text('Enter Manually'),
      ),
    );
  }
}

/// Empty state for templates
class EmptyTemplatesState extends StatelessWidget {
  const EmptyTemplatesState({required this.onCreateTemplate, super.key});

  final VoidCallback onCreateTemplate;

  @override
  Widget build(BuildContext context) {
    return EmptyState(
      icon: Icons.bookmark_border,
      title: 'No Templates Yet',
      description:
          'Save frequently used messages as templates for quick access. Perfect for greetings, business inquiries, or common responses.',
      actionLabel: 'Add Template',
      onAction: onCreateTemplate,
    );
  }
}

/// Empty state for search results
class EmptySearchState extends StatelessWidget {
  const EmptySearchState({required this.query, required this.onClear, super.key});

  final String query;
  final VoidCallback onClear;

  @override
  Widget build(BuildContext context) {
    return EmptyState(
      icon: Icons.search_off,
      title: 'No Results Found',
      description: 'We couldn\'t find any matches for "$query". Try a different search term.',
      actionLabel: 'Clear Search',
      onAction: onClear,
    );
  }
}

/// Empty state for first-time app launch
class WelcomeEmptyState extends StatelessWidget {
  const WelcomeEmptyState({required this.onGetStarted, super.key});

  final VoidCallback onGetStarted;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return EmptyState(
      icon: Icons.chat_bubble_outline,
      title: 'Welcome to WAssistant',
      description:
          'The fastest way to start WhatsApp conversations without saving contacts. Generate QR codes, create shareable links, and more.',
      actionLabel: 'Get Started',
      onAction: onGetStarted,
      secondaryAction: Padding(
        padding: EdgeInsets.only(top: layout.spacing(8)),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _FeaturePill(icon: Icons.qr_code, label: 'QR Codes'),
            SizedBox(width: layout.spacing(8)),
            _FeaturePill(icon: Icons.link, label: 'Links'),
            SizedBox(width: layout.spacing(8)),
            _FeaturePill(icon: Icons.document_scanner, label: 'OCR'),
          ],
        ),
      ),
    );
  }
}

/// Small feature indicator pill
class _FeaturePill extends StatelessWidget {
  const _FeaturePill({required this.icon, required this.label});

  final IconData icon;
  final String label;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return Container(
      padding: EdgeInsets.symmetric(horizontal: layout.spacing(10), vertical: layout.spacing(6)),
      decoration: BoxDecoration(
        color: AppConstants.darkSurface,
        borderRadius: BorderRadius.circular(layout.spacing(20)),
        border: Border.all(color: Colors.white10),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: layout.iconSize(14), color: AppConstants.accentGreen),
          SizedBox(width: layout.spacing(4)),
          Text(
            label,
            style: TextStyle(fontSize: layout.fontSize(12), color: AppConstants.textMediumEmphasis),
          ),
        ],
      ),
    );
  }
}

/// Error state with retry
class ErrorState extends StatelessWidget {
  const ErrorState({required this.message, required this.onRetry, this.error, super.key});

  final String message;
  final VoidCallback onRetry;
  final dynamic error;

  @override
  Widget build(BuildContext context) {
    final layout = context.responsive;

    return EmptyState(
      icon: Icons.error_outline,
      title: 'Something Went Wrong',
      description: message,
      actionLabel: 'Try Again',
      onAction: onRetry,
      secondaryAction:
          error != null
              ? Padding(
                padding: EdgeInsets.only(top: layout.spacing(8)),
                child: Text(
                  'Error: $error',
                  style: TextStyle(fontSize: layout.fontSize(12), color: AppConstants.alertRed),
                  textAlign: TextAlign.center,
                ),
              )
              : null,
    );
  }
}
