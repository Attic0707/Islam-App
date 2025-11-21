import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function DortHalifePage({ onBack }) {
    const HALIFES = [
      {
        name: "Hz. Ebû Bekir (r.a.)",
        period: "632 – 634",
        traits: [
          "Tevazu ve yumuşak huyluluk",
          "Sadakat ve samimiyet",
          "Cömertlik ve güvenilirlik",
          "Zühd ve takva sahibi"
        ],
        summary:
          "Efendimiz’in (s.a.s.) en yakın dostu ve hicret yol arkadaşıdır. Peygamberimizin vefatından sonra halife seçildi. Ridde olaylarıyla mücadele etti, sahte peygamber hareketlerini bastırdı. Kur’an ayetlerinin mushaf hâlinde toplanmasını başlatan kişidir. İslam toplumunu dağılmaktan kurtaran birleştirici lider oldu.",
        majorActs: [
          "Kur’an’ın mushaf hâlinde toplanmasını başlatması",
          "Ridde olaylarını durdurarak İslam devletini koruması",
          "Sahte peygamber hareketlerini engellemesi",
          "Beytülmal düzenini sağlamlaştırması"
        ]
      },
      {
        name: "Hz. Ömer (r.a.)",
        period: "634 – 644",
        traits: [
          "Adalet ve kararlılık",
          "Cesaret ve feraset",
          "Disiplin ve dirayet",
          "Toplumsal düzeni önceleme"
        ],
        summary:
          "Müslüman oluşu İslam toplumuna güç kazandırdı. Halifeliği döneminde büyük fetihler gerçekleşti: İran’ın büyük bölümü, Suriye, Mısır ve Kudüs fethedildi. Adaletiyle meşhur olup ‘Fârûk’ (hakkı batıldan ayıran) lakabıyla tanınmıştır. İlk defa devlet teşkilatını düzenli bir yapıya kavuşturdu.",
        majorActs: [
          "Devlet teşkilatını kurumsallaştırması",
          "Kudüs’ün fethi",
          "Divan sistemi, nüfus sayımı ve posta teşkilatı kurması",
          "Kadılık ve adli sistemi güçlendirmesi"
        ]
      },
      {
        name: "Hz. Osman (r.a.)",
        period: "644 – 656",
        traits: [
          "Hayâ ve yumuşak huyluluk",
          "Cömertlik ve merhamet",
          "İleri görüşlülük",
          "Sakin, ağırbaşlı karakter"
        ],
        summary:
          "İki kere Peygamberimizin kızıyla evlendiği için ‘Zinnûreyn’ (iki nur sahibi) lakabını aldı. Halifeliğinin ilk yıllarında geniş fetihler yaşandı. Kur’an’ın çoğaltılarak çeşitli şehirlere gönderilmesi onun döneminde gerçekleşti. İç karışıklıklar artınca hilafet ciddi baskı altına girdi ve şehit edildi.",
        majorActs: [
          "Kur’an nüshalarının çoğaltılması ve büyük şehirlere gönderilmesi",
          "Kuzey Afrika ve Horasan fetihlerinin genişlemesi",
          "Donanma gücünün geliştirilmesi",
          "Fethedilen bölgelerde idari yapılanmanın düzenlenmesi"
        ]
      },
      {
        name: "Hz. Ali (r.a.)",
        period: "656 – 661",
        traits: [
          "Cesaret ve kahramanlık",
          "İlim ve hikmet",
          "Zühd ve takva",
          "Keskin adalet anlayışı"
        ],
        summary:
          "Peygamber Efendimiz’in amcasının oğlu ve damadıdır. Genç yaşından itibaren İslam’ın ilk savunucularındandı. Hilafeti döneminde iç karışıklıklar ve fitne olayları yoğunlaştı; Cemel ve Sıffin savaşları yaşandı. Hz. Ali ilmi, cesareti ve hikmeti ile Müslümanların gönlünde özel bir yer edinmiştir.",
        majorActs: [
          "İlmi ve içtihatlarıyla İslam hukukuna katkıları",
          "Fitne döneminde itidalli yönetim anlayışı",
          "Devlet gelirlerinin adaletli dağıtımı için yaptığı düzenlemeler",
          "Kufe'yi devlet merkezi olarak belirlemesi"
        ]
      }
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.halifeTitle}>Dört Halife</Text>
        <Text style={styles.halifeSubtitle}>
          Hz. Ebû Bekir, Hz. Ömer, Hz. Osman ve Hz. Ali (r.a.) — Kısa hayatları ve hizmetleri
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {HALIFES.map((h, index) => (
            <View key={index} style={styles.halifeCard}>
              <ScaledText baseSize={14} style={styles.halifeName}>{h.name}</ScaledText>
              <ScaledText baseSize={14} style={styles.halifePeriod}>{h.period}</ScaledText>

              <ScaledText baseSize={14} style={styles.halifeHeading}>Öne Çıkan Özellikleri</ScaledText>
              {h.traits.map((t, i) => (
                <ScaledText key={i} baseSize={14} style={styles.halifeListItem}>• {t}</ScaledText>
              ))}

              <ScaledText baseSize={14} style={styles.halifeHeading}>Kısa Hayatı</ScaledText>
              <ScaledText baseSize={14} style={styles.halifeText}>{h.summary}</ScaledText>

              <ScaledText baseSize={14} style={styles.halifeHeading}>Önemli Hizmetleri</ScaledText>
              {h.majorActs.map((m, i) => (
                <ScaledText key={i} baseSize={14} style={styles.halifeListItem}>• {m}</ScaledText>
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
    halifeTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    halifeSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    halifeCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 14,
    },

    halifeName: {
      fontSize: 20,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 2,
    },

    halifePeriod: {
      fontSize: 13,
      color: "#d0d7e2",
      marginBottom: 8,
      fontStyle: "italic",
    },

    halifeHeading: {
      fontSize: 15,
      fontWeight: "700",
      color: "#ffffff",
      marginTop: 10,
      marginBottom: 4,
    },

    halifeText: {
      fontSize: 15,
      lineHeight: 22,
      color: "#f2f2f7",
      marginBottom: 6,
    },

    halifeListItem: {
      fontSize: 14,
      lineHeight: 20,
      color: "#dce2ee",
      marginLeft: 4,
      marginBottom: 2,
    },
});