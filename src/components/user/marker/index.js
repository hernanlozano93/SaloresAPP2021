import React from 'react';
import {Image, StyleSheet, ImageBackground} from 'react-native';

const Marker = () => {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="contain"
      source={require('../../../assets/location.png')}>
      <Image
        style={styles.logo}
        source={require('../../../assets/bking.png')}
      />
    </ImageBackground>
  );
};

export default Marker;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    alignItems: 'center',
  },
  logo: {
    height: 23,
    width: 23,
    borderRadius: 23,
    margin: 2,
  },
});
