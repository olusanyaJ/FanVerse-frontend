import React, { useCallback } from "react";

import { Pressable, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import COLORS from "../utils/colors";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default Button = ({ buttonText, onPress }) => {
  const [fontsLoaded] = useFonts({
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
    <Pressable
      style={styles.button}
      onPress={onPress}
      onLayout={onLayoutRootView}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: COLORS.primaryBtnColor,
    borderWidth: 1,
    borderColor: COLORS.primaryBtnColor,
  },
  text: {
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    // fontWeight: 700,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.buttonTextColor,
  },
});
