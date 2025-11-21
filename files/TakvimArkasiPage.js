import React, {useEffect, useState} from "react";
import {TouchableOpacity, View, Text, StyleSheet } from "react-native";
import ScaledText from "./ScaledText";
const DEBUG = false;

export default function TakvimArkasiPage({ onBack }) {
    const STORIES = [
      {
        id: 1,
        title: "İhlasla Yapılan Küçük Amel",
        body:
          "Bir âlim talebelerine şöyle der: 'Allah katında makbul olan amel, en çok görünen değil; en ihlasla yapılan ameldir.' " +
          "Takvim yapraklarının arkasında anlatılan nice kıssalar gibi, bazen küçük bir sadaka, içten bir tövbe veya kimse bilmezken kılınan iki rekât namaz, " +
          "insanın kalbini bambaşka bir yere taşır.",
        source: "Kaynak: Tasavvuf kitaplarından nakledilen kıssa."
      },
      {
        id: 2,
        title: "Gizli Sadakanın Bereketi",
        body:
          "Eski zamanlarda bir tüccar, kazancının bir kısmını kimseye söylemeden gizlice infak ederdi. " +
          "Bir gün büyük bir zarar ettiğini sandı, ama hesaplara bakınca fark etti ki gizli sadakası kadar bir kısmı muhafaza olmuştu. " +
          "Şöyle dedi: 'Demek ki gizli sadaka, sadece ahireti değil, dünyayı da koruyor.'",
        source: "Kaynak: İslâmî nasihat kitaplarında geçen kıssalardan derlenmiştir."
      },
      {
        id: 3,
        title: "Bir Selamın Değeri",
        body:
          "Bir genç, her gün camiye giderken kapıdaki yaşlı adama selam verir, hâlini hatırını sorardı. " +
          "Günlerden bir gün geciktiğinde, yaşlı adam 'Bugün selam eksik kaldı, içim daraldı.' dedi. " +
          "Genç o an anladı ki, küçük gördüğü selamı, bir kalbin günlük rızkı hâline gelmişti.",
        source: "Kaynak: Sohbet meclislerinde anlatılan ibretlik kıssa."
      },
      {
        id: 4,
        title: "Niyetin Gücü",
        body:
          "İki kişi aynı ameli işler; biri sevap kazanır, diğeri ise neredeyse hiç kazanamaz. " +
          "Aradaki fark, niyettir. Takvim arkalarında sıkça hatırlatıldığı gibi: 'Ameller, niyetlere göredir.' " +
          "İnsan, günlük işlerine bile 'Allah rızası için' niyeti ekleyerek sıradanı ibadete çevirebilir.",
        source: "Kaynak: Hadis-i şerif meali (Buhârî)."
      },
      {
        id: 5,
        title: "Kalbi Yumuşatan Ziyaret",
        body:
          "Bir kimse uzun süredir daraldığını, namaza dahi zor kalktığını söyleyince, bir âlim ona 'Bir hasta ziyareti yap, bir de kabristana uğra.' der. " +
          "Kısa bir süre sonra adam geri gelir ve şunu söyler: 'Hiçbir nasihat, o ziyaretler kadar kalbimi yumuşatmadı.' " +
          "Bazen bir ziyaret, sayfalar dolusu yazıdan daha çok etki eder.",
        source: "Kaynak: Vaaz ve sohbetlerde anlatılan kıssalardan derlenmiştir."
      }
    ];

    const [story, setStory] = useState(null);
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * STORIES.length);
      setStory(STORIES[randomIndex]);
    }, []);

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.takvimTitle}>Takvim Arkası</Text>
        <Text style={styles.takvimSubtitle}>
          Bugün için seçilmiş kısa bir dini kıssa veya hatırlatma.
        </Text>

        {story && (
          <View style={styles.takvimCard}>
            <ScaledText baseSize={16} style={styles.takvimStoryTitle}> {story.title} </ScaledText>
            <ScaledText baseSize={16} style={styles.takvimStoryBody}> {story.body} </ScaledText>
            {story.source ? (
              <ScaledText baseSize={16} style={styles.takvimStorySource}> {story.source} </ScaledText>
            ) : null}
          </View>
        )}

        {!story && (
          <ScaledText baseSize={16} style={styles.verseLoading}> Bugünkü kıssa yüklenemedi. Daha sonra tekrar deneyebilirsin. </ScaledText>
        )}
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
    takvimTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    takvimSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 16,
    },
    takvimCard: {
      marginTop: 8,
      backgroundColor: "rgba(255,255,255,0.06)",
      borderRadius: 12,
      padding: 16,
    },
    takvimStoryTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#ffdd55",
      marginBottom: 10,
    },
    takvimStoryBody: {
      fontSize: 15,
      color: "#f2f2f7",
      lineHeight: 22,
      marginBottom: 10,
    },
    takvimStorySource: {
      fontSize: 13,
      color: "#b0b8c5",
      textAlign: "right",
      marginTop: 4,
    },
    verseLoading: {
      fontSize: 14,
      color: "#9aa4b8",
      textAlign: "center",
    },
});