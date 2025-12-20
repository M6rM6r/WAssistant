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
          Text(label, style: const TextStyle(fontSize: 14)),
          Text(value, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold)),
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
            color: isAtRisk ? Colors.red.shade50 : Colors.green.shade50,
            border: Border.all(color: isAtRisk ? Colors.red.shade200 : Colors.green.shade200),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            children: [
              Icon(
                isAtRisk ? Icons.warning : Icons.check_circle,
                color: isAtRisk ? Colors.red : Colors.green,
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  isAtRisk ? 'Churn risk detected' : 'Engagement healthy',
                  style: TextStyle(color: isAtRisk ? Colors.red.shade700 : Colors.green.shade700),
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
                Text(event.reason, style: const TextStyle(fontSize: 12)),
                const SizedBox(height: 4),
                Text(
                  'Risk: ${event.riskLevel.name.toUpperCase()}',
                  style: TextStyle(
                    fontSize: 12,
                    color: event.riskLevel == ChurnLevel.critical ? Colors.red : Colors.orange,
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
