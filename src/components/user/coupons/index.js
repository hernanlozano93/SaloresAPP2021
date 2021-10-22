import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const coupon = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageBox}>
          <Image source={props.source} style={styles.image} />
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.row2}>
        <Text style={styles.usedText}>Usado el</Text>
        <Text style={styles.dateText}>18 Mayo 2021</Text>
        <View style={styles.row3}>
          <Text style={styles.rewardText}>Recompensa</Text>
          <View style={styles.point}>
            <Text style={styles.pointsValue}>100 Puntos</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default coupon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 5,
    elevation: 3,
    paddingTop: 0,
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#505050',
    padding: 10,
  },
  descriptionBox: {
    flex: 2,
  },
  icon: {
    color: '#147053',
    fontSize: 25,
  },
  image: {
    height: 46,
    width: 46,
    borderRadius: 46,
  },
  imageBox: {
    height: 52,
    width: 52,
    borderRadius: 52,
    margin: 10,
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: width / 2,
    marginTop: -height / 22,
    // flex: 1,
    alignItems: 'center',
  },
  point: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 2,
    paddingLeft: 7,
    paddingRight: 7,
  },
  pointsValue: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
  rewardText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: '#A1A1A1',
    padding: 10,
  },
  usedText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: '#A1A1A1',
  },
  dateText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: '#26BE8D',
  },
  divider: {
    borderWidth: 0.2,
    backgroundColor: '#707070',
    width: width / 1.2,
    margin: 10,
    opacity: 0.1,
  },
});
