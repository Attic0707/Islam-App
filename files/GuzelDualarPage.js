import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function GuzelDualarPage({ onBack }) {
    const CATEGORIES = [
      {
        title: "🕊 Günlük Dualar",
        items: [
          "Allah’ım! Bugünümü bereketli kıl, işlerimi kolaylaştır.",
          "Ey Rabbim! Beni doğru yoldan ayırma.",
          "Allah’ım! Beni, ailemi ve sevdiklerimi koru.",
          "Rabbim! Bugünü hayırlara vesile eyle.",
          "Allah’ım! Kalbime huzur, evime bereket ver.",
          "Ey Rabbim! Beni güçsüz bırakma, sabrımı artır.",
          "Rabbim! Rızkımı genişlet, bedenime sağlık ver.",
          "Allah’ım! Her işimde kolaylık ihsan eyle.",
          "Rabbim! Gönlümü ferahlıkla doldur.",
          "Allah’ım! Beni her türlü kötülükten muhafaza eyle.",
        ],
      },
      {
        title: "🕌 Namaz ve İbadet Duaları",
        items: [
          "Allah’ım! Namazlarımı huşu içinde kılmayı nasip et.",
          "Rabbim! Beni ibadetlerinde samimi kullarından eyle.",
          "Allah’ım! Günahlarımı affet, kalbimi temizle.",
          "Ey Rabbim! İbadetimi kabul eyle, hatalarımı bağışla.",
          "Allah’ım! Beni doğru yola ilet, o yolda sabit kıl.",
          "Rabbim! Senden af, mağfiret ve rıza dilerim.",
          "Ya Rab! Namazı kalbime huzur eyle.",
          "Allah’ım! Ruhumu ilimle, kalbimi imanla güçlendir.",
          "Rabbim! Beni gafletten uzaklaştır.",
          "Allah’ım! Haramdan koru, helal ile rızıklandır.",
        ],
      },
      {
        title: "💛 Aile ve Hane Duaları",
        items: [
          "Allah’ım! Aileme huzur, evime bereket ver.",
          "Rabbim! Anne babama rahmet, sağlık ve afiyet ihsan eyle.",
          "Allah’ım! Evlatlarımı doğru yola ilet, hayırlı eyle.",
          "Ey Rabbim! Yuvalarımıza sevgi ve merhamet ver.",
          "Allah’ım! Evliliğimizi huzurla, muhabbetle güçlendir.",
          "Rabbim! Evimizi kötülüklerden muhafaza eyle.",
          "Ya Rab! Ailemize birlik ve dirlik nasip et.",
          "Allah’ım! Sevdiklerimi her türlü kazadan koru.",
          "Ey Rabbim! Bize hayırlı nesiller nasip eyle.",
          "Allah’ım! Gönüllerimize merhamet yerleştir.",
        ],
      },
      {
        title: "🛡 Korunma Duaları",
        items: [
          "Allah’ım! Beni her türlü kötülükten koru.",
          "Ey Rabbim! Karanlıktan ve kötülüklerden Sana sığınırım.",
          "Allah’ım! Göz değmesinden muhafaza eyle.",
          "Rabbim! İçimdeki korkuları giderip kalbime huzur ver.",
          "Allah’ım! Gece ve gündüzün şerlerinden koru.",
          "Ey Rabbim! Zarar verecek olan her şeyden Sana sığınırım.",
          "Allah’ım! Yolumu aydınlat, beni kazadan beladan uzaklaştır.",
          "Rabbim! Üzerimdeki tüm kötülük perdelerini kaldır.",
          "Allah’ım! Düşmanların şerrinden beni koru.",
          "Ey Rabbim! Bedenimi hastalıktan, kalbimi günahtan koru.",
        ],
      },
      {
        title: "💼 İş, Rızık ve Bereket Duaları",
        items: [
          "Rabbim! Rızkımı helalinden bol bol ver.",
          "Allah’ım! Çalışmalarımı kolaylaştır, bereketli kıl.",
          "Ey Rabbim! İşlerimde başarı ve kolaylık ihsan eyle.",
          "Allah’ım! Emeklerimi boşa çıkarma.",
          "Rabbim! Helal rızık kapılarını aç.",
          "Allah’ım! Borçlarımı ödemeyi kolaylaştır.",
          "Ey Rabbim! Aklıma hikmet, işime bereket ver.",
          "Allah’ım! Geçimimi huzurlu ve bereketli eyle.",
          "Rabbim! Hayırlı kazanç ve güzel fırsatlar nasip eyle.",
          "Allah’ım! İşimde şer olanı uzaklaştır, hayrı yakınlaştır.",
        ],
      },
      {
        title: "💖 Kalp, Huzur ve Sabır Duaları",
        items: [
          "Rabbim! Kalbime huzur ver, sıkıntılarımı gider.",
          "Allah’ım! İçimi ferahlıkla doldur.",
          "Ey Rabbim! Beni sabredenlerden eyle.",
          "Allah’ım! Üzüntüleri sevince dönüştür.",
          "Rabbim! Kederimi kaldır, gönlümü genişlet.",
          "Allah’ım! Bana hikmet, sükûnet ve iyilik nasip et.",
          "Ey Rabbim! Kalbimdeki yükleri hafiflet.",
          "Allah’ım! Endişelerimi gider, bana güç ver.",
          "Rabbim! Sana sığınırım; kalbime huzur ver.",
          "Allah’ım! Beni öfkemden koru, yumuşak kalpli eyle.",
        ],
      },
      {
        title: "💫 Zorluk, Hastalık ve Sınav Anı Duaları",
        items: [
          "Allah’ım! Sıkıntılarımı kolaylığa çevir.",
          "Ey Rabbim! Hastalara şifa ver, dertlilere deva ver.",
          "Allah’ım! Acıları dindir, yaraları sar.",
          "Rabbim! Zor işimi kolay eyle, bana güç ver.",
          "Allah’ım! Sınavlarımı kolaylaştır, zihnimi aç.",
          "Rabbim! Beni en hayırlı sonuca ulaştır.",
          "Allah’ım! Sabırsızlıktan ve çaresizlikten Sana sığınırım.",
          "Ey Rabbim! Dermanı olmayan dert verme.",
          "Allah’ım! Beni yalnız bırakma, kalbimi kuvvetlendir.",
          "Rabbim! Şifa, kolaylık ve ferahlık ihsan et.",
        ],
      },
      {
        title: "🙏 Tövbe ve Bağışlanma Duaları",
        items: [
          "Rabbim! Günahlarımı affet, beni bağışla.",
          "Allah’ım! Nefsimin kötülüklerinden Sana sığınırım.",
          "Ey Rabbim! Beni doğru yola ilet, hatalarımı sil.",
          "Allah’ım! Affını ve merhametini dilerim.",
          "Rabbim! Beni isyanlardan uzaklaştır.",
          "Allah’ım! Bile isteye veya bilmeden yaptığım tüm günahları bağışla.",
          "Ey Rabbim! Kalbimi temizle, ruhumu arındır.",
          "Allah’ım! Beni affına layık kullarından eyle.",
          "Rabbim! Sana yöneldim, beni geri çevirme.",
          "Allah’ım! Günah yükümü hafiflet.",
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.duaTitle}>Güzel Dualar</Text>
        <Text style={styles.duaSubtitle}>
          Günlük hayatta okunabilecek kısa ve anlamlı dualar
        </Text>

        <ScrollView style={{ marginTop: 16, width: "100%" }}>
          {CATEGORIES.map((cat, index) => (
            <View key={index} style={styles.duaSection}>
              <ScaledText baseSize={14} style={styles.duaSectionTitle}> {cat.title} </ScaledText>

              {cat.items.map((d, i) => (
                <View key={i} style={styles.duaCard}>
                  <ScaledText baseSize={14} style={styles.duaText}> {d} </ScaledText>
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
    duaTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    duaSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    duaSection: {
      marginBottom: 20,
    },

    duaSectionTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 10,
    },
    duaCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 10,
      marginBottom: 8,
    },

    duaText: {
      fontSize: 15,
      lineHeight: 22,
      color: "#f2f2f7",
    },
});