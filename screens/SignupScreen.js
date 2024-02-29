import React from "react";
import { Text, StyleSheet, View, Pressable, SafeAreaView } from "react-native";

export default SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Sign up Scrren </Text>
      <Pressable onPress={() => navigation.navigate("LoginScreen")}>
        <Text
          style={{
            padding: 16,
            marginTop: 16,
            backgroundColor: "red",
            color: "white",
          }}
        >
          back to login screen
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
