import React from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import LivescoreScreen from "../screens/LivescoreScreen";
import CreateScreen from "../screens/CreateScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import COLORS from "../utils/colors";
const liveIcon = require("../assets/icons/wave-saw-tool.png");
const createIcon = require("../assets/icons/Frame.png");
import Header from "../components/Header";
import {
  Feather,
  FontAwesome5,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  headerTintColor: COLORS.buttonTextColor,
  headerStyle: {
    backgroundColor: COLORS.appBackgroundColor,
    height: 100,
    elevation: 0,
    shadowOpacity: 0,
  },
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
    borderTopColor: COLORS.lineBreakColor,
    borderTopWidth: StyleSheet.hairlineWidth,
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
                <MaterialCommunityIcons
                  name="home-minus-outline"
                  size={24}
                  style={[
                    styles.image,
                    {
                      color: focused
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
          headerTitle: "",
          headerLeft: () => (
            <Feather
              name="x"
              size={28}
              color="white"
              style={styles.cancelIcon}
              onPress={() => {
                console.log("Pressed!");
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconContainer}>
                <SimpleLineIcons
                  name="bell"
                  size={24}
                  style={[
                    styles.image,
                    {
                      color: focused
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
                <FontAwesome5
                  name="user"
                  size={24}
                  style={[
                    styles.image,
                    {
                      color: focused
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
          headerTitle: () => <Header />,
          headerLeft: () => (
            <Feather
              name="x"
              size={28}
              color="white"
              style={styles.cancelIcon}
              onPress={() => {
                console.log("Pressed!");
              }}
            />
          ),
          headerRight: () => (
            <Feather
              name="edit-2"
              size={24}
              color="white"
              style={styles.editIcon}
              onPress={() => {
                console.log("Pressed!");
              }}
            />
          ),
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
  cancelIcon: {
    position: "absolute",
    left: 24,
  },
  editIcon: {
    position: "absolute",
    right: 24,
  },
});
