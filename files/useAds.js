// files/useAds.js
import { useEffect, useRef, useCallback } from "react";
import { Platform } from "react-native";
import mobileAds, { InterstitialAd, AdEventType, TestIds, } from "react-native-google-mobile-ads";

// Interstitial ad unit IDs
const interstitialAdUnitId = __DEV__ ? TestIds.INTERSTITIAL : Platform.select({ ios: "ca-app-pub-8919233762784771/2566591222",  android: "ca-app-pub-8919233762784771/7773354281", });

export function useInterstitialAds(adsEnabled) {
  const lastShownRef = useRef(0);
  const interstitialRef = useRef(null);

  if (!interstitialRef.current) {
    interstitialRef.current = InterstitialAd.createForAdRequest(
      interstitialAdUnitId,
      {
        requestNonPersonalizedAdsOnly: false,
      }
    );
  }

  useEffect(() => {
    // Initialize SDK + load first interstitial
    mobileAds()
      .initialize()
      .then(() => {
        interstitialRef.current?.load();
      });
  }, []);

  const maybeShowInterstitial = useCallback(() => {
    if (!adsEnabled) return;

    const now = Date.now();
    const MIN_INTERVAL = 3 * 60 * 1000; // 3 minutes between interstitials

    if (now - lastShownRef.current < MIN_INTERVAL) {
      return;
    }

    const ad = interstitialRef.current;
    if (!ad) return;

    const offLoaded = ad.addAdEventListener(AdEventType.LOADED, () => {
      ad.show();
    });

    const offClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
      lastShownRef.current = Date.now();
      ad.load();
      cleanup();
    });

    const offError = ad.addAdEventListener(AdEventType.ERROR, (err) => {
      console.log("Interstitial error:", err);
      cleanup();
    });

    function cleanup() {
      offLoaded();
      offClosed();
      offError();
    }

    // If already loaded, this will show immediately; if not, it will show once LOADED fires
    ad.show();
  }, [adsEnabled]);

  return { maybeShowInterstitial };
}
