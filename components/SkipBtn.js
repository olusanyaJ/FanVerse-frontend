import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import colors from "../utils/colors";

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
    justifyContent: "flex-start",
    alignSelf: "flex-end",
    marginRight: 24,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.thirdTextColor,
    gap: 8,
  },
  text: {
    fontSize: 12,
    color: COLORS.thirdTextColor,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontWeight: 700,
  },
});
