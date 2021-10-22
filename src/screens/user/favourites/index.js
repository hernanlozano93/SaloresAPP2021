import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Deals from '../../../components/user/deals';
import {HeaderBackButton} from 'react-navigation-stack';
import Offers from '../../../components/user/offer';

class Favorites extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Favourites',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#26BE8D',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
      },
      headerLeft: () => (
        <HeaderBackButton
          pressColorAndroid="white"
          tintColor="white"
          // styles={{color: 'white'}}
          onPress={() => navigation.navigate('Profile')}
        />
      ),
      headerShown: true,
    };
  };

  state = {
    tab: 'Businesses',
  };

  renderData = () => {
    if (this.state.tab === 'Businesses') {
      return <Deals {...this.props} favourites={true} />;
    } else {
      return (
        <View>
          <Offers
            {...this.props}
            times={230}
            offer_name="Gratis pizza doble"
            offer_description="Por la compra de una pizza mediana lleva una pequeña gratis"
          />
        </View>
      );
    }
  };

  handleRedeeem = () => {
    this.props.navigation.navigate('Home');
  };

  renderNoDeal = () => {
    return (
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('../../../assets/no-coupons.png')}
        />
        <Text style={styles.text}>Tu no tienes {'\n'} ningún favorito aún!</Text>
        <TouchableOpacity
          onPress={() => this.handleRedeem()}
          style={styles.redeem}>
          <Text style={styles.redeem_text}>Encuentra ofertas cercanas</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderDeal = () => {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Text
            onPress={() => {
              this.setState({
                tab: 'Businesses',
              });
            }}
            style={[
              styles.menu,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                color: this.state.tab === 'Businesses' ? '#26BE8D' : '#D2D2D2',
              },
            ]}>
            Negocio
          </Text>
          <Text
            onPress={() => {
              this.setState({
                tab: 'Coupons',
              });
            }}
            style={[
              styles.menu,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                color: this.state.tab === 'Coupons' ? '#26BE8D' : '#D2D2D2',
              },
            ]}>
            Cupones
          </Text>
        </View>
        {this.renderData()}
      </ScrollView>
    );
  };

  render() {
    return this.renderNoDeal();
  }
}

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    fontFamily: 'Roboto-Regular',
  },
  top: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 200,
    width: 200,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#6E6E6E',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25,
  },
  redeem: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  redeem_text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: 'white',
  },
});
