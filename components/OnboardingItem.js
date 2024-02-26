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
      <View style={styles.lower}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lower: {
    padding: 24,
    backgroundColor: "red",
    flex: 0.3,
  },
  image: {
    flex: 0.7,
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontWeight: "400",
  },
});
