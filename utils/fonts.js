import { useFonts } from "expo-font";
import React from "react";

export default Fonts = () => {
  const [fontsLoaded] = useFonts({
    light: require("../assets/fonts/Manrope-Light.ttf"),
    regular: require("../assets/fonts/Manrope-Regular.ttf"),
    bold: require("../assets/fonts/Manrope-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
};
