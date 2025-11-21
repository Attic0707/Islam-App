import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function HadisFihristiPage({ onBack }) {
    const TOPICS = [
      {
        key: "iman",
        title: "1. İman, Niyet ve İhlâs",
        description:
          "İmanın mahiyeti, niyetin önemi ve amellerin değerini belirleyen içtenlik (ihlâs) ile ilgili bazı hadisler.",
        hadiths: [
          {
            ref: "“Ameller niyetlere göredir…”",
            source: "Buhârî, Bed’ü’l-Vahy 1; Müslim, İmâre 155",
            note: "Bir amelin değerini belirleyen şeyin niyet olduğu, ibadette samimiyetin şart olduğu vurgulanır."
          },
          {
            ref: "“Hiçbiriniz kendisi için sevdiğini kardeşi için sevmedikçe iman etmiş olmaz.”",
            source: "Buhârî, Îmân 7; Müslim, Îmân 71",
            note: "Gerçek imanın, müminler arası sevgi ve empati ile bütünleştiğini ifade eder."
          },
          {
            ref: "“Mü’min, insanların kendisinden emin olduğu kimsedir.”",
            source: "Tirmizî, Îmân 12",
            note: "İman ile güvenilir olmanın bir arada düşünülmesi gerektiğini anlatır."
          },
        ],
      },
      {
        key: "ibadet",
        title: "2. Namaz, Oruç ve Diğer İbadetler",
        description:
          "Namazın, orucun ve diğer temel ibadetlerin Müslüman hayatındaki konumunu ele alan hadisler.",
        hadiths: [
          {
            ref: "“Namaz dinin direğidir.”",
            source: "Beyhakî, Şuabü’l-Îmân 3/39",
            note: "Namazın din hayatındaki merkezi konumunu ifade eden meşhur rivayetlerdendir."
          },
          {
            ref: "“Kim Ramazan orucunu iman ederek ve karşılığını yalnız Allah’tan bekleyerek tutarsa geçmiş günahları bağışlanır.”",
            source: "Buhârî, Savm 6; Müslim, Salâtü’l-Müsâfirîn 175",
            note: "Oruçta ihlâs ve sevap beklentisinin önemini dile getirir."
          },
          {
            ref: "“İnsan öldüğü zaman amel defteri kapanır; ancak sadaka-i câriye, faydalı ilim ve kendisine dua eden hayırlı evlat bundan müstesnadır.”",
            source: "Müslim, Vasiyye 14",
            note: "Kişinin vefatından sonra da sevabının devam etmesine vesile olan amelleri özetler."
          },
        ],
      },
      {
        key: "ahlak",
        title: "3. Ahlâk, Güzel Huylar ve Kötü Huylardan Sakınma",
        description:
          "Doğruluk, merhamet, sabır, tevazu gibi güzel huylar ile yalan, kibir, haset gibi kötü huylara dair hadisler.",
        hadiths: [
          {
            ref: "“Ben, güzel ahlâkı tamamlamak için gönderildim.”",
            source: "Mâlik, Muvatta’, Husnü’l-Hulk 8",
            note: "Peygamberliğin temel amaçlarından birinin ahlâkı güzelleştirmek olduğunu vurgular."
          },
          {
            ref: "“Müslüman, diğer Müslümanların elinden ve dilinden emin olduğu kimsedir.”",
            source: "Buhârî, Îmân 4; Müslim, Îmân 65",
            note: "Zarar vermemeyi, Müslüman kimliğinin ayırt edici vasfı olarak ortaya koyar."
          },
          {
            ref: "“Kolaylaştırın, zorlaştırmayın; müjdeleyin, nefret ettirmeyin.”",
            source: "Buhârî, İlim 11; Müslim, Cihâd 6",
            note: "Dinî tebliğ ve ilişkilerde yumuşak, kolaylaştırıcı bir üslup benimsemeyi öğütler."
          },
          {
            ref: "“Güçlü kimse güreşte galip gelen değil, öfke anında nefsine hâkim olandır.”",
            source: "Buhârî, Edeb 76; Müslim, Birr 107",
            note: "Gerçek gücün, öfkeyi kontrol etme becerisiyle ölçüldüğünü ifade eder."
          },
        ],
      },
      {
        key: "aile",
        title: "4. Aile, Evlilik ve Akrabalık Bağları",
        description:
          "Eşler arasındaki ilişki, çocuklara karşı sorumluluk ve akrabalık bağlarını koruma ile ilgili hadisler.",
        hadiths: [
          {
            ref: "“Sizin en hayırlınız, ailesine karşı en hayırlı olanınızdır.”",
            source: "Tirmizî, Menâkıb 63",
            note: "Kişinin değerinin, aile içindeki tutumu ile değerlendirildiğini vurgular."
          },
          {
            ref: "“Rahim (akrabalık bağı), Rahmân’ın isminden bir isimdir. Akrabalık bağını gözeteni Allah gözetir…”",
            source: "Buhârî, Edeb 13; Müslim, Birr 16",
            note: "Akrabalık ilişkilerini korumanın dinî bir sorumluluk olduğunu anlatır."
          },
          {
            ref: "“Küçüklerimize merhamet etmeyen, büyüklerimizi saymayan bizden değildir.”",
            source: "Tirmizî, Birr 15",
            note: "Aile ve toplumda saygı–sevgi dengesini ortaya koyar."
          },
        ],
      },
      {
        key: "ticaret",
        title: "5. Ticaret, Kazanç ve Kul Hakkı",
        description:
          "Helal kazanç, dürüst ticaret ve kul hakkından sakınma konusunda öne çıkan hadisler.",
        hadiths: [
          {
            ref: "“Doğru ve güvenilir tüccar, peygamberler, sıddıklar ve şehitlerle beraberdir.”",
            source: "Tirmizî, Büyû‘ 4",
            note: "Ticarette doğruluk ve güvenilirliğin yüksek bir fazilet olduğunu bildirir."
          },
          {
            ref: "“Bizi aldatan bizden değildir.”",
            source: "Müslim, Îmân 164",
            note: "Her türlü aldatma ve sahtekârlığın, İslâm ahlâkıyla bağdaşmadığını ortaya koyar."
          },
          {
            ref: "“Üç kişi vardır ki, kıyamet günü Allah onlarla konuşmaz… bunlardan biri de yalan yeminle malını satmaya çalışan kimsedir.”",
            source: "Müslim, Îmân 171",
            note: "Kazanç uğruna yalan yere yemin etmenin ağır bir günah olduğuna işaret eder."
          },
        ],
      },
      {
        key: "sosyal",
        title: "6. Toplumsal Dayanışma, Yardımlaşma ve Kardeşlik",
        description:
          "Müslümanlar arasında dayanışma, yardımlaşma ve kardeşlik hukuku ile ilgili hadisler.",
        hadiths: [
          {
            ref: "“Mü’minler birbirini sevmekte, birbirlerine merhamet etmekte ve şefkat göstermekte tek bir beden gibidir.”",
            source: "Buhârî, Edeb 27; Müslim, Birr 66",
            note: "Toplum içindeki dayanışmanın, bir bedenin organları gibi olması gerektiğini ifade eder."
          },
          {
            ref: "“Komşusu açken tok yatan bizden değildir.”",
            source: "Hâkim, el-Müstedrek 2/15",
            note: "Komşuluk hakkı ve sosyal duyarlılığın önemini vurgular."
          },
          {
            ref: "“Bir kimse, kardeşinin ihtiyacını görmeye koşarsa Allah da onun işini görür.”",
            source: "Müslim, Birr 58",
            note: "Başkasının işini görmeye yardımcı olmanın, ilahî yardımın vesilesi olduğuna işaret eder."
          },
        ],
      },
      {
        key: "dua_zikir",
        title: "7. Dua, Zikir ve Allah’ı Anmak",
        description:
          "Duanın fazileti, Allah’ı çokça zikretmenin önemiyle ilgili bazı hadisler.",
        hadiths: [
          {
            ref: "“Dua ibadetin özüdür.”",
            source: "Tirmizî, Deavât 1",
            note: "Duanın, kulluğun kalbi sayılabilecek kadar önemli olduğunu ifade eder."
          },
          {
            ref: "“Allah’ı zikredenle etmeyen kimsenin misali, diri ile ölü gibidir.”",
            source: "Buhârî, Deavât 66",
            note: "Zikrin kalbi diri tutmadaki rolünü mecazî bir dille anlatır."
          },
          {
            ref: "“Bir topluluk Allah’ı zikretmek için bir araya gelirse melekler onları kuşatır…”",
            source: "Müslim, Zikr 39",
            note: "Toplu zikrin, manevî rahmet ve huzura vesile olduğuna işaret eder."
          },
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.hadisFihristTitle}>Hadis Fihristi</Text>
        <Text style={styles.hadisFihristSubtitle}>
          Konu başlıklarına göre bazı temel hadis referansları. Detaylı okumalar için
          hadis kitaplarına ve güvenilir şerh/şerh kaynaklarına başvurman gerekir.
        </Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          {TOPICS.map((topic) => (
            <View key={topic.key} style={styles.hadisFihristSection}>
              <ScaledText baseSize={14} style={styles.hadisFihristSectionTitle}>{topic.title}</ScaledText>

              {!!topic.description && (
                <ScaledText baseSize={14} style={styles.hadisFihristSectionDesc}>{topic.description}</ScaledText>
              )}

              {topic.hadiths.map((h, idx) => (
                <View key={topic.key + idx} style={styles.hadisFihristCard} >
                  <ScaledText baseSize={14} style={styles.hadisFihristRef}>{h.ref}</ScaledText>
                  <ScaledText baseSize={14} style={styles.hadisFihristSource}>{h.source}</ScaledText>
                  <ScaledText baseSize={14} style={styles.hadisFihristNote}>{h.note}</ScaledText>
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
    hadisFihristTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    hadisFihristSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    hadisFihristSection: {
      marginBottom: 18,
    },
    hadisFihristSectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#ffdd55",
      marginBottom: 6,
    },
    hadisFihristSectionDesc: {
      fontSize: 14,
      color: "#d0d7e2",
      lineHeight: 20,
      marginBottom: 8,
    },
    hadisFihristCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 10,
      marginBottom: 8,
    },
    hadisFihristRef: {
      fontSize: 14,
      fontWeight: "600",
      color: "#ffffff",
      marginBottom: 2,
    },
    hadisFihristSource: {
      fontSize: 12,
      color: "#ffdd99",
      marginBottom: 3,
    },
    hadisFihristNote: {
      fontSize: 13,
      color: "#c4ccdd",
      lineHeight: 18,
    },
});