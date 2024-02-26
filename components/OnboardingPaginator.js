import React from "react";
import { StyleSheet, Animated, useWindowDimensions, View } from "react-native";

export default OnboardingPaginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", marginLeft: 24 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 32, 6],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 6,
    borderRadius: 500,
    backgroundColor: "#2D8FFF",
    marginHorizontal: 4,
  },
});
