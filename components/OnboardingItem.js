import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import COLORS from "../utils/colors";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={{ width, resizeMode: "contain" }} />
      <View style={styles.inner}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    paddingHorizontal: 24,
    backgroundColor: COLORS.appBackgroundColor,
  },
  title: {
    fontSize: 24,
    color: COLORS.primaryTextColor,
    fontWeight: 700,
    lineHeight: 36,
    letterSpacing: 0,
    paddingTop: 48,
    paddingBottom: 8,
  },
  description: {
    fontWeight: "400",
    color: COLORS.secondaryTextColor,
    fontSize: 14,
    lineHeight: 24,
    paddingBottom: 16,
    letterSpacing: 0.3,
  },
});
