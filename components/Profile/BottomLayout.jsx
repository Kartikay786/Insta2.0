import { Dimensions, Image, Pressable, StyleSheet, View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Post from './Posts';
import Tagged from './Tagged';

const ProfileBottomLayout = ({ posts }) => {
  const [outlet, setOutlet] = useState('post');

  return (
    <View style={styles.wrapper}>
      {/* Tab Navigation */}
      <View style={styles.container}>
        <Pressable style={outlet==="post" ? styles.activeRoute : styles.unactiveRoute} onPress={() => setOutlet('post')}>
          <Image 
            source={require('../../assets/icons/grid-line.png')} 
            style={styles.grid} 
          />
        </Pressable>
        <Pressable style={outlet==="tagged" ? styles.activeRoute : styles.unactiveRoute

        } onPress={() => setOutlet('tagged')}>
          <Image 
            source={require('../../assets/icons/tagged.png')} 
            style={styles.grid} 
          />
        </Pressable>
      </View>

      {/* Content Area */}
      <View style={styles.contentArea}>
        {outlet === 'post' ? (
          <ScrollView>
            <Post posts={posts} />
          </ScrollView>
        ) : (
          <ScrollView>
            <Tagged posts={posts} />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default ProfileBottomLayout;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopColor: '#d7d7d7',
    borderTopWidth: 1,
    paddingTop: 3,
    padding : 3
  },
  activeRoute: {
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingBottom : 15,
    borderBottomColor : "black",
    borderBottomWidth : 2,
  },
  grid: {
    width: 25,
    height: 25,
  },
  contentArea: {
    height: windowHeight * 0.7, // Set a fixed height for the content area
    overflow: 'hidden',        // Prevent layout overflow
  },
  unactiveRoute : {
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingBottom : 15,
  }

});
