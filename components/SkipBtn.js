import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";

export default SkipButton = ({ onPressSkip }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={onPressSkip}>
        <Text style={styles.text}>Skip</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "flex-end",
  },
  button: {
    marginRight: 24,
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2D8FFF",
    gap: 8,
  },
  text: {
    fontSize: 12,
    color: "#2D8FFF",
    lineHeight: 20,
    letterSpacing: 0.25,
    // fontWeight: 700,
    // fontFamily: "Manrope",
  },
});
