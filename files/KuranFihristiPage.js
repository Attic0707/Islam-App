import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function KuranFihristiPage({ onBack }) {
    const TOPICS = [
      {
        key: "iman",
        title: "1. İman ve Tevhid",
        description:
          "Allah’ın birliği, iman esasları ve insanın Rabbine karşı sorumluluğu ile ilgili ayetler.",
        verses: [
          { ref: "Fâtiha 1/1–7", note: "Rahmet, kulluk ve yalnız Allah’tan yardım istemek." },
          { ref: "Bakara 2/21–22", note: "Yaratılış nimeti ve yalnız Allah’a ibadet çağrısı." },
          { ref: "Bakara 2/255 (Âyetü’l-Kürsî)", note: "Allah’ın kudreti, ilmi ve hâkimiyeti." },
          { ref: "İhlâs 112/1–4", note: "Allah’ın birliği, hiçbir şeye benzememesi." },
          { ref: "Hadîd 57/1–6", note: "Allah’ın mülkü, kudreti ve her şeyi kuşatması." },
        ],
      },
      {
        key: "ibadet",
        title: "2. İbadet ve Kulluk",
        description:
          "Namaz, oruç, zekât, hac ve dua gibi temel ibadetlere işaret eden ayetler.",
        verses: [
          { ref: "Bakara 2/43", note: "Namaz kılmak ve zekât vermek emri." },
          { ref: "Bakara 2/183", note: "Oruç ibadetinin farz kılınması." },
          { ref: "Hac 22/27–29", note: "Hac ibadeti ve Beytullah’a davet." },
          { ref: "Mü’minûn 23/1–2", note: "Mü’minlerin huşu ile kıldıkları namaz." },
          { ref: "Müzzemmil 73/20", note: "Gece ibadeti, Kur’an okuma ve infak." },
        ],
      },
      {
        key: "ahlak",
        title: "3. Ahlâk ve Kişisel Davranış",
        description:
          "Müslümanın bireysel ahlâkı, güzel huylar ve kaçınılması gereken kötü davranışlar.",
        verses: [
          { ref: "Lokmân 31/17–19", note: "Namaz, sabır, tevazu ve ölçülü konuşma." },
          { ref: "Hucurât 49/11–12", note: "Alay, kötü lakap, suizan, tecessüs ve gıybet yasağı." },
          { ref: "Nahl 16/90", note: "Adalet, iyilik, akrabaya yardım ve kötülükten sakındırma." },
          { ref: "Furkân 25/63–72", note: "Rahmân’ın has kullarının ahlâkî özellikleri." },
          { ref: "İsrâ 17/23–24", note: "Anne-babaya iyilik ve saygı emri." },
        ],
      },
      {
        key: "aile_toplum",
        title: "4. Aile, Nikâh ve Toplumsal Hayat",
        description:
          "Aile düzeni, nikâh, boşanma, miras, komşuluk ve toplumsal sorumluluklarla ilgili ayetler.",
        verses: [
          { ref: "Nisâ 4/1", note: "İnsanların aynı kökten gelişi, akrabalık bağlarının önemi." },
          { ref: "Nisâ 4/19", note: "Kadınlara iyi davranma ve aile içi adalet." },
          { ref: "Rûm 30/21", note: "Eşler arasındaki sevgi ve merhamet." },
          { ref: "Hucurât 49/13", note: "Takvâ dışında üstünlük olmaması, tanışma ve kardeşlik." },
          { ref: "Haşr 59/9", note: "Ensar’ın fedakârlığı ve kardeşlik örneği." },
        ],
      },
      {
        key: "ekonomi_adalet",
        title: "5. Ekonomi, Adalet ve Kul Hakkı",
        description:
          "Helal kazanç, ölçü–tartı, faiz, israf ve sosyal adaletle ilgili ayetler.",
        verses: [
          { ref: "Mutaffifîn 83/1–3", note: "Ölçü ve tartıda hile yapanlar için uyarı." },
          { ref: "Bakara 2/275–279", note: "Faiz yasağı ve ticaretin helal oluşu." },
          { ref: "Tevbe 9/60", note: "Zekâtın sarf yerleri (sekiz sınıf)." },
          { ref: "İsrâ 17/26–27", note: "İnfak, cimrilik ve israf arasında denge." },
          { ref: "Nisâ 4/135", note: "Adaletli şahitlik ve taraf tutmama emri." },
        ],
      },
      {
        key: "ahiret",
        title: "6. Ahiret, Hesap ve Sorumluluk",
        description:
          "Ölüm, diriliş, hesap, cennet–cehennem ve insanın sorumluluğu ile ilgili ayetler.",
        verses: [
          { ref: "Âl-i İmrân 3/185", note: "Her canın ölümü tadacağı ve hesap günü." },
          { ref: "Zilzâl 99/7–8", note: "En küçük iyilik ve kötülüğün dahi karşılığının görülmesi." },
          { ref: "Yâsîn 36/51–54", note: "Sûra üfürülmesi ve mahşer sahnesi." },
          { ref: "Vâkıa 56/1–26", note: "Kıyamet sahneleri ve cennet ehli." },
          { ref: "Gâşiye 88/1–16", note: "Yüzlerin halleri, cennet ve cehennem manzaraları." },
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.kuranFihristTitle}>Kur’an Fihristi</Text>
        <Text style={styles.kuranFihristSubtitle}>
          Konu başlıklarına göre bazı önemli ayetler. Detaylı inceleme için resmî Kur’an
          sitelerini ve tefsir kaynaklarını kullanman önerilir.
        </Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          {TOPICS.map((topic) => (
            <View key={topic.key} style={styles.kuranFihristSection}>
              <ScaledText baseSize={14} style={styles.kuranFihristSectionTitle}>{topic.title}</ScaledText>

              {!!topic.description && (
                <ScaledText baseSize={14} style={styles.kuranFihristSectionDesc}>{topic.description}</ScaledText>
              )}

              {topic.verses.map((v, idx) => (
                <View key={topic.key + idx} style={styles.kuranFihristCard}>
                  <ScaledText baseSize={14} style={styles.kuranFihristRef}>{v.ref}</ScaledText>
                  <ScaledText baseSize={14} style={styles.kuranFihristNote}>{v.note}</ScaledText>
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
    kuranFihristTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    kuranFihristSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    kuranFihristSection: {
      marginBottom: 18,
    },
    kuranFihristSectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#ffdd55",
      marginBottom: 6,
    },
    kuranFihristSectionDesc: {
      fontSize: 14,
      color: "#d0d7e2",
      lineHeight: 20,
      marginBottom: 8,
    },
    kuranFihristCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 10,
      marginBottom: 6,
    },
    kuranFihristRef: {
      fontSize: 14,
      fontWeight: "600",
      color: "#ffffff",
      marginBottom: 2,
    },
    kuranFihristNote: {
      fontSize: 13,
      color: "#c4ccdd",
      lineHeight: 18,
    },

});