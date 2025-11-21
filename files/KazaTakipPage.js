import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Alert, ScrollView, TouchableOpacity, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";

export default function KazaTakipPage({ onBack }) {
    const PRAYERS = [
    { key: "fajr", label: "Sabah" },
    { key: "dhuhr", label: "Öğle" },
    { key: "asr", label: "İkindi" },
    { key: "maghrib", label: "Akşam" },
    { key: "isha", label: "Yatsı" },
    ];
    
    const [counts, setCounts] = useState({
        fajr: 0,
        dhuhr: 0,
        asr: 0,
        maghrib: 0,
        isha: 0,
    });
    
    useEffect(() => {
        loadCounts();
    }, []);
    
    async function loadCounts() {
        try {
        const saved = await AsyncStorage.getItem("kaza_counts");
        if (saved) {
            const parsed = JSON.parse(saved);
            setCounts({
            fajr: parsed.fajr ?? 0,
            dhuhr: parsed.dhuhr ?? 0,
            asr: parsed.asr ?? 0,
            maghrib: parsed.maghrib ?? 0,
            isha: parsed.isha ?? 0,
            });
        }
        } catch (e) {
            console.log("KazaTakip loadCounts error:", e);
        }
    }
    
    async function saveCounts(nextCounts) {
    try {
      await AsyncStorage.setItem("kaza_counts", JSON.stringify(nextCounts));
    } catch (e) {
      console.log("KazaTakip saveCounts error:", e);
    }
    }
    
    async function changeCount(prayerKey, delta) {
        try {
        const current = counts[prayerKey] ?? 0;
        const nextValue = Math.max(0, current + delta); // no negative
        const nextCounts = { ...counts, [prayerKey]: nextValue };
        
        setCounts(nextCounts);
        saveCounts(nextCounts);
        
        // Optional haptics
        if (delta > 0) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        } catch (e) {
        console.log("KazaTakip changeCount error:", e);
        }
    }
    
    async function handleReset() {
        Alert.alert(
        "Reset",
        "Tüm kazalar sıfırlanacak. Emin misin?",
        [
            { text: "Vazgeç", style: "cancel" },
            {
            text: "Sıfırla",
            style: "destructive",
            onPress: async () => {
                const empty = {
                fajr: 0,
                dhuhr: 0,
                asr: 0,
                maghrib: 0,
                isha: 0,
                };
                setCounts(empty);
                await saveCounts(empty);
            },
            },
        ]
        );
    }
    
    const total =
    counts.fajr + counts.dhuhr + counts.asr + counts.maghrib + counts.isha;
    
    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>
    
        <Text style={styles.kazaTitle}> Kaza Takibi </Text>
        <Text style={styles.kazaSubtitle}>
            5 vakit namazının kazalarını buradan takip edebilirsin.
        </Text>
    
        <ScrollView style={{ marginTop: 16, width: "100%" }}>
            {PRAYERS.map((p) => {
            const value = counts[p.key] ?? 0;
            return (
                <View key={p.key} style={styles.kazaRow}>
                <Text style={styles.kazaPrayerName}>{p.label}</Text>
        
                <View style={styles.kazaControls}>
                    <TouchableOpacity
                    style={[styles.kazaButton, value === 0 && { opacity: 0.5 }]}
                    onPress={() => changeCount(p.key, -1)}
                    disabled={value === 0}
                    >
                    <Text style={styles.kazaButtonText}>−</Text>
                    </TouchableOpacity>
        
                    <Text style={styles.kazaCount}>{value}</Text>
        
                    <TouchableOpacity
                    style={styles.kazaButton}
                    onPress={() => changeCount(p.key, +1)}
                    >
                    <Text style={styles.kazaButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                </View>
            );
            })}
        
            <Text style={styles.kazaTotal}>
                Toplam kaçırılan: <Text style={{ fontWeight: "700" }}>{total}</Text>
            </Text>
        
            <TouchableOpacity onPress={handleReset} style={styles.kazaResetBtn}>
            <Text style={styles.kazaResetText}>Sıfırla</Text>
            </TouchableOpacity>
        
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
    backButton: {
      alignSelf: "flex-start",
      marginLeft: 20,
      marginBottom: 10,
    },
    backButtonText: {
      color: "white",
      fontSize: 18,
    },
    kazaTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    kazaSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    kazaRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 10,
      marginBottom: 10,
    },
    kazaPrayerName: {
      fontSize: 16,
      color: "#ffffff",
      fontWeight: "600",
    },
    kazaControls: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    kazaButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: "#ffdd55",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255,221,85,0.15)",
    },
    kazaButtonText: {
      fontSize: 20,
      color: "#ffdd55",
      fontWeight: "700",
    },
    kazaCount: {
      minWidth: 32,
      textAlign: "center",
      fontSize: 18,
      color: "#ffffff",
      fontWeight: "600",
    },
    kazaTotal: {
      fontSize: 16,
      color: "#ffffff",
      marginTop: 16,
      textAlign: "center",
    },
    kazaResetBtn: {
      marginTop: 12,
      alignSelf: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      backgroundColor: "rgba(255,60,60,0.25)",
    },
    kazaResetText: {
      fontSize: 14,
      color: "#ffffff",
      fontWeight: "600",
    },
});