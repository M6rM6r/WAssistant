import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/locator.dart';
import 'package:wassistant/pages/analytics_page.dart';
import 'package:wassistant/pages/history_page.dart';
import 'package:wassistant/services/biometric_service.dart';
import 'package:wassistant/utils/constants.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;

    return Drawer(
      backgroundColor: AppConstants.darkBackground,
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          UserAccountsDrawerHeader(
            decoration: const BoxDecoration(
              color: AppConstants.darkSurface,
            ),
            accountName: Text(
              l10n.appTitle,
              style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                  color: AppConstants.accentGreen),
            ),
            accountEmail: const Text('Your WhatsApp Utility Tool',
                style: TextStyle(color: AppConstants.textMediumEmphasis)),
            currentAccountPicture: const CircleAvatar(
              backgroundColor: AppConstants.darkBackground,
              child: Icon(
                FontAwesomeIcons.whatsapp,
                size: 40,
                color: AppConstants.accentGreen,
              ),
            ),
          ),
          _buildDrawerItem(context, l10n.history, Icons.history, () async {
            Navigator.pop(context);
            // Optional: Protect History with Biometrics
            final biometricService = locator<BiometricService>();
            if (await biometricService.authenticate()) {
              if (!context.mounted) return;
              await Navigator.push(
                context,
                MaterialPageRoute<void>(
                    builder: (context) => const HistoryPage()),
              );
            } else {
              if (!context.mounted) return;
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                  content: Text('Authentication required to view history.')));
            }
          }),
          _buildDrawerItem(context, l10n.analytics, Icons.analytics_outlined,
              () {
            Navigator.pop(context);
            Navigator.push(
              context,
              MaterialPageRoute<void>(
                  builder: (context) => const AnalyticsPage()),
            );
          },
              trailing: const Chip(
                label: Text('New',
                    style: TextStyle(
                        fontSize: 10,
                        color: Colors.black,
                        fontWeight: FontWeight.bold)),
                backgroundColor: AppConstants.accentGreen,
                padding: EdgeInsets.zero,
              )),
          const Divider(
              color: AppConstants.darkSurface, indent: 16, endIndent: 16),
          _buildDrawerItem(context, l10n.privacyPolicy,
              Icons.privacy_tip_outlined, () {
            Navigator.pop(context);
            showLicensePage(
                context: context,
                applicationName: AppConstants.appName,
                applicationVersion: '1.4.0');
          }),
          _buildDrawerItem(context, l10n.shareApp, Icons.share, () {
            Navigator.pop(context);
          }),
          const Divider(color: AppConstants.darkSurface),
          const ListTile(
            title: Text('Version 1.4.0',
                style: TextStyle(color: AppConstants.textMediumEmphasis)),
            enabled: false,
          ),
        ],
      ),
    );
  }

  // Helper for consistent styling
  Widget _buildDrawerItem(
      BuildContext context, String title, IconData icon, VoidCallback onTap,
      {Widget? trailing}) {
    return ListTile(
      leading: Icon(icon, color: AppConstants.textMediumEmphasis),
      title: Text(title,
          style: const TextStyle(color: AppConstants.textHighEmphasis)),
      trailing: trailing,
      onTap: onTap,
    );
  }
}
