import { View, Text } from 'react-native'
import React from 'react'
import Toptab from '@/components/Home/toptab'
import { white } from '@/constants/Colors'
import Story from '@/components/Home/story'
import PostContainer from '@/components/Home/post'

const Home = ({navigation}) => {
 
  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <Toptab navigation={navigation} />
      <Story />
      <PostContainer />
    </View>
  )
}

export default Home