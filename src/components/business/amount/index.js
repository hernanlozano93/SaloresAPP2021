import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const amount = props => {
  return (
    <LinearGradient colors={[props.color1, props.color2]} style={styles.card}>
      <Text style={styles.heading}>${props.amount}</Text>
      <Text style={styles.subheading}>Per Month</Text>
    </LinearGradient>
  );
};

export default amount;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26BE8D',
    padding: 20,
    borderRadius: 5,
  },
  subheading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'white',
  },
  heading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 45,
    color: 'white',
  },
});
