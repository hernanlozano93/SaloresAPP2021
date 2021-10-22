import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Icon} from 'native-base';

const parking = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/car.png')}
        style={styles.image}>
        <View
          style={[
            styles.iconView,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor:
                props.type === 'Disponible'
                  ? '#65D843'
                  : props.type === 'No Parqueadero'
                  ? '#FF5757'
                  : '#FFD91C',
            },
          ]}>
          <Icon
            name={
              props.type === 'Disponible'
                ? 'md-checkmark'
                : props.type === 'No Parqueadero'
                ? 'ios-close'
                : 'ios-information'
            }
            style={styles.icon}
          />
        </View>
      </ImageBackground>
      <Text style={styles.parkingText}>{props.type}</Text>
    </View>
  );
};

export default parking;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  parkingText: {
    color: '#6E6E6E',
    fontSize: 10,
    textAlign: 'center',
    paddingTop: 5,
  },
  dollarsValue: {
    color: '#C6C6C6',
    fontSize: 22,
    paddingBottom: 5,
  },
  image: {
    height: 25,
    width: 25,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    width: 15,
    borderRadius: 15,
    marginLeft: 18,
    marginTop: -5,
  },
  icon: {
    color: 'white',
    fontSize: 15,
  },
});
