import React, {useEffect, useState} from "react";
import {TouchableOpacity, View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";

export default function ZikirmatikPage({ onBack }) {
    const [count, setCount] = useState(0);
    const [dailyCount, setDailyCount] = useState(0);

    useEffect(() => {
      loadCounts();
    }, []);

    async function loadCounts() {
      try {
        const saved = await AsyncStorage.getItem("zikr_total");
        const savedDaily = await AsyncStorage.getItem("zikr_daily");
        setCount(saved ? parseInt(saved) : 0);
        setDailyCount(savedDaily ? parseInt(savedDaily) : 0);
      } catch (err) {
        console.log("Load error", err);
      }
    }

    async function increment() {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

      const newTotal = count + 1;
      const newDaily = dailyCount + 1;

      setCount(newTotal);
      setDailyCount(newDaily);

      await AsyncStorage.setItem("zikr_total", String(newTotal));
      await AsyncStorage.setItem("zikr_daily", String(newDaily));
    }

    async function resetCounts() {
      setCount(0);
      setDailyCount(0);
      await AsyncStorage.setItem("zikr_total", "0");
      await AsyncStorage.setItem("zikr_daily", "0");
    }

    return (
      <View style={styles.container}>
        {/* Back */}
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← </Text>
        </TouchableOpacity>

        <Text style={styles.title}>Zikirmatik</Text>

        {/* Counter Circle */}
        <TouchableOpacity onPress={increment} style={styles.counterCircle} activeOpacity={0.7} >
          <Text style={styles.counterNumber}>{dailyCount}</Text>
          <Text style={styles.counterLabel}>Bugünkü Zikir</Text>
        </TouchableOpacity>

        <Text style={styles.totalLabel}>Toplam: {count}</Text>

        <TouchableOpacity onPress={resetCounts} style={styles.resetBtn}>
          <Text style={styles.resetText}>Sıfırla</Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      paddingBottom: 40,
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.65)",
    },
    title: {
      fontSize: 28,
      color: "white",
      fontWeight: "700",
      marginVertical: 20,
    },
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
    counterCircle: {
      width: 220,
      height: 220,
      borderRadius: 110,
      backgroundColor: "rgba(255,255,255,0.08)",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 3,
      borderColor: "rgba(255,255,255,0.2)",
    },
    counterNumber: {
      fontSize: 60,
      color: "white",
      fontWeight: "700",
    },
    counterLabel: {
      fontSize: 16,
      color: "#d0d7e2",
      marginTop: 4,
    },

    totalLabel: {
      fontSize: 20,
      color: "white",
      fontWeight: "600",
      marginTop: 30,
    },
    resetBtn: {
      marginTop: 20,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: "rgba(255,60,60,0.25)",
    },
    resetText: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
    },
});