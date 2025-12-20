import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/models/history_item.dart';
import 'package:wassistant/providers/history_provider.dart';
import 'package:wassistant/utils/constants.dart';

class AnalyticsPage extends StatelessWidget {
  const AnalyticsPage({super.key});

  @override
  Widget build(BuildContext context) {
    final history = Provider.of<HistoryProvider>(context).history;
    final l10n = AppLocalizations.of(context)!;

    // Data Analysis Logic
    final linkCount =
        history.where((i) => i.type == HistoryItemType.link).length;
    final qrCount = history.where((i) => i.type == HistoryItemType.qr).length;
    final vCardCount =
        history.where((i) => i.type == HistoryItemType.vcard).length;
    final total = history.length;

    final chartSections = <PieChartSectionData>[
      if (linkCount > 0)
        PieChartSectionData(
          color: AppConstants.primaryTeal,
          value: linkCount.toDouble(),
          title: '${(linkCount / total * 100).toStringAsFixed(0)}%',
          radius: 60,
          titleStyle: const TextStyle(
              fontWeight: FontWeight.bold, color: Colors.white, fontSize: 16),
        ),
      if (qrCount > 0)
        PieChartSectionData(
          color: AppConstants.accentGreen,
          value: qrCount.toDouble(),
          title: '${(qrCount / total * 100).toStringAsFixed(0)}%',
          radius: 60,
          titleStyle: const TextStyle(
              fontWeight: FontWeight.bold,
              color: AppConstants.darkBackground,
              fontSize: 16),
        ),
      if (vCardCount > 0)
        PieChartSectionData(
          color: AppConstants.textMediumEmphasis, // Use a neutral theme color
          value: vCardCount.toDouble(),
          title: '${(vCardCount / total * 100).toStringAsFixed(0)}%',
          radius: 60,
          titleStyle: const TextStyle(
              fontWeight: FontWeight.bold, color: Colors.white, fontSize: 16),
        ),
    ];

    return Scaffold(
      appBar: AppBar(
        title: Text(l10n.analyticsTitle),
        // Theming is handled globally in main.dart
      ),
      body: total == 0
          ? Center(
              child: Text(l10n.noData,
                  style: const TextStyle(color: AppConstants.textMediumEmphasis)))
          : ListView(
              padding: const EdgeInsets.all(16),
              children: [
                Text(
                  l10n.activityDistribution,
                  style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: AppConstants.textHighEmphasis),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 24),
                SizedBox(
                  height: 200, // Give chart a fixed height
                  child: PieChart(
                    PieChartData(
                      sectionsSpace: 4, // More spacing for cyberpunk look
                      centerSpaceRadius: 50, // Donut hole
                      borderData: FlBorderData(show: false),
                      sections: chartSections,
                      pieTouchData: PieTouchData(
                          touchCallback: (event, pieTouchResponse) {
                        // Add interaction logic later if needed
                      }),
                    ),
                  ),
                ),
                const SizedBox(height: 32),

                // Summary Card
                Card(
                  elevation: 4,
                  shadowColor:
                      AppConstants.accentGreen.withValues(alpha: 0.1),
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      children: [
                        _buildStatRow(l10n.totalActions, total.toString(),
                            AppConstants.accentGreen),
                        const Divider(color: Colors.white10),
                        _buildStatRow(l10n.directLinks, linkCount.toString(),
                            AppConstants.primaryTeal),
                        _buildStatRow(l10n.qrCodes, qrCount.toString(),
                            AppConstants.accentGreen),
                        _buildStatRow(l10n.vCards, vCardCount.toString(),
                            AppConstants.textMediumEmphasis),
                      ],
                    ),
                  ),
                ),
              ],
            ),
    );
  }

  Widget _buildStatRow(String label, String value, Color indicatorColor) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12),
      child: Row(
        children: [
          Container(
            width: 8,
            height: 8,
            decoration: BoxDecoration(
              color: indicatorColor,
              shape: BoxShape.circle,
            ),
          ),
          const SizedBox(width: 12),
          Text(label,
              style: const TextStyle(
                  color: AppConstants.textMediumEmphasis, fontSize: 16)),
          const Spacer(),
          Text(value,
              style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                  color: AppConstants.textHighEmphasis)),
        ],
      ),
    );
  }
}
