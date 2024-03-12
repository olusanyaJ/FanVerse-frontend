import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import COLORS from "../utils/colors";

export default Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  maxLength,
  value,
  onChangeText,
  placeholderTextColor,
  style,
}) => {
  return (
    <View style={styles.inputField}>
      <TextInput
        placeholder={placeholder}
        // placeholderTextColor={COLORS.secondaryTextColor}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        // style={styles.inputPlaceholder}
        style={style}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
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
});
