/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'native-base';

const { height, width } = Dimensions.get("window");

let arr = [
    'https://ak.picdn.net/shutterstock/videos/1010692724/thumb/1.jpg',
    'https://sunkissedkitchen.com/wp-content/uploads/2018/09/paleo-pizza-rc.jpg',
    'https://go-eat-do.com/wp-content/uploads/2018/11/sf_pizzapunks_008.jpg'
    , 'https://i.ytimg.com/vi/rEdKCLrwIt8/maxresdefault.jpg', 'https://brandholic.in/wp-content/uploads/2018/12/food-blogger-delhi-featured-image.jpg',
    'https://myrepublica.nagariknetwork.com/uploads/media/2019/May/food-blog.jpg',
    'https://media.istockphoto.com/videos/travel-blogger-showing-local-hong-kong-food-in-restaurant-video-id933733556?s=640x640',
    'https://st3.depositphotos.com/1643295/18084/i/1600/depositphotos_180843090-stock-photo-asian-female-food-blogger-explaining.jpg',
    'https://cdnimg.webstaurantstore.com/uploads/blog/2017/8/blog-youtube-img2.jpg'
]
class Experience extends Component {
    static navigationOptions = {
        headerShown: false,
    }
    state = {}
    renderVideoThumbnail = () => {
        return (<View style={styles.box}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Video')} activeOpacity={1}>
                <Image
                    source={{ uri: arr[Math.floor(Math.random() * (8 - 0 + 1))] }}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Video')} activeOpacity={1}>

                <Image source={{ uri: arr[Math.floor(Math.random() * (8 - 0 + 1))] }}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>)
    }
    render() {
        return (<ScrollView>
            <ImageBackground
                source={{ uri: 'https://lastfm.freetls.fastly.net/i/u/ar0/3fbb4a220ea9e8e04efc174e0f7e77c6.jpg' }}
                style={styles.dp}
                resizeMode="cover"
            >
                <Icon onPress={() => this.props.navigation.goBack(null)} style={{ color: 'white', margin: 20 }} name="ios-arrow-back" />
            </ImageBackground>
            <View style={styles.view}>
                <Text style={styles.name}>
                    Hernan Lozano
                </Text>
                <Text style={styles.email}>
                    hernan@ucompensar.edu.co
                </Text>
                <View style={styles.row}>
                    <View style={styles.component}>
                        <Icon name="md-paper"
                            style={styles.icon} />
                        <Text style={styles.subheading}>
                            Reviews
                        </Text>
                        <Text style={styles.reviewText}>
                            65
                        </Text>
                    </View>
                    <View style={styles.element}>
                        <Icon name="md-heart"
                            style={[styles.icon, {
                                color: 'red'
                            }]} />
                        <Text style={styles.subheading}>
                            Likes
                        </Text>
                        <Text style={styles.reviewText}>
                            1.1k
                        </Text>
                    </View>
                    <View style={styles.element}>
                        <Icon name="md-share" style={[styles.icon, {
                            color: '#24BC8B',
                        }]} />
                        <Text style={styles.subheading}>
                            Share
                        </Text>
                        <Text style={styles.reviewText}>
                            80
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.experienceView}>
                {this.renderVideoThumbnail()}
                {this.renderVideoThumbnail()}
                {this.renderVideoThumbnail()}
                {this.renderVideoThumbnail()}
                {this.renderVideoThumbnail()}
                {this.renderVideoThumbnail()}
                {this.renderVideoThumbnail()}
            </View>
        </ScrollView>);
    }
}

export default Experience;

const styles = StyleSheet.create({
    dp: { height: height / 4, width: null },
    view: {
        backgroundColor: 'white', margin: 20, borderRadius: 10,
        elevation: 2, padding: 20, marginTop: -height / 10,
    },
    name: { textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 20 },
    email: { textAlign: 'center', fontFamily: 'Roboto-Regular', color: '#707070' },
    row: {
        justifyContent: 'space-around',
        alignItems: 'center', marginTop: 20, flexDirection: 'row'
    }, component: {
        justifyContent: 'center',
        alignItems: 'center'
    }, icon: { color: '#707070', fontSize: 22 },
    element: { justifyContent: 'center', alignItems: 'center' },
    image: {
        height: height / 6,
        width: width / 2.3
    }, experienceView: { margin: 20, marginTop: 0 },
    box: { flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between' }
    , reviewText: {
        fontFamily: 'Roboto-Regular',
        color: '#24BC8B', fontSize: 13
    },
    subheading: {
        fontFamily: 'Roboto-Regular',
        color: '#000', fontSize: 12
    }
})