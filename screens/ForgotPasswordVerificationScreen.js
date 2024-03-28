import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import COLORS from "../utils/colors";
import BtnOutline from "../components/BtnOutline";
import OTPInput from "../components/OTPInput";

export default ForgotPasswordVerificationScreen = ({ navigation, route }) => {
  const { email } = route.params;
  const [code, setCode] = useState(Array(5).fill(""));
  // const [code, setCode] = useState(Array.from({ length: 5 }, () => ""));
  const [errors, setErrors] = useState({});

  // const validateCode = () => {
  //   let errors = {};
  //   if (!code || code.length === 0) {
  //     errors.code = "OTP code is required";
  //     return;
  //   }
  //   setErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };

  const onPress = () => {
    // if (validateCode()) {
    //   setErrors(errors);
    //   setCode(Array(5).fill(""));
    //   console.log("pressed");
    //   const generatedOTPCode = code.join("");
    //   console.log(generatedOTPCode);
    // }

    const generatedOTPCode = code.join("");
    navigation.navigate("NewPasswordScreen", {
      generatedOTPCode: generatedOTPCode,
      email: email,
    });
  };

  const onPressResend = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Enter Authentication code</Text>
          <Text style={styles.pageSubtitle}>
            Please enter the verification code sent to your email and phone
            number.
          </Text>
        </View>

        <View>
          <OTPInput length={5} value={code} onChange={setCode} />

          {errors.code && <Text style={styles.errorText}>{errors.code}</Text>}
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
  errorText: {
    color: COLORS.primaryBtnColor,
    fontSize: 16,
    letterSpacing: 0.5,
    marginBottom: 16,
  },
});
