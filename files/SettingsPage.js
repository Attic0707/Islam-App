import React, { useEffect, useState, useRef } from "react";
import {TouchableOpacity, View, Text, StyleSheet, Alert, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsPage({ onBack, onSettingsChanged }) {
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [vibrationEnabled, setVibrationEnabled] = useState(true);
    const [darkTheme, setDarkTheme] = useState(true);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    useEffect(() => {
      const load = async () => {
        const s = await AsyncStorage.getItem("settings");
        if (s) {
          const parsed = JSON.parse(s);
          setSoundEnabled(parsed.soundEnabled ?? true);
          setVibrationEnabled(parsed.vibrationEnabled ?? true);
          setDarkTheme(parsed.darkTheme ?? true);
          setNotificationsEnabled(parsed.notificationsEnabled ?? true);
        }
      };
      load();
    }, []);

    async function save() {
      const data = {
        soundEnabled,
        vibrationEnabled,
        darkTheme,
        notificationsEnabled,
      };
      if (onSettingsChanged) {
        onSettingsChanged(data);
      }
      Alert.alert("Kaydedildi", "Ayarlar başarıyla kaydedildi.");
      await AsyncStorage.setItem("settings", JSON.stringify(data));
    }

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.settingsTitle}>Ayarlar</Text>

        {/* Sound */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Bildirim sesi</Text>
          <Switch
            value={soundEnabled}
            onValueChange={setSoundEnabled}
          />
        </View>

        {/* Vibration */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Titreşim</Text>
          <Switch
            value={vibrationEnabled}
            onValueChange={setVibrationEnabled}
          />
        </View>

        {/* Theme */}
        {/* 
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Karanlık tema</Text>
          <Switch
            value={darkTheme}
            onValueChange={setDarkTheme}
          />
        </View>
        */}
        {/* Notifications */}
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Ezan Bildirimleri</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        <TouchableOpacity onPress={save} style={styles.settingsSaveBtn}>
          <Text style={styles.settingsSaveText}>Kaydet</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text>Reklamları Göster</Text>
          <Switch
            value={settings.adsEnabled}
            onValueChange={(value) => onSettingsChanged({ ...settings, adsEnabled: value }) } />
        </View>

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
    settingsTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 20,
    },

    settingRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      marginBottom: 10,
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingHorizontal: 12,
      borderRadius: 10,
    },

    settingLabel: {
      fontSize: 16,
      color: "#ffffff",
    },

    settingsSaveBtn: {
      marginTop: 20,
      backgroundColor: "#ffdd55",
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
    },

    settingsSaveText: {
      fontSize: 16,
      fontWeight: "700",
      color: "#333333",
    },
});