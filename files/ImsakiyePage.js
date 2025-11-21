import React, {useEffect, useState} from "react";
import {Alert, TouchableOpacity, View, Text, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import * as Location from "expo-location";
import ScaledText from "./ScaledText";
const DEBUG = false;

export default function ImsakiyePage({ onBack }) {
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState([]);
    
    useEffect(() => {
      loadRamadanCalendar();
    }, []);
    
    async function loadRamadanCalendar() {
      try {
        setLoading(true);
    
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Konum gerekli",
            "İmsakiyeyi gösterebilmek için konum izni vermen gerekiyor."
          );
          setLoading(false);
          return;
        }
    
        const pos = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = pos.coords;
    
        const url = `https://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=3&month=3&year=2026`;
    
        const res = await fetch(url);
        const json = await res.json();
    
        if (!json.data) {
          Alert.alert("Hata", "Ramazan imsakiyesi alınamadı.");
          setLoading(false);
          return;
        }
    
        const ramadanDays = json.data.filter(
          (d) => d.date.hijri.month.number === 9
        );
    
        setDays(ramadanDays);
        setLoading(false);
      } catch (err) {
        console.log(err);
        Alert.alert("Hata", "İmsakiye yüklenemedi.");
        setLoading(false);
      }
    }
    
    return (
      <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>
    
        <Text style={styles.Imsakiye_title}>Ramazan İmsakiyesi 2026</Text>
        <Text style={styles.Imsakiye_subtitle}>
          Konumuna göre Ramazan ayı için günlük imsak, iftar ve diğer vakitler.
        </Text>
    
        {loading ? (
          <ActivityIndicator style={{ marginTop: 20 }} color="#ffffff" />
        ) : (
          <ScrollView style={{ marginTop: 10, width: "100%" }}>
            {days.map((d, i) => (
              <View key={i} style={styles.Imsakiye_row}>
                <ScaledText baseSize={16} style={styles.Imsakiye_date}>
                  {d.date.hijri.day} Ramazan {d.date.hijri.year}
                  {"\n"}
                  {d.date.readable}
                </ScaledText>
    
                <View style={{ marginLeft: 15 }}>
                  <ScaledText baseSize={14} style={styles.Imsakiye_time}>
                    İmsak: {d.timings.Fajr.split(" ")[0]}
                  </ScaledText>
                  <ScaledText baseSize={14} style={styles.Imsakiye_time}>
                    Güneş: {d.timings.Sunrise.split(" ")[0]}
                  </ScaledText>
    
                  <ScaledText baseSize={14} style={styles.Imsakiye_time}>
                    Öğle: {d.timings.Dhuhr.split(" ")[0]}
                  </ScaledText>
    
                  <ScaledText baseSize={14} style={styles.Imsakiye_time}>
                    İkindi: {d.timings.Asr.split(" ")[0]}
                  </ScaledText>
    
                  <ScaledText baseSize={14} style={styles.Imsakiye_time}>
                    İftar: {d.timings.Maghrib.split(" ")[0]}
                  </ScaledText>
    
                  <ScaledText baseSize={14} style={styles.Imsakiye_time}>
                    Yatsı: {d.timings.Isha.split(" ")[0]}
                  </ScaledText>
                </View>
              </View>
            ))}
    
            <View style={{ height: 40 }} />
          </ScrollView>
        )}
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
    Imsakiye_title: {
      fontSize: 24,
      fontWeight: "700",
      textAlign: "center",
      color: "#ffffff",
      marginBottom: 4,
    },
    Imsakiye_subtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    Imsakiye_row: {
      backgroundColor: "rgba(255,255,255,0.06)",
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: "row",
    },
    Imsakiye_date: {
      fontSize: 15,
      color: "#ffffff",
      fontWeight: "600",
      maxWidth: 130,
    },
    Imsakiye_time: {
      fontSize: 14,
      color: "#ddd",
    },
});