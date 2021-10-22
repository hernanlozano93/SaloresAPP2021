import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Icon} from 'native-base';

const {height, width} = Dimensions.get('window');

const mapdeals = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.data.image}
        style={styles.image}
        resizeMode="cover">
        <Icon style={styles.heartIcon} name="ios-heart-empty" />
      </ImageBackground>
      <View style={styles.textContent}>
        <Text style={styles.heading}>Domino's Pizza 50% Descuento</Text>
        <Text style={styles.address}>Ak. 15 ##No.82-22, Bogotá</Text>
        <View style={styles.row}>
          <View style={styles.distance}>
            <Icon name="md-navigate" style={styles.icon} />
            <Text style={styles.distanceText}>0.76 kms</Text>
          </View>
          <View style={styles.deals}>
            <Text style={styles.dealsValue}>3 ofertas</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default mapdeals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 5,
    width: width - 20,
    backgroundColor: '#F5F5F5',
    margin: 10,
    marginBottom: 2,
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 2,
  },
  image: {
    height: height / 5.3,
    width: width / 2.5,
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  textContent: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: '#6E6E6E',
    fontSize: 18,
    padding: 10,
    paddingLeft: 0,
  },
  heading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#505050',
    paddingBottom: 25,
  },
  address: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#6E6E6E',
    paddingBottom: 25,
  },
  deals: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#26BE8D',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  dealsValue: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#fff',
  },
  distanceText: {
    color: '#6E6E6E',
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },
  distance: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    margin: 10,
    fontSize: 20,
    color: 'white',
    borderColor: 'white',
  },
});
