import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileHeader = ({username}) => {
  return (
    <View
        style={styles.container}
    >
      <View
        style={styles.account}    
    >
        <Text
            style = {styles.id}
        >{username}</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    container : {
        padding : 20,
        flexDirection : 'row',

    } ,
    account : {
        width : "90%",  
    } ,
    id : {
        fontSize : 25,
        fontWeight : '700'
    },
    menu : {
        height : 20,
        width : 25,
        justifyContent : "space-between",
    } ,
    line : {
        height : 2,
        width : "100%",
        backgroundColor :"#333333",
        borderRadius : 10

    }
});
