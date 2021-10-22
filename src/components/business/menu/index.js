import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const menu = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        props.routeName !== undefined
          ? props.navigation.navigate({
              routeName: props.routeName,
            })
          : {}
      }
      style={styles.container}>
      <Image source={props.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default menu;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    margin: 10,
    borderRadius: 5,
    paddingBottom: 20,
    paddingTop: 20,
    flex: 1,
  },
  label: {
    paddingTop: 10,
    fontFamily: 'Roboto-Regular',
    color: '#505050',
    fontSize: 13,
  },
  icon: {
    color: '#147053',
    fontSize: 25,
  },
  image: {
    height: 45,
    width: 45,
  },
});
