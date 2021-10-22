import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import RedeemModal from '../../../components/user/redeem';
import Slider from 'react-native-slider';

const {height} = Dimensions.get('window');
var DEFAULT_VALUE = 0.2;

class Redeem extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Redeem Gift Card',
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
      },
      headerShown: true,
    };
  };
  state = {
    sliderValue: 0,
    slideStartingValue: 0,
    slideStartingCount: 0,
    showRedeem: false,
    value: 1,
  };

  sliderHandler = child => {
    this.setState({
      sliderHandler: child,
    });
  };

  handleRedeem = () => {
    this.setState({
      showRedeem: !this.state.showRedeem,
    });
  };

  getInitialState() {
    return {
      value: DEFAULT_VALUE,
    };
  }

  WrapperComponent = () => {
    return (
      <View>
        <Modal
          onBackButtonPress={this.handleRedeem}
          onBackdropPress={this.handleRedeem}
          isVisible={this.state.showRedeem}>
          <RedeemModal close={this.handleRedeem} />
        </Modal>
      </View>
    );
  };

  render() {
    let text =
      'Se pueden canjear un máximo de 3000 puntos a la vez. La tarjeta se puede utilizar solo una vez en 24 horas. La tarjeta es válida solo por 12 meses.';

    return (
      <ScrollView style={styles.container}>
        <Image
          source={this.props.navigation.state.params.data}
          // source={require('../../assets/bking.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.row1}>
          <Text style={styles.boldText}>Puntos restantes</Text>
          <Text style={styles.pointValue}>{this.state.value}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.sliderView}>
          <Text style={styles.boldText}>Elije monto de eCard</Text>

          <View style={styles.container}>
            <Slider
              trackStyle={customStyles4.track}
              thumbStyle={customStyles4.thumb}
              minimumTrackTintColor="#14BB6D"
              value={this.state.value}
              onValueChange={value => this.setState({value: Math.ceil(value)})}
              minimumValue={1}
              maximumValue={5000}
            />
            <Text style={styles.dollarText}>${this.state.value}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.tcView}>
          <Text style={styles.boldTextTerms}>Terminos y Condiciones</Text>

          {text.split('.').map((index, key) => {
            return (
              <Text key={key} style={styles.conditionText}>
                {index.trim()}{' '}
              </Text>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => this.handleRedeem()}
          style={styles.redeem}>
          <Text style={styles.redeemText}>Redimir puntos</Text>
        </TouchableOpacity>
        {this.WrapperComponent()}
      </ScrollView>
    );
  }
}

export default Redeem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    margin: 20,
    height: height / 4,
    width: null,
    borderRadius: 8,
  },
  row1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    paddingTop: 10,
  },
  pointValue: {
    fontFamily: 'Roboto-Bold',
    color: '#14BB6D',
    fontSize: 17,
  },
  boldText: {
    fontFamily: 'Roboto-Bold',
    color: '#505050',
    fontSize: 17,
  },
  boldTextTerms: {
    paddingBottom: 10,
    fontFamily: 'Roboto-Bold',
    color: '#505050',
    fontSize: 17,
  },
  divider: {
    borderWidth: 0.4,
    backgroundColor: '#707070',
    opacity: 0.1,
  },
  sliderView: {
    padding: 20,
  },
  tcView: {
    padding: 20,
  },
  conditionText: {
    fontFamily: 'Roboto-Medium',
    color: '#A1A1A1',
    paddingTop: 5,
    fontSize: 14.5,
  },
  redeem: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  redeemText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  dollarText: {
    color: '#14BB6D',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
});
var customStyles4 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: '#E9E5E5',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 25,
    height: 25,
    backgroundColor: '#14BB6D',
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
    elevation: 5,
  },
});
