import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const location = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.address}>{props.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    elevation: 1,
    backgroundColor: 'white',
    marginBottom: 0,
    borderRadius: 5,
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#505050',
    paddingBottom: 5,
  },
  address: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: '#A1A1A1',
  },
});

export default location;
