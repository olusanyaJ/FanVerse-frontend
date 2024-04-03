import React from "react";

import { Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../utils/colors";

export default BtnOutline = ({ buttonText, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 12,
    elevation: 3,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.thirdTextColor,
    gap: 8,
  },
  text: {
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    // fontWeight: 700,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.buttonTextColor,
  },
});
