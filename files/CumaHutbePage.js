import {TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

export default function CumaHutbePage({ onBack }) {
    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

          <Text style={styles.cumaTitle}>Cuma Hutbeleri</Text>

        <Text style={styles.cumaSubtitle}>
          Diyanet İşleri Başkanlığı tarafından hazırlanmış haftalık Cuma hutbeleri
        </Text>

        <View style={styles.cumaWebViewWrapper}>
          <WebView
            source={{ uri: "https://www.diyanethaber.com.tr/hutbeler" }}
            startInLoadingState
            renderLoading={() => (
              <ActivityIndicator style={{ marginTop: 20 }} color="#ffffff" />
            )}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
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
    cumaTitle: {
      fontSize: 22,
      fontWeight: "700",
      color: "#ffffff",
      marginLeft: 8,
    },

    cumaSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 8,
      paddingHorizontal: 24,
    },

    cumaWebViewWrapper: {
      flex: 1,
      marginTop: 4,
      marginHorizontal: 0,
      borderRadius: 0,
      overflow: "hidden",
    },
});