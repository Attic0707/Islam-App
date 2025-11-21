import {TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

export default function KabeCanliPage({ onBack }) {
    const PAGE_URL = "https://kabelive.com.tr/kabeden-canli-cepten.html";

    // Inject CSS to keep only the video element
    const injectedCode = `
      setTimeout(() => {
        // Hide EVERYTHING except video players / iframes
        const hideTargets = [
          'header', 'footer', '.header', '.footer', 'nav',
          '#menu', '.topbar', '.sidebar', '.ads', '.ad', 'iframe:not([src*="m3u8"])'
        ];
        hideTargets.forEach(sel => {
          document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
        });

        // Make all videos full-screen inside WebView
        const vids = document.querySelectorAll('video, iframe');
        vids.forEach(v => {
          v.style.width = '100%';
          v.style.height = '100vh';
          v.style.position = 'fixed';
          v.style.top = '0';
          v.style.left = '0';
          v.style.zIndex = '999999';
        });

        document.body.style.background = "black";
        document.documentElement.style.background = "black";
      }, 600);
    `;

    return (
      <View style={styles.kabeContainer}>
        {/* Header */}
        <View style={styles.kabeHeader}>
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>
          <Text style={styles.kabeTitle}>Kâbe Canlı Yayın</Text>
        </View>

        <WebView
          source={{ uri: PAGE_URL }}
          javaScriptEnabled
          domStorageEnabled
          injectedJavaScript={injectedCode}
          allowsFullscreenVideo
          mediaPlaybackRequiresUserAction={false}
          startInLoadingState
          renderLoading={() => (
            <ActivityIndicator color="#fff" style={{ marginTop: 30 }} />
          )}
          style={{ flex: 1, backgroundColor: "black" }}
        />
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
    kabeContainer: {
      flex: 1,
      backgroundColor: "#000",
    },
    kabeHeader: {
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      backgroundColor: "rgba(0,0,0,0.6)",
      borderBottomColor: "#333",
      borderBottomWidth: 1,
    },
    kabeTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "700",
      marginLeft: 10,
    },
});