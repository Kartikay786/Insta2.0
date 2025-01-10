import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dots from '@expo/vector-icons/Entypo';
import LikeIcon from '@expo/vector-icons/EvilIcons';
import Send from '@expo/vector-icons/Feather';

import Save from '@expo/vector-icons/FontAwesome';



const PostContainer = () => {
    return (
        <View style={{paddingBottom:10}}>
            <ScrollView style={{paddingBottom:10}}>
                {/* post  */}
                <View style={{ borderBottomColor: '#e2e2e2', borderBottomWidth: 2 }}>
                    {/* top tab */}
                    <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* right part */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRadius: 30, borderColor: '#fff', padding: 2, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                                <Image
                                    style={{ height: 36, width: 36, borderRadius: 30 }}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7aOjYpF9t0F_3mAmirJAct-mGZg5-m5JOudk6Q4TLVTEzuDeiSorf2U&s' }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: '#222', fontSize: 13, fontWeight: '600' }}>kuser_boy</Text>
                                <Text style={{ color: '#222', fontSize: 12 }}>Delhi, India</Text>
                            </View>

                        </View>
                        <Text style={{ marginRight: 4 }}>
                            <Dots name='dots-three-horizontal' size={16} color='black' />
                        </Text>
                    </View>

                    {/* post content */}
                    <View style={{ width: '100%', borderRadius: 30, borderColor: '#fff', paddingVertical: 2, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                        <Image
                            style={{ height: 400, width: '100%' }}
                            source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/028/626/672/small_2x/hd-image-ai-generative-free-photo.jpeg' }}
                        />
                    </View>

                    {/* like comment */}
                    <View style={{ paddingHorizontal: 10, paddingVertical: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        {/* right part */}
                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <LikeIcon name='heart' size={34} color='black' />

                            <Text style={{ marginTop: 6, fontWeight: 400, transform: 'rotate(270deg)' }}> <Send name='message-circle' size={26} color='black' /></Text>
                            <Text style={{ marginTop: 4, fontWeight: 400, transform: 'rotate(10deg)' }}> <Send name='send' size={24} color='black' /></Text>
                        </View>
                        <Text style={{ marginRight: 6, marginTop: 4 }}>
                            <Save name='bookmark-o' size={26} color='black' />
                        </Text>
                    </View>
                </View>

                {/* post  */}
                <View style={{ borderBottomColor: '#e2e2e2', borderBottomWidth: 2 }}>
                    {/* top tab */}
                    <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* right part */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRadius: 30, borderColor: '#fff', padding: 2, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                                <Image
                                    style={{ height: 36, width: 36, borderRadius: 30 }}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7aOjYpF9t0F_3mAmirJAct-mGZg5-m5JOudk6Q4TLVTEzuDeiSorf2U&s' }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: '#222', fontSize: 13, fontWeight: '600' }}>kuser_boy</Text>
                                <Text style={{ color: '#222', fontSize: 12 }}>Delhi, India</Text>
                            </View>

                        </View>
                        <Text style={{ marginRight: 4 }}>
                            <Dots name='dots-three-horizontal' size={16} color='black' />
                        </Text>
                    </View>

                    {/* post content */}
                    <View style={{ width: '100%', borderRadius: 30, borderColor: '#fff', paddingVertical: 2, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                        <Image
                            style={{ height: 400, width: '100%' }}
                            source={{ uri: 'https://images.pexels.com/photos/289998/pexels-photo-289998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                        />
                    </View>

                    {/* like comment */}
                    <View style={{ paddingHorizontal: 10, paddingVertical: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        {/* right part */}
                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <LikeIcon name='heart' size={34} color='black' />

                            <Text style={{ marginTop: 6, fontWeight: 400, transform: 'rotate(270deg)' }}> <Send name='message-circle' size={26} color='black' /></Text>
                            <Text style={{ marginTop: 4, fontWeight: 400, transform: 'rotate(10deg)' }}> <Send name='send' size={24} color='black' /></Text>
                        </View>
                        <Text style={{ marginRight: 6, marginTop: 4 }}>
                            <Save name='bookmark-o' size={26} color='black' />
                        </Text>
                    </View>
                </View>

                {/* post  */}
                <View style={{ borderBottomColor: '#e2e2e2', borderBottomWidth: 2 }}>
                    {/* top tab */}
                    <View style={{ padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* right part */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRadius: 30, borderColor: '#fff', padding: 2, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                                <Image
                                    style={{ height: 36, width: 36, borderRadius: 30 }}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7aOjYpF9t0F_3mAmirJAct-mGZg5-m5JOudk6Q4TLVTEzuDeiSorf2U&s' }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: '#222', fontSize: 13, fontWeight: '600' }}>kuser_boy</Text>
                                <Text style={{ color: '#222', fontSize: 12 }}>Delhi, India</Text>
                            </View>

                        </View>
                        <Text style={{ marginRight: 4 }}>
                            <Dots name='dots-three-horizontal' size={16} color='black' />
                        </Text>
                    </View>

                    {/* post content */}
                    <View style={{ width: '100%', borderRadius: 30, borderColor: '#fff', paddingVertical: 2, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                        <Image
                            style={{ height: 400, width: '100%' }}
                            source={{ uri: 'https://pixlr.com/images/generator/how-to-generate.webp' }}
                        />
                    </View>

                    {/* like comment */}
                    <View style={{ paddingHorizontal: 10, paddingVertical: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        {/* right part */}
                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <LikeIcon name='heart' size={34} color='black' />

                            <Text style={{ marginTop: 6, fontWeight: 400, transform: 'rotate(270deg)' }}> <Send name='message-circle' size={26} color='black' /></Text>
                            <Text style={{ marginTop: 4, fontWeight: 400, transform: 'rotate(10deg)' }}> <Send name='send' size={24} color='black' /></Text>
                        </View>
                        <Text style={{ marginRight: 6, marginTop: 4 }}>
                            <Save name='bookmark-o' size={26} color='black' />
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PostContainer

const styles = StyleSheet.create({})