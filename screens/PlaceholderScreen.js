import React from "react";
import { Text, StyleSheet, Pressable, SafeAreaView } from "react-native";

export default PlaceholderScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          padding: 16,
          marginTop: 16,
          fontSize: 36,
          color: "#0F172A",
          textAlign: "center",
        }}
      >
        This screen is under construction{" "}
      </Text>
      <Pressable onPress={() => navigation.navigate("GetStartedScreen")}>
        <Text
          style={{
            padding: 16,
            marginTop: 16,
            backgroundColor: "red",
            color: "white",
          }}
        >
          back to Get started
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
