import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Searchbar from '../../components/Search/searchbar'
import Suggestions from '../../components/Search/Suggestions'
import SearchSuggestedPosts from '../../components/Search/searchSuggestedPosts'
const Search = () => {

  

  return (
    <View style={{flex:1, backgroundColor : "#fff"}}>
      <View>
        <Searchbar />
        <Suggestions />
        <SearchSuggestedPosts />
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
})