import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const walletHistory = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.storeLogo} source={props.storeLogo} />
        <View style={styles.points}>
          <Text style={styles.point}>Puntos {props.points} pagados</Text>
          <Text style={styles.storeName}>{props.storeName}</Text>
        </View>
      </View>
      <View style={styles.view}>
        <Image
          source={
            props.direction === 'UP'
              ? require('../../../assets/up-arrow.png')
              : require('../../../assets/down-arrow.png')
          }
          style={styles.arrow}
        />
        <Text style={styles.time}>{props.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    paddingBottom: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#505050',
  },
  arrow: {
    height: 18,
    width: 18,
    marginBottom: 5,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: '#A1A1A1',
  },
  point: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#505050',
  },
  storeLogo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  points: {
    paddingLeft: 20,
  },
});

export default walletHistory;
