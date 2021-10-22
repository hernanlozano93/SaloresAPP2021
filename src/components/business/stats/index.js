import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window');

const stats = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor,
        },
      ]}>
      <Text style={styles.value}>{props.value}</Text>
      <Text style={styles.text}>
        {props.label.split(' ')[0]} {'\n'} {props.label.split(' ')[1]}
      </Text>
    </TouchableOpacity>
  );
};

export default stats;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width / 2.2,
    padding: 20,
    borderRadius: 10,
  },
  value: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
});
