import React, { useCallback, useState } from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import Button from "../components/Button";
import COLORS from "../utils/colors";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";

SplashScreen.preventAutoHideAsync();

export default SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const handleSubmit = () => {
    if (validateLogin()) {
      console.log("Submitted!", username, email, password);
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
      navigation.navigate("SignupScreenFill");
    }
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
          <Pressable onPress={() => navigation.navigate("GetStartedScreen")}>
            <Image
              source={require("../assets/icons/x.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Create an account</Text>
          <Text style={styles.pageSubtitle}>
            Let’s get you up and running with your very own FanVerse account.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder={errors.username ? `${errors.username}` : "Username"}
            placeholderTextColor={
              errors.username
                ? COLORS.primaryBtnColor
                : COLORS.secondaryTextColor
            }
            style={[
              styles.inputPlaceholder,
              !errors.username && styles.inputPlaceholder,
              errors.username && styles.inputPlaceholderErr,
            ]}
            keyboardType={"default"}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            style={[
              styles.inputPlaceholder,
              !errors.email && styles.inputPlaceholder,
              errors.email && styles.inputPlaceholderErr,
            ]}
            placeholder={errors.email ? `${errors.email}` : "Email"}
            placeholderTextColor={
              errors.email ? COLORS.primaryBtnColor : COLORS.secondaryTextColor
            }
            keyboardType={"email-address"}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputPassword
            onChangeText={setPassword}
            value={password}
            style={[
              styles.inputPlaceholder,
              !errors.password && styles.inputPlaceholder,
              errors.password && styles.inputPlaceholderErr,
            ]}
            placeholderTextColor={
              errors.password
                ? COLORS.primaryBtnColor
                : COLORS.secondaryTextColor
            }
            placeholder={errors.password ? `${errors.password}` : "Password"}
          />
        </View>

        <View style={styles.signinContainer}>
          <Button onPress={handleSubmit} buttonText={"Sign up"} />
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
    marginTop: 24,
    marginBottom: 24,
  },
  signinTerms: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  bottomDivide: {
    marginBottom: 20,
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
    marginTop: 36,
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
  inputPlaceholder: {
    width: "100%",
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    // fontWeight: 400,
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.primaryTextColor,
  },
  inputPlaceholderErr: {
    fontSize: 18,
  },
});
