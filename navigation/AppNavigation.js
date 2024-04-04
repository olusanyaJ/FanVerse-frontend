import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStartedScreen from "../screens/GetStartedScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPassword from "../screens/ForgotPassword";
import SignupScreenFill from "../screens/SignupScreenFill";
import SignupScreenAuth from "../screens/SignupScreenAuth";
import ForgotPasswordVerificationScreen from "../screens/ForgotPasswordVerificationScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import ConfirmPasswordScreen from "../screens/ConfirmPasswordScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import Home from "../screens/Home";
import LivescoreScreen from "../screens/LivescoreScreen";
import CreateScreen from "../screens/CreateScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

import PlaceholderScreen from "../screens/PlaceholderScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import ProfileTabNavigation from "./ProfileTabNavigation";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default appNaviagtion = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GetStartedScreen"
          component={GetStartedScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignupScreenFill"
          component={SignupScreenFill}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignupScreenAuth"
          component={SignupScreenAuth}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgotPasswordVerificationScreen"
          component={ForgotPasswordVerificationScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ConfirmPasswordScreen"
          component={ConfirmPasswordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PreferenceScreen"
          component={PreferenceScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LivescoreScreen"
          component={LivescoreScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PlaceholderScreen"
          component={PlaceholderScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProfileTabNavigation"
          component={ProfileTabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
