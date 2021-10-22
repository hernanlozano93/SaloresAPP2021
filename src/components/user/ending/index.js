import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Deals from '../card';
import Skeleton from '../../../components/user/skeleton';

const {width} = Dimensions.get('window');

class ending extends Component {
  state = {
    // Mock Data
    data: [
      {
        name: "Domino's Pizza 50% Descuento",
        address: 'Ak. 15 ##No.82-22, Bogotá',
        distance: '0.76',
        deals: 3,
        code: 'Dominos',
      },
      {
        name: 'Obten 35% descuento en cualquier burger',
        address: 'Av. Boyacá ## 80-94 Local 408, Bogotá',
        distance: '1.32',
        deals: 1,
        code: 'Burger',
      },
      {
        name: 'Descuento en Justo y Bueno',
        address: 'Cl. 80c ##90a-50, Bogotá',
        distance: '1.22',
        deals: 2,
        code: 'Mall',
      },
      {
        name: "Domino's Malteadas 30% Descuento",
        address: 'Ak. 15 ##No.82-22, Bogotá',
        distance: '0.76',
        deals: 3,
        code: 'Dominos',
      },
    ],
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hot_deals_text}>Cupones finalizan pronto</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollview}>
          {this.state.loading ? (
            <Skeleton height={230} width={width / 1.05} />
          ) : (
            this.state.data.map((index, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.navigate('Merchant')}>
                  <Deals width={true} key={key} data={index} />
                </TouchableOpacity>
              );
            })
          )}
        </ScrollView>
      </View>
    );
  }
}

export default ending;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 1,
    borderColor: '#707070',
    padding: 5,
  },
  hot_deals_text: {
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    padding: 10,
  },
  image: {
    height: 40,
    width: 40,
  },
  scrollview: {
    padding: 5,
  },
});
