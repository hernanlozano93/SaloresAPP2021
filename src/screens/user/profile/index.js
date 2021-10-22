/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';
import Option from '../../../components/user/option';

const { height, width } = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          {/* Top Row */}
          <View style={styles.topRow}>
            <Text style={styles.profileText}>Perfil</Text>
            {/* <Icon
              onPress={() => this.props.navigation.navigate('Notification')}
              name="ios-notifications"
              style={styles.icon}
            /> */}
          </View>
          {/* Top Row */}

          {/* Profile Card */}
          <View style={styles.profileCard}>
            <View style={styles.imageBox}>
              <Image
                source={require('../../../assets/dominos.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.row}>
              <View style={styles.nameView}>
                <Text style={styles.name}>Hernan Lozano</Text>
                <Text style={styles.email}>hernan@ucompensar.edu.co</Text>
              </View>
              <View style={styles.points}>
                <Text style={styles.pointsText}>500 Puntos</Text>
              </View>
            </View>
          </View>
          {/* Profile Card */}
        </View>
        <View style={styles.optionView}>
          <View style={styles.optionContainer}>
            <Option
              icon="ios-mail"
              label="Mensajes"
              routeName="Messages"
              {...this.props}
            />
          </View>
          <View style={styles.optionContainer}>
            <Option
              icon="ios-clock"
              routeName="History"
              {...this.props}
              label="Historial de cupones"
            />
          </View>
          <View style={styles.optionContainer}>
            <Option
              routeName="Loyalty"
              {...this.props}
              icon="ios-card"
              label="Tarjetas fidelidad"
            />
          </View>
          {/* <View style={styles.optionContainer}>
            <Option icon="ios-wallet" label="Wallet" />
          </View> */}
          <View style={styles.optionContainer}>
            <Option
              icon="ios-heart"
              label="Favoritos"
              routeName="Favourites"
              {...this.props}
            />
          </View>
        </View>
        <View style={styles.optionContainer}>
          <Option
            {...this.props}
            routeName="UserExperience"
            icon="md-paper"
            label="Mis experiencias"
          />
        </View>
        <View style={styles.optionContainer}>
          <Option
            {...this.props}
            routeName="Wallet"
            icon="md-card"
            label="Billetera"
          />
        </View>

        <View style={styles.optionContainer}>
          <Option
            {...this.props}
            routeName="Auth"
            icon="ios-log-out"
            label="Cerrar sesión"
          />
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  block: {
    backgroundColor: '#26BE8D',
    height: height / 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    // paddingLeft: width / 2.4,
  },
  icon: {
    color: 'white',
    fontSize: 22,
    paddingRight: 20,
  },
  profileText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  imageBox: {
    height: 78,
    width: 78,
    borderRadius: 78,
    marginTop: -height / 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  profileCard: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 11,
    backgroundColor: 'white',
    margin: 20,
    elevation: 5,
    height: height / 6.5,
    borderRadius: 5,
    // borderBottomRightRadius: 5,
  },
  points: {
    backgroundColor: '#26BE8D',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
  },
  pointsText: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#505050',
  },
  email: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  nameView: {
    paddingRight: width / 6,
  },
  optionView: {
    marginTop: height / 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
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
    // width: 10,
    height: 0.1,
    // opacity: 0.2,
    margin: 20,
    marginBottom: 0,
    flex: 1,
  },
  optionContainer: {
    margin: 5,
  },
});
