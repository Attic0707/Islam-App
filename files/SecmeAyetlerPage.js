import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function SecmeAyetlerPage({ onBack }) {
    const VERSES = [
      {
        ref: "Bakara 2:286",
        arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        tr: "Allah, hiç kimseye gücünün yettiğinden fazlasını yüklemez.",
      },
      {
        ref: "Yûnus 10:12",
        arabic: "وَإِذَا مَسَّ الْإِنسَانَ الضُّرُّ دَعَانَا",
        tr: "İnsana bir sıkıntı dokunduğunda, bize yalvarır durur.",
      },
      {
        ref: "İhlâs 112:1",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        tr: "De ki: O Allah birdir.",
      },
      {
        ref: "Fetih 48:1",
        arabic: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
        tr: "Biz sana apaçık bir fetih verdik.",
      },
      {
        ref: "İnşirah 94:6",
        arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        tr: "Şüphesiz zorlukla beraber bir kolaylık vardır.",
      },
      {
        ref: "Bakara 2:153",
        arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
        tr: "Ey iman edenler! Sabır ve namazla Allah'tan yardım isteyin.",
      },
      {
        ref: "Zümer 39:53",
        arabic: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
        tr: "Allah’ın rahmetinden ümit kesmeyin.",
      },
      {
        ref: "Nahl 16:90",
        arabic: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
        tr: "Allah adaleti, iyiliği ve yakınlara yardım etmeyi emreder.",
      },
      {
        ref: "Ankebût 29:69",
        arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
        tr: "Bizim uğrumuzda çaba gösterenleri elbette yollarımıza eriştiririz.",
      },
      {
        ref: "Ra’d 13:28",
        arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        tr: "Dikkat edin! Kalpler ancak Allah'ı anmakla huzur bulur.",
      },
      {
        ref: "Âl-i İmrân 3:139",
        arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا",
        tr: "Gevşemeyin, üzülmeyin; eğer iman etmişseniz üstün olan sizsiniz.",
      },
      {
        ref: "Bakara 2:286 (2. kısım)",
        arabic: "رَبَّنَا لَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ",
        tr: "Rabbimiz! Gücümüzün yetmediği şeyleri bize yükleme.",
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.secmeAyetTitle}>Seçme Ayetler</Text>
        <Text style={styles.secmeAyetSubtitle}>
          Kur’an’dan seçilmiş anlamlı ayetler
        </Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          {VERSES.map((v, index) => (
            <View key={index} style={styles.ayetCard}>
              <ScaledText baseSize={14} style={styles.ayetRef}> {v.ref} </ScaledText>
              <ScaledText baseSize={14} style={styles.ayetArabic}> {v.arabic} </ScaledText>
              <ScaledText baseSize={14} style={styles.ayetTr}> {v.tr} </ScaledText>
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
    secmeAyetTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    secmeAyetSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    ayetCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 12,
    },

    ayetRef: {
      fontSize: 14,
      color: "#ffdd55",
      fontWeight: "600",
      marginBottom: 6,
    },

    ayetArabic: {
      fontSize: 22,
      lineHeight: 32,
      color: "#ffffff",
      textAlign: "right",
      marginBottom: 8,
    },

    ayetTr: {
      fontSize: 16,
      lineHeight: 24,
      color: "#d0d7e2",
    },
});