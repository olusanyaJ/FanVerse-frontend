import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import COLORS from "../utils/colors";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default SignInWithBtn = ({ buttonText, onPress, icon }) => {
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
    borderColor: COLORS.lineBreakColor,
  },
  btnImage: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  text: {
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.buttonTextColor,
  },
});
