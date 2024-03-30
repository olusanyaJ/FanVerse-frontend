import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import Button from "../components/Button";
import COLORS from "../utils/colors";

import Input from "../components/Input";

export default SignupScreenFill = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    Keyboard.dismiss();
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

  const handleSubmit = () => {
    if (validateLogin()) {
      setEmail("");
      setErrors({});
      navigation.navigate("SignupScreenAuth", {
        email: email,
      });
    }
  };

  return (
    <View style={styles.container}>
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
          <Text style={styles.pageTitle}>Almost done!</Text>
          <Text style={styles.pageSubtitle}>
            Confirm your email address and we’ll text you a code to activate
            your account.
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

        <View style={styles.signinContainer}>
          <Button onPress={handleSubmit} buttonText={"Get code"} />
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
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainerDrpdwn: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  modal: {
    marginTop: 160,
    height: 400,
    color: COLORS.primaryTextColor,
    backgroundColor: COLORS.inputBgColor,
    borderRadius: 12,
  },
  ftc: {
    padding: 20,
    marginBottom: 20,
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
  signinContainer: {
    marginTop: 145,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryField: {
    width: "27.5%",
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
    width: "67.5%",
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
  countryCode: {
    width: "100%",
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    // fontWeight: 700,
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.primaryTextColor,
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
  modalImg: {
    height: 24,
    width: 24,
    marginRight: 16,
  },
  modalTxt: {
    fontSize: 16,
    color: COLORS.primaryTextColor,
  },
});
