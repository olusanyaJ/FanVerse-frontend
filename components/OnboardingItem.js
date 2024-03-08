import React, { useCallback } from "react";
import { View, useWindowDimensions, Image } from "react-native";

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
    <View style={[{ width }]} onLayout={onLayoutRootView}>
      <Image source={item.image} style={{ width, resizeMode: "contain" }} />
    </View>
  );
};
