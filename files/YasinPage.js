import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";
import {YASIN_ARABIC} from "./Yasin/YASIN_ARABIC";
import {YASIN_TURKISH} from "./Yasin/YASIN_TURKISH";

export default function YasinPage({ onBack }) {
    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>
            <ScrollView style={styles.scroll}>
                <Text style={styles.yasinSectionTitle}>📖 Arapça</Text>
        
                {YASIN_ARABIC.map((line, index) => (
                    <ScaledText key={index} baseSize={14} style={styles.arabic}>{line} </ScaledText>
                ))}
        
                <View style={{ height: 20 }} />
        
                <Text style={styles.yasinSectionTitle}>🇹🇷 Türkçe Meali</Text>
        
                {YASIN_TURKISH.map((line, index) => (
                    <ScaledText key={index} baseSize={14} style={styles.turkish}>{line} </ScaledText>
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
    backButton: {
      alignSelf: "flex-start",
      marginLeft: 20,
      marginBottom: 10,
    },
    backButtonText: {
      color: "white",
      fontSize: 18,
    },
    yasinSectionTitle: { 
      color: "#e3e3e3", 
      fontSize: 18, 
      marginBottom: 10, 
      fontWeight: "600"
    },
    arabic: { 
      color: "#fff", 
      fontSize: 22, 
      lineHeight: 38, 
      textAlign: "right", 
      marginBottom: 8
    },
    turkish: {
      color: "#ddd", 
      fontSize: 16, 
      lineHeight: 26, 
      marginBottom: 8
    },
});