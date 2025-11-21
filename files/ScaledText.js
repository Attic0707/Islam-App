import React from "react";
import { Text } from "react-native";
import { useTextSize } from "./TextSizeContext";

export default function ScaledText({
  baseSize = 14,
  lineHeight = null,
  style = {},
  children,
  ...rest
}) {
  const { fontScale } = useTextSize();

  const scaledFont = baseSize * fontScale;
  const scaledLineHeight = lineHeight
    ? lineHeight * fontScale
    : scaledFont * 1.45; // automatic nice spacing

  return (
    <Text
      {...rest}
      style={[
        style,
        {
          fontSize: scaledFont,
          lineHeight: scaledLineHeight,
        },
      ]}
    >
      {children}
    </Text>
  );
}