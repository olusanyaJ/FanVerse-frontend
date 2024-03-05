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
import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();

export default appNaviagtion = () => {
  return (
    <NavigationContainer>
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
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
