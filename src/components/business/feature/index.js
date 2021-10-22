import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon} from 'native-base';

const {width} = Dimensions.get('window');

const menu = props => {
  return (
    <View style={styles.features}>
      <View style={styles.row}>
        {props.present ? (
          <Icon name="ios-checkmark-circle" style={styles.icon} />
        ) : (
          <Icon name="ios-close-circle" style={styles.circleIcon} />
        )}
        <View>
          <Text style={styles.leftText}>{props.featureName}</Text>
          <Text style={styles.extraText}>
            {props.extra !== undefined ? props.extra : null}
          </Text>
        </View>
      </View>

      <Text style={styles.rightText}>{props.value}</Text>
    </View>
  );
};

export default menu;

const styles = StyleSheet.create({
  features: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: width / 5,
  },
  icon: {
    color: '#26BE8D',
    fontSize: 22,
    paddingRight: 10,
  },
  circleIcon: {
    color: '#FF7C7C',
    fontSize: 22,
    paddingRight: 10,
  },
  leftText: {
    fontFamily: 'Roboto-Regular',
    color: '#505050',
  },
  rightText: {
    fontFamily: 'Roboto-Regular',
    color: '#A1A1A1',
  },
  extraText: {
    fontFamily: 'Roboto-Regular',
    color: '#A1A1A1',
    fontSize: 10,
  },
});
