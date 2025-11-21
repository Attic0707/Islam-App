import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function CevsanPage({ onBack }) {
    const SECTIONS = [
      {
        title: "Cevşen Nedir?",
        text:
          "Cevşenü’l-Kebîr, Allah’ın isim ve sıfatlarını övgü ve dua cümleleriyle anan klasik bir dua mecmuasıdır. 100 bölümden oluşan uzun bir münâcât niteliğindedir. İçeriği tamamen Allah’a yöneliş, teslimiyet, bağışlanma ve koruma talebi üzerine kuruludur.",
      },
      {
        title: "Kökeni ve Tarihî Arka Plan",
        text:
          "Kaynaklarda, Cevşen’in erken dönem İslam geleneğinde yer aldığı, manevi derinliği yüksek bir dua olarak aktarıldığı belirtilir. İslam kültüründe özellikle koruyucu bir dua olarak tanınmıştır.",
      },
      {
        title: "Yapısı",
        list: [
          "100 bölüm (bâb)",
          "Her bölümde Allah’ın övücü nitelikleri",
          "Yaklaşık 1000 farklı isim ve sıfat",
          "Her bölümün sonunda kısa niyaz cümleleri",
        ],
      },
      {
        title: "Genel Temalar",
        list: [
          "Allah’ın kudreti, rahmeti, merhameti",
          "Korunma, af ve bağışlanma talebi",
          "İnsanın acziyetini kabulü",
          "Teslimiyet ve güven",
          "Allah ile yakınlık kurma arzusu",
        ],
      },
      {
        title: "Cevşen Nasıl Okunur?",
        list: [
          "Herhangi bir zaman ve mekânda okunabilir.",
          "Okuyuş adabı olarak sakin bir ortam tercih edilir.",
          "Dua bilinci ve içtenlik esastır.",
          "Bölümler sırayla veya seçilerek okunabilir.",
        ],
        note:
          "Cevşen’in okunması zorunlu bir ibadet değil, tamamen isteğe bağlı bir duadır.",
      },
      {
        title: "Bölümlerin Özeti (Temsili)",
        text:
          "Aşağıda verilen cümleler Cevşen’in birebir metni değildir; anlamı açıklayıcı, temsili öz ifadelerden oluşur ve telif hakkını ihlal etmez.",
      },
      {
        title: "Temsili Bölüm Örnekleri",
        examples: [
          "“Ey güç ve kudret sahibi olan; bizi affınla kuşat.”",
          "“Ey merhameti sonsuz olan; kalplerimizi aydınlat.”",
          "“Ey her şeyi duyan ve bilen; bize hayırlı yollar aç.”",
          "“Ey koruyan, gözeten; bizi kötülüklerden uzaklaştır.”",
          "“Ey dilediğini en güzel şekilde yaratan; içimizi huzurla doldur.”",
          "“Ey kullarını yalnız bırakmayan; bize yardım eyle.”",
          "“Ey her şeyin sahibi; bize sabır ve doğruyu ilham et.”",
          "“Ey tüm ihtiyaçlara cevap veren; dualarımızı kabul eyle.”",
        ],
      },
      {
        title: "Cevşen Okumanın Manevi Anlamı",
        text:
          "Cevşen, Müslüman kültüründe Allah’a yakınlaşma, teslimiyet, korunma ve manevi kuvvet bulma amacıyla okunur. İnsan, bu dua sayesinde iç huzur ve sükûnet hissettiğini ifade eder.",
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.cevsenTitle}>Cevşen</Text>
        <Text style={styles.cevsenSubtitle}>
          Cevşenü’l-Kebîr hakkında açıklayıcı ve güvenli bilgi
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {SECTIONS.map((sec, idx) => (
            <View key={idx} style={styles.cevsenCard}>
              <ScaledText baseSize={14} style={styles.cevsenHeading}>{sec.title}</ScaledText>

              {sec.text && <ScaledText baseSize={14} style={styles.cevsenText}>{sec.text}</ScaledText>}

              {sec.list &&
                sec.list.map((item, i) => (
                  <ScaledText key={i} baseSize={14} style={styles.cevsenListItem}>• {item}</ScaledText>
                ))}

              {sec.note && (
                <ScaledText baseSize={14} style={styles.cevsenNote}>{sec.note}</ScaledText>
              )}

              {sec.examples &&
                sec.examples.map((ex, i) => (
                  <ScaledText key={i} baseSize={14} style={styles.cevsenExample}>{ex}</ScaledText>
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
    cevsenTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 4,
    },

    cevsenSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    cevsenCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      padding: 16,
      borderRadius: 12,
      marginBottom: 14,
    },

    cevsenHeading: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 8,
    },

    cevsenText: {
      fontSize: 15,
      lineHeight: 22,
      color: "#f2f2f7",
      marginBottom: 8,
    },

    cevsenListItem: {
      fontSize: 15,
      color: "#dce2ee",
      lineHeight: 22,
      marginLeft: 4,
      marginBottom: 4,
    },

    cevsenExample: {
      fontSize: 15,
      fontStyle: "italic",
      color: "#ffffff",
      lineHeight: 22,
      marginBottom: 6,
    },

    cevsenNote: {
      fontSize: 14,
      color: "#ffddaa",
      marginTop: 6,
    },
});