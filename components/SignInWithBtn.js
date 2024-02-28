import React from "react";
import { Pressable, StyleSheet, Text, Image } from "react-native";

export default SignInWithBtn = ({ buttonText, onPress, icon }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image source={icon} style={styles.btnImage} resizeMode="contain" />
      <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 54,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#334155",
  },
  btnImage: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0.4,
    color: "white",
  },
});
