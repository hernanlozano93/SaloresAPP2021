import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import Achievement from '../../../components/user/achievements';

const {height, width} = Dimensions.get('window');

class Loyalty extends Component {
  static navigationOption = {
    headerShown: false,
  };
  state = {
    tab: 'Loyalty',
    // Dummy Data
    image: [
      require('../../../assets/bking.png'),
      require('../../../assets/addidas.jpg'),
      require('../../../assets/amazon.png'),
      require('../../../assets/dominos-cheese.jpg'),
    ],
  };

  handlePress = data => {
    this.setState({
      tab: data === 'Loyalty' ? 'Loyalty' : 'Achievements',
    });
  };

  renderLoyaltyTab = () => {
    return this.state.image.map((index, key) => {
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            this.props.navigation.navigate({
              routeName: 'Redeem',
              params: {
                data: index,
              },
            })
          }
          style={styles.loyaltyImageView}>
          <Image source={index} key={key} style={styles.loyaltyImage} />
        </TouchableOpacity>
      );
    });
  };

  renderAchivementTab = () => {
    return (
      <View style={styles.mainView}>
        <View style={styles.rowView}>
          <Achievement
            source={require('../../../assets/achievements.jpg')}
            line1={'Redimir'}
            line2={'3 Cupones'}
          />
          <Achievement
            source={require('../../../assets/achievements(1).png')}
            line1={'Redimir'}
            line2={'3 Cupones'}
          />
          <Achievement
            source={require('../../../assets/achievements(2).jpg')}
            line1={'Redimir'}
            line2={'3 Cupones'}
          />
        </View>
        <View style={styles.rowView}>
          <Achievement
            source={require('../../../assets/achievements.jpg')}
            line1={'Redimir'}
            line2={'3 Cupones'}
          />
          <Achievement
            source={require('../../../assets/achievements(1).png')}
            line1={'Redimir'}
            line2={'5 Cupones'}
          />
          <Achievement
            source={require('../../../assets/achievements(2).jpg')}
            line1={'Redimir'}
            line2={'9 Cupones'}
          />
        </View>
        <View style={styles.rowView}>
          <Achievement
            source={require('../../../assets/achievements.jpg')}
            line1={'Redimir'}
            line2={'3 Cupones'}
          />
          <Achievement
            source={require('../../../assets/achievements(1).png')}
            line1={'Redimir'}
            line2={'8 Cupones'}
          />
          <Achievement
            source={require('../../../assets/achievements(2).jpg')}
            line1={'Redimir'}
            line2={'10 Cupones'}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        styles={styles.container}>
        <View style={styles.header}>
          <View style={styles.pointsView}>
            {this.state.tab === 'Loyalty' ? (
              <View>
                <Text style={styles.totalPointsText}>Puntos totales</Text>
                <Text style={styles.pointsText}>55.455</Text>
              </View>
            ) : (
              <View>
                <Text style={styles.totalPointsText}>Insignias</Text>
                <View style={styles.trophyRow}>
                  <Image
                    source={require('../../../assets/trophy.png')}
                    style={styles.trophy}
                  />
                  <Text style={styles.pointsText}>36</Text>
                </View>
              </View>
            )}
          </View>
          <Icon
            onPress={() => this.props.navigation.navigate('Notification')}
            name="ios-notifications"
            style={styles.icon}
          />
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => this.handlePress('Loyalty')}>
            <Text
              onPress={() => this.handlePress('Loyalty')}
              style={[
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  color: this.state.tab === 'Loyalty' ? '#26BE8D' : '#C6C6C6',
                  fontFamily: 'Roboto-Medium',
                  borderColor:
                    this.state.tab === 'Loyalty' ? '#26BE8D' : '#C6C6C6',
                  borderBottomWidth: this.state.tab === 'Loyalty' ? 2 : 0,
                  padding: 10,
                },
              ]}>
              Tarjetas Fidelidad
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handlePress('Achievements')}>
            <Text
              style={[
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  color: this.state.tab === 'Loyalty' ? '#C6C6C6' : '#26BE8D',
                  fontFamily: 'Roboto-Medium',
                  borderColor:
                    this.state.tab === 'Loyalty' ? '#C6C6C6' : '#26BE8D',
                  borderBottomWidth: this.state.tab === 'Loyalty' ? 0 : 2,
                  padding: 10,
                },
              ]}>
              Insignias
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          {this.state.tab === 'Loyalty'
            ? this.renderLoyaltyTab()
            : this.renderAchivementTab()}
        </View>
      </ScrollView>
    );
  }
}

export default Loyalty;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: '#26BE8D',
    height: height / 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pointsText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  totalPointsText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  icon: {
    color: 'white',
    fontSize: 22,
    padding: 20,
  },
  pointsView: {
    paddingTop: height / 22,
    padding: 20,
  },
  tab: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 10,
    flexDirection: 'row',
    marginLeft: width / 10,
    marginRight: width / 10,
  },
  tabTextColor: {
    color: '#C6C6C6',
    fontFamily: 'Roboto-Regular',
    borderColor: '#26BE8D',
    borderBottomWidth: 1,
    padding: 10,
  },
  loyaltyImage: {
    height: height / 5,

    width: width / 1.1,
    borderRadius: 10,
  },
  loyaltyImageView: {
    height: height / 5,
    margin: 10,

    borderRadius: 10,
    elevation: 5,
  },
  tabView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  trophyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trophy: {
    height: 25,
    width: 30,
    marginRight: 10,
  },
  rowView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainView: {
    flex: 1,
    padding: 20,
  },
});
