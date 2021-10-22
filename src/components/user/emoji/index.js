import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const emoji = props => {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.text1}>
          (<Text style={styles.text2}>(</Text>
        </Text>
        <Icon name="ios-happy" style={[styles.icon, {color: props.color}]} />
        <Text style={styles.text3}>
          <Text style={styles.text4}>)</Text>)
        </Text>
      </View>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

export default emoji;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    color: '#6E6E6E',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    paddingTop: 5,
  },
  text1: {
    color: '#505050',
  },
  text2: {
    color: '#505050',
    fontSize: 10,
  },
  icon: {
    fontSize: 25,
    paddingLeft: 4,
  },
  text3: {
    color: '#505050',
    paddingLeft: 4,
  },
  text4: {
    color: '#505050',
    fontSize: 10,
  },
});
