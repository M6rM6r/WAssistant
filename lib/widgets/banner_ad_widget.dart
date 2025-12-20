import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

class BannerAdWidget extends StatefulWidget {

  const BannerAdWidget({super.key, this.adSize = AdSize.banner});
  final AdSize adSize;

  @override
  State<BannerAdWidget> createState() => _BannerAdWidgetState();
}

class _BannerAdWidgetState extends State<BannerAdWidget> {
  // Logic: Centralize configuration for maintainability.
  static const String _testAdUnitId = 'ca-app-pub-3940256099942544/6300978111';
  // TODO(x-noo): Replace with production ID in release mode.
  static const String _adUnitId = kReleaseMode ? 'YOUR_PROD_AD_UNIT_ID' : _testAdUnitId;
  
  BannerAd? _bannerAd;
  bool _isAdLoaded = false;
  int _retryAttempt = 0;
  static const int _maxRetries = 3;

  @override
  void initState() {
    super.initState();
    if (!kIsWeb) {
      _loadAd();
    }
  }

  void _loadAd() {
    _bannerAd = BannerAd(
      adUnitId: _adUnitId, // Using the correct ID selection logic
      request: const AdRequest(),
      size: widget.adSize,
      listener: BannerAdListener(
        onAdLoaded: (ad) {
          if (mounted) {
            setState(() {
              _isAdLoaded = true;
              _retryAttempt = 0; // Reset retry counter on success
            });
          }
        },
        onAdFailedToLoad: (ad, err) {
          debugPrint('BannerAd failed to load: $err');
          ad.dispose();
          _isAdLoaded = false;
          
          // Logic: Implement exponential backoff for retries to be "smart" about network resources.
          if (_retryAttempt < _maxRetries) {
            _retryAttempt++;
            final delay = Duration(seconds: 2 * _retryAttempt);
            debugPrint('Retrying ad load in ${delay.inSeconds} seconds (Attempt $_retryAttempt)');
            Timer(delay, () {
              if (mounted) _loadAd();
            });
          }
        },
      ),
    )..load(); // ignore: discarded_futures
  }

  @override
  void dispose() {
    _bannerAd?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Logic: Only render the ad if it is actually ready.
    // On Web, ads are handled differently (e.g., Adsense), so we skip or use a different widget.
    if (kIsWeb) return const SizedBox.shrink();

    final shouldShowAd = _isAdLoaded && _bannerAd != null;

    if (shouldShowAd) {
      return SizedBox(
        width: widget.adSize.width.toDouble(),
        height: widget.adSize.height.toDouble(),
        child: AdWidget(ad: _bannerAd!),
      );
    } else {
      // Logic: Provide a visual placeholder during loading/error states 
      // to prevent UI jank (layout shifts).
      return _buildPlaceholder(context);
    }
  }

  Widget _buildPlaceholder(BuildContext context) {
    return Container(
      width: widget.adSize.width.toDouble(),
      height: widget.adSize.height.toDouble(),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surface.withValues(alpha: 0.3),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(
          color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.1),
        ),
      ),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
             Icon(Icons.ad_units, size: 16, color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.4)),
             const SizedBox(height: 4),
             Text(
              'AD SPACE',
              style: TextStyle(
                color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.4),
                fontWeight: FontWeight.bold,
                letterSpacing: 1.5,
                fontSize: 10,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
