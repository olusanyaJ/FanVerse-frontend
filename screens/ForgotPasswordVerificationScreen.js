import React, { useCallback } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import Button from "../components/Button";
import COLORS from "../utils/colors";
import BtnOutline from "../components/BtnOutline";
import Input from "../components/Input";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default ForgotPasswordVerificationScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const onPress = () => {
    navigation.navigate("NewPasswordScreen");
  };

  const onPressResend = () => {
    navigation.navigate("SignupScreenFill");
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
          <Text style={styles.pageTitle}>Enter Authentication code</Text>
          <Text style={styles.pageSubtitle}>
            Please enter the verification code sent to your email and phone
            number.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          {[...Array(5)].map((_, index) => (
            <View style={styles.inputField} key={index}>
              <Input
                placeholder={" "}
                keyboardType={"number-pad"}
                secureTextEntry={true}
                maxLength={1}
              />
            </View>
          ))}
        </View>

        <View style={styles.signinContainer}>
          <Button onPress={onPress} buttonText={"Confirm"} />
          <View style={styles.resendContainer}>
            <BtnOutline onPress={onPressResend} buttonText={"Resend code"} />
          </View>
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
  image: {
    width: 24,
    height: 24,
  },
  textContainer: {
    marginVertical: 24,
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputField: {
    flexDirection: "row",
    width: "16%",
  },
  signinContainer: {
    marginTop: 81,
  },
  resendContainer: {
    marginTop: 16,
  },
});
