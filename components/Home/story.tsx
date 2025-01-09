import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { grey } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient';

const Story = () => {
  return (
    <View>
      <ScrollView style={[styles.container, { gap: 8 }]} horizontal={true} showsHorizontalScrollIndicator={false}>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRry6xrV-GlPQe3uPhTxxnZlgNQznNMMNDiIlUMIN4F9sIq_VF5nUbAM00&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7aOjYpF9t0F_3mAmirJAct-mGZg5-m5JOudk6Q4TLVTEzuDeiSorf2U&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlj8FBO_bs43voANsLAq8b0hwIRYMi-UlrEjw_dRJgECcDH2AzQECGRys&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRry6xrV-GlPQe3uPhTxxnZlgNQznNMMNDiIlUMIN4F9sIq_VF5nUbAM00&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7aOjYpF9t0F_3mAmirJAct-mGZg5-m5JOudk6Q4TLVTEzuDeiSorf2U&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlj8FBO_bs43voANsLAq8b0hwIRYMi-UlrEjw_dRJgECcDH2AzQECGRys&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRry6xrV-GlPQe3uPhTxxnZlgNQznNMMNDiIlUMIN4F9sIq_VF5nUbAM00&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7aOjYpF9t0F_3mAmirJAct-mGZg5-m5JOudk6Q4TLVTEzuDeiSorf2U&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>

        <View style={styles.story}>
          <LinearGradient
            colors={['#ff7e5f', '#feb47b', '#ff7e5f']} // Gradient colors
            style={{ height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', }} >
            <View style={{ height: 60, width: 60, borderRadius: 30, borderColor: '#fff', padding: 2, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 56, width: 56, borderRadius: 28 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlj8FBO_bs43voANsLAq8b0hwIRYMi-UlrEjw_dRJgECcDH2AzQECGRys&s' }}
              />
            </View>
          </LinearGradient>
          <Text style={{ color: '#222', fontSize: 12 }}>Your Story</Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

export default Story

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#f5f5f5',
    borderTopWidth: 2,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 2,
    padding: 10,
    flexDirection: 'row',
    gap: 18,
  },
  story: {
    height: 80,
    alignItems: 'center',
    marginRight: 14
  }
})