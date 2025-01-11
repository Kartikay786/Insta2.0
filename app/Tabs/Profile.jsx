import { StyleSheet, Text, View } from 'react-native'
import ProfileHeader from '../../components/Profile/header'
import ProfileDetailsSection from '../../components/Profile/details'
import React, { useState } from 'react'
import { white } from '@/constants/Colors'

const Profile = () => {

  const [user, setUser] = useState( {
    username : "@evolving",
    name : "Evolving Coders",
    bio : "ever tried, ever failed, try again, fail again, fail better, \n ",
    posts : ['','','','','','','','','','','','','','','','',],
    followers : ['','','','','','','','','','','','','','','','',],
    following : ['','','','','','','','','','','','','','','','',],
    profile : 'https://i.pinimg.com/474x/02/bc/1d/02bc1ddfb478c7069ac1db5017955648.jpg',
    links : [],
    highlights : []
  })


  return (
    <View
      style={{backgroundColor:'white' , flex : 1}}
    >
      <ProfileHeader username={user.username} />
      <ProfileDetailsSection user = {user} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})