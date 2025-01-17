import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notification = ({navigation}) => {
  return (
    <View>
      <Text>Notification</Text>
      <Button onPress={()=> navigation.navigate('BottomTabs')} title='Back'/>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})