import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function EfendimizinHayatiPage({ onBack }) {
    const SECTIONS = [
      {
        title: "1. Doğumu ve Soyu",
        period: "571 (Fil Yılı) – Mekke",
        text:
          "Peygamber Efendimiz (s.a.s.), miladi 571 yılında Mekke’de dünyaya geldi. Babası Abdullah, annesi Âmine’dir. Soyu Hz. İbrahim’in oğlu Hz. İsmail’e dayanır. Doğduğu yıl, Kâbe’yi yıkmak isteyen Ebrehe’nin ordusunun helâk edildiği ‘Fil Olayı’nın yaşandığı senedir.",
      },
      {
        title: "2. Çocukluk ve Gençlik Yılları",
        period: "Sütanne dönemi – Gençlik çağı",
        text:
          "Doğduktan bir süre sonra sütanne olarak Hz. Halime’nin yanında kaldı. Küçük yaşta hem annesini hem dedesi Abdülmuttalib’i kaybetti ve amcası Ebû Tâlib’in himayesinde büyüdü. Gençlik yıllarında dürüstlüğü, güvenilirliği ve temiz ahlâkı sebebiyle insanlar ona ‘el-Emin’ lakabını verdiler.",
      },
      {
        title: "3. Hz. Hatice ile Evliliği",
        period: "25 yaş civarı",
        text:
          "Ticaret kervanları ile Şam taraflarına gitti, dürüst ticaretiyle tanındı. 40 yaşındaki Hz. Hatice validemiz onunla evlenmek istedi; bu evlilik gerçekleştiğinde Peygamber Efendimiz yaklaşık 25 yaşındaydı. Hz. Hatice, nübüvvetten önce ve sonra da en büyük destekçisiydi.",
      },
      {
        title: "4. İlk Vahiy ve Peygamber Oluşu",
        period: "40 yaş – Hira Mağarası",
        text:
          "Kırk yaşına yaklaştığında Hira Mağarası’nda tefekküre çekilmeye başladı. 40 yaşında iken, Ramazan ayında Hira’da ilk vahiy geldi: ‘Oku!’ emriyle başlayan Alak Suresi’nin ilk ayetleri nazil oldu. Böylece son peygamber olarak insanlığa gönderildi.",
      },
      {
        title: "5. Mekke Dönemi Tebliği",
        period: "13 yıl – Mekke",
        text:
          "İlk olarak en yakınlarından başlayarak insanları tevhid inancına davet etti. Bir süre gizli, daha sonra açık davet dönemi yaşandı. Putperest Mekke toplumu, çıkarlarını kaybetme endişesiyle bu davete sert şekilde karşı çıktı. Müslümanlar işkence gördü, boykotlara maruz kaldı. Buna rağmen Efendimiz (s.a.s.) sabırla tebliğe devam etti.",
      },
      {
        title: "6. Hicret ve Medine’ye Yerleşme",
        period: "622 – Hicret",
        text:
          "Müşriklerin baskıları dayanılmaz hale geldiğinde, Allah’ın izniyle Medine’ye hicret emri verildi. İlk önce sahabiler, ardından Peygamber Efendimiz (s.a.s.) Hz. Ebû Bekir ile birlikte Medine’ye hicret etti. Hicret, İslam tarihinde yeni bir dönemin başlangıcı oldu ve Müslümanların takvim başlangıcı olarak benimsendi.",
      },
      {
        title: "7. Medine’de İslam Toplumunun Kurulması",
        period: "10 yıl – Medine Dönemi",
        text:
          "Medine’de Mescid-i Nebevî inşa edildi, muhacir ve ensar arasında kardeşlik tesis edildi. Medine Sözleşmesi ile farklı toplulukların birlikte yaşayacağı adaletli bir düzen kuruldu. İbadetler, toplumsal hukuk, aile yapısı ve sosyal yardımlaşma gibi pek çok alan, vahyin rehberliğinde şekillendi.",
      },
      {
        title: "8. Savaşlar ve Savunma Mücadeleleri",
        period: "Bedir, Uhud, Hendek ve diğer gazveler",
        text:
          "Müslümanlar, Medine’de de düşman saldırılarıyla karşılaştı. Bedir, Uhud, Hendek gibi önemli savaşlar, çoğunlukla savunma amaçlı gerçekleşti. Bu süreçte hem sabır hem strateji hem de Allah’a tevekkül ön plana çıktı. Amaç, zulme karşı adaletli bir düzeni savunmak ve tevhid inancını korumaktı.",
      },
      {
        title: "9. Hudeybiye, Mekke’nin Fethi ve Yayılış",
        period: "Hudeybiye Antlaşması – Mekke’nin Fethi",
        text:
          "Hudeybiye Antlaşması görünüşte Müslümanlar aleyhine gibi dursa da kısa sürede İslam’ın yayılışına zemin hazırladı. Daha sonra Mekke neredeyse kansız denebilecek bir şekilde fethedildi. Kâbe putlardan temizlendi, tevhid ilan edildi. Bundan sonra İslam, Arap yarımadasına hızla yayıldı.",
      },
      {
        title: "10. Veda Hutbesi ve Son Günler",
        period: "Veda Haccı – 632",
        text:
          "Efendimiz (s.a.s.), Veda Haccı’nda Müslümanlara geniş kapsamlı bir hutbe irad etti. Can, mal ve namus dokunulmazlığı, faiz yasağı, emanet ve adalet gibi temel ilkeleri vurguladı. Görevini tamamladığını bildiren bu dönemden kısa bir süre sonra Medine’de vefat etti. Geride, Kur’an ve Sünnet ile aydınlanmış bir yol bıraktı.",
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.siyerTitle}>Efendimizin Hayatı (Siyer)</Text>
        <Text style={styles.siyerSubtitle}>
          Hz. Muhammed’in (s.a.s.) hayatından kronolojik kısa notlar
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {SECTIONS.map((sec, index) => (
            <View key={index} style={styles.siyerCard}>
              <ScaledText baseSize={14} style={styles.siyerHeading}>{sec.title}</ScaledText>
              <ScaledText baseSize={14} style={styles.siyerPeriod}>{sec.period}</ScaledText>
              <ScaledText baseSize={14} style={styles.siyerText}>{sec.text}</ScaledText>
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
    siyerTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    siyerSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    siyerCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 12,
    },
    siyerHeading: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 4,
    },

    siyerPeriod: {
      fontSize: 13,
      color: "#d0d7e2",
      marginBottom: 6,
      fontStyle: "italic",
    },
    siyerText: {
      fontSize: 15,
      lineHeight: 22,
      color: "#f2f2f7",
    },
});