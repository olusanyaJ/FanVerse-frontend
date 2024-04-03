import React from "react";

import { Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../utils/colors";

export default Button = ({ buttonText, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 54,
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: COLORS.primaryBtnColor,
    borderWidth: 1,
    borderColor: COLORS.primaryBtnColor,
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
