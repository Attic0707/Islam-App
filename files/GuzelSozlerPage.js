import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function GuzelSozlerPage({ onBack }) {
    const CATEGORIES = [
      {
        title: "🕊 Hikmetli Sözler",
        items: [
          "Kalbin hangi niyetle doluysa, dilin de bir gün onu söyler.",
          "İnsan, başına gelenlerden çok, onlara verdiği anlamla şekillenir.",
          "Az konuş, çok düşün; az vaat et, çok yerine getir.",
          "Sabır, kapalı kapıların anahtarıdır.",
          "Gönlü kırık olanın duası, gökyüzüne daha yakın kabul edilir.",
          "İyiliği unutan, kötülüğü hiç unutmaz; bu yüzden kalbi ağırlaşır.",
          "Kırdığın kalbi onarmak, bir daha kırmamaya niyet etmekle başlar.",
        ],
      },
      {
        title: "🌧 Sabır, Tevekkül ve Teslimiyet",
        items: [
          "Sabır, vazgeçmek değil; doğru zamanda, doğru yerde durmayı bilmektir.",
          "Olmuyorsa ısrar etme, Rabbine bırak; ya daha iyisini verir ya da şerrinden korur.",
          "Tevekkül, elinden geleni yapıp, kalbini teslimiyete bırakmaktır.",
          "İmtihanın büyüklüğü, müjdenin yakınlığının habercisidir.",
          "İnsan bazen kapı kapanınca üzülür; bilmez ki arkasında daha hayırlı bir yol açılmıştır.",
          "Sabreden, kaybetmez; çünkü sabır, kazancı ahirete saklar.",
        ],
      },
      {
        title: "💛 Ahlâk ve Karakter",
        items: [
          "Güzel ahlâk, söylenmeden anlaşılmaktır.",
          "İnsanın büyüklüğü, affedebildiği yerde belli olur.",
          "Dil tatlı olunca, söz ağır bile olsa yumuşak iner gönüllere.",
          "Kibir, insanın kendi eliyle kalbine vurduğu prangadır.",
          "Karakter, kimsenin görmediği yerde yaptıklarınla belli olur.",
          "Güzel bir söz, kalpte açan bir çiçek gibidir; kokusu uzun süre unutulmaz.",
          "Kötülüğe kötülükle karşılık vermek sıradandır; fazilet, kötülüğe rağmen iyi kalabilmektir.",
        ],
      },
      {
        title: "🏠 Aile, Sevgi ve Dostluk",
        items: [
          "Ev, sadece duvarla değil; merhametle, sabırla ve sevgiyle ayakta durur.",
          "Sevgi, kusursuz insan bulmak değil; kusuruna rağmen vazgeçmemektir.",
          "Bir insanın değeri, en çok yanında huzur bulanların sayısıyla anlaşılır.",
          "Dost, seni menfaati için değil, varlığın için seven kişidir.",
          "Aile; kalbin yorulduğunda sığındığı limandır.",
          "Çocuklar nasihatle değil, gördükleriyle büyür; önce hâlini düzelt.",
        ],
      },
      {
        title: "🌍 Dünya, Ahiret ve Fani Hayat",
        items: [
          "Dünya misafirhanedir; eşyaya değil, hazırlığa kıymet ver.",
          "Ömrün, nefes sayısı kadar değil; hayra dokunduğu kadar uzundur.",
          "Gerçek zenginlik, elindekinin çokluğu değil, gönlündeki huzurdur.",
          "Dünya, peşinden koşanın elinden kaçar; terk edebilenin ayağına gelir.",
          "İnsan, toprağa yaklaştıkça değil; hakikatten uzaklaştıkça yaşlanır.",
          "Kabir, geride bıraktıkların değil; yanına aldıklarınla aydınlanır.",
        ],
      },
      {
        title: "💼 Çalışmak, Gayret ve İstikrar",
        items: [
          "Dua, gayretsiz; gayret, duasız kalmamalıdır.",
          "Az ama sürekli yapılan iş, çok olup yarım kalandan hayırlıdır.",
          "Emek vermeden gelen, kıymeti bilinmeden gider.",
          "Başarı, tesadüf değil; sabrın ve disiplinin meyvesidir.",
          "Kendini geliştirmeye harcadığın her dakika, geleceğinden borç aldığın bir yatırımdır.",
          "Bugün atmadığın adım, yarın şikâyet edeceğin mesafeye dönüşür.",
        ],
      },
      {
        title: "🧠 Nefis, Benlik ve İç Yolculuk",
        items: [
          "İnsan, başkasını değil; önce nefsini terbiye etmekle yükümlüdür.",
          "Nefsini susturamayan, kalbinin sesini duyamaz.",
          "İçinde barış olmayanın, etrafına verebileceği huzur azdır.",
          "Kendi kusurunu görmeyen, başkasının kusuruna mercek tutar.",
          "Nefsini büyük gören, hakikati küçümsemeye başlar.",
          "En zor yolculuk, insanın kendisiyle yüzleştiği yolculuktur.",
        ],
      },
      {
        title: "📚 İlim, Hikmet ve Öğrenmek",
        items: [
          "İlim, sadece bilgiyi çoğaltmak değil; kalbi olgunlaştırmaktır.",
          "Öğrendikçe kibri artan, ilim değil yük taşır.",
          "Her yeni bilgi, doğruya biraz daha yaklaşmaktır.",
          "Yanlış bildiğini düzeltmek, hiç bilmemekten daha faziletli bir başlangıçtır.",
          "İlim talebi, ömür boyu süren bir adanmışlıktır.",
          "Sorular aklı, merak kalbi diri tutar.",
        ],
      },
      {
        title: "🤝 Merhamet, Paylaşmak ve Yardımlaşma",
        items: [
          "Paylaşmadığın nimet, zamanla yük olur.",
          "Bir tebessüm, çoğu zaman söyleyemediğin teşekkürün en samimi hâlidir.",
          "Gönlüne dokunduğun her insan, ahiretine diktiğin bir fidan gibidir.",
          "Merhamet, karşılık beklemeden iyilik yapabilme cesaretidir.",
          "İhtiyacı varken veren, yokken veren kadar değerlidir.",
          "En büyük cömertlik, zamandan vermektir.",
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.sozTitle}>Güzel Sözler</Text>
        <Text style={styles.sozSubtitle}>
          Hikmetli, düşündüren ve kalbe dokunan kısa sözler
        </Text>

        <ScrollView style={{ marginTop: 16, width: "100%" }}>
          {CATEGORIES.map((cat, index) => (
            <View key={index} style={styles.sozSection}>
              <ScaledText baseSize={14} style={styles.sozSectionTitle}> {cat.title} </ScaledText>

              {cat.items.map((line, i) => (
                <View key={i} style={styles.sozCard}>
                  <ScaledText baseSize={14} style={styles.sozText}> {line} </ScaledText>
                </View>
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
    sozTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    sozSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    sozSection: {
      marginBottom: 20,
    },
    sozSectionTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 10,
    },

    sozCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 10,
      marginBottom: 8,
    },

    sozText: {
      fontSize: 15,
      lineHeight: 22,
      color: "#f2f2f7",
    },
});