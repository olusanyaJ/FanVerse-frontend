import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";

export default Button = ({ buttonText, onPress }) => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{buttonText}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  button: {
    marginRight: 24,
    marginLeft: 24,
    paddingVertical: 15,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#E41447",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 26,
    // fontWeight: "700",
    letterSpacing: 0.4,
    color: "white",
    // fontFamily: "Manrope",
  },
});
