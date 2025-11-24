import React, { useRef } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Platform,
} from "react-native";
import { BlurView } from "expo-blur";

export default function DockBar({ activePage, onNavigate }) {
  const scaleValues = {
    home: useRef(new Animated.Value(1)).current,
    namaz: useRef(new Animated.Value(1)).current,
    quran: useRef(new Animated.Value(1)).current,
    settings: useRef(new Animated.Value(1)).current,
  };

  function animateIcon(key) {
    const anim = scaleValues[key];
    Animated.sequence([
      Animated.timing(anim, { toValue: 1.3, duration: 120, useNativeDriver: true }),
      Animated.timing(anim, { toValue: 1.0, duration: 120, useNativeDriver: true }),
    ]).start();
  }

  const ITEMS = [
    { key: "home", icon: require("../assets/icons/iconPack/home.png") },
    { key: "namaz", icon: require("../assets/icons/iconPack/prayer.png") },
    { key: "quran", icon: require("../assets/icons/iconPack/quran_dock.png") },
    { key: "settings", icon: require("../assets/icons/iconPack/settings_dock.png") },
  ];

  return (
    <View style={styles.wrapper}>
      <BlurView intensity={50} tint="dark" style={styles.dock}>
        {ITEMS.map((item) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => {
              animateIcon(item.key);
              onNavigate(item.key);
            }}
            style={styles.iconWrapper}
          >
            <Animated.Image
              source={item.icon}
              style={[
                styles.icon,
                activePage === item.key && styles.activeIcon,
                { transform: [{ scale: scaleValues[item.key] }] },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  dock: {
    width: 260,
    height: 70,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: 10,
    backgroundColor: Platform.OS === "android" ? "rgba(0,0,0,0.4)" : "transparent",
  },
  iconWrapper: {
    padding: 8,
  },
  icon: {
    width: 32,
    height: 32,
    opacity: 0.7,
  },
  activeIcon: {
    opacity: 1,
  },
});
