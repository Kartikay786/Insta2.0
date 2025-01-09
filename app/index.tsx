import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Tabs/Home';
import { NavigationContainer } from '@react-navigation/native';
import Search from './Tabs/Search';
import Post from './Tabs/Post';
import Like from './Tabs/Like';
import Profile from './Tabs/Profile';

import HomeIcon from '@expo/vector-icons/Foundation';
import SearchIcon from '@expo/vector-icons/EvilIcons';
import PostIcon from '@expo/vector-icons/Octicons';
import LikeIcon from '@expo/vector-icons/EvilIcons';
import ProfileIcon from '@expo/vector-icons/EvilIcons';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{
        height:60 // for tab style
      }
    }}

    >
      <Tab.Screen
      name='Home' 
      component={Home}
      options={{
        headerShown:false,
        tabBarIcon:()=> (<HomeIcon name='home' size={30} color='black'/>)
      }}
      />
      <Tab.Screen 
      name='Search' 
      component={Search}
      options={{
        headerShown:false,
        tabBarIcon:()=> (<SearchIcon name='search' size={34} color='black'/>)
      }}
      />
      <Tab.Screen 
      name='Post' 
      component={Post}
      options={{
        headerShown:false,
        tabBarIcon:()=> (<PostIcon name='diff-added' size={28} color='grey'/>)
      }}
      />
      <Tab.Screen 
      name='Like' 
      component={Like}
      options={{
        headerShown:false,
        tabBarIcon:()=> (<LikeIcon name='heart' size={34} color='black'/>)
      }}
      />
       <Tab.Screen 
      name='Profile' 
      component={Profile}
      options={{
        headerShown:false,
        tabBarIcon:()=> (<ProfileIcon name='user' size={34} color='black'/>)
      }}
      />
    </Tab.Navigator>
  )
}
const index = () => {



  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

export default index
