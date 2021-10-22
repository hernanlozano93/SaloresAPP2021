import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const messages = props => {
  return (
    <View style={styles.view}>
      <Image source={require('../../../assets/1.jpg')} style={styles.image} />
      <View style={styles.box}>
        <Text style={styles.text}>
          Usted ha recibido 100 puntos para redimir en un cupon desde Domino's Pizza.
          Verifica tu billetera para confirmar
        </Text>
      </View>
      <Text style={styles.time}>8:12 PM</Text>
    </View>
  );
};

export default messages;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: width / 20,
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
    color: '#A1A1A1',
    textAlign: 'left',
  },
  image: {
    borderRadius: 35,
    height: 35,
    width: 35,
  },
  box: {
    width: width / 1.5,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#A1A1A1',
    borderTopLeftRadius: 0,
  },
  time: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: '#505050',
    textAlign: 'center',
    paddingTop: height / 30,
  },
});
