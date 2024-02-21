import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default Button = ({ scrollTo }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={scrollTo}>
        <Text style={styles.text}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 12,
    // width: 100,
    // paddingHorizontal: 32,
    borderRadius: 4,
    // elevation: 3,
    backgroundColor: "pink",
  },
  text: {
    // fontSize: 16,
    // lineHeight: 21,
    // fontWeight: "bold",
    // letterSpacing: 0.25,
    // color: "white",
  },
});
