import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import COLORS from "../utils/colors";

export default Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  maxLength,
}) => {
  return (
    <View style={styles.inputField}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.secondaryTextColor}
        keyboardType={keyboardType}
        style={styles.inputPlaceholder}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputField: {
    width: "100%",
    height: 56,
    borderColor: COLORS.inputBgColor,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: COLORS.inputBgColor,
  },
  inputPlaceholder: {
    width: "100%",
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.primaryTextColor,
  },
});
