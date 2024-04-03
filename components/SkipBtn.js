import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import COLORS from "../utils/colors";

export default SkipButton = ({ onPressSkip }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPressSkip}>
        <Text style={styles.text}>Skip</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "flex-start",
    alignSelf: "flex-end",
    // marginRight: 24,
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
    fontFamily: "Manrope-Light",
    fontSize: 12,
    color: COLORS.thirdTextColor,
    lineHeight: 20,
    letterSpacing: 0.25,
    // fontWeight: 700,
  },
});
