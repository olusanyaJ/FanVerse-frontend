import React, { useCallback } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import COLORS from "../utils/colors";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default OnboardingItemLower = ({ item }) => {
  const { width } = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container, { width }]} onLayout={onLayoutRootView}>
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
