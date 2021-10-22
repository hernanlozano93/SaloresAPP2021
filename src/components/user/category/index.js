import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class category extends Component {
  state = {};
  render() {
    let data = this.props.category_name;
    // Dummy Data
    let src =
      data === 'Azul'
        ? {
            uri:
              'https://mrroom.s3.ap-south-1.amazonaws.com/outserved/drink.png',
          }
        : data === 'Rojo'
        ? {
            uri:
              'https://mrroom.s3.ap-south-1.amazonaws.com/outserved/food.png',
          }
        : data === 'Verde'
        ? {
            uri:
              'https://mrroom.s3.ap-south-1.amazonaws.com/outserved/shopping.png',
          }
        : data === 'Amarillo'
        ? {
            uri: 'https://mrroom.s3.ap-south-1.amazonaws.com/outserved/top.png',
          }
        : {
            uri:
              'https://mrroom.s3.ap-south-1.amazonaws.com/outserved/best.png',
          };
    let isMap = this.props.map;
    return (
      <View
        style={[
          styles.container,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: isMap ? '#F5F5F5' : 'white',
            height: isMap ? 90 : 77,
            width: isMap ? 90 : 77,
          },
        ]}>
        <Image source={src} style={styles.image} />
        <Text style={styles.text}>{this.props.category_name}</Text>
      </View>
    );
  }
}

export default category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#707070',
    borderRadius: 5,
    margin: 4,
  },

  text: {
    color: '#6E6E6E',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    paddingTop: 4,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});
