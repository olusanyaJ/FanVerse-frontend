import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import POSTS from "../posts";

const post = POSTS[0];

export default UserDashboard = () => {
  return (
    <View style={styles.container}>
      <Image
        src={post.user.profileImage}
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
      <Text style={styles.text}>{post.user.username}</Text>
      <Text style={styles.text}>{post.user.fullName}</Text>
      <Text style={styles.text}>{post.content}</Text>
      <Image src={post.contentImg} style={{ height: "25%", width: "100%" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: COLORS.appBackgroundColor,
  },
  text: {
    color: COLORS.primaryTextColor,
    fontFamily: "Manrope-Regular",
  },
});
