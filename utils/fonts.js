import { useFonts } from "expo-font";
import React from "react";
import AppLoading from "expo-app-loading";

export default FONT = () => {
  const [fontsLoaded] = useFonts({
    bold: require("../assets/fonts/Manrope-Bold.ttf"),
    light: require("../assets/fonts/Manrope-Light.ttf"),
    regular: require("../assets/fonts/Manrope-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
};
