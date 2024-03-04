import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import COLORS from "../utils/colors";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default OnboardingItem = ({ item }) => {
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
  },
  title: {
    fontFamily: "Manrope-Bold",
    fontSize: 28,
    color: COLORS.primaryTextColor,
    fontWeight: 700,
    lineHeight: 36,
    letterSpacing: 0,
    paddingBottom: 8,
    paddingTop: 48,
  },
  description: {
    fontFamily: "Manrope-Light",
    fontWeight: "400",
    color: COLORS.secondaryTextColor,
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 16,
    paddingRight: 57,
    letterSpacing: 0.3,
  },
});
