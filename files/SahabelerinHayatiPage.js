import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function SahabelerinHayatiPage({ onBack }) {
    const SAHABIS = [
      {
        name: "Hz. Ebû Bekir (r.a.)",
        summary:
          "Peygamberimizin en yakın dostu, hicret arkadaşı ve İslam’a ilk girenlerden biridir. Yumuşak huyluluğu, sadakati ve cömertliğiyle tanınmıştır.",
        traits: [
          "Sadakat",
          "Tevazu",
          "Güvenilirlik",
          "Cömertlik",
        ],
        contributions: [
          "Hicret yolculuğunda Peygamberimize eşlik etmesi",
          "İlk Müslümanlardan olması",
          "İslam toplumunun korunması için çalışması",
        ],
      },
      {
        name: "Hz. Ömer (r.a.)",
        summary:
          "Müslüman oluşu İslam toplumuna güç kazandırdı. Cesareti, adaleti ve yönetim kabiliyetiyle bilinir. 'Fârûk' lakabıyla anılır.",
        traits: ["Adalet", "Cesaret", "Kararlılık", "Feraset"],
        contributions: [
          "İslam’a açık destek veren ilk kişilerden olması",
          "Toplumsal düzen için yeni uygulamalar getirmesi",
        ],
      },
      {
        name: "Hz. Osman (r.a.)",
        summary:
          "Hayası, cömertliği ve merhameti ile bilinen sahabedir. İki kere Peygamberimizin kızıyla evlendiği için 'Zinnûreyn' lakabıyla anılır.",
        traits: ["Hayâ", "Cömertlik", "Merhamet"],
        contributions: [
          "Zekât ve yardım faaliyetlerine öncülük etmesi",
          "Kur’an’ın korunmasına yönelik çalışmalar yapması",
        ],
      },
      {
        name: "Hz. Ali (r.a.)",
        summary:
          "Peygamberimizin amcasının oğlu ve damadıdır. Genç yaşından itibaren İslam’a destek verdi. Cesareti ve ilmiyle öne çıkar.",
        traits: ["Cesaret", "İlim", "Hikmet"],
        contributions: [
          "Genç yaşta İslam'ın savunucusu olması",
          "Peygamberimizin eğitiminde yetişmesi",
        ],
      },
      {
        name: "Hz. Bilâl-i Habeşî (r.a.)",
        summary:
          "İlk müezzindir. Sabır, iman ve fedakârlığıyla tanınır. Ezanda Allah’ın adını en güzel şekilde duyurmuştur.",
        traits: ["Sabır", "Sadakat", "Teslimiyet"],
        contributions: [
          "İlk müezzin olması",
          "İşkencelere rağmen imanından dönmemesi",
        ],
      },
      {
        name: "Hz. Hamza (r.a.)",
        summary:
          "Peygamberimizin amcası ve İslam’ın güçlü savunucusudur. ‘Allah’ın Aslanı’ olarak bilinir.",
        traits: ["Cesaret", "Onur", "Güç"],
        contributions: [
          "Mekke döneminde Müslümanları koruması",
          "Bedir’de İslam’ı savunması",
        ],
      },
      {
        name: "Hz. Selman-ı Farisi (r.a.)",
        summary:
          "Hakikati arayan bilge sahabedir. Hendek savaşındaki hendek stratejisinin fikir sahibi olarak bilinir.",
        traits: ["Arayış", "Bilgelik", "Tevazu"],
        contributions: [
          "Hendek savaşında strateji önermesi",
          "Peygamberimizin övgüsüne mazhar olması",
        ],
      },
      {
        name: "Hz. Mus'ab b. Umeyr (r.a.)",
        summary:
          "Medine’ye gönderilen ilk öğretmendir. Zarafet ve fedakârlığın örneğidir.",
        traits: ["Nezaket", "Fedakârlık", "Sabır"],
        contributions: [
          "Medine’de İslam’ı tebliğ etmesi",
          "Uhud’da cesur bir duruş sergilemesi",
        ],
      },
      {
        name: "Hz. Abdurrahman b. Avf (r.a.)",
        summary:
          "Zenginliği, hayırseverliği ve ticaretteki doğruluğuyla tanınır. Ensar ve muhacir kardeşliğinin örneklerinden biridir.",
        traits: ["Cömertlik", "Doğruluk", "Alçakgönüllülük"],
        contributions: [
          "Büyük yardımlar yapması",
          "Topluma ekonomik destek sağlaması",
        ],
      },
      {
        name: "Hz. Sa’d b. Ebi Vakkas (r.a.)",
        summary:
          "Okçulukta mahirdi ve Bedir’de ilk ok atan sahabedir. Duaları makbul olarak bilinir.",
        traits: ["Şecaat", "Sadakat"],
        contributions: [
          "Savaşlarda önemli görevler üstlenmesi",
          "İslam ordularına komutanlık yapması",
        ],
      },
      {
        name: "Hz. Enes b. Malik (r.a.)",
        summary:
          "Peygamberimize 10 yıl hizmet eden sahabedir. Nezaketi ve güzel ahlakıyla hatırlanır.",
        traits: ["Nezaket", "İtaat", "Samimiyet"],
        contributions: [
          "Hadis rivayetleriyle İslam ilmine katkı",
          "Peygamberimize yakın hizmetleri",
        ],
      },
      {
        name: "Hz. Aişe (r.a.)",
        summary:
          "Hadis ve fıkıh alanında üstün ilme sahip olan sahabedir. Zekâsı ve öğreticiliğiyle tanınmıştır.",
        traits: ["Zekâ", "İlim", "Hafıza"],
        contributions: [
          "Birçok hadis rivayet etmesi",
          "Kadın sahabelere rehberlik yapması",
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.sahabeTitle}>Sahabelerin Hayatı</Text>
        <Text style={styles.sahabeSubtitle}>
          İslam tarihinin en seçkin şahsiyetlerinden kısa biyografiler
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {SAHABIS.map((s, index) => (
            <View key={index} style={styles.sahabeCard}>
              <ScaledText baseSize={14} style={styles.sahabeName}> {s.name} </ScaledText>
              <ScaledText baseSize={14} style={styles.sahabeHeading}> Kısa Hayatı </ScaledText>
              <ScaledText baseSize={14} style={styles.sahabeText}> {s.summary} </ScaledText>
              <ScaledText baseSize={14} style={styles.sahabeHeading}> Öne Çıkan Özellikleri </ScaledText>
              {s.traits.map((t, i) => (
                <ScaledText baseSize={14} style={styles.sahabeListItem}> • {t} </ScaledText>
              ))}

              <ScaledText baseSize={14} style={styles.sahabeHeading}> Katkıları </ScaledText>

              {s.contributions.map((c, i) => (
                <ScaledText baseSize={14} style={styles.sahabeListItem}> • {c} </ScaledText>
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
    sahabeTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    sahabeSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    sahabeCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 14,
    },
    sahabeName: {
      fontSize: 20,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 10,
    },
    sahabeHeading: {
      fontSize: 15,
      fontWeight: "700",
      color: "#ffffff",
      marginTop: 8,
      marginBottom: 4,
    },
    sahabeText: {
      fontSize: 15,
      lineHeight: 22,
      color: "#f2f2f7",
      marginBottom: 6,
    },
    sahabeListItem: {
      fontSize: 14,
      color: "#dce2ee",
      lineHeight: 20,
      marginLeft: 4,
      marginBottom: 2,
    },
});