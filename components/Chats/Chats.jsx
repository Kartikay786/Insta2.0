import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
const Chats = ({userChats}) => {
  return (
    <View style={styles.container}>
      {userChats.map((chat, idx) => (
        <View key={idx} style={styles.chat}>
            <View style={{flexDirection : "row"}}>
            <View>
                <Image style={styles.pfp} source={{uri : chat.pfp}} />
            </View>
            <View style={styles.middle}>
                <Text style={styles.name}>{chat.name}</Text>
                <Text style={styles.lastMsg}>{chat.lastMessage}</Text>
            </View>
            </View>
            <View style={styles.last}>
            <Feather name="camera" size={24} color="black" />
            </View>
        </View>
      ))}
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
    container : {
        marginTop : 20
    },
    pfp : {
        width : 70,
        height : 70,
        backgroundColor : "#444",
        padding : 3,
        borderRadius : "100%",
        marginRight : 5
    },
    chat : {
        flexDirection : "row",
        padding : 10,
        borderBottomColor : "#dadada",
        borderBottomWidth : 1,
        justifyContent : "space-between"
    },
    middle : {
        justifyContent : "center"
    },
    name : {
        fontSize : 17,
        fontWeight : "600"
    },
    lastMsg : {
        color : "#555"
    },
    last : {
        alignItems : "center",
        justifyContent : "center",
        marginLeft : 100
    }
})