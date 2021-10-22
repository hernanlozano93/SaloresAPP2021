/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    Dimensions,
    Image, ImageBackground, StyleSheet, TouchableOpacity
} from 'react-native';

const { height, width } = Dimensions.get('window');


const card = (props) => {
    return (<TouchableOpacity
        onPress={() => props.navigation.navigate("Video")}
        activeOpacity={1}>
        <ImageBackground
            resizeMode="cover"
            source={{ uri: 'https://ak.picdn.net/shutterstock/videos/1010692724/thumb/1.jpg' }}
            // source={require('../../../assets/video-thumbnail.png')}
            // source={{ uri: arr[Math.floor(Math.random() * (7 - 0 + 1))] }}
            style={styles.cover}
        >
            <Image style={styles.image}
                source={require('../../../assets/play.png')} />
        </ImageBackground>
    </TouchableOpacity>)
}
export default card;

const styles = StyleSheet.create({
    cover: {
        height: 100, width: width / 2.5, overflow: 'hidden', borderRadius: 10,
        justifyContent: 'center', alignItems: 'center', marginTop: 10, marginRight: 10
    },
    image: {
        height: 40, width: 40
    }
})