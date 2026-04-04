import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:wassistant/l10n/app_localizations.dart';
import 'package:wassistant/locator.dart';
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
            decoration: const BoxDecoration(color: AppConstants.darkSurface),
            accountName: Text(
              l10n.appTitle,
              style: const TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: AppConstants.accentGreen,
              ),
            ),
            accountEmail: const Text(
              'Professional WhatsApp Utility',
              style: TextStyle(color: AppConstants.textMediumEmphasis),
            ),
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
            final biometricService = locator<BiometricService>();
            if (await biometricService.authenticate()) {
              if (!context.mounted) return;
              await Navigator.push(
                context,
                MaterialPageRoute<void>(
                  builder: (context) => const HistoryPage(),
                ),
              );
            }
          }),

          const Divider(),

          _buildDrawerItem(
            context,
            l10n.privacyPolicy,
            Icons.privacy_tip_outlined,
            () async {
              Navigator.pop(context);
            final url = Uri.parse('https://wassistant.site/privacy_policy.html');
            if (await canLaunchUrl(url)) {
              await launchUrl(url, mode: LaunchMode.externalApplication);
            }
            },
          ),

          _buildDrawerItem(context, l10n.shareApp, Icons.share, () {
            Navigator.pop(context);
          }),

          const Divider(),
          const ListTile(
            title: Text(
              'Version 1.4.1',
              style: TextStyle(color: AppConstants.textMediumEmphasis),
            ),
            enabled: false,
          ),
        ],
      ),
    );
  }

  Widget _buildDrawerItem(
    BuildContext context,
    String title,
    IconData icon,
    VoidCallback onTap, {
    Widget? trailing,
  }) {
    return ListTile(
      leading: Icon(icon, color: AppConstants.textMediumEmphasis),
      title: Text(
        title,
        style: const TextStyle(color: AppConstants.textHighEmphasis),
      ),
      trailing: trailing,
      onTap: onTap,
    );
  }
}
