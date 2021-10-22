import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
const {height} = Dimensions.get('window');

const description = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.open_now_text}>Abierto ahora</Text>
        <Text style={styles.heading}>Dominos Pizza</Text>
        <View style={styles.row}>
          <View style={styles.lower_row}>
            <Icon name="ios-pin" style={styles.icon} />
            <Text style={styles.text}>Ak. 15 ##No.82-22, Bogotá</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => props.status()} style={styles.button}>
          <Text style={styles.status_text}>Add estado</Text>
        </TouchableOpacity>
        <View style={styles.last}>
          <Icon name="md-map" style={styles.icon} />
          <Text style={styles.text}>0.76 kms</Text>
        </View>
      </View>
    </View>
  );
};

export default description;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -5,
  },

  text: {
    color: '#6E6E6E',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    paddingTop: 4,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    color: '#6E6E6E',
    fontSize: 18,
    padding: 5,
    paddingLeft: 0,
  },
  button: {
    backgroundColor: '#26BE8D',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    borderRadius: 3,
  },
  status_text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: 'white',
  },
  heading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    color: '#505050',
    paddingBottom: 3,
  },
  open_now_text: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    paddingBottom: 3,
  },
  lower_row: {
    flexDirection: 'row',
  },
  last: {
    marginTop: height / 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
