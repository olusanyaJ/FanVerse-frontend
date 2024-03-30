import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import axios from "axios";
import { StackActions } from "@react-navigation/native";

import Button from "../components/Button";
import COLORS from "../utils/colors";

import Input from "../components/Input";

export default ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
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

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // const handleForgotPasswordVerification = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://192.168.1.73:8000/fanverse/api/password/",
  //       { email }
  //     );
  //     if (response) {
  //       navigation.dispatch(
  //         StackActions.replace("ForgotPasswordVerificationScreen", {
  //           token: response.data.token,
  //         })
  //       );
  //     }
  //   } catch (error) {
  //     throw error.message;
  //   }
  // };

  const onPressResend = () => {
    navigation.navigate("ForgotPasswordVerificationScreen", {
      email: email,
    });
  };

  const handleSubmit = () => {
    if (validateLogin()) {
      setEmail("");
      setErrors({});
      onPressResend();
      // handleForgotPasswordVerification();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Forgot Password?</Text>
          <Text style={styles.pageSubtitle}>
            Enter your email address linked to your FanVerse account.
          </Text>
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

        <View style={styles.btnContainer}>
          <Button onPress={handleSubmit} buttonText={"Sign in"} />
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
  btnContainer: {
    marginTop: 80,
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
