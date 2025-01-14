import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProfileHeader from "../../components/Profile/header";
import ProfileDetailsSection from "../../components/Profile/details";
import ProfileHighlights from "../../components/Profile/Highlights";
import ProfileBottomLayout from "../../components/Profile/BottomLayout";

const Profile = () => {
  const [user, setUser] = useState({
    username: "@evolving",
    name: "Evolving Coders",
    bio: "ever tried, ever failed, try again, fail again, fail better.",
    posts:[ 
      {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
      imgurl: "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      tagged: false,
    },
    {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
      {
        imgurl: "https://media.istockphoto.com/id/2167520644/photo/beautiful-iceberg-in-the-ocean-with-a-view-under-water-global-warming-concept-melting-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVO9rDvs9CtbBHA7nLkQrksTYoth9P2SxyS2SxfT8J4=",
        tagged: true,
      },
  ],
    
    
    followers: Array(16).fill(""),
    following: Array(16).fill(""),
    profile:
      "https://i.pinimg.com/474x/02/bc/1d/02bc1ddfb478c7069ac1db5017955648.jpg",
    highlights: Array(7).fill({
        title: "Friends",
        id: "1",
        cover: "https://images.unsplash.com/photo-1709398668435-bc1222eb405e?w=500",
      }),
      // More highlights...
    
  });

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <ProfileHeader username={user.username} />
      <ProfileDetailsSection user={user} />
      <ProfileHighlights highlights={user.highlights} />
      <ProfileBottomLayout posts={user.posts} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  contentContainer: {
    paddingBottom: 20, // Enough space for scrolling past the last row
  },
});
