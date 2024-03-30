import React from "react";
import { Text, StyleSheet, View } from "react-native";
import COLORS from "../utils/colors";

export default PlaceholderScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          padding: 16,
          marginTop: 16,
          fontSize: 36,
          color: "#0F172A",
          textAlign: "center",
        }}
      >
        This screen is under construction
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.appBackgroundColor,
  },
});
