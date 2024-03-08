import React, { useCallback } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import COLORS from "../utils/colors";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";

SplashScreen.preventAutoHideAsync();

export default LoginScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const onPressSignin = () => {
    navigation.navigate("Dashboard");
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
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.pageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Welcome Back!</Text>
          <Text style={styles.pageSubtitle}>Sign into your account!</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder={"Email"} keyboardType={"email-address"} />
        </View>

        <View style={styles.inputContainer}>
          <InputPassword />
        </View>

        <View style={styles.fgtPwdContainer}>
          <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.fgtPwdText}>Forgot Password?</Text>
          </Pressable>
        </View>

        <View>
          <Button onPress={onPressSignin} buttonText={"Sign in"} />
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
          <Text style={styles.signInText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={styles.signInLink}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
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
  },
  textContainer: {
    marginVertical: 40,
  },
  pageTitle: {
    fontFamily: "Manrope-Bold",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 36,
    color: COLORS.primaryTextColor,
    paddingBottom: 8,
  },
  pageSubtitle: {
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 23.8,
    letterSpacing: 0.3,
    color: COLORS.secondaryTextColor,
  },
  inputContainer: {
    marginBottom: 16,
  },
  fgtPwdContainer: {
    marginTop: 24,
    marginBottom: 80,
    alignItems: "center",
  },
  fgtPwdText: {
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24,
    letterSpacing: 0.3,
    color: COLORS.thirdTextColor,
  },

  bottomDivide: {
    marginVertical: 32,
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
    fontWeight: 400,
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
    marginTop: 102,
  },
  signInText: {
    fontFamily: "Manrope-Light",
    color: COLORS.secondaryTextColor,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: 400,
  },
  signInLink: {
    fontFamily: "Manrope-Bold",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    color: COLORS.thirdTextColor,
  },
});
