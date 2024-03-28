import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../utils/colors";

export default InputPassword = ({
  value,
  style,
  onChangeText,
  placeholder,
  placeholderTextColor,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  return (
    <View style={styles.inputField}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={isPasswordShown}
        style={style}
      />

      <TouchableOpacity
        onPress={() => setIsPasswordShown(!isPasswordShown)}
        style={styles.passwordIcon}
      >
        {isPasswordShown == true ? (
          <Ionicons name="eye-off" size={24} style={styles.icon} />
        ) : (
          <Ionicons name="eye" size={24} style={styles.icon} />
        )}
      </TouchableOpacity>
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
  passwordIcon: {
    position: "absolute",
    right: 16,
  },
  icon: {
    color: COLORS.secondaryTextColor,
  },
});
