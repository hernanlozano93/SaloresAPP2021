import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

const {height, width} = Dimensions.get('window');

// Mock Data
let arr = [
  'https://ak.picdn.net/shutterstock/videos/1010692724/thumb/1.jpg',
  'https://go-eat-do.com/wp-content/uploads/2018/11/sf_pizzapunks_008.jpg',
  'https://i.ytimg.com/vi/rEdKCLrwIt8/maxresdefault.jpg',
  'https://brandholic.in/wp-content/uploads/2018/12/food-blogger-delhi-featured-image.jpg',
  'https://myrepublica.nagariknetwork.com/uploads/media/2019/May/food-blog.jpg',
  'https://media.istockphoto.com/videos/travel-blogger-showing-local-hong-kong-food-in-restaurant-video-id933733556?s=640x640',
  'https://st3.depositphotos.com/1643295/18084/i/1600/depositphotos_180843090-stock-photo-asian-female-food-blogger-explaining.jpg',
  'https://cdnimg.webstaurantstore.com/uploads/blog/2017/8/blog-youtube-img2.jpg',
];

const Experiences = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.navigation.navigate('Video')}
      style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: arr[Math.floor(Math.random() * (7 - 0 + 1))]}}
        style={styles.cover}>
        <Image
          style={styles.image}
          source={require('../../../assets/play.png')}
        />
      </ImageBackground>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>Domino's Pizza</Text>
          <Text style={styles.address}>Ak. 15 ##No.82-22, Bogotá</Text>
          <Text style={styles.postedText}>Posteado por Hernan Lozano</Text>
        </View>
        <View style={styles.containerView}>
          <Icon name="ios-heart" style={styles.icon} />
          <Text style={styles.smallText}>12K</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Experiences;

const styles = StyleSheet.create({
  container: {
    height: height / 4,
    width: width / 1.5,
    elevation: 2,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  smallText: {
    lineHeight: 24,
    color: '#707070',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  postedText: {
    lineHeight: 15,
    color: '#707070',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  cover: {
    height: height / 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  address: {
    lineHeight: 24,
    color: '#707070',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  icon: {
    color: '#e23737',
    fontSize: 16,
  },
  row: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    lineHeight: 24,
    color: '#26BE8D',
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
  },
  image: {
    height: 50,
    width: 50,
  },
  containerView: {
    alignItems: 'center',
  },
});
