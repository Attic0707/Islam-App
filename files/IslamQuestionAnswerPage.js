import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function IslamQuestionAnswerPage({ onBack }) {
    const QA = [
      {
        q: "Namaz neden önemlidir?",
        a: "Namaz, düzenli şekilde Allah’a yöneliş ve kulluğun temel ibadetidir. Ruhsal denge, disiplin ve manevi bağ kurmayı sağlar."
      },
      {
        q: "Oruç tutmanın amacı nedir?",
        a: "Sabır, nefsi terbiye, empati ve şükür bilinci kazandırır. İnsan iradesini güçlendirir."
      },
      {
        q: "Dua nedir?",
        a: "Kulun Allah’a içten bir şekilde yönelmesi, isteklerini ve şükrünü ifade etmesidir."
      },
      {
        q: "Abdest neden alınır?",
        a: "Temizlik, arınma ve ibadete hazırlanma amacıyla bazı organların yıkanmasıdır."
      },
      {
        q: "Günah nedir?",
        a: "Allah’ın yasakladığı davranışlara günah denir. Ahlak ve vicdanı zedeleyen işlerdir."
      },
      {
        q: "Tesettür ne demektir?",
        a: "Mütevazı giyinmek, davranışta ve görünümde ölçülü olmaktır."
      },
      {
        q: "Zekât nedir?",
        a: "Maddi imkanı yerinde olan kişinin, malının bir kısmını ihtiyaç sahipleriyle paylaşmasıdır."
      },
      {
        q: "Hac neyi ifade eder?",
        a: "Mekke’de yapılan kutsal ziyaret ve ibadetler bütünüdür. Birlik ve kardeşliği kuvvetlendirir."
      },
      {
        q: "Umre ile hac arasında fark nedir?",
        a: "Umre yılın çoğu zaman yapılabilir; hac ise belirli günlerde yapılan farz ibadettir."
      },
      {
        q: "Gıybet neden sakıncalıdır?",
        a: "Birini arkasından incitici sözlerle konuşmak toplumsal güveni ve kardeşliği zedeler."
      },
      {
        q: "Sabır neden önemlidir?",
        a: "İnsanın zorluklar karşısında metanet göstermesini ve doğru duruşunu korumasını sağlar."
      },
      {
        q: "Kul hakkı nedir?",
        a: "Bir insanın başka bir insana yaptığı haksızlıktır. Helalleşmeyi gerektirir."
      },
      {
        q: "Tevekkül ne demektir?",
        a: "Elinden geleni yaptıktan sonra sonucu Allah’a bırakmak ve güven duymaktır."
      },
      {
        q: "Kader ne anlama gelir?",
        a: "Allah’ın her şeyi bilmesi ve evrende bir düzen yaratmasıdır."
      },
      {
        q: "Şükür neden gereklidir?",
        a: "İnsanın sahip olduklarının farkına varmasını ve memnuniyetini güçlendirir."
      },
      {
        q: "Tövbe nedir?",
        a: "İnsanın hatalarından dönmesi, pişmanlık duyması ve daha iyisini yapmaya yönelmesidir."
      },
      {
        q: "Sadaka nedir?",
        a: "Karşılık beklemeden yapılan gönüllü yardımdır."
      },
      {
        q: "Namazda kıyam ne demektir?",
        a: "Namazda ayakta durma, dikkat ve saygı halidir."
      },
      {
        q: "Mümin kime denir?",
        a: "Allah’a ve temel inanç esaslarına gönülden inanan kişiye denir."
      },
      {
        q: "İhlas neden önemlidir?",
        a: "İbadet ve davranışlarda samimiyet göstermektir. Samimiyet ibadetin ruhudur."
      },
      {
        q: "Israf nedir?",
        a: "Gereksiz harcama ve aşırı tüketimdir. Dengeyi ve bereketi bozar."
      },
      {
        q: "Merhamet neden önemlidir?",
        a: "İnsan ilişkilerini iyileştirir, toplumda adalet ve huzur sağlar."
      },
      {
        q: "Niyet neyi ifade eder?",
        a: "Bir işi bilinçli şekilde Allah rızası için yapmayı amaçlamaktır."
      },
      {
        q: "Temizlik neden önemlidir?",
        a: "Hem ibadetin hem de yaşamın temelini oluşturur. Beden ve ruh sağlığı için gereklidir."
      },
      {
        q: "Kıyamet günü ne demektir?",
        a: "Dünyanın sona ermesi ve insanların yaptıklarının karşılığını görmesi anlamına gelir."
      },
      {
        q: "Ahirete iman ne sağlar?",
        a: "İnsanın davranışlarına yön verir, sorumluluk bilinci kazandırır."
      },
      {
        q: "Sabah namazı kaç rekattır?",
        a: "Genel bilgi: 2 rekât farz, 2 rekât sünnettir."
      },
      {
        q: "Günah işlemiş biri ne yapmalıdır?",
        a: "Pişmanlık duyup tövbe etmeli, kendini geliştirmeye çalışmalıdır."
      },
      {
        q: "İslam’da kardeşlik ne anlama gelir?",
        a: "İnsanların birbirine yardım etmesi, merhamet göstermesi ve dayanışmasıdır."
      },
      {
        q: "İbadet neden yapılır?",
        a: "Allah’a yakınlaşmak, iç huzur bulmak ve insanın iradesini güçlendirmek için."
      },
      {
        q: "Doğruluk neden önemlidir?",
        a: "Güven oluşturur ve toplumsal ilişkileri güçlendirir."
      },
      {
        q: "Tevazu ne demektir?",
        a: "Alçakgönüllülük; insanın kendini gereksiz yere yüceltmemesi."
      },
      {
        q: "Nafile ibadet nedir?",
        a: "Farz olmayan ama yapılınca sevap olan ibadetlerdir."
      },
      {
        q: "Kıble nedir?",
        a: "Namaz kılarken yönelinen istikamet; Kâbe yönü."
      },
      {
        q: "Zikir nedir?",
        a: "Allah’ı anmak, O’nu hatırlamak ve O’na yakınlaşmayı amaçlamaktır."
      },
      {
        q: "Selam vermek neden önemlidir?",
        a: "Barış ve iyi dileklerin ifadesidir; insanların arasını güzelleştirir."
      },
      {
        q: "İnsan neden imtihan edilir?",
        a: "Hayatta yapılan seçimlerin kişiyi olgunlaştırdığı düşünülür."
      },
      {
        q: "İslam’da ilim öğrenmek neden değerlidir?",
        a: "Bilgi insanı geliştirir, doğruyu bulmasını sağlar."
      },
      {
        q: "Bencillik neden zararlıdır?",
        a: "Toplumsal ilişkileri bozar, merhameti zayıflatır."
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.qaTitle}>İslami Soru - Cevap</Text>
        <Text style={styles.qaSubtitle}>
          Dini konularda kısa, sade ve bilgilendirici cevaplar
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {QA.map((item, index) => (
            <View key={index} style={styles.qaCard}>
              <ScaledText baseSize={14} style={styles.qaQuestion}>{item.q}</ScaledText>
              <ScaledText baseSize={14} style={styles.qaAnswer}>{item.a}</ScaledText>
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
    qaTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 4,
    },

    qaSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    qaCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      padding: 16,
      borderRadius: 12,
      marginBottom: 14,
    },

    qaQuestion: {
      fontSize: 17,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 6,
    },

    qaAnswer: {
      fontSize: 15,
      color: "#f2f2f7",
      lineHeight: 22,
    },
});