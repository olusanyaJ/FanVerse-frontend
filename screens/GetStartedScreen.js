import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import Button from "../components/Button";
import SignInWithBtn from "../components/SignInWithBtn";

export default GetStartedScreen = ({ navigation }) => {
  const onPressEmail = () => {
    console.log("Email Button Pressed");
  };

  const onPressGoogle = () => {
    console.log("Google Button Pressed");
  };
  const onPressApple = () => {
    console.log("Apple Button Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/imgs/getStartedToggleBgImg.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.bodyContent}>
        <View>
          <Text style={styles.title}>Get Started</Text>
          <Text style={styles.subtitle}>
            Experience sports like never before.
          </Text>
        </View>
        <View>
          <Button onPress={onPressEmail} buttonText={"Continue with Email"} />
        </View>
        <View style={styles.button}>
          <SignInWithBtn
            onPress={onPressGoogle}
            buttonText={"Continue with Google"}
            icon={require("../assets/icons/Google.png")}
          />
        </View>
        <View>
          <SignInWithBtn
            onPress={onPressApple}
            buttonText={"Continue with Apple"}
            icon={require("../assets/icons/Apple.png")}
          />
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("OnboardingScreen")}>
            <Text style={styles.signInLink}> Sign In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0F172A",
  },
  imageContainer: {
    // flex: 1,
    // paddingTop: 14,
    // backgroundColor: "white",
  },
  image: {
    width: 375,
    height: 406,
    left: 36,
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#0F172A",
  },
  title: {
    color: "#F8F9FD",
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 0,
    fontWeight: 700,
    textAlign: "center",
    paddingTop: 24,
  },
  subtitle: {
    color: "#64748B",
    fontSize: 16,
    lineHeight: 27,
    letterSpacing: 0.3,
    fontWeight: 400,
    textAlign: "center",
    paddingBottom: 16,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 41,
  },
  signInText: {
    color: "#64748B",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: 400,
    textAlign: "center",
  },
  signInLink: {
    fontWeight: 700,
    color: "#2D8FFF",
  },
});
