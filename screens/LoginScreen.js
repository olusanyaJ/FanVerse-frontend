import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Button from "../components/Button";
import COLORS from "../utils/colors";

import Input from "../components/Input";
import InputPassword from "../components/InputPassword";

export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    let errors = {};
    if (!email) errors.email = "Email is required";
    if (email) {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (!regex.test(email)) {
        errors.email = "Enter a valid email";
      }
    }
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateLogin()) {
      setEmail("");
      setPassword("");
      setErrors({});
      navigation.navigate("Dashboard");
    }
  };

  const handlePressGoogle = () => {
    console.log("Google button pressed!");
    // navigation.navigate("GetStartedScreen");
  };
  const handlePressApple = () => {
    console.log("Apple button pressed!");
    // navigation.navigate("GetStartedScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Welcome Back!</Text>
          <Text style={styles.pageSubtitle}>Sign into your account!</Text>
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
            onChangeText={(text) => {
              if (errors.email) {
                setErrors({});
              }
              setEmail(text);
            }}
            value={errors.email ? "" : email}
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

        <View style={styles.fgtPwdContainer}>
          <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.fgtPwdText}>Forgot Password?</Text>
          </Pressable>
        </View>

        <View>
          <Button onPress={handleSubmit} buttonText={"Sign in"} />
        </View>

        <View style={styles.bottomDivide}>
          <View style={styles.lineBreak}></View>
          <Text style={styles.lineBreakText}> Or sign in with </Text>
          <View style={styles.lineBreak}></View>
        </View>

        <View style={styles.btnContainer}>
          <SignInWithBtn
            onPress={handlePressGoogle}
            buttonText={"Google"}
            icon={require("../assets/icons/Google.png")}
          />
          <SignInWithBtn
            onPress={handlePressApple}
            buttonText={"Apple"}
            icon={require("../assets/icons/Apple.png")}
          />
        </View>

        <View style={styles.bottomContent}>
          <Text style={styles.signInText}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={styles.signInLink}> Sign Up</Text>
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
  textContainer: {
    marginVertical: 40,
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
  fgtPwdContainer: {
    marginVertical: 36,
    alignItems: "center",
  },
  fgtPwdText: {
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    // fontWeight: 600,
    lineHeight: 24,
    letterSpacing: 0.3,
    color: COLORS.thirdTextColor,
  },

  bottomDivide: {
    marginVertical: 36,
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
    marginTop: 52,
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
