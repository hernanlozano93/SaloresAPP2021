import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const achievements = props => {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Image source={props.source} style={styles.image} />
      </View>
      <Text style={styles.text}>
        {props.line1}
        {'\n'}
        {props.line2}
      </Text>
    </View>
  );
};

export default achievements;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    elevation: 3,
    borderRadius: 5,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: '#147053',
    textAlign: 'center',
  },
  image: {
    borderRadius: 5,
    height: 72,
    width: 72,
  },
});
