import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function HadisPage({ onBack }) {
    const HADITHS_40 = [
      {
        number: 1,
        title: "Niyet hadisi",
        text: "Ameller niyetlere göredir; herkes için ancak niyet ettiği vardır .",
        source: "Buhârî, Bed'ü'l-vahy 1",
      },
      {
        number: 2,
        title: "İslam, iman ve ihsan",
        text: "Cebrâil hadisi: İslam, iman, ihsan ve kıyamet alâmetlerini anlatan meşhur hadis .",
        source: "Müslim, Îmân 1",
      },
      {
        number: 3,
        title: "Helal, haram ve kalp",
        text: "Helal belli, haram bellidir; kalbi rahatsız eden şeylerden sakın .",
        source: "Tirmizî, Zühd 52",
      },
      {
        number: 4,
        title: "Din nasihattir",
        text: "Din nasihattir: Allah'a, kitabına, Resulüne, Müslümanlara samimi olmaktır .",
        source: "Müslim, Îmân 95",
      },
      {
        number: 5,
        title: "Hayırlı Müslüman",
        text: "Kişinin, kendisini ilgilendirmeyen şeyleri terk etmesi, dininin güzelliğindendir .",
        source: "Tirmizî, Zühd 11",
      },
      {
        number: 6,
        title: "Kardeşlik ve sevgi",
        text: "Hiçbiriniz, kendisi için sevdiğini kardeşi için sevmedikçe iman etmiş olmaz .",
        source: "Buhârî, Îmân 7",
      },
      {
        number: 7,
        title: "Müslüman kimdir?",
        text: "Müslüman, diğer Müslümanların elinden ve dilinden emin olduğu kimsedir .",
        source: "Nesâî, Îmân 8",
      },
      {
        number: 8,
        title: "Kolaylaştırmak",
        text: "Kolaylaştırın, zorlaştırmayın; müjdeleyin, nefret ettirmeyin .",
        source: "Buhârî, İlim 11",
      },
      {
        number: 9,
        title: "Öfkeyi kontrol",
        text: "Güreşte kuvvetli olan değil, öfke anında nefsine hâkim olan güçlüdür .",
        source: "Buhârî, Edeb 76",
      },
      {
        number: 10,
        title: "Dünya ve ahiret",
        text: "Dünyada garip veya yolcu gibi ol; kendini kabirde misafir gibi gör .",
        source: "Buhârî, Rikak 3",
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.hadithTitle}>40 Hadis</Text>
        <Text style={styles.hadithSubtitle}>
          Hadisleri detaylı okumak için hadis kitaplarına ve
          güvenilir ilmihal kaynaklarına başvurmak tavsiye edilir.
        </Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          {HADITHS_40.map((h) => (
            <View key={h.number} style={styles.hadithCard}>
              <ScaledText baseSize={14} style={styles.hadithName}>{h.title}</ScaledText>
              <ScaledText baseSize={14} style={styles.hadithText}>{h.text}</ScaledText>
              <ScaledText baseSize={14} style={styles.hadithSource}>{h.source}</ScaledText>
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
    hadithTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    hadithSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 10,
    },
    hadithCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 10,
      marginBottom: 8,
    },
    hadithNumber: {
      fontSize: 12,
      color: "#ffdd55",
      marginBottom: 2,
    },
    hadithName: {
      fontSize: 16,
      color: "#ffffff",
      fontWeight: "600",
      marginBottom: 4,
    },
    hadithText: {
      fontSize: 14,
      color: "#d0d7e2",
      marginBottom: 4,
    },
    hadithSource: {
      fontSize: 12,
      color: "#9aa4b8",
    },

});