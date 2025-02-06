import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Tabs/Home';
import { NavigationContainer } from '@react-navigation/native';
import Search from './Tabs/Search';
import Post from './Tabs/Post';
import Reel from './Tabs/Reel';
import Profile from './Tabs/Profile';
import Chat from './Tabs/Chat';
import Notification from './Tabs/Notification'

import HomeIcon from '@expo/vector-icons/Foundation';
import SearchIcon from '@expo/vector-icons/EvilIcons';
import PostIcon from '@expo/vector-icons/Octicons';
import ProfileIcon from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//tab navigation
const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60 // for tab style
        }
      }}

    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (<HomeIcon name='home' navigation={navigation} size={30} color='black' />)
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: () => (<SearchIcon name='search' size={34} color='black' />)
        }}
      />
      <Tab.Screen
        name='Post'
        component={Post}
        options={{
          headerShown: false,
          tabBarIcon: () => (<PostIcon name='diff-added' size={28} color='grey' />)
        }}
      />
      <Tab.Screen
        name='Reels'
        component={Reel}
        options={{
          headerShown: false,
          tabBarIcon: () => (<Entypo name="video" size={24} color="black" />)
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (<ProfileIcon name='user' size={34} color='black' />)
        }}
      />
    </Tab.Navigator>
  )
}

// stack navigation
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={Tabs}
        options={{
          headerShown:false
        }}
      />


      <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
      <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

const index = () => {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default index
