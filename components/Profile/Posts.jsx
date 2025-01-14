import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const Posts = ({ posts = [] }) => {
  // Filter untagged posts
  const untaggedPosts = posts.filter(post => !post.tagged);

  return (
    <View style={styles.container}>
      {untaggedPosts.length > 0 ? (
        <View style={styles.grid}>
          {untaggedPosts.map((post, index) => (
            <Image
              key={index}
              source={{ uri: post.imgurl }}
              resizeMode="cover"
              style={styles.image}
            />
          ))}
        </View>
      ) : (
        <Text style={styles.noPostsText}>No posts to display.</Text>
      )}
    </View>
  );
};

export default Posts;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingBottom: 15, // Prevent clipping
    alignItems: "center", // Center text for fallback
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: windowWidth / 3, // Dynamically adjusts to screen size
    height: windowWidth / 3,
    borderColor: "white",
    borderWidth: 1,
  },
  noPostsText: {
    marginTop: 20,
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});
