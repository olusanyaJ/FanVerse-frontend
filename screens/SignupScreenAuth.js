import React, { useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import Button from "../components/Button";
import COLORS from "../utils/colors";
import BtnOutline from "../components/BtnOutline";
import Input from "../components/Input";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default SignupScreenAuth = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const onPress = () => {
    navigation.navigate("PreferenceScreen");
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.pageContainer}>
        <View style={styles.pageHeader}>
          <Pressable onPress={() => navigation.navigate("GetStartedScreen")}>
            <Image
              source={require("../assets/icons/x.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Authentication code</Text>
          <Text style={styles.pageSubtitle}>
            Enter 5-digit code we just texted to your phone number, +1
            8976889043
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
