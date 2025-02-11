import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Notifications = ({ icon, user, message, timestamp, priority, seen }) => {
  return (
    <View style={[styles.notificationItem, seen ? styles.seen : styles.unseen]}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/63/38/6c/63386c858d65101ad5ab1dca14cc4b77.jpg' }}
        style={styles.avatar}
      />
      <View style={styles.notificationText}>
        <Text style={styles.message}>
          <Text style={styles.user}>{user}</Text> {message}
        </Text>
        <Text style={styles.timestamp}>{timestamp.toLocaleString()}</Text>
      </View>
      {icon && <Text style={styles.icon}>{icon}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  seen: {
    backgroundColor: "#f9f9f9",
  },
  unseen: {
    backgroundColor: "#ffffff",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
    marginLeft: 10,
  },
  notificationText: {
    flex: 1,
  },
  user: {
    fontWeight: "bold",
    color: "#000",
  },
  message: {
    fontSize: 14,
    color: "#000",
  },
  timestamp: {
    color: "#999",
    fontSize: 12,
    marginTop: 2,
  },
});

export default Notifications;
