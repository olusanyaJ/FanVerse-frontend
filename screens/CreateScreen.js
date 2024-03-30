import React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";

export default Create = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.pageHeader}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../assets/icons/x.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
        </View>
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
  pageHeader: {
    paddingVertical: 16,
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    marginTop: 50,
    textAlign: "center",
    padding: 16,
    fontSize: 28,
    color: "white",
  },
});
