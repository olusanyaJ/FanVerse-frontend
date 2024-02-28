import React from "react";
import { Text, StyleSheet, View, Pressable, SafeAreaView } from "react-native";
import navigation from "@react-navigation/native";

export default SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text> Sign up Scrren </Text>
      <Pressable onPress={() => navigation.navigate("LoginScreen")}>
        <Text
          style={{
            borderWidth: 1,
            borderRadius: 12,
            borderColor: "#334155",
          }}
        >
          back to login screen
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
