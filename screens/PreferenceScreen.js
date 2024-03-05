import { useFonts } from "expo-font";
import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  Switch,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import COLORS from "../utils/colors";
import Button from "../components/Button";

export default PreferenceScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const [footballToggleOn, setFootballToggleOn] = useState(false);
  const [tennisToggleOn, setTennisToggleOn] = useState(false);

  const onPress = () => {
    navigation.navigate("GetStartedScreen");
  };

  const toggleFootball = () => {
    if (!footballToggleOn) {
      console.log("football Toggle Switched On");
    } else {
      console.log("football Toggle Switched Off");
    }
    setFootballToggleOn((previousState) => !previousState);
  };

  const toggleTennis = () => {
    if (!tennisToggleOn) {
      console.log("tennis Toggle Switched On");
    } else {
      console.log("tennis Toggle Switched Off");
    }
    setTennisToggleOn((previousState) => !previousState);
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
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Select your sport</Text>
          <Text style={styles.pageSubtitle}>
            Tap your favourite sport (or both) and choose your preferred
            leagues. We are curious!
          </Text>
        </View>
        <View style={styles.toggleSection}>
          <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>Football</Text>
            <Switch
              style={styles.toggle}
              trackColor={{ false: "#fff", true: "#A5CCF9" }}
              thumbColor={footballToggleOn ? "#fff" : "#fff"}
              onValueChange={toggleFootball}
              value={footballToggleOn}
            />
          </View>

          <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>Tennis</Text>
            <Switch
              style={styles.toggle}
              trackColor={{ false: "#fff", true: "#A5CCF9" }}
              thumbColor={tennisToggleOn ? "#fff" : "#fff"}
              onValueChange={toggleTennis}
              value={tennisToggleOn}
            />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Button onPress={onPress} buttonText={"Finish"} />
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
  toggleSection: {
    marginBottom: 280,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  toggleText: {
    fontFamily: "Manrope-Bold",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 26,
    letterSpacing: 0.45,
    color: COLORS.primaryTextColor,
  },
  toggle: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  textContainer: {
    marginVertical: 40,
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
  btnContainer: {
    marginTop: 150,
  },
});
