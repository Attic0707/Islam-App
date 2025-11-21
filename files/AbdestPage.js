import {TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function AbdestPage({ onBack }) {
    const steps = [
      {
        title: "1. Niyet",
        text: "“Niyet ettim Allah rızası için abdest almaya.” diye kalpten niyet edilir.",
      },
      {
        title: "2. Besmele",
        text: "“Bismillahirrahmânirrahîm” denir.",
      },
      {
        title: "3. Elleri yıkamak",
        text: "Eller bileklere kadar, parmak aralarıyla birlikte üçer kere yıkanır.",
      },
      {
        title: "4. Ağıza su vermek",
        text: "Sağ elle ağıza su alınır, iyice çalkalanır ve üç kere yapılır.",
      },
      {
        title: "5. Burna su vermek",
        text: "Sağ elle burna su çekilir, sol elle sümkürülerek üç kere temizlenir.",
      },
      {
        title: "6. Yüzü yıkamak",
        text: "Alın saç diplerinden çene altına ve iki kulak yumuşağı arası olacak şekilde yüz üç kere yıkanır.",
      },
      {
        title: "7. Kolları yıkamak",
        text: "Önce sağ kol, sonra sol kol dirseklerle birlikte üçer kere yıkanır.",
      },
      {
        title: "8. Başın mesh edilmesi",
        text: "Eller ıslatılır, alından enseye, enseye kadar başın tamamı bir kere mesh edilir (şafii/hanefi farklılıkları detay sayfaya bırakılabilir).",
      },
      {
        title: "9. Kulakların mesh edilmesi",
        text: "Aynı ıslak elle kulak içi ve dışı bir kere mesh edilir.",
      },
      {
        title: "10. Ayakların yıkanması",
        text: "Önce sağ ayak, sonra sol ayak topuklar da dâhil olmak üzere üçer kere yıkanır; parmak araları iyice ovulur.",
      },
      {
        title: "Abdestten sonra dua",
        text: "“Eşhedü en lâ ilâhe illallâhü vahdehû lâ şerîke leh, ve eşhedü enne Muhammeden abdühû ve resûlüh.” denmesi müstehaptır.",
      },
    ];

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.guideTitle}>Abdest Nasıl Alınır?</Text>
        <Text style={styles.guideSubtitle}>
          Farz ve sünnetleriyle kısaca abdestin sıralı adımları.
        </Text>

        <ScrollView style={{ marginTop: 10, width: "100%" }}>
          {steps.map((step) => (
            <View key={step.title} style={styles.guideCard}>
              <ScaledText baseSize={14} style={styles.guideStepTitle}> {step.title} </ScaledText>
              <ScaledText baseSize={14} style={styles.guideStepText}> {step.text} </ScaledText>
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
    backButton: {
      alignSelf: "flex-start",
      marginLeft: 20,
      marginBottom: 10,
    },
    backButtonText: {
      color: "white",
      fontSize: 18,
    },
    guideTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 6,
    },
    guideSubtitle: {
      fontSize: 14,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 12,
    },
    guideCard: {
      backgroundColor: "rgba(255,255,255,0.06)",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 10,
      marginBottom: 10,
    },
    guideStepTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: "#ffdd55",
      marginBottom: 4,
    },
    guideStepText: {
      fontSize: 14,
      color: "#f2f2f7",
      lineHeight: 20,
    },
});