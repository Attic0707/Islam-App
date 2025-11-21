import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function NamazSureleriPage({ onBack }) {
    const SURAHS = [
      {
        key: "fatiha",
        name: "Fâtiha Suresi",
        arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
  الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
  الرَّحْمَٰنِ الرَّحِيمِ
  مَالِكِ يَوْمِ الدِّينِ
  إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
  اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
  صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`,
      },
      {
        key: "ikhlas",
        name: "İhlâs Suresi",
        arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
  قُلْ هُوَ اللَّهُ أَحَدٌ
  اللَّهُ الصَّمَدُ
  لَمْ يَلِدْ وَلَمْ يُولَدْ
  وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
      },
      {
        key: "felak",
        name: "Felak Suresi",
        arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
  قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
  مِن شَرِّ مَا خَلَقَ
  وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
  وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
  وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      },
      {
        key: "nas",
        name: "Nâs Suresi",
        arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
  قُلْ أَعُوذُ بِرَبِّ النَّاسِ
  مَلِكِ النَّاسِ
  إِلَٰهِ النَّاسِ
  مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
  الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
  مِنَ الْجِنَّةِ وَالنَّاسِ`,
      },
      {
        key: "kevser",
        name: "Kevser Suresi",
        arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
  إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ
  فَصَلِّ لِرَبِّكَ وَانْحَرْ
  إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ`,
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.namazSureTitle}>Namazda Okunan Sûreler</Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          {SURAHS.map((s) => (
            <View key={s.key} style={styles.surahCard}>
              <ScaledText baseSize={14} style={styles.surahName}> {s.name} </ScaledText>
              <ScaledText baseSize={14} style={styles.surahArabic}> {s.arabic} </ScaledText>
            </View>
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
    namazSureTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    surahCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 12,
      marginBottom: 12,
    },
    surahName: {
      fontSize: 18,
      fontWeight: "600",
      color: "#ffdd55",
      marginBottom: 8,
      textAlign: "left",
    },
    surahArabic: {
      fontSize: 20,
      color: "#ffffff",
      lineHeight: 30,
      textAlign: "right",
      marginBottom: 10,
    },
});