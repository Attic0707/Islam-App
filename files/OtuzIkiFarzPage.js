import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function OtuzIkiFarzPage({ onBack }) {
    const SECTIONS = [
      {
        key: "iman",
        title: "İmanın Şartları (6)",
        description:
          "İman; kalp ile tasdik, dil ile ikrar edilen temel inanç esaslarını kabul etmektir.",
        items: [
          "Allah'ın varlığına ve birliğine inanmak.",
          "Meleklere inanmak.",
          "Allah'ın indirdiği kitaplara inanmak.",
          "Peygamberlere inanmak.",
          "Ahiret gününe inanmak.",
          "Kaderin, hayrın ve şerrin Allah'tan geldiğine inanmak.",
        ],
      },
      {
        key: "islam",
        title: "İslam’ın Şartları (5)",
        description:
          "İslam’ın şartları, mükellef bir Müslümanın yerine getirmesi gereken temel ibadetlerdir.",
        items: [
          "Kelime-i şehadet getirmek.",
          "Günde beş vakit namaz kılmak.",
          "Ramazan ayında oruç tutmak.",
          "Mala zekât vermek.",
          "Gücü yeten için ömürde bir kere hac yapmak.",
        ],
      },
      {
        key: "namaz_dis",
        title: "Namazın Dışındaki Farzları (6)",
        description:
          "Bu farzlara namazın şartları da denir; namazdan önce yerine getirilir.",
        items: [
          "Hadesten taharet: Abdest ve gerekiyorsa gusül ile manevî pislikten temizlenmek.",
          "Necasetten taharet: Beden, elbise ve namaz kılınacak yeri pislikten temizlemek.",
          "Setr-i avret: Örtülmesi gereken yerleri örtmek.",
          "İstikbal-i kıble: Yönünü kıbleye çevirmek.",
          "Vakit: Namazı kendi vaktinde kılmak.",
          "Niyet: Hangi namazı kıldığını kalben belirlemek.",
        ],
      },
      {
        key: "namaz_ic",
        title: "Namazın İçindeki Farzları (6)",
        description:
          "Bu farzlara namazın rükünleri denir; namazın içinde yerine getirilir.",
        items: [
          "İftitah tekbiri: \"Allahu Ekber\" diyerek namaza başlamak.",
          "Kıyam: Ayakta durmak (özrü olmayan için).",
          "Kıraat: Namazda Kur’an’dan okumak.",
          "Rükû: Eller dizlere gelecek şekilde eğilmek.",
          "Secde: Alın, burun, eller, dizler ve ayak parmaklarıyla yere kapanmak.",
          "Ka’de-i ahîre: Son oturuşta teşehhüd miktarı oturmak.",
        ],
      },
      {
        key: "abdest",
        title: "Abdestin Farzları (4)",
        description:
          "Abdest, namaz gibi bazı ibadetler için zorunlu olan temel temizlik ibadetidir.",
        items: [
          "Yüzü bir kere yıkamak.",
          "Kolları dirseklerle birlikte bir kere yıkamak.",
          "Başın en az dörtte birini mesh etmek.",
          "Ayakları topuklarla birlikte bir kere yıkamak.",
        ],
      },
      {
        key: "gusul",
        title: "Guslün Farzları (3)",
        description:
          "Gusül; cünüplük, hayız ve nifas gibi hâllerde gerekli olan tüm bedenle alınan boy abdestidir.",
        items: [
          "Ağza su verip içini yıkamak.",
          "Buruna su çekip içini yıkamak.",
          "Bedenin hiçbir yeri kuru kalmayacak şekilde tüm vücudu yıkamak.",
        ],
      },
      {
        key: "teyemmum",
        title: "Teyemmümün Farzları (2)",
        description:
          "Su bulunmadığında veya suyu kullanmaya sağlık engeli olduğunda teyemmüm edilir.",
        items: [
          "Niyet etmek: Teyemmümü abdest veya gusül yerine yapmak niyetiyle kalpten geçirmek.",
          "Temiz toprak/taş üzerine elleri vurup önce yüzü, sonra yine vurup kolları mesh etmek.",
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.otuzTitle}>32 Farz</Text>
        <Text style={styles.otuzSubtitle}>
          Klasik ilmihal kaynaklarında, Müslümanın bilmesi tavsiye edilen temel
          farzlar; başlıklar hâlinde “32 farz” olarak özetlenir.
        </Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          {SECTIONS.map((section) => (
            <View key={section.key} style={styles.otuzSectionCard}>
              <ScaledText baseSize={14} style={styles.otuzSectionTitle}>{section.title}</ScaledText>

              {section.description ? (
                <ScaledText baseSize={14} style={styles.otuzSectionDesc}>{section.description}</ScaledText>
              ) : null}

              {section.items.map((item, index) => (
                <View key={index} style={styles.otuzItemRow}>
                  <ScaledText baseSize={14} style={styles.otuzItemIndex}>{index + 1}.</ScaledText>
                  <ScaledText baseSize={14} style={styles.otuzItemText}>{item}</ScaledText>
                </View>
              ))}
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
    otuzTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    otuzSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    otuzSectionCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 10,
      marginBottom: 12,
    },
    otuzSectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: "#ffdd55",
      marginBottom: 4,
    },
    otuzSectionDesc: {
      fontSize: 13,
      color: "#c4ccdd",
      lineHeight: 19,
      marginBottom: 6,
    },
    otuzItemRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginTop: 2,
    },
    otuzItemIndex: {
      fontSize: 14,
      color: "#ffdd55",
      marginRight: 6,
      marginTop: 1,
    },
    otuzItemText: {
      flex: 1,
      fontSize: 14,
      color: "#f2f2f7",
      lineHeight: 20,
    },
});