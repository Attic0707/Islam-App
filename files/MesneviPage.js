import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function MesneviPage({ onBack }) {
    const THEMES = [
      "İlahi aşk ve insanın iç yolculuğu",
      "Nefis terbiyesi ve içsel arınma",
      "Sabır, şükür ve teslimiyet",
      "İnsan–insan ilişkileri ve ahlâk",
      "Dünya hayatının geçiciliği",
      "Akıl ve kalp dengesi",
      "İnsanın kendini tanıması",
      "Hakikate ulaşma çabası",
    ];

    const STORIES = [
      {
        title: "1. Ney’in Hikâyesi",
        text:
          "Mesnevî, ney’in feryadıyla başlar. Ney, kamışlıktan koparıldığı için içli içli inler. Bu, insanın asıl yurdundan ayrılışını ve yeniden Hak’ka dönüş özlemini sembolize eder.",
        moral: "İnsan, hakiki huzuru ancak kendi özünü bulduğunda yaşar."
      },
      {
        title: "2. Padişah ile Cariye",
        text:
          "Bir padişah, hastalanan cariyesine âşık olur. Cariye iyileşsin diye her yol denenir. Sonunda bilgeliğin ve teslimiyetin hastalıkları bile iyileştirdiği anlaşılır.",
        moral: "Aşk, sabır ve teslimiyet insana şifa getirir."
      },
      {
        title: "3. Avcı ile Papağan",
        text:
          "Papağan, avcıya yakalanınca sessiz kalır. Avcı, papağanın öldüğünü sanıp kafesi açınca o da uçar gider.",
        moral: "Bazen kurtuluş susmakla ve sabırla gelir."
      },
      {
        title: "4. Fil ile Körler",
        text:
          "Bir grup kör, fili farklı yerlerden tutup tarif eder. Her biri başka bir fil anlatır.",
        moral: "Hakikat bütündür; parçaya bakan hakikatin tamamını göremez."
      },
      {
        title: "5. Mumun Hikâyesi",
        text:
          "Bir mum diğer mumu tutuşturur; ışığını kaybetmez. Mesnevi’de bu, insanın iyiliği paylaşması olarak anlatılır.",
        moral: "İyilik paylaştıkça artar."
      },
      {
        title: "6. Deveci ile Deve",
        text:
          "Deveci yorgun devesini döver. Deve, hareketsiz durur ama kalbi kırılmıştır.",
        moral: "Güçsüz olanın kalbini kırmak insana yakışmaz."
      },
      {
        title: "7. Dilenci ile Sultan",
        text:
          "Dilenci büyük bir sultandan bir şey ister. Sultan, 'Sen dilenci değilsin, sen aslında bendesin' der.",
        moral: "Hakikat arayışı, insanın kendini bilmesiyle başlar."
      },
      {
        title: "8. Tilki ile Aslan",
        text:
          "Tilki, aslanla arkadaş olur ama içten içe korkar. Aslan da tilkinin korkusunu görür.",
        moral: "İlişkilerde niyet gizlenemez."
      },
      {
        title: "9. Suya Atılan Taş",
        text:
          "Bir taş suya düşer, halkalar büyüyerek yayılır.",
        moral: "Küçük bir iyilik ya da kötülük bile çevreyi etkiler."
      },
      {
        title: "10. Derviş ile Hırsız",
        text:
          "Dervişin evine gece hırsız girer ama alacak bir şey bulamaz. Derviş, hırsıza kendi hırkasını verir.",
        moral: "İnsanın gönlünü açması, malını korumasından daha değerlidir."
      },
      {
        title: "11. Ayna Hikâyesi",
        text:
          "Kirli aynada yüz net görünmez. İnsan kendi içini temizlemeden dışarıyı net göremez.",
        moral: "Dünyayı düzeltmek, insanın kendini düzeltmesiyle başlar."
      },
      {
        title: "12. Kuyuya Düşen Adam",
        text:
          "Adam kuyuya düşer ve bir dala tutunur. Aşağıda ejderha, yukarıda arılar vardır. Bu dünya hayatının geçiciliğini sembolize eder.",
        moral: "Dünya, aldatıcı bir misafirhanedir; insan özünü unutmamalıdır."
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.mesneviTitle}>Mesnevî</Text>
        <Text style={styles.mesneviSubtitle}>
          Temalar ve seçme hikâyeler
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {/* Themes */}
          <View style={styles.mesneviCard}>
            <ScaledText baseSize={14} style={styles.mesneviHeading}> Ana Temalar </ScaledText>
            {THEMES.map((t, i) => (
              <ScaledText key={i} baseSize={14} style={styles.mesneviListItem}> • {t} </ScaledText>
            ))}
          </View>

          {/* Stories */}
          <View style={styles.mesneviCard}>
            <Text style={styles.mesneviHeading}>Seçme Hikâyeler</Text>
            {STORIES.map((s, i) => (
              <View key={i} style={{ marginBottom: 16 }}>
                <ScaledText baseSize={14} style={styles.mesneviStoryTitle}> {s.title} </ScaledText>
                <ScaledText baseSize={14} style={styles.mesneviStoryText}> {s.text} </ScaledText>
                <ScaledText baseSize={14} style={styles.mesneviMoral}> {s.moral} </ScaledText>
              </View>
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
    mesneviTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 4,
    },

    mesneviSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    mesneviCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      padding: 16,
      borderRadius: 12,
      marginBottom: 14,
    },

    mesneviHeading: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 8,
    },

    mesneviListItem: {
      fontSize: 15,
      color: "#dce2ee",
      lineHeight: 22,
      marginBottom: 4,
    },

    mesneviStoryTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: 4,
    },

    mesneviStoryText: {
      fontSize: 15,
      color: "#f2f2f7",
      lineHeight: 22,
      marginBottom: 4,
    },

    mesneviMoral: {
      fontSize: 14,
      fontStyle: "italic",
      color: "#ffddaa",
    },
});