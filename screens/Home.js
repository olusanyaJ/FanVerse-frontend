import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default UserDashboard = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          padding: 16,
          fontSize: 28,
          color: "white",
        }}
      >
        Home Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: COLORS.appBackgroundColor,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
});
