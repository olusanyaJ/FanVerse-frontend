import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import COLORS from "../utils/colors";

export default OnboardingItemLower = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 24,
    // marginRight: 24,
  },
  title: {
    fontFamily: "Manrope-Bold",
    width: "85%",
    fontSize: 24,
    color: COLORS.primaryTextColor,
    // fontWeight: 700,
    lineHeight: 36,
    letterSpacing: 0,
    paddingBottom: 8,
    paddingTop: 48,
  },
  description: {
    fontFamily: "Manrope-Light",
    // fontWeight: 400,
    color: COLORS.secondaryTextColor,
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 8,
    paddingRight: 57,
    letterSpacing: 0.3,
  },
});
