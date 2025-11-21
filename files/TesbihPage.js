import React, { useEffect, useState, useRef } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";

export default function TesbihPage({ onBack }) {
  const PHRASES = [
    { key: "subhanallah", label: "Sübhanallah" },
    { key: "elhamdulillah", label: "Elhamdülillah" },
    { key: "allahu_ekber", label: "Allahu Ekber" },
  ];
  const TARGET = 33;
  const TOTAL_TARGET = TARGET * PHRASES.length; // 99

  const [currentIndex, setCurrentIndex] = useState(0);
  const [counts, setCounts] = useState({
    subhanallah: 0,
    elhamdulillah: 0,
    allahu_ekber: 0,
  });

  // Animation values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current; // 0..1 -> 0..360deg

  useEffect(() => {
    loadCounts();
  }, []);

  async function loadCounts() {
    try {
      const saved = await AsyncStorage.getItem("tesbih_counts");
      if (saved) {
        const parsed = JSON.parse(saved);
        const fixed = {
          subhanallah: parsed.subhanallah ?? 0,
          elhamdulillah: parsed.elhamdulillah ?? 0,
          allahu_ekber: parsed.allahu_ekber ?? 0,
        };
        setCounts(fixed);

        // set rotation to current total progress
        const total =
          fixed.subhanallah + fixed.elhamdulillah + fixed.allahu_ekber;
        const progress = Math.min(1, total / TOTAL_TARGET);
        rotateAnim.setValue(progress);
      }
    } catch (e) {
      console.log("Tesbih loadCounts error:", e);
    }
  }

  async function saveCounts(nextCounts) {
    try {
      await AsyncStorage.setItem("tesbih_counts", JSON.stringify(nextCounts));
    } catch (e) {
      console.log("Tesbih saveCounts error:", e);
    }
  }

  function runTapAnimation(nextTotal) {
    // 1) Scale pulse
    scaleAnim.stopAnimation();
    scaleAnim.setValue(1);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.12,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();

    // 2) Progressive rotation towards 360° at 99 taps
    const progress = Math.min(1, nextTotal / TOTAL_TARGET); // 0..1
    Animated.timing(rotateAnim, {
      toValue: progress,
      duration: 120,
      useNativeDriver: true,
    }).start();
  }

  async function handleTap() {
    try {
      const currentKey = PHRASES[currentIndex].key;

      // total BEFORE this tap
      const totalBefore =
        counts.subhanallah + counts.elhamdulillah + counts.allahu_ekber;

      const nextCount = (counts[currentKey] ?? 0) + 1;
      const nextCounts = { ...counts, [currentKey]: nextCount };
      const nextTotal = totalBefore + 1;

      setCounts(nextCounts);
      saveCounts(nextCounts);

      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      runTapAnimation(nextTotal);

      if (nextCount >= TARGET && currentIndex < PHRASES.length - 1) {
        setCurrentIndex(currentIndex + 1);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else if (nextCount >= TARGET && currentIndex === PHRASES.length - 1) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        Alert.alert(
          "Maşallah",
          "33 + 33 + 33 tamamlandı. Allah kabul etsin."
        );
      }
    } catch (e) {
      console.log("Tesbih handleTap error:", e);
    }
  }

  async function handleReset() {
    const empty = {
      subhanallah: 0,
      elhamdulillah: 0,
      allahu_ekber: 0,
    };
    setCounts(empty);
    setCurrentIndex(0);
    await saveCounts(empty);
    rotateAnim.setValue(0); // reset rotation
  }

  const currentPhrase = PHRASES[currentIndex];
  const currentCount = counts[currentPhrase.key] ?? 0;
  const total =
    counts.subhanallah + counts.elhamdulillah + counts.allahu_ekber;

  // Map 0..1 -> 0..360deg
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
        <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
      </TouchableOpacity>

      <Text style={styles.tesbihTitle}>Tesbih</Text>
      <Text style={styles.tesbihSubtitle}>
        Her dokunuş bir tesbih olsun. Sırasıyla 33 Sübhanallah, 33
        Elhamdülillah, 33 Allahu Ekber.
      </Text>

      {/* Main tesbih tap area */}
      <TouchableOpacity
        onPress={handleTap}
        activeOpacity={0.8}
        style={styles.tesbihImageTapArea}
      >
        <Animated.Image
          source={require("../assets/images/tesbih.png")}
          style={[
            styles.tesbihImage,
            {
              transform: [{ scale: scaleAnim }, { rotate: spin }],
            },
          ]}
          resizeMode="contain"
        />

        <View style={styles.tesbihDotsRow}>
          {Array.from({ length: 11 }).map((_, i) => {
            const threshold = (i / 10) * TARGET;
            const filled = currentCount >= threshold && currentCount > 0;
            return (
              <View
                key={i}
                style={[styles.tesbihDot, filled && styles.tesbihDotActive]}
              />
            );
          })}
        </View>

      </TouchableOpacity>

      {/* Tabs */}
      <View style={styles.tesbihTabsRow}>
        {PHRASES.map((p, index) => {
          const active = index === currentIndex;
          return (
            <TouchableOpacity
              key={p.key}
              style={[styles.tesbihTab, active && styles.tesbihTabActive]}
              onPress={() => setCurrentIndex(index)}
            >
              <Text
                style={[
                  styles.tesbihTabText,
                  active && styles.tesbihTabTextActive,
                ]}
              >
                {p.label}
              </Text>
              <Text style={styles.tesbihTabCount}>
                {counts[p.key] ?? 0} / {TARGET}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.tesbihInfoText}>Toplam: {total}</Text>

      <TouchableOpacity onPress={handleReset} style={styles.resetBtn}>
        <Text style={styles.resetText}>Hepsini Sıfırla</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  tesbihTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 8,
    textAlign: "center",
  },
  tesbihSubtitle: {
    fontSize: 14,
    color: "#d0d7e2",
    textAlign: "center",
    marginBottom: 20,
  },
  tesbihImageTapArea: {
    width: 230,
    height: 230,
    borderRadius: 115,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0)",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    marginBottom: 16,
  },
  tesbihImage: {
    width: 250,
    height: 250,
  },
  tesbihDotsRow: {
    position: "absolute",
    bottom: 16,
    flexDirection: "row",
  },
  tesbihDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.25)",
    marginHorizontal: 2,
  },
  tesbihDotActive: {
    backgroundColor: "#ffffff",
  },
  tesbihCounterBubble: {
    position: "absolute",
    top: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 16,
    alignItems: "center",
  },
  tesbihCounterPhrase: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  tesbihCounterNumber: {
    color: "#d0d7e2",
    fontSize: 12,
  },
  tesbihTabsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
    marginBottom: 12,
  },
  tesbihTab: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
  },
  tesbihTabActive: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
  },
  tesbihTabText: {
    color: "#d0d7e2",
    fontSize: 13,
    fontWeight: "500",
  },
  tesbihTabTextActive: {
    color: "#ffffff",
  },
  tesbihTabCount: {
    color: "#9aa4b8",
    fontSize: 11,
    marginTop: 2,
  },
  tesbihInfoText: {
    marginTop: 4,
    color: "#ffffff",
    fontSize: 14,
  },
  resetBtn: {
    marginTop: 12,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  resetText: {
    color: "#ffffff",
    fontSize: 14,
  },
});
