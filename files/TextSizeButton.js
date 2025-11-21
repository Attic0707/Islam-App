import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useTextSize } from "./TextSizeContext";

export default function TextSizeButton({
  activePage,
  visibleOnPages = [],
  top = 40,
  right = 16,
}) {
  const { fontScale, updateScale } = useTextSize();

  if (!visibleOnPages.includes(activePage)) {
    return null;
  }

  const handleDecrease = () => {
    updateScale(fontScale - 0.1);
  };

  const handleIncrease = () => {
    updateScale(fontScale + 0.1);
  };

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: "absolute",
        top,
        right,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: 20,
          paddingHorizontal: 8,
          paddingVertical: 4,
        }}
      >
        <TouchableOpacity
          onPress={handleDecrease}
          style={{ paddingHorizontal: 6, paddingVertical: 2 }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>A−</Text>
        </TouchableOpacity>

        <View
          style={{
            width: 1,
            height: 18,
            backgroundColor: "rgba(255,255,255,0.35)",
            marginHorizontal: 4,
          }}
        />

        <TouchableOpacity
          onPress={handleIncrease}
          style={{ paddingHorizontal: 6, paddingVertical: 2 }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>A+</Text>
        </TouchableOpacity>

        {/* tiny indicator so you can *see* it changing */}
        <Text
          style={{
            color: "#fff",
            fontSize: 11,
            marginLeft: 6,
            opacity: 0.8,
          }}
        >
          x{fontScale.toFixed(1)}
        </Text>
      </View>
    </View>
  );
}