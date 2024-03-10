import React, { useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import Button from "../components/Button";
import COLORS from "../utils/colors";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";

SplashScreen.preventAutoHideAsync();

export default SignupScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const onPressSignin = () => {
    navigation.navigate("SignupScreenFill");
  };

  const onPressGoogle = () => {
    navigation.navigate("GetStartedScreen");
  };
  const onPressApple = () => {
    navigation.navigate("GetStartedScreen");
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.pageContainer}>
        <View style={styles.pageHeader}>
          <Image
            source={require("../assets/icons/x.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Create an account</Text>
          <Text style={styles.pageSubtitle}>
            Let’s get you up and running with your very own FanVerse account.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder={"Username"} keyboardType={"default"} />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder={"Email"} keyboardType={"email-address"} />
        </View>

        <View style={styles.inputContainer}>
          <InputPassword />
        </View>

        <View style={styles.signinContainer}>
          <Button onPress={onPressSignin} buttonText={"Sign up"} />
          <View style={styles.signinTerms}>
            <Text style={styles.termsText}>
              By signing up, you agree to the
            </Text>
            <Pressable onPress={() => navigation.navigate("PlaceholderScreen")}>
              <Text style={styles.termsLink}> User Agreement </Text>
            </Pressable>
            <Text style={styles.termsText}>and</Text>
            <Pressable onPress={() => navigation.navigate("PlaceholderScreen")}>
              <Text style={styles.termsLink}> Privacy Policy.</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.bottomDivide}>
          <View style={styles.lineBreak}></View>
          <Text style={styles.lineBreakText}> Or sign in with </Text>
          <View style={styles.lineBreak}></View>
        </View>

        <View style={styles.btnContainer}>
          <SignInWithBtn
            onPress={onPressGoogle}
            buttonText={"Google"}
            icon={require("../assets/icons/Google.png")}
          />
          <SignInWithBtn
            onPress={onPressApple}
            buttonText={"Apple"}
            icon={require("../assets/icons/Apple.png")}
          />
        </View>

        <View style={styles.bottomContent}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.signInLink}> Sign In</Text>
          </Pressable>
        </View>
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
  textContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  pageTitle: {
    fontFamily: "Manrope-Bold",
    fontSize: 28,
    // fontWeight: 700,
    lineHeight: 36,
    color: COLORS.primaryTextColor,
    paddingBottom: 8,
  },
  pageSubtitle: {
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    // fontWeight: 400,
    lineHeight: 23.8,
    letterSpacing: 0.3,
    color: COLORS.secondaryTextColor,
  },
  inputContainer: {
    marginBottom: 16,
  },
  signinContainer: {
    marginTop: 40,
    marginBottom: 24,
  },
  signinTerms: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  bottomDivide: {
    marginBottom: 24,
    marginHorizontal: 67,
    flexDirection: "row",
    alignItems: "center",
  },
  lineBreak: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lineBreakColor,
  },
  lineBreakText: {
    fontFamily: "Manrope-Regular",
    fontSize: 14,
    // fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0.2,
    paddingHorizontal: 12,
    color: COLORS.secondaryTextColor,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  signinBtn: {
    flex: 1,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
  },
  signInText: {
    fontFamily: "Manrope-Light",
    color: COLORS.secondaryTextColor,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    // fontWeight: 400,
  },
  signInLink: {
    fontFamily: "Manrope-Bold",
    // fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    color: COLORS.thirdTextColor,
  },
  termsText: {
    color: COLORS.primaryTextColor,
    fontFamily: "Manrope-Light",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.3,
    // fontWeight: 400,
  },
  termsLink: {
    fontFamily: "Manrope-Bold",
    // fontWeight: 700,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.3,
    color: COLORS.thirdTextColor,
  },
});
