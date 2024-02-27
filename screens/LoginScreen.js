import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default LoginScreen = () => {
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
              secureTextEntry
              style={styles.inputPlaceholder}
            />

            <TouchableOpacity style={styles.passwordIcon}>
              <Image
                source={require("../assets/icons/eye-off.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0F172A",
    backgroundColor: "cyan",
  },
  pageContainer: {
    flex: 1,
    // marginHorizontal: 24,
  },
  textContainer: {
    // marginTop: 40,
  },
  pageTitle: {},
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
    width: 24,
    height: 24,
  },
});
