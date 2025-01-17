import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Camera from '@expo/vector-icons/SimpleLineIcons';
import { grey } from '@/constants/Colors';
import Send from '@expo/vector-icons/Feather';
import LikeIcon from '@expo/vector-icons/EvilIcons';


const Toptab = ({navigation}) => {

  return (
    <View style={styles.tabBar}>
      <Camera name='camera' size={24} color={grey} />
      <View style={{ width: 62, padding: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: 38, width: 130, objectFit: 'cover' }}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png' }}
        />
      </View>
      {/* <Text style={{fontSize:22,fontWeight:'semibold'}}>Instagram</Text> */}
      <Text style={{ gap: 10, justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <LikeIcon name="heart" size={34} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Send name="send" size={24} color="#777" />
        </TouchableOpacity>
      </Text>
    </View>
  )
}

export default Toptab

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12
  }
})