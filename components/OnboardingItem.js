import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.7,
  },
  title: {
    fontSize: 24,
    color: "#F8F9FD",
    fontWeight: 700,
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: "left",
    paddingTop: 48,
    paddingLeft: 24,
    paddingBottom: 8,
  },
  description: {
    fontWeight: "400",
    color: "#64748B",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.3,
    textAlign: "left",
    paddingLeft: 24,
    paddingRight: 24,
  },
});
