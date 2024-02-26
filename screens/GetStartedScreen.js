import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import Button from "../components/Button";

export default Home = () => {
  const onPress = () => {
    console.log("Button Pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/imgs/getStartedToggleBgImg.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.bg}>
        <View>
          <Text>Get Started</Text>
          <Text>Experience Sports Like Never Before</Text>
        </View>
        <View style={styles.button}>
          <Button onPress={onPress} buttonText={"Continue with Email"} />
        </View>
        <View style={styles.button}>
          <Button onPress={onPress} buttonText={"Continue with Google"} />
        </View>
        <View style={styles.button}>
          <Button onPress={onPress} buttonText={"Continue with Apple"} />
        </View>
        <View>
          <Text>
            Already have an account? <Text>Sign Up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    // flex: 1,
    paddingTop: 14,
  },
  image: {
    width: 375,
    height: 406,
    left: 36,
  },
  button: {
    marginTop: 8,
    marginBottom: 8,
  },
  bg: {
    flex: 1,
    // backgroundColor: "#0F172A",
    backgroundColor: "lightblue",
  },
});
