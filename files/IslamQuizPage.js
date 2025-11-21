import React, { useEffect, useState, useRef } from "react";
import {TouchableOpacity, View, Text, StyleSheet, Alert,  } from "react-native";

export default function IslamQuizPage({ onBack }) {
    const QUESTIONS = [
      {
        q: "Kur’an-ı Kerim kaç sureden oluşur?",
        options: ["110", "114", "120", "99"],
        correct: 1,
      },
      {
        q: "İslam’ın ilk şartı nedir?",
        options: ["Namaz", "Şehadet", "Zekât", "Oruç"],
        correct: 1,
      },
      {
        q: "Peygamber Efendimiz’in (s.a.v.) doğduğu şehir hangisidir?",
        options: ["Medine", "Taif", "Mekke", "Kudüs"],
        correct: 2,
      },
      {
        q: "‘Sübhanallah, Elhamdülillah, Allahu Ekber’ zikri toplam kaçtır?",
        options: ["33-33-33", "20-20-20", "10-10-10", "50-50-50"],
        correct: 0,
      },
      {
        q: "Müslümanların kıblesi neresidir?",
        options: ["Mescid-i Aksa", "Kâbe", "Mina", "Arafat"],
        correct: 1,
      },
      {
        q: "Ramazan ayı neyin ayıdır?",
        options: ["Hac", "Oruç", "Zekât", "Sadaka"],
        correct: 1,
      },
      {
        q: "Kur’an’ın ilk suresi hangisidir?",
        options: ["Fatiha", "Bakara", "İhlas", "Alak"],
        correct: 0,
      },
      {
        q: "Peygamber Efendimiz’in (s.a.v.) veda hutbesi nerede yapılmıştır?",
        options: ["Arafat", "Mina", "Mekke", "Medine"],
        correct: 0,
      },
      {
        q: "İslam’da ‘sadaka’ ne demektir?",
        options: [
          "Karşılıksız yardım",
          "Bir ibadet şekli",
          "Günahların affı",
          "Sadece zekât türü",
        ],
        correct: 0,
      },
      {
        q: "Cuma namazı haftanın hangi gününde kılınır?",
        options: ["Cumartesi", "Pazar", "Perşembe", "Cuma"],
        correct: 3,
      },
      {
        q: "Hac ibadeti hangi ayda yapılır?",
        options: ["Ramazan", "Şevval", "Zilhicce", "Recep"],
        correct: 2,
      },
      {
        q: "Peygamber Efendimiz’in (s.a.v.) kabri nerededir?",
        options: ["Mekke", "Medine", "Kudüs", "Şam"],
        correct: 1,
      },
      {
        q: "‘Besmele’nin tam adı nedir?",
        options: [
          "Bismillahirrahmanirrahim",
          "Allahuekber",
          "Elhamdülillah",
          "Sübhanallah",
        ],
        correct: 0,
      },
      {
        q: "Kur’an-ı Kerim’in indirilmeye başlandığı gece hangisidir?",
        options: ["Miraç", "Berat", "Kadir", "Mevlid"],
        correct: 2,
      },
      {
        q: "Zekât kime verilir?",
        options: [
          "Zenginlere",
          "İhtiyaç sahiplerine",
          "Sadece akrabalara",
          "Herkese eşit",
        ],
        correct: 1,
      },
      {
        q: "Namaz kaç vakittir?",
        options: ["3", "4", "5", "6"],
        correct: 2,
      },
      {
        q: "Peygamberlere gönderilen ilahi mesajlara ne ad verilir?",
        options: ["Hadis", "Vahiy", "Kıssa", "Fıkıh"],
        correct: 1,
      },
      {
        q: "İslam’da doğruluk ve dürüstlük için kullanılan kelime nedir?",
        options: ["İhlas", "Sıdk", "Takva", "Sünnet"],
        correct: 1,
      },
      {
        q: "İslam’ın beş şartından biri değildir:",
        options: ["Namaz", "Oruç", "Cömertlik", "Hac"],
        correct: 2,
      },
      {
        q: "Mescid-i Haram nerededir?",
        options: ["Medine", "İstanbul", "Kudüs", "Mekke"],
        correct: 3,
      },
      {
        q: "Abdestte farz olan organlardan biridir:",
        options: ["Ayakların yıkanması", "Kulak mesh", "Saç taramak", "Göz yıkamak"],
        correct: 0,
      },
      {
        q: "İslam’da ‘kul hakkı’ ne demektir?",
        options: [
          "Haccın bir bölümü",
          "İnsanlara yapılan haksızlık",
          "Sadaka çeşidi",
          "Yemek duası",
        ],
        correct: 1,
      },
      {
        q: "Hz. Muhammed’in (s.a.v.) babasının adı nedir?",
        options: ["Abdullah", "Abdulmuttalip", "Ebu Talib", "Hamza"],
        correct: 0,
      },
      {
        q: "Kur’an’ın indirildiği dil hangisidir?",
        options: ["İbranice", "Arapça", "Farsça", "Süryanice"],
        correct: 1,
      },
      {
        q: "Oruç hangi vakitte açılır?",
        options: ["Güneş doğunca", "Ezan okununca", "Öğlen", "İkindi"],
        correct: 1,
      },
      {
        q: "İslam’a göre tüm Peygamberlerin tebliğ ettiği dinin adı nedir?",
        options: ["İman", "Tevrat", "İslam", "Sünnet"],
        correct: 2,
      },
      {
        q: "Bir Müslümanın yöneldiği kıble neyi ifade eder?",
        options: ["Güneş", "Ay", "Kâbe", "Mescid-i Nebevi"],
        correct: 2,
      },
      {
        q: "Ramazan’dan sonra gelen bayramın adı:",
        options: ["Kurban Bayramı", "Regaip", "Mevlid", "Miraç"],
        correct: 0,
      },
      {
        q: "Kurban ibadeti hangi peygamberle ilişkilendirilir?",
        options: ["Hz. Musa", "Hz. Nuh", "Hz. İbrahim", "Hz. Davud"],
        correct: 2,
      },
      {
        q: "Peygamber Efendimiz (s.a.v.) kaç yaşında vefat etmiştir?",
        options: ["60", "63", "70", "55"],
        correct: 1,
      },
      // You want more? Say "give me 50 more" and I will generate.
    ];

    const shuffled = useRef(QUESTIONS.sort(() => 0.5 - Math.random())).current;

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const current = shuffled[index];

    function checkAnswer(i) {
      setSelected(i);
      if (i === current.correct) {
        setCorrectCount(correctCount + 1);
      } else {
        setWrongCount(wrongCount + 1);
      }
    }

    function nextQuestion() {
      setSelected(null);
      if (index < shuffled.length - 1) {
        setIndex(index + 1);
      } else {
        Alert.alert("Quiz Bitti", "Tüm soruları tamamladın!");
        onBack();
      }
    }

    return (
        <View style={[ styles.overlay, { justifyContent: "flex-start", paddingTop: 60, paddingHorizontal: 20, }, ]} >
        {/* Back button (same pattern as other pages) */}
        <TouchableOpacity onPress={onBack} style={{ alignSelf: "flex-start", marginBottom: 10 }} >
          <Text style={{ color: "#ffffff", fontSize: 18 }}>← </Text>
        </TouchableOpacity>

        <Text style={styles.quizTitle}>İslami Yarışma</Text>
        <Text style={styles.quizSubtitle}>
          Soru {index + 1} / {shuffled.length}
        </Text>

        <Text style={styles.quizQuestion}>{current.q}</Text>

        {/* Options */}
        {current.options.map((opt, i) => {
          const isCorrect = selected !== null && i === current.correct;
          const isWrong = selected !== null && i === selected && i !== current.correct;

          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.quizOption,
                isCorrect && styles.quizOptionCorrect,
                isWrong && styles.quizOptionWrong,
              ]}
              disabled={selected !== null}
              onPress={() => checkAnswer(i)}
            >
              <Text style={styles.quizOptionText}>{opt}</Text>
            </TouchableOpacity>
          );
        })}

        {/* Score */}
        <Text style={styles.quizScore}>
          ✔ Doğru: {correctCount} ✘ Yanlış: {wrongCount}
        </Text>

        {/* Next button */}
        {selected !== null && (
          <TouchableOpacity onPress={nextQuestion} style={styles.quizNextBtn}>
            <Text style={styles.quizNextText}>Sonraki Soru →</Text>
          </TouchableOpacity>
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
    quizTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 4,
    },

    quizSubtitle: {
      fontSize: 15,
      color: "#d0d7e2",
      textAlign: "center",
      marginBottom: 20,
    },

    quizQuestion: {
      fontSize: 20,
      color: "#ffdd55",
      fontWeight: "600",
      marginBottom: 20,
      textAlign: "center",
      lineHeight: 28,
    },

    quizOption: {
      backgroundColor: "rgba(255,255,255,0.08)",
      padding: 14,
      borderRadius: 10,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.15)",
    },

    quizOptionCorrect: {
      backgroundColor: "rgba(0,200,0,0.25)",
      borderColor: "#00cc00",
    },

    quizOptionWrong: {
      backgroundColor: "rgba(200,0,0,0.25)",
      borderColor: "#cc0000",
    },

    quizOptionText: {
      fontSize: 16,
      color: "#ffffff",
      textAlign: "center",
    },

    quizScore: {
      fontSize: 16,
      color: "#d0d7e2",
      textAlign: "center",
      marginTop: 10,
    },

    quizNextBtn: {
      backgroundColor: "#ffdd55",
      paddingVertical: 12,
      borderRadius: 10,
      marginTop: 20,
      alignItems: "center",
    },

    quizNextText: {
      fontSize: 16,
      color: "#333",
      fontWeight: "700",
    },
});