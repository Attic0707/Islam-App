import {TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function DiniYayinPage({ onBack }) {
    const STREAM_URL =
      "https://tv-trt-live.ercdn.net/trtdiyanettv/trtdiyanettv.m3u8";

    return (
      <View style={styles.broadcastContainer}>
        {/* Header */}
        <View style={styles.broadcastHeader}>
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>
          <Text style={styles.broadcastTitle}>Diyanet TV (Live)</Text>
        </View>

        <WebView
          style={{ flex: 1, backgroundColor: "black" }}
          javaScriptEnabled
          allowsFullscreenVideo
          mediaPlaybackRequiresUserAction={false}
          source={{
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                  html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    background: #000;
                    overflow: hidden;
                  }
                  video {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #000;
                  }
                </style>
              </head>
              <body>
                <video
                  src="${STREAM_URL}"
                  controls
                  autoplay
                  playsinline
                ></video>
              </body>
              </html>
            `,
          }}
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
    backButton: {
      alignSelf: "flex-start",
      marginLeft: 20,
      marginBottom: 10,
    },
    backButtonText: {
      color: "white",
      fontSize: 18,
    },
    broadcastContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.7)",
      paddingTop: 60,
      paddingHorizontal: 0,
    },
    broadcastHeader: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      marginBottom: 8,
    },
    broadcastTitle: {
      fontSize: 22,
      fontWeight: "700",
      color: "#ffffff",
      marginLeft: 8,
    },

});