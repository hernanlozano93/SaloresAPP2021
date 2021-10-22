import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../../../assets/mc.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.heading}>30000 puntos redimidos</Text>
          <Text style={styles.agoText}>Hace 1 hora</Text>
        </View>
      </View>
      <View>
        <View style={styles.newBox}>
          <Text style={styles.newText}>Nueva</Text>
        </View>
        <Text style={styles.timeText}>2:34 PM</Text>
      </View>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: '#147053',
  },
  icon: {
    color: '#147053',
    fontSize: 25,
  },
  image: {
    height: 30,
    width: 30,
    margin: 10,
    marginLeft: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#505050',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  agoText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: '#A1A1A1',
  },
  newBox: {
    backgroundColor: '#F2D611',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 2,
  },
  newText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Roboto-Medium',
  },
  timeText: {
    color: '#505050',
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
});
