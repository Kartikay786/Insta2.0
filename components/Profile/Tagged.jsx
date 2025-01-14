import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const Tagged = ({ posts = [] }) => {
  // Filter only tagged posts
  const taggedPosts = posts.filter(post => post.tagged === true);

  return (
    <View style={styles.container}>
      {taggedPosts.length > 0 ? (
        <View style={styles.grid}>
          {taggedPosts.map((post, index) => (
            <Image
              key={index}
              source={{ uri: post.imgurl }}
              resizeMode="cover"
              style={styles.image}
            />
          ))}
        </View>
      ) : (
        <Text style={styles.noTaggedText}>No tagged posts available.</Text>
      )}
    </View>
  );
};

export default Tagged;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingBottom: 15, // Prevents clipping
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
  noTaggedText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});
