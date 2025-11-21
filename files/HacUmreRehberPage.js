import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function HacUmreRehberPage({ onBack }) {
    const SECTIONS = [
      {
        title: "Hac ve Umre Nedir?",
        text:
          "Hac, İslam’ın beş şartından biridir ve Zilhicce ayında Mekke’de yapılan büyük ibadettir. Umre ise yılın çoğu zaman yapılabilen, ihrama girerek yapılan daha kısa bir ziyaret ibadetidir. Her ikisinin amacı; tevazu, sabır, teslimiyet ve Allah’a yaklaşmadır.",
      },
      {
        title: "Hac Çeşitleri",
        list: [
          "• Temettu: Umre + Hac birlikte yapılır.",
          "• Kıran: Umre ile Hac aynı ihramda birlikte yapılır.",
          "• İfrad: Sadece hac ibadeti yapılır.",
        ],
      },
      {
        title: "Umre Nasıl Yapılır? (Kısa Rehber)",
        list: [
          "1. İhrama girilir.",
          "2. Telbiye getirilir: 'Lebbeyk Allahümme Lebbeyk'…",
          "3. Kâbe'yi tavaf edilir.",
          "4. Safa–Merve arasında sa’y yapılır.",
          "5. Saçlar kısaltılır / tıraş olunur.",
          "Umre tamamlanır.",
        ],
      },
      {
        title: "Hac Nasıl Yapılır? (Özet Rehber)",
        list: [
          "1. **İhram**: Haccın başlangıcı.",
          "2. **Kâbe Tavafı**: Hacerü’l-Esved hizasından başlar.",
          "3. **Arafat’ta Vakfe**: Haccın en önemli rüknü.",
          "4. **Müzdelife**: Gece konaklama ve taş toplama.",
          "5. **Mina**: Cemrelere taş atma.",
          "6. **Kurban** (Temettu/Kıran için).",
          "7. **Tıraş** (Saçların kısaltılması/traş).",
          "8. **Ziyaret Tavafı**.",
          "9. **Sa’y**.",
          "10. **Veda Tavafı** (Mekke’den çıkmadan önce).",
        ],
      },
      {
        title: "İhram Nedir?",
        text:
          "İhram; hac veya umreye başlarken yapılan niyet ve belirli yasakların kabulüdür. Sadece kıyafet değil, bir duruş ve ibadet bilincidir.",
        list: [
          "• Kavga etmek, kötü söz söylemek yasaktır.",
          "• Avlanmak yasaktır.",
          "• Güzel koku sürmek yasaktır.",
          "• Saç/kıl kesmek yasaktır.",
        ],
      },
      {
        title: "Arafat Vakfesi",
        text:
          "Arafat, haccın kalbidir. Peygamber Efendimiz (s.a.v.) 'Hac Arafat’tır' buyurmuştur. Burada dua, zikir ve iç muhasebe esastır.",
      },
      {
        title: "Müzdelife",
        text:
          "Arafat’tan sonra gidilen bölgedir. Burada akşam ve yatsı namazları cem edilerek kılınır ve taşlar toplanır.",
      },
      {
        title: "Mina ve Cemreler",
        text:
          "Mina’da şeytan taşlama (Cemre-i Akabe ve üç cemre) gerçekleştirilir. Bu sembolik bir imtihan ve nefse karşı duruşu temsil eder.",
      },
      {
        title: "Hac ve Umrede Okunabilecek Kısa Dualar (Özet)",
        examples: [
          "“Allah’ım, niyetimi güzel eyle.”",
          "“Beni affet, beni koru, beni doğru yola ilet.”",
          "“Bu ibadeti bana kolaylaştır.”",
          "“Kalbimi temizle, beni kötülüklerden uzaklaştır.”",
        ],
      },
      {
        title: "Hac Yolculuğu İçin Tavsiyeler",
        list: [
          "• Bol su tüketin.",
          "• Hafif ve pamuklu kıyafetler tercih edin.",
          "• Kalabalıkta sabırlı ve dikkatli olun.",
          "• Yanınıza sade bir ilaç seti alın.",
          "• Telefon şarj aleti ve taşınabilir güç bankası bulundurun.",
          "• Grup düzenine ve rehber uyarılarına uyun.",
        ],
      },
      {
        title: "Hac ve Umre’nin Manevi Faydaları",
        list: [
          "• Nefsi terbiye eder.",
          "• Sabır ve dayanıklılık kazandırır.",
          "• Müslümanlar arasında kardeşliği güçlendirir.",
          "• Dünyadan sıyrılıp tamamen Allah’a yöneliş sağlar.",
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.hacTitle}>Hac & Umre Rehberi</Text>
        <Text style={styles.hacSubtitle}>
          Temel adımlar, açıklamalar ve pratik bilgiler
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {SECTIONS.map((sec, idx) => (
            <View key={idx} style={styles.hacCard}>
              <ScaledText baseSize={14} style={styles.hacHeading}>{sec.title}</ScaledText>

              {sec.text && <ScaledText baseSize={14} style={styles.hacText}>{sec.text}</ScaledText>}

              {sec.list &&
                sec.list.map((item, i) => (
                  <ScaledText key={i} baseSize={14} style={styles.hacText}>{item}</ScaledText>
                ))}

              {sec.examples &&
                sec.examples.map((ex, i) => (
                  <ScaledText key={i} baseSize={14} style={styles.hacExample}>{ex}</ScaledText>
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
    hacTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 4,
    },

    hacSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    hacCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      padding: 16,
      borderRadius: 12,
      marginBottom: 14,
    },

    hacHeading: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 8,
    },

    hacText: {
      fontSize: 15,
      lineHeight: 22,
      color: "#f2f2f7",
      marginBottom: 8,
    },

    hacListItem: {
      fontSize: 15,
      color: "#dce2ee",
      lineHeight: 22,
      marginLeft: 4,
      marginBottom: 4,
    },

    hacExample: {
      fontSize: 15,
      fontStyle: "italic",
      color: "#ffffff",
      lineHeight: 22,
      marginBottom: 6,
    },
});