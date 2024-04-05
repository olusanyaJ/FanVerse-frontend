import React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";

export default Create = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <Text style={styles.text}>Create Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackgroundColor,
  },
  pageContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 44,
  },
  text: {
    marginTop: 50,
    textAlign: "center",
    padding: 16,
    fontSize: 28,
    color: "white",
  },
});
