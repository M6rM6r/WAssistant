
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:wassistant/providers/security_provider.dart';
import 'package:wassistant/utils/constants.dart';

class AuthWrapper extends StatefulWidget {
  const AuthWrapper({required this.child, super.key});
  final Widget child;

  @override
  State<AuthWrapper> createState() => _AuthWrapperState();
}

class _AuthWrapperState extends State<AuthWrapper> with WidgetsBindingObserver {
  
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    // Attempt auth on startup if needed
    WidgetsBinding.instance.addPostFrameCallback((_) {
        _checkAuth();
    });
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.paused) {
      // Lock app when backgrounded (OCPD strict security)
      Provider.of<SecurityProvider>(context, listen: false).lockApp();
    } else if (state == AppLifecycleState.resumed) {
      _checkAuth();
    }
  }

  void _checkAuth() {
    final security = Provider.of<SecurityProvider>(context, listen: false);
    if (security.isBiometricEnabled && !security.isAuthenticated) {
        security.authenticate();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<SecurityProvider>(
      builder: (context, security, child) {
        if (security.isBiometricEnabled && !security.isAuthenticated) {
          return Scaffold(
            body: Container(
              color: AppConstants.primaryTeal,
              width: double.infinity,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.lock, size: 80, color: Colors.white),
                  const SizedBox(height: 20),
                  const Text(
                    'Wassistant Locked',
                    style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () => security.authenticate(),
                    style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.white,
                        foregroundColor: AppConstants.primaryTeal
                    ),
                    child: const Text('Unlock'),
                  )
                ],
              ),
            ),
          );
        }
        return widget.child;
      },
    );
  }
}
