import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

const {width} = Dimensions.get('window');

const info = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.triggerFunction()}
      style={styles.container}>
      <Icon name={props.icon} style={styles.icon} />
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1FFDE',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 2,
    borderRadius: 5,
    width: width / 5.55,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 9,
    color: '#147053',
  },
  icon: {
    color: '#147053',
    fontSize: 25,
  },
});
