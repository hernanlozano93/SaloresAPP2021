import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import WalletHistory from '../../../components/user/wallet';

class Wallet extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Billetera',
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#26BE8D',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
      },
      headerShown: true,
    };
  };
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <View>
            <Text style={styles.totalPoints}>Puntos Totales</Text>
            <Text style={styles.reward}>36 Recompensas</Text>
          </View>
          <View>
            <Text style={styles.points}>83,773</Text>
          </View>
        </View>
        <View style={styles.wallet}>
          <Text style={styles.walletHistory}>Historial de Billetera</Text>
        </View>
        <ScrollView>
          <WalletHistory
            storeName={'Burger King'}
            storeLogo={require('../../../assets/bking.png')}
            time={'3:21PM'}
            points={500}
            direction={'UP'}
          />
          <WalletHistory
            storeName={'Burger King'}
            storeLogo={require('../../../assets/bking.png')}
            time={'3:21PM'}
            points={500}
            direction={'UP'}
          />
          <WalletHistory
            storeName={'Burger King'}
            storeLogo={require('../../../assets/bking.png')}
            time={'3:21PM'}
            points={500}
            direction={'UP'}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  totalPoints: {
    fontSize: 16,
    color: '#292929',
    fontFamily: 'Roboto-Medium',
  },
  reward: {
    fontSize: 13,
    color: '#292929',
    fontFamily: 'Roboto-Medium',
  },
  points: {
    fontSize: 20,
    color: '#25BC85',
    fontFamily: 'Roboto-Bold',
  },
  wallet: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  walletHistory: {
    fontSize: 13,
    color: '#292929',
    fontFamily: 'Roboto-Bold',
  },
});
