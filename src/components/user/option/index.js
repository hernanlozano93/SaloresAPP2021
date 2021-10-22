import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, ListItem} from 'native-base';

const app = props => {
  return (
    <ListItem
      activeOpacity={1}
      onPress={() =>
        props.routeName !== undefined
          ? props.navigation.navigate({
              routeName: props.routeName,
            })
          : {}
      }
      style={styles.option}>
      <View style={styles.first}>
        <Icon name={props.icon} style={styles.optionIcon} />
        <Text style={styles.optionText}>{props.label}</Text>
      </View>
      <View style={styles.second}>
        <Icon name="ios-arrow-forward" style={styles.optionIcon} />
      </View>
    </ListItem>
  );
};

export default app;

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 0,
  },
  first: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#6e6e6e',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    paddingLeft: 15,
  },
  optionIcon: {
    color: '#6e6e6e',
    fontSize: 22,
  },
  seperator: {
    backgroundColor: 'gray',
    height: 0.1,
    opacity: 0.2,
    margin: 20,
  },
});
