import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function DiniSozlukPage({ onBack }) {
    const TERMS = [
      { term: "Abdest", def: "Namaz için gerekli olan, belirli organların yıkanıp temizlenmesi." },
      { term: "Abd", def: "Kul, Allah’ın yarattığı insan." },
      { term: "Âhiret", def: "Dünya hayatından sonra başlayan ebedî hayat." },
      { term: "Âlim", def: "Bilgi sahibi, ilim ehli kimse." },
      { term: "Amin", def: "Dua sonunda kullanılan kabul dileği ifadesi." },
      { term: "Araf", def: "Cennet ve cehennem arasındaki yerin adı." },
      { term: "Arefe", def: "Bayramdan bir önceki gün." },
      { term: "Asr-ı Saadet", def: "Peygamberimizin yaşadığı kutlu dönem." },
      { term: "Ayette", def: "Kur’an’daki her bir cümle." },

      { term: "Bâki", def: "Ebedî olan, yok olmayan." },
      { term: "Basma", def: "Rahmet dileği için 'Bismillah' demek." },
      { term: "Bereket", def: "Hayır ve iyiliğin artması, çoğalması." },
      { term: "Bidat", def: "Dinde sonradan ortaya çıkan uygulama." },
      { term: "Bürhan", def: "Kesin delil, açık kanıt." },

      { term: "Cami", def: "Toplu ibadet edilen yer." },
      { term: "Celse", def: "Namazda oturuş hâli." },
      { term: "Cenabet", def: "Büyük abdest hâli; gusül gerektiren durum." },
      { term: "Cuma", def: "Müslümanların haftalık toplu ibadet günü." },

      { term: "Dua", def: "Allah’tan istekte bulunmak, yakarmak." },
      { term: "Dünya", def: "İnsanın içinde yaşadığı geçici hayat." },
      { term: "Derviş", def: "Tevazu sahibi, manevi eğitimde olan kimse." },

      { term: "Ecir", def: "İbadet ve iyilik karşılığı sevap." },
      { term: "Edep", def: "Güzel davranış ve ahlâk kuralları." },
      { term: "Elhamdülillah", def: "Şükür ifadesi; tüm övgüler Allah’a aittir." },
      { term: "Emanet", def: "Korumak için bırakılan güvenilir şey." },
      { term: "Ensar", def: "Medineli Müslümanlar." },

      { term: "Fatiha", def: "Kur’an’ın ilk suresi." },
      { term: "Fıtır Sadakası", def: "Ramazan sonunda verilen yardım." },
      { term: "Fidye", def: "Sağlık nedeniyle oruç tutamayanların verdiği bedel." },
      { term: "Fıkıh", def: "İslam hukuk ilmi." },

      { term: "Gaflet", def: "Farkındalıksızlık, unutkanlık hâli." },
      { term: "Ganimet", def: "Savaş sonrası elde edilen mallar." },
      { term: "Gönül", def: "Kalbin manevi yönü; hissiyatın merkezi." },

      { term: "Hac", def: "Mekke'ye gidilerek yapılan kutsal ibadet." },
      { term: "Hacet", def: "İhtiyaç, istek." },
      { term: "Hafız", def: "Kur’an’ı ezberleyen kimse." },
      { term: "Halife", def: "Peygamber sonrası toplumsal lider." },
      { term: "Haram", def: "Yapılması yasaklanan şey." },
      { term: "Helal", def: "Yapılması serbest ve uygun olan şey." },
      { term: "Hicret", def: "Göç, özellikle Mekke’den Medine’ye yapılan göç." },

      { term: "İbadet", def: "Allah’a yakınlık için yapılan her davranış." },
      { term: "İhlas", def: "Amelde samimiyet, içtenlik." },
      { term: "İkindi", def: "Günün ikinci namaz vakti." },
      { term: "İlim", def: "Bilgi, öğrenme." },
      { term: "İman", def: "Allah’a ve gönderdiklerine inanmak." },
      { term: "İnfak", def: "Allah rızası için mal harcamak." },
      { term: "İmsak", def: "Oruç için yeme-içmenin kesildiği an." },

      { term: "Kadir Gecesi", def: "Kur’an’ın indirildiği mübarek gece." },
      { term: "Kâbe", def: "Mekke’deki kutsal mabet." },
      { term: "Kaza", def: "Vaktinde yapılamayan ibadetin sonradan yapılması." },
      { term: "Kıraat", def: "Kur’an okuma." },
      { term: "Kıyam", def: "Namazda ayakta durmak." },

      { term: "Mescid", def: "İbadet edilen yer." },
      { term: "Mezhep", def: "Yorum ve uygulama farkları bulunan ekoller." },
      { term: "Mikâtil", def: "İhrama girilen sınır bölgeleri." },
      { term: "Mihrap", def: "Namazda imamın durduğu yer." },

      { term: "Namaz", def: "Günlük beş vakit yapılan temel ibadet." },
      { term: "Nafile", def: "Farz olmayan, isteğe bağlı ibadet." },
      { term: "Niyet", def: "İbadete kalben yönelme." },

      { term: "Oruç", def: "İmsaktan iftara kadar yeme-içmeden uzak durma." },
      { term: "Ölçü", def: "Adalet ve doğruluk anlamında kullanılır." },

      { term: "Rahmet", def: "Allah’ın merhameti ve lütfu." },
      { term: "Rekat", def: "Namazın bir bölümü." },
      { term: "Rızık", def: "Allah’ın verdiği nimetler." },
      { term: "Riyaset", def: "Yöneticilik, önderlik." },

      { term: "Sabr", def: "Zorluklara karşı dayanma gücü." },
      { term: "Sadaka", def: "Gönüllü yardım." },
      { term: "Sahur", def: "Oruç öncesi yapılan yemek." },
      { term: "Sünnet", def: "Peygamberimizin örnek söz ve davranışları." },

      { term: "Tefekkür", def: "Derin düşünme." },
      { term: "Tevhid", def: "Allah’ın birliği inancı." },
      { term: "Tesettür", def: "Örtünme bilinci." },
      { term: "Tevekkül", def: "Allah’a güvenmek ve dayanmak." },
      { term: "Tilavet", def: "Kur’an okuma." },

      { term: "Umre", def: "Hac dışında yapılan Kâbe ziyareti." },
      { term: "Ümmet", def: "İnananlar topluluğu." },

      { term: "Vacip", def: "Dinde yapılması güçlü şekilde istenen şey." },
      { term: "Vahiy", def: "İlahi mesaj." },
      { term: "Vuslat", def: "Manevi anlamda kavuşma." },

      { term: "Zekât", def: "Maddi imkanı olanların yaptığı yıllık yardım." },
      { term: "Zikr", def: "Allah’ı anmak." },
      { term: "Zühd", def: "Dünya hırsından uzak yaşamak." },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.sozlukTitle}>Dini Sözlük</Text>
        <Text style={styles.sozlukSubtitle}>
          Temel dini kavramlar ve kısa açıklamalar
        </Text>

        <ScrollView style={{ marginTop: 12, width: "100%" }}>
          {TERMS.map((item, index) => (
            <View key={index} style={styles.sozlukCard}>
              <ScaledText baseSize={14} style={styles.sozlukTerm}>{item.term}</ScaledText>
              <ScaledText baseSize={14} style={styles.sozlukDef}>{item.def}</ScaledText>
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
    sozlukTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 4,
    },

    sozlukSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    sozlukCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      padding: 14,
      borderRadius: 12,
      marginBottom: 10,
    },

    sozlukTerm: {
      fontSize: 17,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 4,
    },

    sozlukDef: {
      fontSize: 15,
      color: "#f2f2f7",
      lineHeight: 22,
    },
});