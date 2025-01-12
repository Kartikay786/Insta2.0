import { StyleSheet, Text, View } from "react-native";
import ProfileHeader from "../../components/Profile/header";
import ProfileDetailsSection from "../../components/Profile/details";
import ProfileHighlights from "../../components/Profile/Highlights";
import React, { useState } from "react";
import { white } from "@/constants/Colors";

const Profile = () => {
  const [user, setUser] = useState({
    username: "@evolving",
    name: "Evolving Coders",
    bio: "ever tried, ever failed, try again, fail again, fail better, \n ",
    posts: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    followers: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    following: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    profile:
      "https://i.pinimg.com/474x/02/bc/1d/02bc1ddfb478c7069ac1db5017955648.jpg",
    links: [],
    highlights: [
      {
        title: "Friends",
        id: "1",
        cover:
          "https://images.unsplash.com/photo-1709398668435-bc1222eb405e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MXgxfGVufDB8fDB8fHww",
      },

      {
        id: "2",
        title: "Projects",
        cover:
          "https://plus.unsplash.com/premium_photo-1687119905599-09fe40700389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
      },

      {
        id: "3",
        title: "Members",
        cover:
          "https://plus.unsplash.com/premium_photo-1678760860912-e8c2ce35b882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  });

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ProfileHeader username={user.username} />
      <ProfileDetailsSection user={user} />
      <ProfileHighlights highlights={user.highlights} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
