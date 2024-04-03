import React from "react";
import { View, useWindowDimensions, Image } from "react-native";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[{ width }]}>
      <Image source={item.image} style={{ width, resizeMode: "contain" }} />
    </View>
  );
};
