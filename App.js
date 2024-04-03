import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import AppNavigation from "./navigation/AppNavigation";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Manrope-Light": require("./assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <AppNavigation onLayout={onLayoutRootView} />;
}
