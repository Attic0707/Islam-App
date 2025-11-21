import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function MevlanaPage({ onBack }) {
    const DATA = {
      bioShort:
        "1207 yılında Belh’te doğan Mevlânâ Celaleddin Rûmî, dünya çapında tanınan bir bilge, mutasavvıf ve ilim adamıdır. Sevgi, hoşgörü, barış ve insanın iç yolculuğunu konu alan öğretileriyle tüm insanlığa hitap eder.",
      bioLong: `Mevlânâ, genç yaşlarında geniş bir dini ve felsefi eğitim aldı. Ailesiyle birlikte Anadolu’ya göç etti ve Konya’da yaşamaya başladı. 
  Burada ilimle meşgul oldu, dersler verdi, insanlara rehberlik etti. 
  1244’te Şems-i Tebrizî ile tanışması hayatında önemli bir dönüm noktası oldu. Bu dostluk, Mevlânâ’nın manevi derinliğini daha da arttırdı. 
  Vefat ettiği 1273 yılı, “Şeb-i Arûs” yani “Düğün Gecesi” olarak anılır; Allah’a kavuşma olarak görülür.`,

      traits: [
        "Hoşgörü ve merhamet",
        "Derin sevgi anlayışı",
        "İlim ve hikmet sahibi",
        "İçsel yolculuğa önem veren",
        "Bütün insanlığa açık mesajlar",
      ],

      works: [
        "Mesnevî",
        "Divân-ı Kebîr",
        "Fîhi Mâ Fîh",
        "Mektûbât",
        "Mecâlis-i Seb'a",
      ],

      quotes: [
        "“Ne olursan ol, yine gel.”",
        "“Güneş gibi ol şefkatte, merhamette.”",
        "“Düşüncen konuşmandan, tebessümün sözünden önde olsun.”",
        "“Kalp denizdir, dil kıyı.”",
        "“Derdin ne olursa olsun, dermanı yine kendinde ara.”",
        "“Gönül, Hakk’ın nazar ettiği yerdir.”",
        "“Bir mum diğer mumu tutuşturmakla ışığından bir şey kaybetmez.”",
        "“İnsan, söylediği söz kadar insandır.”",
        "“Aynadaki suretini düzeltmek istersen yüzünü düzelt.”",
        "“Sevgide güneş gibi ol; dostlukta akarsu gibi.”",
      ],

      themes: [
        "İçsel arayış ve nefisle mücadele",
        "Sevginin birleştirici gücü",
        "İnsanın kendi hakikatini bulması",
        "Sabır, teslimiyet ve güven",
        "İnsanın kendini aşması",
        "İlahi aşka doğru yolculuk",
      ],
    };

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.mevlanaTitle}>Hz. Mevlânâ</Text>
        <Text style={styles.mevlanaSubtitle}>Sevgi, hoşgörü ve hikmet</Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {/* Short Bio */}
          <View style={styles.mevlanaCard}>
            <ScaledText baseSize={14} style={styles.mevlanaHeading}> Kısa Hayatı </ScaledText>
            <ScaledText baseSize={14} style={styles.mevlanaText}> {DATA.bioShort} </ScaledText>
          </View>

          {/* Extended Biography */}
          <View style={styles.mevlanaCard}>
            <ScaledText baseSize={14} style={styles.mevlanaHeading}> Detaylı Hayatı </ScaledText>
            <ScaledText baseSize={14} style={styles.mevlanaText}> {DATA.bioLong} </ScaledText>
          </View>

          {/* Traits */}
          <View style={styles.mevlanaCard}>
            <ScaledText baseSize={14} style={styles.mevlanaHeading}> Öne Çıkan Özellikleri </ScaledText>
            {DATA.traits.map((t, i) => (
              <ScaledText baseSize={14} style={styles.mevlanaListItem}> • {t} </ScaledText>
            ))}
          </View>

          {/* Works */}
          <View style={styles.mevlanaCard}>
            <ScaledText baseSize={14} style={styles.mevlanaHeading}> Önemli Eserleri </ScaledText>
            {DATA.works.map((w, i) => (
              <ScaledText key={i} baseSize={14} style={styles.mevlanaListItem}> • {w} </ScaledText>
            ))}
          </View>

          {/* Themes */}
          <View style={styles.mevlanaCard}>
            <ScaledText baseSize={14} style={styles.mevlanaHeading}> Mesnevî'nin Temaları </ScaledText>
            {DATA.themes.map((th, i) => (
              <ScaledText key={i} baseSize={14} style={styles.mevlanaListItem}> • {th} </ScaledText>
            ))}
          </View>

          {/* Quotes */}
          <View style={styles.mevlanaCard}>
            <ScaledText baseSize={14} style={styles.mevlanaHeading}> Mevlânâ’dan Güzel Sözler </ScaledText>
            {DATA.quotes.map((q, i) => (
              <ScaledText key={i} baseSize={14} style={styles.mevlanaQuote}> {q} </ScaledText>
            ))}
          </View>

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
    mevlanaTitle: {
      fontSize: 28,
      color: "#ffffff",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 4,
    },
    mevlanaSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    mevlanaCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 14,
    },

    mevlanaHeading: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 6,
    },

    mevlanaText: {
      fontSize: 15,
      color: "#f2f2f7",
      lineHeight: 22,
    },

    mevlanaListItem: {
      fontSize: 15,
      color: "#dce2ee",
      lineHeight: 22,
      marginBottom: 4,
    },

    mevlanaQuote: {
      fontSize: 15,
      fontStyle: "italic",
      color: "#ffffff",
      lineHeight: 22,
      marginBottom: 10,
    },
});