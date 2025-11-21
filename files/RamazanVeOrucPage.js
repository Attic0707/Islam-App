import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function RamazanVeOrucPage({ onBack }) {
    const SECTIONS = [
      {
        title: "Ramazan Nedir?",
        text:
          "Ramazan, Kur’ân-ı Kerîm’in indirilmeye başlandığı mübarek aydır. Müslümanlar için ibadet, arınma, paylaşma ve sabır ayı olarak kabul edilir.",
      },
      {
        title: "Oruç Nedir?",
        text:
          "Oruç, tan yerinin ağarmasından (imsak) güneş batıncaya (iftar) kadar yeme, içme ve cinsel ilişkiden uzak durmaktır. Niyet ve bilinçle yapılan manevi bir ibadettir.",
      },
      {
        title: "Oruç Kimlere Farzdır?",
        list: [
          "Müslüman olan",
          "Akıllı ve ergenlik çağına girmiş olan",
          "Sağlığı yerinde olan",
          "Seferde (yolculukta) olmayan",
        ],
      },
      {
        title: "Kimler Oruç Tutmayabilir?",
        list: [
          "Hastalar (sağlığa zarar veriyorsa)",
          "Yolcular (sonradan kaza edilir)",
          "Hamile ve emziren kadınlar (sağlık açısından risk varsa)",
          "Aşırı yaşlı olanlar",
        ],
        text:
          "Sağlık ve zorlayıcı durumlarda oruç ertelenebilir veya fidye verilebilir (yetkili din kaynaklarına göre).",
      },
      {
        title: "Oruç Nasıl Tutulur?",
        list: [
          "İmsaktan önce niyet edilir (kalpten niyet yeterlidir).",
          "İmsak vaktiyle birlikte yeme içme bırakılır.",
          "Gün boyu bilinçli şekilde ibadete devam edilir.",
          "Güneş batınca iftar edilir.",
        ],
      },
      {
        title: "Oruç Adabı (Etik Kurallar)",
        list: [
          "Sahura kalkmak",
          "Güzel söz söylemek, kalp kırmamak",
          "Gıybet ve kötü davranışlardan uzak durmak",
          "Bol dua ve istiğfar etmek",
          "İbadeti arttırmak, Kur’an okumak",
          "Yardım ve paylaşmayı çoğaltmak",
        ],
      },
      {
        title: "Oruç Neleri Bozar?",
        list: [
          "Bilerek yemek ve içmek",
          "Cinsel ilişki",
          "Ağız dolusu kusmak (isteyerek)",
          "Sigara ve benzeri şeyleri içmek",
        ],
      },
      {
        title: "Oruç Neleri Bozmaz?",
        list: [
          "Unutarak yemek içmek",
          "İstem dışı kusmak",
          "Diş fırçalamak (kaçırmamaya dikkat etmek gerekir)",
          "Su yutulmadan ağız çalkalamak",
          "Kan tahlili veya iğne (güncel fetvalarda çoğu caizdir)",
        ],
      },
      {
        title: "Sahur Tavsiyeleri",
        list: [
          "Son imsak vaktine yakın sahur yapmak",
          "Aşırı ağır yemeklerden kaçınmak",
          "Su alımını dengeli yapmak",
          "Protein ve lif ağırlıklı beslenmek",
        ],
      },
      {
        title: "İftar Tavsiyeleri",
        list: [
          "Hurma veya su ile hafif bir açılış",
          "Aşırı hızlı yememek",
          "Yemekten önce bir bardak su içmek",
          "Şükür ve dua ile başlamak",
        ],
      },
      {
        title: "Teravih Namazı",
        text:
          "Ramazan gecelerine özel bir namazdır. Bireysel veya cemaatle kılınabilir. Ramazan ruhunu güçlendiren bir ibadettir.",
      },
      {
        title: "İtikâf",
        text:
          "Ramazan’ın son on gününde yapılan manevi bir inziva ibadetidir. Amaç, dünyadan uzaklaşıp kalbi arındırmaktır.",
      },
      {
        title: "Kadir Gecesi",
        text:
          "Kur’an’ın indirildiği gece olan Kadir Gecesi Ramazan’ın son on gününde aranır. Dua, ibadet ve tefekkürle değerlendirilir.",
      },
      {
        title: "Önerilen Dualar (Kısa ve Güvenli)",
        list: [
          "“Allah’ım, sağlık ve afiyet ver.”",
          "“Kalbimi temizle, yolumu aydınlat.”",
          "“Beni güzel ahlâka ulaştır.”",
          "“Rızkımı helal ve bereketli kıl.”",
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.ramazanTitle}>Ramazan & Oruç</Text>
        <Text style={styles.ramazanSubtitle}>
          Ramazan ayı ve oruç hakkında temel bilgiler
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {SECTIONS.map((sec, index) => (
            <View key={index} style={styles.ramazanCard}>
              <ScaledText baseSize={14} style={styles.ramazanHeading}> {sec.title} </ScaledText>

              {sec.text && (
                <ScaledText baseSize={14} style={styles.ramazanText}> {sec.text} </ScaledText>
              )}

              {sec.list &&
                sec.list.map((item, i) => (
                  <ScaledText key={i} baseSize={14} style={styles.ramazanListItem}> • {item} </ScaledText>
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
    ramazanTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 4,
    },

    ramazanSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    ramazanCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      padding: 16,
      borderRadius: 12,
      marginBottom: 14,
    },

    ramazanHeading: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 8,
    },

    ramazanText: {
      fontSize: 15,
      lineHeight: 22,
      color: "#f2f2f7",
      marginBottom: 6,
    },

    ramazanListItem: {
      fontSize: 15,
      color: "#dce2ee",
      lineHeight: 22,
      marginLeft: 4,
      marginBottom: 4,
    },
});