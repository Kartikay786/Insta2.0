import { View, Text, Button } from 'react-native'
import React from 'react'

const Chat = ({navigation}) => {
  return (
    <View>
      <Text>Chat</Text>
      <Button onPress={()=> navigation.navigate('BottomTabs')} title='Back'/>
    </View>
  )
}

export default Chat