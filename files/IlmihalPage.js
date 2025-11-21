import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function IlmihalPage({ onBack }) {
    const SECTIONS = [
      {
        key: "itikad",
        title: "1. Bölüm – İtikad (İnanç Esasları)",
        description:
          "Bu bölümde dinin tanımı, dine olan ihtiyaç, İslam’ın temel inanç esasları ve bunların insan hayatına yansımaları özetlenir.",
        items: [
          {
            heading: "Din ve dine olan ihtiyaç",
            body:
              "Din; insanın Allah ile, kendisiyle ve diğer varlıklarla ilişkisini düzenleyen ilahî bir sistem olarak tanımlanır. İnsan, varoluşunu anlamlandırmak, iyi–kötü ayrımını sağlıklı yapabilmek ve hayatına bir yön verebilmek için vahye ihtiyaç duyar."
          },
          {
            heading: "İslam’da mezhepler",
            body:
              "Mezhep; Kur’an ve Sünnet’i anlama ve hayata uygulama çabalarının zamanla belirli bir yöntem etrafında şekillenmiş halidir. İnançta (itikadî) ve ibadette (amelî) farklı mezhepler bulunur; Hanefî, Şafiî, Mâlikî ve Hanbelî mezhepleri bunların başlıca örnekleridir."
          },
          {
            heading: "İman esasları",
            body:
              "İslam inancının temelini; Allah’a, meleklere, kitaplara, peygamberlere, ahiret gününe ve kadere iman oluşturur. Bu esaslara gönülden tasdik ve dil ile ikrar, mü’min olmanın temel şartı kabul edilir."
          },
          {
            heading: "Allah’a iman ve Allah’ın sıfatları",
            body:
              "Allah’ın varlığı, birliği, hiçbir şeye benzememesi; ezelî ve ebedî olması; işitmesi, görmesi, bilmesi ve dilediğini yaratması gibi sıfatlar, klasik ilmihal kitaplarında ayrıntılı biçimde açıklanır."
          },
          {
            heading: "Peygamberler, vahiy ve kutsal kitaplar",
            body:
              "Allah’ın insanlara hidayet rehberi olarak gönderdiği peygamberler ve onlara indirilen ilahî kitaplar özetlenir. Kur’an-ı Kerim’in son ilahî kitap olduğu, Peygamber Efendimiz’in de son peygamber olduğu vurgulanır."
          },
          {
            heading: "Ahirete iman ve kader",
            body:
              "Ölümden sonraki hayat, diriliş, hesap, cennet ve cehennem; kader ve kaza inancı, sabır, tevekkül ve çalışmanın önemiyle birlikte ele alınır. İmanın insana umut, güven ve sorumluluk bilinci kazandırdığı ifade edilir."
          }
        ]
      },
      {
        key: "ibadet",
        title: "2. Bölüm – İbadet (Kulluk Görevleri)",
        description:
          "Bu bölümde ibadet kavramı, ibadetlerin hikmeti ve Müslümanın hayatında namaz, oruç, zekât ve hac gibi temel ibadetler özetlenir.",
        items: [
          {
            heading: "İbadet kavramı ve faydaları",
            body:
              "İbadet; Allah’ın rızasını kazanma niyetiyle yapılan bütün söz ve davranışları kapsar. İbadetler, insanın Rabbine bağlılığını güçlendirirken, bireysel disiplin ve toplumsal dayanışmaya da katkı sağlar."
          },
          {
            heading: "İslam’ın şartları ve mükellefiyet",
            body:
              "Kelime-i şehadet, namaz, oruç, zekât ve hac, İslam’ın temel esasları olarak sayılır. Akıllı ve ergenlik çağına ulaşmış her Müslüman bu ibadetlerle yükümlü kabul edilir."
          },
          {
            heading: "Temizlik, abdest, gusül ve teyemmüm",
            body:
              "İbadetin ön şartı olarak beden, elbise ve ibadet mekânının temizliği ele alınır. Abdestin ve guslün farzları, sünnetleri ve bozan durumlar; suya erişim olmadığında başvurulan teyemmümün uygulaması özetlenir."
          },
          {
            heading: "Namaz ibadeti",
            body:
              "Beş vakit namazın önemi, vakitleri, farz–vacip–sünnet ayırımı, namazın sahih olmasının şartları, cemaatle namaz, cuma ve bayram namazları ile cenaze namazı gibi başlıklar ilmihal yapısına uygun şekilde açıklanır."
          },
          {
            heading: "Oruç, zekât ve hac",
            body:
              "Ramazan orucu, farz olma şartları, orucu bozan durumlar ve kazâ–kefaret meseleleri; zekât ve sadaka ile sosyal yardımlaşma; hac ve umrenin farzları, vacipleri, menâsik ve ihramla ilgili özet bilgiler verilir."
          }
        ]
      },
      {
        key: "helal_haram",
        title: "3. Bölüm – Helaller ve Haramlar",
        description:
          "Bu bölümde yiyecek–içecekler, kazanç yolları ve günlük hayatla ilgili helal–haram sınırları ele alınır.",
        items: [
          {
            heading: "Helal ve haramın anlamı",
            body:
              "Helal; yapılmasına izin verilmiş, dinen serbest olan fiil ve kazançları; haram ise kesin delillerle yasaklanmış söz, fiil ve kazançları ifade eder. Mü’minin hedefi, mümkün olduğunca şüpheli şeylerden de uzak durmaktır."
          },
          {
            heading: "Yiyecek ve içeceklerde helal–haram",
            body:
              "Besmelesiz ve usulüne uygun kesilmeyen hayvanlar, sarhoş edici içkiler ve zararlı maddeler gibi başlıklar altında, günlük hayatta karşılaşılan temel hükümler ana hatlarıyla açıklanır."
          },
          {
            heading: "Kazançta helal–haram",
            body:
              "Faiz, hile, rüşvet, ölçü–tartıda eksiltme, emek sömürüsü gibi haram kazanç yolları; emek ve karşılıklı rızaya dayalı ticaret gibi helal yollarla karşılaştırılır."
          },
          {
            heading: "Hayvan kesimi, av ve eti yenmeyenler",
            body:
              "Hayvan kesiminde dikkat edilmesi gereken şartlar, kesim adabı, eti yenilen–yenmeyen hayvanlar, avcılıkla ilgili temel esaslar özetlenir."
          },
          {
            heading: "Ödünç, bağış ve emanet",
            body:
              "Ödünç alıp–verme, hibe (bağış) ve emanetin dinî ve ahlaki boyutları; karşılıklı güveni zedelemeden, kul hakkına girmeden bu ilişkilerin nasıl yürütülmesi gerektiği anlatılır."
          }
        ]
      },
      {
        key: "aile_toplum",
        title: "4. Bölüm – Aile Hayatı ve Toplumsal İlişkiler",
        description:
          "İlmihalin devam eden kısımlarında, aile, nikâh, boşanma, miras, komşuluk, akrabalık ve toplumsal sorumluluklar üzerinde durulur.",
        items: [
          {
            heading: "Nikâh ve aile düzeni",
            body:
              "Evliliğin amacı, nikâh akdinin temel şartları, eşlerin hak ve sorumlulukları, aile içi adalet ve merhametin önemi vurgulanır."
          },
          {
            heading: "Boşanma, nafaka ve miras",
            body:
              "Boşanmanın, en son çare olarak başvurulması gereken bir yol olduğu; eşlerin, çocukların ve yakınların haklarının korunmasına dair temel ilkeler özetlenir."
          },
          {
            heading: "Komşuluk, akrabalık ve toplum",
            body:
              "Komşuya iyilik, akrabalık bağlarını gözetme, ihtiyaç sahiplerine yardım etme, kul hakkından sakınma gibi toplumsal ibadet sayılan ahlaki sorumluluklar ele alınır."
          }
        ]
      },
      {
        key: "ahlak",
        title: "5. Bölüm – İslam Ahlakı ve Kişisel Gelişim",
        description:
          "Son olarak kişisel ahlak, güzel huylar ve sakınılması gereken kötü huylar üzerinde durulur.",
        items: [
          {
            heading: "Güzel ahlakın önemi",
            body:
              "Doğruluk, emanet, adalet, sabır, kanaat, cömertlik, haya gibi güzel ahlak özelliklerinin hem bireysel hem de toplumsal hayata katkısı anlatılır."
          },
          {
            heading: "Kaçınılması gereken kötü huylar",
            body:
              "Yalan, gıybet, iftira, kibir, haset, cimrilik, israf gibi davranışların kalbi kirlettiği ve insan ilişkilerini zedelediği vurgulanır."
          },
          {
            heading: "Kul hakkı ve sorumluluk bilinci",
            body:
              "İbadetlerin yanı sıra, insanlara karşı dürüst ve adil olmanın da dinî bir sorumluluk olduğu; kul hakkının affının zor oluşu üzerinde durulur."
          }
        ]
      }
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.ilmihalTitle}>İslam İlmihali</Text>
        <Text style={styles.ilmihalSubtitle}>
          Yapı ve başlıklar, Diyanet İşleri Başkanlığı’nın resmî “İslam İlmihali”
          kitabının bölümlerini temel alarak kısaca özetlenmiştir.
        </Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          {SECTIONS.map((section) => (
            <View key={section.key} style={styles.ilmihalSection}>
              <ScaledText baseSize={14} style={styles.ilmihalSectionTitle}>{section.title}</ScaledText>

              {!!section.description && (
                <ScaledText baseSize={14} style={styles.ilmihalSectionDesc}>{section.description}</ScaledText>
              )}

              {section.items.map((item) => (
                <View key={item.heading} style={styles.ilmihalCard}>
                  <ScaledText baseSize={14} style={styles.ilmihalHeading}>{item.heading}</ScaledText>
                  <ScaledText baseSize={14} style={styles.ilmihalText}>{item.body}</ScaledText>
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
    ilmihalTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    ilmihalSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    ilmihalSection: {
      marginBottom: 18,
    },
    ilmihalSectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#ffdd55",
      marginBottom: 6,
    },
    ilmihalSectionDesc: {
      fontSize: 14,
      color: "#d0d7e2",
      lineHeight: 20,
      marginBottom: 8,
    },
    ilmihalCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 10,
      marginBottom: 8,
    },
    ilmihalHeading: {
      fontSize: 15,
      fontWeight: "600",
      color: "#ffffff",
      marginBottom: 4,
    },
    ilmihalText: {
      fontSize: 14,
      color: "#f2f2f7",
      lineHeight: 20,
    },

});