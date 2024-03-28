import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
} from "react-native";

export default UserDashboard = ({ navigation }) => {
  const image = require("../assets/imgs/Profile.png");

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
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
