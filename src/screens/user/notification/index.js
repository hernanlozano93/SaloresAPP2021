import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import Notification from '../../../components/user/notification';
import {HeaderBackButton} from 'react-navigation-stack';

class Notif extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Notifications',
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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text
          onPress={() => this.props.navigation.navigate('Profile')}
          style={styles.time}>
          Martes, 18 Mayo, 2021
        </Text>
        {/* Mock Data Rendering */}
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        {/* Mock Data Rendering */}
      </ScrollView>
    );
  }
}

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  time: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#505050',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 20,
  },
});
