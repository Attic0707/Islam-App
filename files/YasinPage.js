import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import { Audio } from "expo-av";
import ScaledText from "./ScaledText";
import { YASIN_ARABIC } from "./Yasin/YASIN_ARABIC";
import { YASIN_TURKISH } from "./Yasin/YASIN_TURKISH";

const YASIN_AUDIO = require("../assets/sounds/yasin.mp3"); // put your Yasin mp3 here

export default function YasinPage({ onBack }) {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  // Watch for playback end
  useEffect(() => {
    if (!sound) return;

    sound.setOnPlaybackStatusUpdate((status) => {
      if (!status.isLoaded) return;
      if (status.didJustFinish) {
        setIsPlaying(false);
        // Optionally reset to start
        sound.setPositionAsync(0);
      }
    });
  }, [sound]);

  async function loadSoundIfNeeded() {
    if (sound) return sound;

    const { sound: newSound } = await Audio.Sound.createAsync(YASIN_AUDIO);
    setSound(newSound);
    return newSound;
  }

  async function onTogglePlay() {
    try {
      setIsLoadingAudio(true);
      const s = await loadSoundIfNeeded();
      const status = await s.getStatusAsync();

      if (status.isLoaded && status.isPlaying) {
        await s.pauseAsync();
        setIsPlaying(false);
      } else {
        await s.playAsync();
        setIsPlaying(true);
      }
    } catch (e) {
      console.log("Yasin audio error:", e);
    } finally {
      setIsLoadingAudio(false);
    }
  }

  return (
    <View
      style={[
        styles.overlay,
        { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20 },
      ]}
    >
      {/* Back button */}
      <TouchableOpacity
        onPress={onBack}
        style={{ alignSelf: "flex-start", marginBottom: 10 }}
      >
        <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
      </TouchableOpacity>

      {/* Header + Audio button */}
      <View style={styles.headerRow}>
        <Text style={styles.yasinTitle}>Yâsîn Suresi</Text>

        <TouchableOpacity
          onPress={onTogglePlay}
          style={styles.audioButton}
          disabled={isLoadingAudio}
        >
          <Text style={styles.audioButtonText}>
            {isLoadingAudio
              ? "Yükleniyor..."
              : isPlaying
              ? "⏸ Durdur"
              : "▶ Dinle"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.audioHint}>
        Arapça metni okurken Yâsîn dinlemek için dinle butonuna dokun.
      </Text>

      <ScrollView style={styles.scroll}>
        <Text style={styles.yasinSectionTitle}>📖 Arapça</Text>

        {YASIN_ARABIC.map((line, index) => (
          <ScaledText key={index} baseSize={14} style={styles.arabic}>
            {line}
          </ScaledText>
        ))}

        <View style={{ height: 20 }} />

        <Text style={styles.yasinSectionTitle}>🇹🇷 Türkçe Meali</Text>

        {YASIN_TURKISH.map((line, index) => (
          <ScaledText key={index} baseSize={14} style={styles.turkish}>
            {line}
          </ScaledText>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  yasinTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  audioButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255,221,85,0.8)",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  audioButtonText: {
    color: "#ffdd55",
    fontSize: 13,
    fontWeight: "600",
  },
  audioHint: {
    fontSize: 12,
    color: "#d0d7e2",
    marginBottom: 8,
  },
  scroll: {
    marginTop: 4,
    width: "100%",
  },
  yasinSectionTitle: {
    color: "#e3e3e3",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
  },
  arabic: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 38,
    textAlign: "right",
    marginBottom: 8,
  },
  turkish: {
    color: "#ddd",
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 8,
  },
});
