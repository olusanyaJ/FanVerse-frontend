import React, { useState } from "react";
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
import FONTS from "../utils/fonts";

// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

export default LoginScreen = ({ navigation }) => {
  //   let [fontsLoaded] = useFonts({
  //     "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
  //     "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
  //     "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  //   });

  //   if (!fontsLoaded) {
  //     return <AppLoading />;
  //   }
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Welcome Back!</Text>
          <Text style={styles.pageSubtitle}>Sign into your account!</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={"red"}
              keyboardType="email-address"
              style={styles.inputPlaceholder}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={"red"}
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

        <View>
          <Pressable>
            <Text>Forgot Password?</Text>
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
    // marginHorizontal: 24,
  },
  textContainer: {
    // marginTop: 40,
  },
  pageTitle: {
    // fontFamily: FONTS.bold,
    // fontSize: 24,
    // fontWeight: 700,
    // lineHeight: 36,
    // color: COLORS.primaryTextColor,
  },
  pageSubtitle: {},
  inputContainer: {
    // marginBottom: 12,
    borderColor: "red",
    borderWidth: 1,
  },
  inputField: {
    width: "100%",
    height: 34,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
  },
  inputPlaceholder: {
    width: "100%",
  },
  passwordIcon: {
    position: "absolute",
    right: 12,
  },
  icon: {
    // color: COLORS.primaryBtnColor,
  },
  bottomDivide: {
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
    // marginVertical: 41,
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
