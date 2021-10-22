import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Slider from 'react-native-slider';
import Emoji from '../emoji';
import Pricing from '../pricing';
import Parking from '../parking';

const {height} = Dimensions.get('window');

class Status extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <Image
            source={require('../../../assets/dominos-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.storeName}>Domino's Pizza Outlet</Text>
        </View>
        <View style={styles.wait}>
          <Text style={styles.waitTimeText}>Tiempo de espera</Text>
          <Slider
            trackStyle={customStyles4.track}
            thumbStyle={customStyles4.thumb}
            minimumTrackTintColor="#14BB6D"
            value={this.state.value}
            onValueChange={value => this.setState({value: Math.ceil(value)})}
            minimumValue={1}
            maximumValue={5000}
          />
          <View style={styles.minutesRow}>
            <View style={styles.minutes}>
              <Text style={styles.minutesText}>|</Text>
              <Text style={styles.minutesText}>0</Text>
            </View>
            <View style={styles.minutes}>
              <Text style={styles.minutesText}>|</Text>
              <Text style={styles.minutesText}>5 min</Text>
            </View>
            <View style={styles.minutes}>
              <Text style={styles.minutesText}>|</Text>
              <Text style={styles.minutesText}>10 min</Text>
            </View>
            <View style={styles.minutes}>
              <Text style={styles.minutesText}>|</Text>
              <Text style={styles.minutesText}>15 min</Text>
            </View>
            <View style={styles.minutes}>
              <Text style={styles.minutesText}>|</Text>
              <Text style={styles.minutesText}>20 min</Text>
            </View>
            <View style={styles.minutes}>
              <Text style={styles.minutesText}>|</Text>
              <Text style={styles.minutesText}>25 min</Text>
            </View>
          </View>
          <View style={styles.atmosphere}>
            <Text style={styles.atmosphereText}>Ambiente</Text>
            <View style={styles.emoji}>
              <Emoji color="#26BE8D" label={'Calmado'} />
              <Emoji color="#C6C6C6" label={'Moderado'} />
              <Emoji color="#E4C709" label={'Ruidoso'} />
            </View>
          </View>
          <View style={styles.pricing}>
            <Text style={styles.pricingText}>Precio</Text>
            <View style={styles.pricingRow}>
              <Pricing value={'$'} dollars={10.000} />
              <Pricing value={'$$'} dollars={25.000} />
              <Pricing value={'$$$'} dollars={25.000} more={true} />
            </View>
          </View>
          <View style={styles.parking}>
            <Text style={styles.parkingText}>Parqueadero</Text>
            <View style={styles.parkingRow}>
              <Parking type="Disponible" />
              <Parking type="Parquedaero Limitado" />
              <Parking type="No Parqueadero" />
            </View>
          </View>
          <View style={styles.submit}>
            <Text style={styles.submitText}>Enviar</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Status;

var customStyles4 = StyleSheet.create({
  track: {
    height: 6,
    borderRadius: 4,
    backgroundColor: '#E9E5E5',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
    marginRight: 10,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 0,
    paddingTop: 0,
    borderRadius: 5,
  },
  storeName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#505050',
  },
  icon: {
    color: '#147053',
    fontSize: 25,
  },
  logo: {
    height: 60,
    width: 60,
    marginRight: 20,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seperator: {
    backgroundColor: 'gray',
  },
  minutesRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
    paddingRight: 0,
  },
  minutes: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  minutesText: {
    color: '#6E6E6E',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
  },
  waitTimeText: {
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    paddingBottom: 5,
  },
  wait: {
    padding: 10,
  },
  atmosphereText: {
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    paddingBottom: 5,
  },
  atmosphere: {
    paddingTop: 10,
  },
  emoji: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  pricingText: {
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    paddingBottom: 5,
  },
  pricing: {
    paddingTop: 15,
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  parkingText: {
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    paddingBottom: 5,
  },
  parking: {
    paddingTop: 15,
  },
  parkingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  submit: {
    backgroundColor: '#26BE8D',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
    marginTop: height / 15,
  },
  submitText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
});
