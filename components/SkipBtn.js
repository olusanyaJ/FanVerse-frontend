import React, { useCallback } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import COLORS from "../utils/colors";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default SkipButton = ({ onPressSkip }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
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
