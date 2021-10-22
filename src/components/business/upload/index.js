import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const upload = props => {
  return (
    <View style={styles.container}>
      <Icon name="ios-camera" style={styles.camera} />
    </View>
  );
};

export default upload;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 45,
    margin: 10,
  },
  camera: {color: '#A1A1A1', fontSize: 25},
});
