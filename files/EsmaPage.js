import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import ScaledText from "./ScaledText";

export default function EsmaPage({ onBack }) {
  const NAMES = [
    { ar: "ٱللّٰه", tr: "Allah", en: "Allah", trMeaning: "Her şeyin yaratıcısı" },
    { ar: "ٱلرَّحْمَٰن", tr: "Er-Rahmân", en: "The Entirely Merciful", trMeaning: "Dünyada tüm mahlûkata merhamet eden" },
    { ar: "ٱلرَّحِيم", tr: "Er-Rahîm", en: "The Especially Merciful", trMeaning: "Ahirette müminlere rahmet eden" },
    { ar: "ٱلْمَلِك", tr: "El-Melik", en: "The King", trMeaning: "Mülkün gerçek sahibi" },
    { ar: "ٱلْقُدُّوس", tr: "El-Kuddûs", en: "The Most Pure", trMeaning: "Noksanlıklardan münezzeh" },
    { ar: "ٱلسَّلَام", tr: "Es-Selâm", en: "The Source of Peace", trMeaning: "Esenlik veren" },
    { ar: "ٱلْمُؤْمِن", tr: "El-Mü’min", en: "The Granter of Security", trMeaning: "Emniyet veren" },
    { ar: "ٱلْمُهَيْمِن", tr: "El-Müheymin", en: "The Protector", trMeaning: "Her şeyi gözeten" },
    { ar: "ٱلْعَزِيز", tr: "El-Azîz", en: "The Almighty", trMeaning: "İzzet ve güç sahibi" },
    { ar: "ٱلْجَبَّار", tr: "El-Cebbâr", en: "The Compeller", trMeaning: "İstediğini yaptıran" },
    { ar: "ٱلْمُتَكَبِّر", tr: "El-Mütekebbir", en: "The Supreme", trMeaning: "Büyüklükte eşsiz" },

    { ar: "ٱلْخَالِق", tr: "El-Hâlık", en: "The Creator", trMeaning: "Yaratan" },
    { ar: "ٱلْبَارِئ", tr: "El-Bâri", en: "The Evolver", trMeaning: "Noksansız yaratan" },
    { ar: "ٱلْمُصَوِّر", tr: "El-Musavvir", en: "The Fashioner", trMeaning: "Şekil veren" },
    { ar: "ٱلْغَفَّار", tr: "El-Gaffâr", en: "The Ever-Forgiving", trMeaning: "Çok bağışlayan" },
    { ar: "ٱلْقَهَّار", tr: "El-Kahhâr", en: "The Subduer", trMeaning: "Her şeyin üstünde galip" },
    { ar: "ٱلْوَهَّاب", tr: "El-Vehhâb", en: "The Giver of Gifts", trMeaning: "Karşılıksız veren" },
    { ar: "ٱلرَّزَّاق", tr: "Er-Rezzâk", en: "The Provider", trMeaning: "Rızık veren" },
    { ar: "ٱلْفَتَّاح", tr: "El-Fettâh", en: "The Opener", trMeaning: "Her zorluğu açan" },
    { ar: "ٱلْعَلِيم", tr: "El-Alîm", en: "The All-Knowing", trMeaning: "Her şeyi bilen" },

    { ar: "ٱلْقَابِض", tr: "El-Kâbıd", en: "The Withholder", trMeaning: "Darlık veren" },
    { ar: "ٱلْبَاسِط", tr: "El-Bâsıt", en: "The Expander", trMeaning: "Bolluk veren" },
    { ar: "ٱلْخَافِض", tr: "El-Hâfıd", en: "The Reducer", trMeaning: "Alçaltan" },
    { ar: "ٱلرَّافِع", tr: "Er-Râfi", en: "The Exalter", trMeaning: "Yükselten" },
    { ar: "ٱلْمُعِزّ", tr: "El-Mu‘izz", en: "The Bestower of Honor", trMeaning: "İzzet veren" },
    { ar: "ٱلْمُذِلّ", tr: "El-Müzill", en: "The Humiliator", trMeaning: "Zelil eden" },
    { ar: "ٱلسَّمِيع", tr: "Es-Semî‘", en: "The All-Hearing", trMeaning: "Her şeyi işiten" },
    { ar: "ٱلْبَصِير", tr: "El-Basîr", en: "The All-Seeing", trMeaning: "Her şeyi gören" },
    { ar: "ٱلْحَكَم", tr: "El-Hakem", en: "The Judge", trMeaning: "Hükmeden" },
    { ar: "ٱلْعَدْل", tr: "El-Adl", en: "The Utterly Just", trMeaning: "Mutlak adil" },

    { ar: "ٱللَّطِيف", tr: "El-Latîf", en: "The Subtle", trMeaning: "İnce lütuf sahibi" },
    { ar: "ٱلْخَبِير", tr: "El-Habîr", en: "The All-Aware", trMeaning: "Her şeyden haberdar" },
    { ar: "ٱلْحَلِيم", tr: "El-Halîm", en: "The Forbearing", trMeaning: "Yumuşak davranan" },
    { ar: "ٱلْعَظِيم", tr: "El-Azîm", en: "The Magnificent", trMeaning: "Azamet sahibi" },
    { ar: "ٱلْغَفُور", tr: "El-Gafûr", en: "The Great Forgiver", trMeaning: "Affı bol olan" },
    { ar: "ٱلشَّكُور", tr: "Eş-Şekûr", en: "The Most Appreciative", trMeaning: "Az amele çok mükafat veren" },
    { ar: "ٱلْعَلِيّ", tr: "El-Aliyy", en: "The Most High", trMeaning: "En yüce" },
    { ar: "ٱلْكَبِير", tr: "El-Kebîr", en: "The Most Great", trMeaning: "En büyük" },
    { ar: "ٱلْحَفِيظ", tr: "El-Hafîz", en: "The Preserver", trMeaning: "Koruyan" },
    { ar: "ٱلْمُقِيت", tr: "El-Mukît", en: "The Sustainer", trMeaning: "Kuvvet veren" },

    { ar: "ٱلْحَسِيب", tr: "El-Hasîb", en: "The Reckoner", trMeaning: "Hesap gören" },
    { ar: "ٱلْجَلِيل", tr: "El-Celîl", en: "The Majestic", trMeaning: "Celâl sahibi" },
    { ar: "ٱلْكَرِيم", tr: "El-Kerîm", en: "The Most Generous", trMeaning: "Kerem sahibi" },
    { ar: "ٱلرَّقِيب", tr: "Er-Rakîb", en: "The Watchful", trMeaning: "Gözeten" },
    { ar: "ٱلْمُجِيب", tr: "El-Mucîb", en: "The Responsive", trMeaning: "Dua edenlere cevap veren" },
    { ar: "ٱلْوَاسِع", tr: "El-Vâsi‘", en: "The All-Encompassing", trMeaning: "Rahmeti geniş" },
    { ar: "ٱلْحَكِيم", tr: "El-Hakîm", en: "The Wise", trMeaning: "Hikmet sahibi" },
    { ar: "ٱلْوَدُود", tr: "El-Vedûd", en: "The Most Loving", trMeaning: "Kullarını seven" },
    { ar: "ٱلْمَجِيد", tr: "El-Mecîd", en: "The Glorious", trMeaning: "Şanı yüce" },
    { ar: "ٱلْبَاعِث", tr: "El-Bâis", en: "The Resurrector", trMeaning: "Ölüleri dirilten" },

    { ar: "ٱلشَّهِيد", tr: "Eş-Şehîd", en: "The Witness", trMeaning: "Her şeye şahit" },
    { ar: "ٱلْحَقّ", tr: "El-Haqq", en: "The Truth", trMeaning: "Gerçek" },
    { ar: "ٱلْوَكِيل", tr: "El-Vekîl", en: "The Trustee", trMeaning: "Kulların işlerini üzerine alan" },
    { ar: "ٱلْقَوِيّ", tr: "El-Kaviyy", en: "The Strong", trMeaning: "Kudret sahibi" },
    { ar: "ٱلْمَتِين", tr: "El-Metîn", en: "The Firm", trMeaning: "Metanet sahibi" },
    { ar: "ٱلْوَلِيّ", tr: "El-Veliyy", en: "The Protecting Friend", trMeaning: "Dost, yardımcı" },
    { ar: "ٱلْحَمِيد", tr: "El-Hamîd", en: "The Praiseworthy", trMeaning: "Övgüye layık" },
    { ar: "ٱلْمُحْصِي", tr: "El-Muhsî", en: "The Accounter", trMeaning: "Her şeyi sayıp bilen" },
    { ar: "ٱلْمُبْدِئ", tr: "El-Mubdi", en: "The Originator", trMeaning: "Yoktan var eden" },
    { ar: "ٱلْمُعِيد", tr: "El-Muîd", en: "The Restorer", trMeaning: "Öldükten sonra dirilten" },

    { ar: "ٱلْمُحْيِي", tr: "El-Muhyî", en: "The Giver of Life", trMeaning: "Hayat veren" },
    { ar: "ٱلْمُمِيت", tr: "El-Mümît", en: "The Giver of Death", trMeaning: "Ölümü yaratan" },
    { ar: "ٱلْحَيّ", tr: "El-Hayy", en: "The Ever-Living", trMeaning: "Diri olan" },
    { ar: "ٱلْقَيُّوم", tr: "El-Kayyûm", en: "The Self-Existing", trMeaning: "Her şeyi ayakta tutan" },
    { ar: "ٱلْوَاجِد", tr: "El-Vâcid", en: "The Perceiver", trMeaning: "Her şeyi bulan" },
    { ar: "ٱلْمَاجِد", tr: "El-Mâcid", en: "The Illustrious", trMeaning: "Şerefli" },
    { ar: "ٱلْوَاحِد", tr: "El-Vâhid", en: "The One", trMeaning: "Tek" },
    { ar: "ٱلصَّمَد", tr: "Es-Samed", en: "The Self-Sufficient", trMeaning: "Hiçbir şeye muhtaç olmayan" },
    { ar: "ٱلْقَادِر", tr: "El-Kâdir", en: "The Able", trMeaning: "Kudret sahibi" },
    { ar: "ٱلْمُقْتَدِر", tr: "El-Muktedir", en: "The Powerful", trMeaning: "Gücü sınırsız" },

    { ar: "ٱلْمُقَدِّم", tr: "El-Mukaddim", en: "The Promoter", trMeaning: "Öne geçiren" },
    { ar: "ٱلْمُؤَخِّر", tr: "El-Muahhir", en: "The Delayer", trMeaning: "Geri bırakan" },
    { ar: "ٱلْأَوَّل", tr: "El-Evvel", en: "The First", trMeaning: "Başlangıcı olmayan" },
    { ar: "ٱلْآخِر", tr: "El-Âhir", en: "The Last", trMeaning: "Sonu olmayan" },
    { ar: "ٱلظَّاهِر", tr: "Ez-Zâhir", en: "The Manifest", trMeaning: "Aşikâr" },
    { ar: "ٱلْبَاطِن", tr: "El-Bâtın", en: "The Hidden", trMeaning: "Gizli" },
    { ar: "ٱلْوَالِي", tr: "El-Vâlî", en: "The Governor", trMeaning: "Her şeyin yöneticisi" },
    { ar: "ٱلْمُتَعَال", tr: "El-Müteâlî", en: "The Exalted", trMeaning: "Yüceliği sonsuz" },
    { ar: "ٱلْبَرّ", tr: "El-Berr", en: "The Most Kind", trMeaning: "İyilik eden" },
    { ar: "ٱلتَّوَّاب", tr: "Et-Tevvâb", en: "The Accepter of Repentance", trMeaning: "Tevbeleri kabul eden" },

    { ar: "ٱلْمُنْتَقِم", tr: "El-Müntekim", en: "The Avenger", trMeaning: "İntikam alan" },
    { ar: "ٱلْعَفُوّ", tr: "El-Afüvv", en: "The Pardoner", trMeaning: "Affı çok olan" },
    { ar: "ٱلرَّؤُوف", tr: "Er-Raûf", en: "The Most Kind", trMeaning: "Pek merhametli" },
    { ar: "مَالِكُ ٱلْمُلْك", tr: "Mâlikü’l-Mülk", en: "Owner of Dominion", trMeaning: "Mülkün sahibi" },
    { ar: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام", tr: "Zül-Celâli ve’l-İkrâm", en: "Lord of Glory and Honour", trMeaning: "Celâl ve ikram sahibi" },
    { ar: "ٱلْمُقْسِط", tr: "El-Muksît", en: "The Just", trMeaning: "Adalet eden" },
    { ar: "ٱلْجَامِع", tr: "El-Câmi‘", en: "The Gatherer", trMeaning: "Toplayan" },
    { ar: "ٱلْغَنِيّ", tr: "El-Ganiyy", en: "The Self-Sufficient", trMeaning: "Zengin, müstağni" },
    { ar: "ٱلْمُغْنِي", tr: "El-Muğnî", en: "The Enricher", trMeaning: "Zengin eden" },
    { ar: "ٱلْمَانِع", tr: "El-Mâni‘", en: "The Preventer", trMeaning: "Engel olan" },

    { ar: "ٱلضَّارّ", tr: "Ed-Dârr", en: "The Distresser", trMeaning: "Zarar veren (imtihan eden)" },
    { ar: "ٱلنَّافِع", tr: "En-Nâfi‘", en: "The Benefactor", trMeaning: "Fayda veren" },
    { ar: "ٱلنُّور", tr: "En-Nûr", en: "The Light", trMeaning: "Nur veren" },
    { ar: "ٱلْهَادِي", tr: "El-Hâdî", en: "The Guide", trMeaning: "Hidayet veren" },
    { ar: "ٱلْبَدِيع", tr: "El-Bedî", en: "The Incomparable", trMeaning: "Eşi benzeri olmayan" },
    { ar: "ٱلْبَاقِي", tr: "El-Bâkî", en: "The Everlasting", trMeaning: "Ebedî olan" },
    { ar: "ٱلْوَارِث", tr: "El-Vârîs", en: "The Inheritor", trMeaning: "Her şeyin varisi" },
    { ar: "ٱلرَّشِيد", tr: "Er-Reşîd", en: "The Righteous Teacher", trMeaning: "Doğru yolu gösteren" },
    { ar: "ٱلصَّبُور", tr: "Es-Sabûr", en: "The Patient One", trMeaning: "Çok sabırlı" },
  ];

  return (
    <View style={styles.overlay}>
      {/* Header */}
      <View style={styles.headerRow}>
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Esmaü’l-Hüsna</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {NAMES.map((n, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.arabic}>{n.ar}</Text>
            <Text style={styles.name}>{n.tr}</Text>
            <ScaledText baseSize={14} style={styles.meaningEn}>
              {n.en}
            </ScaledText>
            <ScaledText baseSize={14} style={styles.meaningTr}>
              {n.trMeaning}
            </ScaledText>
          </View>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  backBtn: {
    paddingVertical: 4,
    paddingRight: 10,
    paddingLeft: 2,
  },
  backText: {
    color: "#ffffff",
    fontSize: 18,
  },
  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 50,
  },
  scrollContent: {
    paddingTop: 4,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.07)",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  arabic: {
    fontSize: 26,
    textAlign: "center",
    color: "#ffdd55",
    marginBottom: 6,
    fontWeight: "700",
  },
  name: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 4,
    fontWeight: "600",
  },
  meaningEn: {
    textAlign: "center",
    color: "#d0d7e2",
    marginBottom: 2,
  },
  meaningTr: {
    textAlign: "center",
    color: "#c0cce0",
  },
});
