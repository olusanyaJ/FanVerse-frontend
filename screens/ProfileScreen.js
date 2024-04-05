import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Unorderedlist from "react-native-unordered-list";

import POSTS from "../posts";
import ProfileTabNavigation from "../navigation/ProfileTabNavigation";
const post = POSTS[0];

const iconFHD = require("../assets/imgs/Imagery.png");

export default Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bioContainer}>
        <Image source={iconFHD} style={styles.profileImage} />
        <View style={styles.bioName}>
          <Text style={styles.fullName}>{post.user.fullName}</Text>
          <Text style={styles.username}>@{post.user.username}</Text>
        </View>
        <View style={styles.bioName}>
          <Text style={styles.fullName}>
            2.2k <Text style={styles.username}>following</Text>
          </Text>
          <Text style={styles.fullName}>
            12.2k <Text style={styles.username}>followers</Text>
          </Text>
        </View>
        <View style={styles.bioData}>
          <Text style={[styles.bio, { paddingBottom: 8 }]}>
            a young boy trying to live life with no regrets
          </Text>
          <Unorderedlist color="white">
            <Text style={styles.bio}>Joined November 2023</Text>
          </Unorderedlist>
        </View>
      </View>
      <ProfileTabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackgroundColor,
  },
  bioContainer: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  profileImage: {
    height: 99,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.profileImgBorderColor,
  },
  bioName: {
    flexDirection: "row",
    marginTop: 16,
  },
  bioData: {
    marginTop: 16,
  },
  fullName: {
    color: COLORS.buttonTextColor,
    width: "35%",
    fontSize: 16,
    // fontWeight: 700,
    fontFamily: "Manrope-Bold",
    lineHeight: 21.86,
    letterSpacing: -0.30000001192092896,
  },
  username: {
    color: COLORS.secondaryTextColor,
    fontSize: 16,
    fontFamily: "Manrope-Light",
    // fontWeight: 500,
    lineHeight: 21.86,
    letterSpacing: -0.30000001192092896,
  },
  bio: {
    color: COLORS.buttonTextColor,
    fontFamily: "Manrope-Regular",
    fontSize: 14,
    // fontWeight: 400,
    lineHeight: 19.12,
  },
});
