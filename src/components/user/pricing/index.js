import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const pricing = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.dollarsValue}>{props.value}</Text>
      <Text style={styles.dollarsText}>
        {props.dollars} pesos {'\n'}o{' '}
        {props.more !== undefined ? 'más' : 'menos'}
      </Text>
    </View>
  );
};

export default pricing;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarsText: {
    color: '#6E6E6E',
    fontSize: 10,
    textAlign: 'center',
  },
  dollarsValue: {
    color: '#C6C6C6',
    fontSize: 22,
    paddingBottom: 5,
  },
});
