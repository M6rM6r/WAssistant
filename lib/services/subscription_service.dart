import 'package:flutter/material.dart';
import 'package:purchases_flutter/purchases_flutter.dart';
import 'package:wassistant/utils/logger_service.dart';

/// OCPD: Structured Revenue Management.
/// INTJ Strategy: Pro-tier monetization for freelance sustainability.
class SubscriptionService with ChangeNotifier {
  bool _isPro = false;
  bool get isPro => _isPro;

  /// Initialize RevenueCat and sync state
  Future<void> initialize(String apiKey) async {
    try {
      await Purchases.setLogLevel(LogLevel.debug);
      await Purchases.configure(PurchasesConfiguration(apiKey));

      final customerInfo = await Purchases.getCustomerInfo();
      _isPro = customerInfo.entitlements.all['pro']?.isActive ?? false;

      notifyListeners();
      LoggerService.i('Subscription State: ${_isPro ? 'PRO' : 'FREE'}');
    } catch (e) {
      LoggerService.e('RevenueCat Init Failed', e);
    }
  }

  /// Purchase Pro Tier
  Future<bool> purchasePro() async {
    try {
      final offerings = await Purchases.getOfferings();
      if (offerings.current != null && offerings.current!.availablePackages.isNotEmpty) {
        final customerInfo = await Purchases.purchasePackage(offerings.current!.monthly!);
        _isPro = customerInfo.entitlements.all['pro']?.isActive ?? false;
        notifyListeners();
        return _isPro;
      }
      return false;
    } catch (e) {
      LoggerService.e('Purchase Failed', e);
      return false;
    }
  }

  /// Restore Purchases
  Future<void> restorePurchases() async {
    try {
      final customerInfo = await Purchases.restorePurchases();
      _isPro = customerInfo.entitlements.all['pro']?.isActive ?? false;
      notifyListeners();
    } catch (e) {
      LoggerService.e('Restore Failed', e);
    }
  }
}
