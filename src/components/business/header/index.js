import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const headerComponent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.rowView}>
          <Icon
            onPress={() => props.navigation.goBack(null)}
            name="ios-arrow-back"
            style={styles.icon}
          />
          <View>
            <Text style={styles.heading}>{props.label}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default headerComponent;

const styles = StyleSheet.create({
  heading: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  label: {
    fontFamily: 'Roboto-Bold',
    color: '#505050',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  container: {backgroundColor: '#F5F5F5'},
  icon: {
    paddingRight: 20,
  },
  rowView: {
    flexDirection: 'row',
  },
});
