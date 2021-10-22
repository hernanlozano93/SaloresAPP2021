import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
const {width} = Dimensions.get('window');
import {AnimatedCircularProgress} from 'react-native-circular-progress';
let timer;
class redeem extends Component {
  state = {
    show: false,
    fill: 0,
  };

  renderTapCircle = () => {
    return (
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875"
        ref={ref => (this.circularProgress = ref)}
      />
    );
  };

  handleLongPress = () => {
    timer = setInterval(() => {
      if (this.state.fill === 100) {
        clearInterval(timer);
      }
      this.setState({
        fill: this.state.fill + 30,
      });
    }, 500);
  };

  handleRemovePress = () => {
    clearInterval(timer);
    if (this.state.fill < 100) {
      this.setState({
        fill: 0,
      });
    }
  };

  render() {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalRow1}>
          <Image
            source={require('../../../assets/dominos-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.modalHeadingText}>
            {this.props.type === 'coupon'
              ? this.props.data.offer
              : 'Redeem Loyalty Points'}
          </Text>
          <Icon
            onPress={() => this.props.close()}
            name="ios-close"
            style={styles.icon}
          />
        </View>

        {this.props.type === 'coupon' ? (
          <View>
            <Text style={styles.descriptionText}>
              {this.props.data.description}
            </Text>
          </View>
        ) : null}

        {this.props.type === 'coupon' ? null : (
          <View style={styles.modalRow2}>
            <Text style={styles.text}>Total puntos redimidos</Text>
            <Text style={styles.valueText}>4000 puntos</Text>
          </View>
        )}
        <View style={styles.divider} />
        <View style={styles.modalRow3}>
          <Text style={styles.text}>
            {this.props.type === 'coupon' ? 'Valid hasta' : 'Discount dado'}
          </Text>
          <Text style={styles.valueText}>
            {this.props.type === 'coupon' ? '25 July, 2021' : '$60.000'}
          </Text>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity
          activeOpacity={0.5}
          onLongPress={() => this.handleLongPress()}
          onPressOut={() => this.handleRemovePress()}
          style={styles.modalRow4}>
          <AnimatedCircularProgress
            size={180}
            width={10}
            fill={this.state.fill}
            tintColor="#26BE8D"
            backgroundColor="#3d5875">
            {fill => (
              <Text style={styles.valueText}>
                {this.state.fill < 100 ? 'Press para redimir' : 'Redimidos'}
              </Text>
            )}
          </AnimatedCircularProgress>
        </TouchableOpacity>
      </View>
    );
  }
}

export default redeem;

const styles = StyleSheet.create({
  modalRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  logo: {
    height: 40,
    width: 40,
  },
  modalHeadingText: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
  },
  divider: {
    borderWidth: 0.2,
    backgroundColor: '#707070',
    width: width / 1.2,
    margin: 10,
    opacity: 0.1,
  },
  qr: {
    height: 150,
    width: 150,
    marginTop: 20,
    marginBottom: 20,
  },
  modalRow2: {
    padding: 10,
  },
  modalRow3: {
    padding: 10,
  },
  modalRow4: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#A1A1A1',
  },
  qrText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
  },
  valueText: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Medium',
  },
  icon: {
    color: '#A1A1A1',

    paddingRight: 5,
  },
  descriptionText: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    margin: 10,
  },
});
