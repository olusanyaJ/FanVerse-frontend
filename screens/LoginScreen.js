import React, { useCallback, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../components/Button";
import COLORS from "../utils/colors";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default LoginScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const onPressSignin = () => {
    console.log("Signin Button Pressed");
  };

  const onPressGoogle = () => {
    console.log("Google Button Pressed");
  };
  const onPressApple = () => {
    console.log("Apple Button Pressed");
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
          <View style={styles.inputField}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.secondaryTextColor}
              keyboardType="email-address"
              style={styles.inputPlaceholder}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={COLORS.secondaryTextColor}
              secureTextEntry={isPasswordShown}
              style={styles.inputPlaceholder}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.passwordIcon}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} style={styles.icon} />
              ) : (
                <Ionicons name="eye" size={24} style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fgtPwdContainer}>
          <Pressable>
            <Text style={styles.fgtPwdText}>Forgot Password?</Text>
          </Pressable>
        </View>

        <View>
          <Button onPress={onPressSignin} buttonText={"Sign in"} />
        </View>

        <View style={styles.bottomDivide}>
          <View style={styles.lineBreak}></View>
          <Text> Or sign in with </Text>
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
    // backgroundColor: COLORS.appBackgroundColor,
    backgroundColor: "cyan",
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
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 36,
    // color: COLORS.primaryTextColor,
  },
  pageSubtitle: {
    fontFamily: "Manrope-Light",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 23.8,
    letterSpacing: 0.3,
    // color: COLORS.secondaryTextColor,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputField: {
    width: "100%",
    height: 56,
    borderColor: COLORS.inputBgColor,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
    backgroundColor: COLORS.inputBgColor,
  },
  inputPlaceholder: {
    width: "100%",
  },
  passwordIcon: {
    position: "absolute",
    right: 12,
  },
  icon: {
    color: COLORS.secondaryTextColor,
  },
  fgtPwdContainer: {
    marginTop: 24,
    marginBottom: 80,
    alignItems: "center",
  },
  fgtPwdText: {
    fontFamily: "Manrope-Light",
    fontSize: 14,
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
    backgroundColor: "grey",
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
    // marginBottom: 8,
  },
  signInText: {
    color: COLORS.appBackgroundColor,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: 400,
    textAlign: "center",
  },
  signInLink: {
    fontWeight: 700,
    color: COLORS.thirdTextColor,
  },
});
