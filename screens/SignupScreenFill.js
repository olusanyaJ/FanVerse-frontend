import React, { useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import COLORS from "../utils/colors";
import usFlag from "../assets/icons/us-flag.png";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import Input from "../components/Input";

SplashScreen.preventAutoHideAsync();

export default SignupScreenFill = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const onPress = () => {
    navigation.navigate("SignupScreenAuth");
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
        <View style={styles.pageHeader}>
          <Image
            source={require("../assets/icons/x.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Almost done!</Text>
          <Text style={styles.pageSubtitle}>
            Enter your phone number and we’ll text you a code to activate your
            account.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.countryField}>
            <TouchableOpacity style={styles.countryInput}>
              <View style={styles.flagContainer}>
                <Image
                  source={usFlag}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
              <View>
                <Text style={styles.countryCode}>+1</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.inputField}>
            <Input placeholder={"888999"} keyboardType={"number-pad"} />
          </View>
        </View>

        <View style={styles.signinContainer}>
          <Button onPress={onPress} buttonText={"Get code"} />
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
  signinContainer: {
    marginTop: 145,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryField: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderColor: COLORS.inputBgColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.inputBgColor,
  },
  countryInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagContainer: {
    marginRight: 12,
  },
  inputField: {
    flexDirection: "row",
    width: "70%",
  },
  inputPlaceholder: {
    width: "100%",
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.primaryTextColor,
  },
  countryCode: {
    width: "100%",
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.primaryTextColor,
  },
});
