import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const visit = props => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require('../../../assets/avatar.jpeg')}
          style={styles.image}
        />
        <View style={styles.row}>
          <Text style={styles.description}>{props.offerName}</Text>
          <Text style={styles.username}>{props.userName}</Text>
        </View>
      </View>
      <Text style={styles.time}>3:21PM</Text>
    </TouchableOpacity>
  );
};

export default visit;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 5,
    margin: 10,
    padding: 20,
    marginBottom: 5,
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
  image: {
    height: 45,
    width: 45,
    borderRadius: 45,
    marginRight: 20,
  },
  username: {
    fontFamily: 'Roboto-Regular',
    color: '#505050',
    fontSize: 13,
  },
  time: {
    color: '#A1A1A1',
    marginTop: 30,
    fontSize: 12,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  description: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  view: {
    flexDirection: 'row',
  },
});
