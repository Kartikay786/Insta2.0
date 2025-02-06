import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Notifications from "../../components/Notification/Notifications";

const Notification = ({ navigation }) => {
  const notification = Array.from({ length: 30 }, (_, index) => {
    const types = [
      "liked your photo",
      "liked your story",
      "mentioned you in a comment",
      "mentioned you in a story",
      "started following you",
      "liked your comment",
      "replied to your comment",
      "shared your post",
      "tagged you in a photo",
      "commented on your post",
    ];

    const categories = {
      likes: ["liked your photo", "liked your story", "liked your comment"],
      mentions: [
        "mentioned you in a comment",
        "mentioned you in a story",
        "tagged you in a photo",
      ],
      follows: ["started following you"],
      comments: ["commented on your post", "replied to your comment"],
      shares: ["shared your post"],
    };

    const userList = [
      "kammo",
      "alex",
      "jessica",
      "mike",
      "sophia",
      "ryan",
      "chloe",
      "nathan",
      "olivia",
    ];
    const priorityLevels = ["high", "medium", "low"];
    const icons = {
      "liked your photo": "❤️",
      "liked your story": "🔥",
      "mentioned you in a comment": "💬",
      "mentioned you in a story": "📢",
      "started following you": "👤",
      "liked your comment": "👍",
      "replied to your comment": "💭",
      "shared your post": "🔄",
      "tagged you in a photo": "🏷️",
      "commented on your post": "📝",
    };

    const randomType = types[Math.floor(Math.random() * types.length)];
    const category = Object.entries(categories).find(([_, values]) =>
      values.includes(randomType)
    )[0];
    const randomUser = userList[Math.floor(Math.random() * userList.length)];
    const randomPriority =
      priorityLevels[Math.floor(Math.random() * priorityLevels.length)];
    const timestamp = new Date(
      Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)
    ); // Within the last 7 days
    const seen = Math.random() < 0.5; // 50% chance of being seen
    const actionUrl = `/profile/${randomUser}/notifications/${index + 1}`;

    return {
      id: index + 1,
      type: randomType,
      category,
      byUser: randomUser,
      timestamp,
      seen,
      priority: randomPriority,
      actionUrl,
      icon: icons[randomType],
    };
  });

  console.log(notification)

  return (
    <View>
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("BottomTabs")}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Text style={styles.text}>Notification</Text>
      </View>
      <View style={{ flex: 1 }}>
        {notification.map((notif) => (
          <Notifications icon={notif.icon} user={notif.byUser} message={notif.category} timestamp={notif.timestamp} priority={notif.priority} seen={notif.seen} />
        ))}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
  },
  text: {
    marginLeft: 40,
    marginTop: 5,
    fontSize: 20,
  },
});
