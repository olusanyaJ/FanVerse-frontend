import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
    fontFamily: "Manrope-Bold",
  },
  icon: {
    // position: "absolute",
    // left: 16,
  },
});
