import { StyleSheet, Text, View, TextInput, Image, Dimensions } from "react-native";
import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      <View style={styles.searchbox}>
        <TextInput
          style={styles.searchinput}
          placeholder="Search"
          value={search}
          onChangeText={(val) => setSearch(val)}
        ></TextInput>
      </View>
      <View style={styles.scan}>
        <Image
          style={styles.scan}
          resizeMode="cover"
          source={{
            uri: "https://icons.veryicon.com/png/o/miscellaneous/ionicons-1/ios-qr-scanner-3.png",
          }}
        />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchbox: {
    backgroundColor: "#EAEAEB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    paddingLeft: 7,
    borderRadius: 10,
    marginTop : 3,
    marginLeft : 10,
    width: Dimensions.get("window").width - 70,
  },
  scan: {
    width: 25,
    marginRight : 3,
    height: 25,
    borderRadius: 10,
  },
  searchinput: {
    width: Dimensions.get("window").width - 70,
    height : 30,
  },
});
