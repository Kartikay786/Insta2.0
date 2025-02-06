import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Header = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Pressable onPress={()=> navigation.navigate('BottomTabs')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>evolving</Text>
          <AntDesign style={{ marginTop: 5 }} name="down" size={13} color="black" />
        </View>
        <Pressable>
          <FontAwesome name="pencil-square-o" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.search}>
        <Pressable style={styles.button}>
          <Text>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  one: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
  },
  search: {
    padding: 9,
    marginTop: 20,
    backgroundColor: "#dadada",
    borderRadius: 10,
  },
  button: {
    width: "100%",
    color: "#aaaaaa",
  },
});
