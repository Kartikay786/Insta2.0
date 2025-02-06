import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Chats/Header'
import Chats from '../../components/Chats/Chats'
import { ScrollView } from 'react-native-gesture-handler'

const Chat = ({navigation}) => {

  const userChats = [
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
    {
      pfp : "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500",
      name : "Shivang Pandey",
      lastMessage : "Shivang Pandey is Great!"
    },
  ]

  return (
    <View>
    <ScrollView  >
      {/* <Text>Chat</Text> */}
      <Header />
      <Chats navigation={navigation} userChats={userChats } />
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default Chat