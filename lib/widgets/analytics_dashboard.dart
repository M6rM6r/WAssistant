import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/services/retention_service.dart';

/// OCPD: Advanced analytics & performance dashboard
/// Displays engagement metrics, churn risk, and feature usage patterns
class AnalyticsDashboard extends StatefulWidget {
  const AnalyticsDashboard({super.key});

  @override
  State<AnalyticsDashboard> createState() => _AnalyticsDashboardState();
}

class _AnalyticsDashboardState extends State<AnalyticsDashboard> {
  late RetentionService _retentionService;

  @override
  void initState() {
    super.initState();
    _retentionService = context.read<RetentionService>();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildMetricsCard(),
          const SizedBox(height: 16),
          _buildChurnRiskIndicator(),
          const SizedBox(height: 16),
          _buildFeatureUsageChart(),
        ],
      ),
    );
  }

  Widget _buildMetricsCard() {
    return FutureBuilder<EngagementMetrics>(
      future: _retentionService.getMetrics(),
      builder: (context, snapshot) {
        if (!snapshot.hasData) return const SizedBox.shrink();
        final metrics = snapshot.data!;

        return Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              children: [
                _buildMetricRow('Sessions', metrics.sessionCount.toString()),
                _buildMetricRow('Features Used', metrics.totalFeatureUsages.toString()),
                _buildMetricRow(
                  'Last Active',
                  '${metrics.daysSinceLastActive.toStringAsFixed(1)} days ago',
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildMetricRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: Theme.of(context).textTheme.bodyMedium),
          Text(
            value,
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(fontWeight: FontWeight.bold),
          ),
        ],
      ),
    );
  }

  Widget _buildChurnRiskIndicator() {
    return ValueListenableBuilder<bool>(
      valueListenable: _retentionService.churnRiskNotifier,
      builder: (context, isAtRisk, _) {
        return Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color:
                isAtRisk
                    ? Theme.of(context).colorScheme.error.withValues(alpha: 0.1)
                    : Theme.of(context).colorScheme.secondary.withValues(alpha: 0.1),
            border: Border.all(
              color:
                  isAtRisk
                      ? Theme.of(context).colorScheme.error.withValues(alpha: 0.3)
                      : Theme.of(context).colorScheme.secondary.withValues(alpha: 0.3),
            ),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            children: [
              Icon(
                isAtRisk ? Icons.warning : Icons.check_circle,
                color:
                    isAtRisk
                        ? Theme.of(context).colorScheme.error
                        : Theme.of(context).colorScheme.secondary,
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  isAtRisk ? 'Churn risk detected' : 'Engagement healthy',
                  style: TextStyle(
                    color:
                        isAtRisk
                            ? Theme.of(context).colorScheme.error
                            : Theme.of(context).colorScheme.secondary,
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildFeatureUsageChart() {
    return StreamBuilder<ChurnEvent>(
      stream: _retentionService.churnEvents,
      builder: (context, snapshot) {
        if (!snapshot.hasData) return const SizedBox.shrink();
        final event = snapshot.data!;

        return Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Recent Events', style: TextStyle(fontWeight: FontWeight.bold)),
                const SizedBox(height: 8),
                Text(event.reason, style: Theme.of(context).textTheme.bodySmall),
                const SizedBox(height: 4),
                Text(
                  'Risk: ${event.riskLevel.name.toUpperCase()}',
                  style: TextStyle(
                    fontSize: 12,
                    color:
                        event.riskLevel == ChurnLevel.critical
                            ? Theme.of(context).colorScheme.error
                            : Theme.of(context).colorScheme.tertiary,
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
