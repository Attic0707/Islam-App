import React, { useEffect, useState, useRef } from "react";
import {TouchableOpacity, View, Text, StyleSheet, Alert, Platform, Linking } from "react-native";
import * as Location from "expo-location";

export default function NearbyMosquesPage({ onBack }) {
    const [loading, setLoading] = useState(false);

    async function openNearbyMosques() {
      try {
        setLoading(true);

        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLoading(false);
          Alert.alert(
            "Konum izni gerekli",
            "Yakındaki camileri gösterebilmek için konum izni vermen gerekiyor."
          );
          return;
        }

        const pos = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = pos.coords;

        let url;

        if (Platform.OS === "ios") {
          // Apple Maps
          url = `http://maps.apple.com/?q=Camii`;
          // ll=${latitude},${longitude}&
        } else {
          // Android Maps app
          url = `geo:?q=Camii`;
          // ${latitude},${longitude}
        }

        const canOpen = await Linking.canOpenURL(url);
        if (!canOpen) {
          // Fallback: Google Maps web
          url = `https://www.google.com/maps/search/?api=1&query=camii&query_place_id=&center=${latitude},${longitude}`;
        }

        await Linking.openURL(url);
        setLoading(false);
      } catch (err) {
        if (DEBUG) console.log("openNearbyMosques error:", err);
        setLoading(false);
        Alert.alert("Hata", "Yakındaki camiler açılamadı.");
      }
    }

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.nearbyTitle}>Yakın Camiler</Text>
        <Text style={styles.nearbySubtitle}>
          Bulunduğun konuma en yakın camileri harita uygulamasında açmak için
          aşağıdaki butona dokun.
        </Text>

        <View style={styles.nearbyCard}>
          <Text style={styles.nearbyInfo}>
            • Konumun alınacak ve varsayılan harita uygulamasında{" "}
            <Text style={{ fontWeight: "600" }}>"camii"</Text> araması
            yapılacaktır.{"\n"}
            • iOS’ta Apple Haritalar, Android’de cihazın varsayılan harita
            uygulaması kullanılır.{"\n"}
          </Text>

          <TouchableOpacity style={styles.nearbyButton} onPress={openNearbyMosques} disabled={loading} >
            <Text style={styles.nearbyButtonText}>
              {loading ? "Konum alınıyor..." : "Haritada camileri göster"}
            </Text>
          </TouchableOpacity>
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
    backButton: {
      alignSelf: "flex-start",
      marginLeft: 20,
      marginBottom: 10,
    },
    backButtonText: {
      color: "white",
      fontSize: 18,
    },
    nearbyTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 8,
    },
    nearbySubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 16,
    },
    nearbyCard: {
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.06)",
      borderRadius: 12,
      padding: 16,
      marginTop: 8,
    },
    nearbyInfo: {
      fontSize: 14,
      color: "#d0d7e2",
      marginBottom: 16,
    },
    nearbyButton: {
      backgroundColor: "#ffdd55",
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    nearbyButtonText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#333333",
    },

});