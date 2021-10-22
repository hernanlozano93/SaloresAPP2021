import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderBackButton} from 'react-navigation-stack';

import Messages from '../../../components/user/messages';

class Message extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Messages',
      headerTintColor: '#505050',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
      },
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.navigate('Profile')} />
      ),
      headerShown: true,
    };
  };
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => this.props.navigation.navigate('Profile')}
          style={styles.time}>
          Martes, 18 Mayo, 2021
        </Text>
        <Messages />
      </View>
    );
  }
}

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EEFFF9',
  },
  time: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: '#505050',
    textAlign: 'center',
  },
});
