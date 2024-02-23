import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.homeText}>FanVerse</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    fontSize: 36,
    color: "red",
  },
});
