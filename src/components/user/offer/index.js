import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
const {height} = Dimensions.get('window');
import Modal from 'react-native-modal';
import RedeemModal from '../redeem';

class offer extends Component {
  state = {
    selected: false,
    showRedeem: false,
  };

  handler = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };
  handleRedeem = () => {
    this.setState({
      showRedeem: !this.state.showRedeem,
    });
  };
  WrapperComponent = () => {
    return (
      <View>
        <Modal
          onBackButtonPress={this.handleRedeem}
          onBackdropPress={this.handleRedeem}
          isVisible={this.state.showRedeem}>
          <RedeemModal
            close={this.handleRedeem}
            type="coupon"
            data={{
              offer: 'Obten 50% descuento en Pizza',
              description:
                'Compre cualquier pizza de tamaño mediano de Dominos y obtenga un 50% de descuento. Esta oferta es válida solo para los usuarios por primera vez. .',
              valid: '25 July, 2021',
            }}
          />
        </Modal>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.innerRow}>
            <Image
              source={{
                uri:
                  'https://mrroom.s3.ap-south-1.amazonaws.com/outserved/dominos-logo.png',
              }}
              // source={require('../../assets/dominos-logo.png')}
              style={styles.logo}
            />
            <Text style={styles.deals_text}>{this.props.offer_name}</Text>
          </View>
          <Icon
            onPress={() => this.handler()}
            name={this.state.selected ? 'ios-heart' : 'ios-heart-empty'}
            style={[
              styles.heart,
              // eslint-disable-next-line react-native/no-inline-styles
              {color: this.state.selected ? '#FF3434' : '#606060'},
            ]}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.description_text}>
            {this.props.offer_description}
          </Text>
          <Text style={styles.used_text}>Usado {this.props.times} veces</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.handleRedeem()}
          style={styles.redeem}>
          <Text style={styles.redeem_text}>Redime oferta</Text>
        </TouchableOpacity>
        {this.WrapperComponent()}
      </View>
    );
  }
}

export default offer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    elevation: 1,
    height: height / 3.7,
    padding: 10,
  },
  heading_text: {
    color: '#505050',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    // paddingTop: 4,
  },
  image: {
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  description: {
    padding: 8,
  },
  address: {
    color: '#6e6e6e',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    paddingTop: 2,
  },
  value_text: {
    color: '#6e6e6e',
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    paddingTop: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 15,
    color: '#606060',
    padding: 5,
    paddingLeft: 0,
  },
  deals_button: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    padding: 5,
    borderRadius: 5,
  },
  deals_text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#505050',
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  description_text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: 'gray',
  },
  used_text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: '#26BE8D',
    paddingTop: 10,
  },
  redeem: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  redeem_text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: 'white',
  },
  heart: {
    fontSize: 21,
    color: '#606060',
  },
});
