import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../utils/colors";

export default TabBtn = ({ text, onPress, style }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.inputBgColor,
    marginRight: 12,
    marginBottom: 12,
    backgroundColor: COLORS.inputBgColor,
  },
  text: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.buttonTextColor,
  },
});
