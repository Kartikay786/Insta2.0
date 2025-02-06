import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notifications = ({ icon, user, message, timestamp, priority, seen }) => {
  return (
    <View style={[styles.notificationItem, seen ? styles.seen : styles.unseen]}>
      <Text style={styles.icon}>{icon}</Text>
      <View style={styles.notificationText}>
        <Text>
          <Text style={styles.user}>{user}</Text> {message}
        </Text>
        <Text style={styles.timestamp}>{timestamp.toLocaleString()}</Text>
        <Text style={styles.priority}>Priority: {priority}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  seen: {
    backgroundColor: '#f0f0f0',
  },
  unseen: {
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  user: {
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#999',
    fontSize: 12,
  },
  priority: {
    fontSize: 12,
    color: '#d32f2f',
  },
});

export default Notifications;
