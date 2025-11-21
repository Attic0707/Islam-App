import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function VedaPage({ onBack }) {
    const text = `
      Sevgili Peygamberimiz (s.a.s.)’in İslâm ümmetine veda mahiyetindeki hutbesidir. 
      Diyanet resmî kaynaklarında ve hadis kitaplarında yer alan metinler, aşağıdaki şekliyle 
      aktarılmaktadır:

      ---

      **VEDA HUTBESİ (DİYANET – TAM METİN)**

      “Hamd Allah’a mahsustur. O’na hamdeder, O’ndan yardım ve mağfiret dileriz. 
      Nefislerimizin kötülüklerinden Allah’a sığınırız. Allah kimi hidayete erdirirse, onu hiç kimse 
      saptıramaz; kimi de saptırırsa, ona hiç kimse hidayet veremez.

      Ey insanlar! Sözümü iyi dinleyin. Bilmiyorum, belki de bu yıldan sonra sizinle bir daha 
      buluşamayacağım.

      Ey insanlar! Kanlarınız, mallarınız ve namuslarınız Rabbinize kavuşuncaya kadar, bu gününüzün 
      kutsallığı gibi kutsaldır, dokunulmazdır.

      Dikkat edin! Emanetleri ehline veriniz.

      Ey insanlar! Şüphesiz ki şeytan, bu topraklarda kendisine ibadet edilmesinden ümidini kesmiştir. 
      Fakat küçük gördüğünüz işlerde ona uyarsanız bundan hoşnut olur. Dininizi küçük şeylerde bile 
      ondan koruyun.

      Ey insanlar! Kadınların haklarını gözetmenizi ve bu konuda Allah’tan korkmanızı tavsiye ederim. 
      Siz kadınları Allah’ın emaneti olarak aldınız, Allah adına söz vererek helâl kıldınız. Sizin kadınlar 
      üzerinde hakkınız olduğu gibi, onların da sizin üzerinizde hakları vardır.

      Ey müminler! Size iki emanet bırakıyorum; onlara sımsıkı sarıldıkça yolunuzu hiç şaşırmazsınız: 
      **Allah’ın Kitabı ve Peygamberinin Sünneti.**

      Ey insanlar! Müminler kardeştir. Kardeşinizin malı, kendisinin gönül rızası olmadıkça size helâl 
      olmaz. Kendinize zulmetmeyiniz.

      Ey insanlar! Ne bir başkasının malı haksız olarak yenir, ne de onun kanı akıtılır. Herkes kendi 
      işlediği suçtan sorumludur. Hiçbir günahkâr, bir başkasının günahını yüklenmez.

      Rabbiniz birdir, babanız da birdir. Hepiniz Âdem’densiniz, Âdem ise topraktandır. Arab’ın 
      Arap olmayana, Arap olmayanın Arab’a; beyazın siyaha, siyahın beyaza **takva dışında üstünlüğü yoktur.**

      Ey insanlar! Vakit ikindi vaktidir. Zaman dolaştı, dolaştı, Allah’ın gökleri ve yeri yarattığı 
      gündeki konumuna geldi.  

      Ey müminler! Allah’tan korkunuz. Beş vakit namazınızı kılınız. Ramazan orucunuzu tutunuz. 
      Mallarınızın zekâtını veriniz. Haccınızı eda ediniz.

      ---

      Peygamber Efendimiz (s.a.s.) sözlerini şöyle tamamladı:

      “**Tebliğ ettim mi?**”

      Oradaki müminler hep bir ağızdan:

      “**Evet, tebliğ ettin!**” dediler.

      Efendimiz (s.a.s.) parmağını semaya kaldırarak şöyle buyurdu:

      “**Allah’ım, şahit ol! Allah’ım, şahit ol! Allah’ım, şahit ol!**”

      ---

      (Kaynak: Diyanet İşleri Başkanlığı – İslam Ansiklopedisi, Hutbe bölümü)
      `;

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text baseSize={14} style={styles.vedaTitle}>Veda Hutbesi</Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          <ScaledText baseSize={14} style={styles.vedaText}>{text}</ScaledText>
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
    backButton: {
      alignSelf: "flex-start",
      marginLeft: 20,
      marginBottom: 10,
    },
    backButtonText: {
      color: "white",
      fontSize: 18,
    },
    vedaTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    vedaText: {
    fontSize: 15,
    color: "#d0d7e2",
    lineHeight: 22,
    marginBottom: 10,
    whiteSpace: "pre-wrap",
    },
});