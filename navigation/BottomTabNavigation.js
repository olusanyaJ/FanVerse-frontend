import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import LivescoreScreen from "../screens/LivescoreScreen";
import CreateScreen from "../screens/CreateScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import COLORS from "../utils/colors";
const homeIcon = require("../assets/icons/home.png");
const liveIcon = require("../assets/icons/wave-saw-tool.png");
const createIcon = require("../assets/icons/Frame.png");
const notificationIcon = require("../assets/icons/notification.png");
const profileIcon = require("../assets/icons/user.png");

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 34,
    right: 0,
    left: 0,
    elevation: 0,
    height: 64,
    paddingVertical: 8,
    backgroundColor: COLORS.appBackgroundColor,
    borderTopWidth: 1,
    borderTopColor: COLORS.lineBreakColor,
  },
};

export default BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconContainer}>
                <Image
                  source={homeIcon}
                  resizeMode="contain"
                  style={[
                    styles.image,
                    {
                      tintColor: focused
                        ? COLORS.primaryTextColor
                        : COLORS.secondaryTextColor,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: focused
                        ? COLORS.primaryTextColor
                        : COLORS.secondaryTextColor,
                    },
                  ]}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Live scores"
        component={LivescoreScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconContainer}>
                <Image
                  source={liveIcon}
                  resizeMode="contain"
                  style={[
                    styles.image,
                    {
                      tintColor: focused
                        ? COLORS.primaryTextColor
                        : COLORS.secondaryTextColor,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: focused
                        ? COLORS.primaryTextColor
                        : COLORS.secondaryTextColor,
                    },
                  ]}
                >
                  Live scores
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.createBtn}>
                <Image
                  source={createIcon}
                  resizeMode="contain"
                  style={[
                    styles.image,
                    {
                      tintColor: focused
                        ? COLORS.primaryTextColor
                        : COLORS.buttonTextColor,
                    },
                  ]}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconContainer}>
                <Image
                  source={notificationIcon}
                  resizeMode="contain"
                  style={[
                    styles.image,
                    {
                      tintColor: focused
                        ? COLORS.primaryTextColor
                        : COLORS.secondaryTextColor,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: focused
                        ? COLORS.primaryTextColor
                        : COLORS.secondaryTextColor,
                    },
                  ]}
                >
                  Notifications
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconContainer}>
                <Image
                  source={profileIcon}
                  resizeMode="contain"
                  style={[
                    styles.image,
                    {
                      tintColor: focused
                        ? COLORS.primaryTextColor
                        : COLORS.secondaryTextColor,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: focused
                        ? COLORS.primaryTextColor
                        : COLORS.secondaryTextColor,
                    },
                  ]}
                >
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  createBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primaryBtnColor,
    width: 48,
    height: 48,
    top: 15,
    borderRadius: 1000,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.appBackgroundColor,
    top: 15,
    height: 48,
    gap: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    fontFamily: "Manrope-Bold",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 20.4,
    letterSpacing: 0.20000000298023224,
  },
});
