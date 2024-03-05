import React from "react";
import { Text, StyleSheet, Pressable, SafeAreaView } from "react-native";

export default UserDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> PreferenceScreen </Text>
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
