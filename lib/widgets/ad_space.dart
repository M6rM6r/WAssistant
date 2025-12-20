import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:wassistant/utils/constants.dart';
import 'package:wassistant/utils/logger_service.dart';

class AdSpace extends StatefulWidget {
  const AdSpace({super.key});

  @override
  State<AdSpace> createState() => _AdSpaceState();
}

class _AdSpaceState extends State<AdSpace> {
  BannerAd? _bannerAd;
  bool _isAdLoaded = false;

  @override
  void initState() {
    super.initState();
    // Logic: Only load native ads on Android/iOS
    // kIsWeb check prevents the MissingPluginException crash
    if (!kIsWeb &&
        (defaultTargetPlatform == TargetPlatform.android ||
            defaultTargetPlatform == TargetPlatform.iOS)) {
      _loadAd();
    } else {
      LoggerService.d('Skipping Ad Load (Web/Desktop platform detected)');
    }
  }

  void _loadAd() {
    final adUnitId = defaultTargetPlatform == TargetPlatform.android
        ? AppConstants.androidBannerTestId
        : AppConstants.iosBannerTestId;

    _bannerAd = BannerAd(
      adUnitId: adUnitId,
      size: AdSize.banner,
      request: const AdRequest(),
      listener: BannerAdListener(
        onAdLoaded: (ad) {
          if (!mounted) {
            ad.dispose();
            return;
          }
          setState(() {
            _isAdLoaded = true;
          });
        },
        onAdFailedToLoad: (ad, error) {
          LoggerService.e('Ad failed to load', error);
          ad.dispose();
        },
      ),
    )
      // ignore: discarded_futures
      ..load();
  }

  @override
  void dispose() {
    _bannerAd?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_isAdLoaded && _bannerAd != null) {
      return SizedBox(
        width: _bannerAd!.size.width.toDouble(),
        height: _bannerAd!.size.height.toDouble(),
        child: AdWidget(ad: _bannerAd!),
      );
    }

    // On Web or if ad fails, show nothing or a specific web placeholder
    // Returning an empty SizedBox keeps the layout clean.
    return const SizedBox.shrink();
  }
}
