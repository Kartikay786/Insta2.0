import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Suggestions = () => {
  const suggestions = [
    "IGTV",
    "Shop",
    "Style",
    "Sport",
    "Auto",
    "Trending",
    "Latest",
    "New",
    "For you",
  ];
  return (
    <View
        style={styles.main}
    >
      <ScrollView horizontal style={styles.container}>
        {suggestions.map((suggestion, index) => (
          <View key={index} style={styles.view}>
            <Text>{suggestion}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    height : 33,
  },
  container: {
    flexDirection : "row",
  },
  view: {
    borderRadius: 5,
    borderColor: "#eeeeee",
    borderWidth: 1,
    padding: 9,
    alignItems: "center",
    justifyContent: "center",
    marginLeft : 4
  },
  text: {
    fontSize: 14,
  },
});
