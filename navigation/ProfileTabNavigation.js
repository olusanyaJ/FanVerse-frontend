import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const screenOptions = {
  tabBarActiveTintColor: COLORS.thirdTextColor,
  tabBarInactiveTintColor: COLORS.secondaryTextColor,
  tabBarLabelStyle: {
    fontSize: 14,
    fontFamily: "Manrope-Bold",
    lineHeight: 21.86,
    letterSpacing: -0.3,
  },
  tabBarStyle: {
    marginBottom: 16,
    backgroundColor: COLORS.appBackgroundColor,
    borderBottomColor: COLORS.lineBreakColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
};

export default ProfileTabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();

  const UserPostsTab = () => {
    return (
      <View style={styles.tabContainer}>
        <Text style={{ color: "white" }}>User Posts</Text>
      </View>
    );
  };

  const UserCommentsTab = () => {
    return (
      <View style={styles.tabContainer}>
        <Text style={{ color: "white" }}>User Comments</Text>
      </View>
    );
  };

  const TagsTab = () => {
    return (
      <View style={styles.tabContainer}>
        <Text style={{ color: "white" }}>Tags</Text>
      </View>
    );
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Your Posts" component={UserPostsTab} />
      <Tab.Screen name="Your Comments" component={UserCommentsTab} />
      <Tab.Screen name="Tags" component={TagsTab} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: COLORS.appBackgroundColor,
    paddingHorizontal: 24,
  },
});
