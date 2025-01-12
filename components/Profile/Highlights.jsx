import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProfileHighlights = ({ highlights }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{ padding: 5 }}
      style={{ maxHeight: 130 }} // Restrict height
    >
      <View style={{ alignItems: "center" }}>
        <View style={styles.highlight}>
          <Text style={styles.add}>+</Text>
        </View>
        <Text>New</Text>
      </View>

      {highlights && highlights.length > 0 ? (
        highlights.map((highlight, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <View style={styles.highlight}>
              <Image
                style={styles.highlightImage}
                source={{ uri: `${highlight.cover}` }}
                resizeMode="cover"
              />
            </View>
            <Text>{highlight.title}</Text>
          </View>
        ))
      ) : (
        <Text>No highlights available</Text>
      )}
    </ScrollView>
  );
};

export default ProfileHighlights;

const styles = StyleSheet.create({
  highlightImage: {
    borderRadius: 100,
    height: 80,
    width: 80,
  },
  highlight: {
    marginRight: 20,
    borderColor: "#DBDBDE",
    borderWidth: 2,
    borderRadius: 50,
    height: 87,
    width: 87,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  add: {
    fontSize: 30,
  },
});
