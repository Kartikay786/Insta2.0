import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileDetailsSection = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Image source={{ uri: `${user.profile}` }} style={styles.image} />
        <View>
          <Text style={styles.oneText}>{user.posts.length}</Text>
          <Text style={styles.oneText}>Posts</Text>
        </View>
        <View style={styles.oneText}>
          <Text style={styles.oneText}>{user.following.length}</Text>
          <Text style={styles.oneText}>Following</Text>
        </View>
        <View style={styles.oneText}>
          <Text style={styles.oneText}>{user.followers.length}</Text>
          <Text style={styles.oneText}>Followers</Text>
        </View>
      </View>
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <View>
        <Pressable
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >Edit Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileDetailsSection;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 85,
  },
  one: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  oneText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
  },
  bio: {
    fontSize: 15,
    width: "80%",
    marginTop: 2,
    fontWeight: "600",
  },
  button : {
    padding : 5 ,
    borderRadius : 3,
    borderColor : '#DCDCDD',
    borderWidth : 1,
    marginTop : 20
  },
  buttonText : {
    textAlign : "center"
  }
});
