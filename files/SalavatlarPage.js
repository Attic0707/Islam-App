import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function SalavatlarPage({ onBack }) {
    const GROUPS = [
      {
        title: "✨ Kısa ve Sık Okunan Salavatlar",
        items: [
          {
            arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
            trans: "Allahumme salli alâ Muhammed.",
            meaning: "Allah’ım! Muhammed’e salât eyle.",
            note: "En kısa ve en temel salavat ifadesi."
          },
          {
            arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
            trans: "Allahumme salli alâ seyyidinâ Muhammed.",
            meaning: "Allah’ım! Efendimiz Muhammed’e salât eyle.",
            note: "Günlük zikirlerde çokça kullanılan kısa bir salavat."
          },
          {
            arabic: "صَلَّى اللَّهُ عَلَى مُحَمَّدٍ",
            trans: "Sallallahu alâ Muhammed.",
            meaning: "Allah, Muhammed’e salât ve rahmet eylesin.",
            note: "Peygamberimizin ismi anıldığında söylenen kısa ifade."
          },
          {
            arabic: "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
            trans: "Sallallahu aleyhi ve sellem.",
            meaning: "Allah’ın salâtı ve selâmı onun üzerine olsun.",
            note: "Hadis ve siyer metinlerinde geçen klasik salavat."
          },
        ],
      },
      {
        title: "🕌 Namaz ve Dua Sonunda Okunan Salavatlar",
        items: [
          {
            arabic:
              "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
            trans:
              "Allahumme salli alâ Muhammedin ve alâ âli Muhammed, kemâ salleyte alâ İbrâhîme ve alâ âli İbrâhîm, inneke hamîdun mecîd.",
            meaning:
              "Allah’ım! İbrahim’e ve ailesine salât ettiğin gibi, Muhammed’e ve ailesine de salât eyle. Şüphesiz Sen hamde lâyık ve yücelik sahibisin.",
            note: "Tahiyyattan sonra okunan meşhur salavât-ı şerife (Salli)."
          },
          {
            arabic:
              "اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
            trans:
              "Allahumme bârik alâ Muhammedin ve alâ âli Muhammed, kemâ bârekte alâ İbrâhîme ve alâ âli İbrâhîm, inneke hamîdun mecîd.",
            meaning:
              "Allah’ım! İbrahim’e ve ailesine bereket verdiğin gibi, Muhammed’e ve ailesine de bereket ver. Şüphesiz Sen hamde lâyık ve yücelik sahibisin.",
            note: "Salli’den sonra okunan ‘Bârik’ salavatı."
          },
          {
            arabic:
              "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ النَّبِيِّ الأُمِّيِّ وَعَلَى آلِهِ وَسَلِّمْ تَسْلِيمًا",
            trans:
              "Allahumme salli alâ Muhammedin’n-nebiyyi’l-ummiyyî ve alâ âlihî ve sellim teslîmâ.",
            meaning:
              "Allah’ım! Ümmî peygamber Muhammed’e ve âline salât eyle, tam bir selâm ile selamla.",
            note: "Duaların sonunda okunabilen klasik bir salavat."
          },
        ],
      },
      {
        title: "🌙 Günlük Hayatta Okunabilecek Salavatlar",
        items: [
          {
            arabic:
              "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى حَبِيبِنَا مُحَمَّدٍ",
            trans:
              "Allahumme salli ve sellim alâ habîbinâ Muhammed.",
            meaning:
              "Allah’ım! Sevgilimiz Muhammed’e salât ve selâm eyle.",
            note: "Sevgi ve muhabbet vurgusu olan kısa bir salavat."
          },
          {
            arabic:
              "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ نَبِيِّ الرَّحْمَةِ",
            trans:
              "Allahumme salli alâ Muhammedin nebiyyi’r-rahme.",
            meaning:
              "Allah’ım! Rahmet peygamberi Muhammed’e salât eyle.",
            note: "Peygamberimizi ‘rahmet peygamberi’ olarak anan salavat."
          },
          {
            arabic:
              "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ أَجْمَعِينَ",
            trans:
              "Allahumme salli alâ Muhammedin ve alâ âlihî ve ashâbihî ecmaîn.",
            meaning:
              "Allah’ım! Muhammed’e, ailesine ve bütün ashabına salât eyle.",
            note: "Peygamber, ehli beyt ve sahabeyi birlikte anan salavat."
          },
          {
            arabic:
              "صَلَّى اللَّهُ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
            trans:
              "Sallallahu alâ Muhammedin ve alâ âli Muhammed.",
            meaning:
              "Allah, Muhammed’e ve ailesine salât ve rahmet eylesin.",
            note: "Kısa, hafif ve gün içinde sıkça tekrar edilebilen bir ifade."
          },
        ],
      },
      {
        title: "📿 Fazileti Hatırlatan Kısa İfadeler",
        items: [
          {
            arabic: "",
            trans: "",
            meaning:
              "Peygamberimizin ismi anıldığında salavat getirmek, ona duyulan sevgi ve bağlılığın dildeki tezahürüdür.",
            note: null,
          },
          {
            arabic: "",
            trans: "",
            meaning:
              "Salavat getiren kimsenin üzerine rahmet iner; hem dünyada huzur, hem ahirette ümit vesilesi olur diye rivayetler vardır.",
            note: null,
          },
          {
            arabic: "",
            trans: "",
            meaning:
              "Dil, salavatla meşgul oldukça kalp de Peygamber’e (s.a.s.) yakınlık hissi ile dolar.",
            note: null,
          },
          {
            arabic: "",
            trans: "",
            meaning:
              "Salavat; dua, zikir ve şükür arasında köprü kuran kısa ama anlamlı bir zikirdir.",
            note: null,
          },
        ],
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.salavatTitle}>Salavatlar</Text>
        <Text style={styles.salavatSubtitle}>
          Kısa salavat-ı şerifeler, okunuşları ve Türkçe anlamları
        </Text>

        <ScrollView style={{ marginTop: 16, width: "100%" }}>
          {GROUPS.map((group, gIndex) => (
            <View key={gIndex} style={styles.salavatSection}>
              <ScaledText baseSize={14} style={styles.salavatSectionTitle}> {group.title} </ScaledText>

              {group.items.map((item, i) => (
                <View key={i} style={styles.salavatCard}>
                  {item.arabic ? (
                    <ScaledText baseSize={14} style={styles.salavatArabic}> {item.arabic} </ScaledText>
                  ) : null}

                  {item.trans ? (
                    <ScaledText baseSize={14} style={styles.salavatTrans}> {item.trans} </ScaledText>
                  ) : null}

                  <ScaledText baseSize={14} style={styles.salavatMeaning}> {item.meaning} </ScaledText>

                  {item.note ? (
                    <ScaledText baseSize={14} style={styles.salavatNote}> {item.note} </ScaledText>
                  ) : null}
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
    salavatTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    salavatSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },

    salavatSection: {
      marginBottom: 20,
    },
    salavatSectionTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: "#ffdd55",
      marginBottom: 10,
    },

    salavatCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 10,
      marginBottom: 8,
    },

    salavatArabic: {
      fontSize: 20,
      lineHeight: 30,
      color: "#ffffff",
      textAlign: "right",
      marginBottom: 4,
    },

    salavatTrans: {
      fontSize: 14,
      lineHeight: 20,
      color: "#d0d7e2",
      fontStyle: "italic",
      marginBottom: 4,
    },

    salavatMeaning: {
      fontSize: 14,
      lineHeight: 20,
      color: "#f2f2f7",
    },

    salavatNote: {
      fontSize: 12,
      lineHeight: 18,
      color: "#b9c2d3",
      marginTop: 4,
    },
});