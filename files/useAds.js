// files/useAds.js
import { useEffect, useRef, useState, useCallback } from "react";
import { Platform } from "react-native";
import { InterstitialAd, AdEventType, TestIds, } from "react-native-google-mobile-ads";

const interstitialAdUnitId = __DEV__ ? TestIds.INTERSTITIAL : Platform.select({ ios: "ca-app-pub-8919233762784771/2566591222", android: "ca-app-pub-8919233762784771/7773354281",  });
const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId, { requestNonPersonalizedAdsOnly: false, });

export function useInterstitialAds(adsEnabled) {
  const [isLoaded, setIsLoaded] = useState(false);
  const lastShownRef = useRef(0);

  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setIsLoaded(true);
      }
    );

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        lastShownRef.current = Date.now();
        setIsLoaded(false);
        interstitial.load();
      }
    );

    const unsubscribeError = interstitial.addAdEventListener(
      AdEventType.ERROR,
      (error) => {
        console.log("Interstitial error:", error);
        setIsLoaded(false);
      }
    );

    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeError();
    };
  }, []);

  const maybeShowInterstitial = useCallback(() => {
    if (!adsEnabled) return;

    const now = Date.now();
    const MIN_INTERVAL = 3 * 60 * 1000;

    if (now - lastShownRef.current < MIN_INTERVAL) {
      return;
    }

    if (isLoaded) {
      interstitial.show();
    }
  }, [adsEnabled, isLoaded]);

  return { maybeShowInterstitial };
}
