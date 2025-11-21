import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function NamazinTurkcesiPage({ onBack }) {
    const PARTS = [
      {
        title: "1. Başlangıç Tekbiri (İftitah Tekbiri)",
        meaning:
          "Namaza başlarken Allah’ın büyüklüğünü kabul etme, dünya işlerini bir kenara bırakıp tamamen O’na yönelme niyetidir.",
        text:
          "“Allah büyüktür. Sadece O’na yöneldim, O’nun huzurundayım.”",
      },
      {
        title: "2. Subhâneke (Namazın Başında Okunan Dua)",
        meaning:
          "Allah’ı eksikliklerden tenzih etme, O’nu övme ve O’na hamd etme ifadesidir.",
        text:
          "“Allah’ım, seni her türlü eksiklikten uzak bilirim. Sana hamd ederim. Yalnız sana yönelirim.”",
      },
      {
        title: "3. Fatiha Suresi’nin Türkçe Anlamı",
        meaning:
          "Fatiha, namazın en önemli bölümüdür. Kulluk, hamd, hidayet ve yardım isteme özeti gibidir.",
        list: [
          "“Hamd, âlemlerin Rabbi olan Allah’a mahsustur.”",
          "“O, merhameti sonsuzdur.”",
          "“Hüküm gününün sahibidir.”",
          "“Yalnız Sana kulluk eder, yalnız Senden yardım dileriz.”",
          "“Bizi doğru yola ilet.”",
          "“Nimet verdiklerinin yoluna; sapmışların yoluna değil.”",
        ],
      },
      {
        title: "4. Rükû Tesbihi (Türkçe Anlamı)",
        text:
          "“Ey Rabbim! Seni noksan sıfatlardan uzak bilirim. Seni yüceltirim.”",
        meaning:
          "Rükûda Allah’ın büyüklüğünü kabul eder, O’nun karşısında eğildiğini ifade edersin.",
      },
      {
        title: "5. Rükûdan Kalkınca",
        text:
          "“Rabbimiz! Hamd sana mahsustur. Sana övgüler olsun.”",
        meaning:
          "Allah’a şükretme, O’nun büyüklüğünü kabul etme ifadesidir.",
      },
      {
        title: "6. Secde Tesbihi (Türkçe Anlamı)",
        text:
          "“Ey Rabbim! Seni eksikliklerden uzak bilirim, seni yüceltirim.”",
        meaning:
          "Secde, insanın Allah’a en yakın olduğu andır; kulun tevazu ve teslimiyetinin zirvesidir.",
      },
      {
        title: "7. Oturuş Dua ve Selamlamaları",
        meaning:
          "Namazın sonunda barış, merhamet ve iman mesajı vardır.",
        list: [
          "“Selam, Allah’ın rahmeti ve bereketi üzerimize olsun.”",
          "“Allah’ım! Peygamberine ve salih kullarına rahmet eyle.”",
          "“Kalbimi doğrulukla doldur, günahlarımı bağışla.”",
        ],
      },
      {
        title: "8. Namaz Sonu Duaları (Kısa ve Güvenli)",
        list: [
          "“Allah’ım, beni doğru yola ulaştır.”",
          "“Kalbime huzur ver, beni güzel ahlâka yönelt.”",
          "“Günahlarımı bağışla, beni koru.”",
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.namazTitle}>Namazın Türkçesi</Text>
        <Text style={styles.namazSubtitle}>
          Namazdaki bölümlerin anlamları ve açıklamaları
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {PARTS.map((sec, index) => (
            <View key={index} style={styles.namazCard}>
              <ScaledText baseSize={14} style={styles.namazHeading}>{sec.title}</ScaledText>

              {sec.meaning && (
                <ScaledText baseSize={14} style={styles.namazMeaning}>{sec.meaning}</ScaledText>
              )}

              {sec.text && (
                <ScaledText baseSize={14} style={styles.namazText}>{sec.text}</ScaledText>
              )}

              {sec.list &&
                sec.list.map((item, i) => (
                  <ScaledText key={i} baseSize={14} style={styles.namazListItem}>• {item}</ScaledText>
                ))}
            </View>
          ))}
          <View style={{ height: 60 }} />
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

    namazTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 4,
    },

    namazSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    namazCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      padding: 16,
      borderRadius: 12,
      marginBottom: 14,
    },

    namazHeading: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 8,
    },

    namazMeaning: {
      fontSize: 14,
      fontStyle: "italic",
      color: "#d0d7e2",
      marginBottom: 6,
      lineHeight: 20,
    },

    namazText: {
      fontSize: 15,
      color: "#f2f2f7",
      lineHeight: 22,
      marginBottom: 6,
    },

    namazListItem: {
      fontSize: 15,
      color: "#dce2ee",
      lineHeight: 22,
      marginLeft: 4,
      marginBottom: 4,
    },
});