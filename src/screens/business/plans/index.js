/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Feature from '../../../components/business/feature';
import AmountCard from '../../../components/business/amount';

let features = [
  {
    featureName: 'Geofencing around your business',
    value: '75ft. - 125ft.',
  },
  {
    featureName: 'Custom coupons, rewards messages',
    value: 'Yes',
  },
  {
    featureName: 'Access to business portal',
    value: 'Yes',
  },
  {
    featureName: 'Track Geofence entries',
    value: 'Yes',
  },
  {
    featureName: 'Track Favorited users and demographics',
    value: 'Yes',
  },
  {
    featureName: 'Track Coupon redemptions',
    value: 'Yes',
  },
  {
    featureName: 'Business Locations',
    value: 'Upto 3',
    extra: '$15 per additional location',
  },
  {
    featureName: 'Send upto messages',
    value: '3',
  },

  {
    featureName: 'Calendar based coupon and message system. Oh yeah',
    value: 'Yes',
  },
  {
    featureName: 'Track number of visits',
    value: 'Yes',
  },
  {
    featureName: 'Digital Marketing',
    value: 'Yes',
  },
  {
    featureName: 'Traditional Marketing',
    value: 'Yes',
  },
  {
    featureName: 'Maintenance and monthly report',
    value: 'Yes',
  },
];

class Plans extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    tab: 'Basic',
    keyword: '',
    selectingPlan: false,
  };

  tabHandler = tab => {
    if (tab === 'Standard') {
      features[6].value = 'Upto 5';
      features[6].extra = '$25 per additional location';
      features[7].value = '5';
    } else if (tab === 'Premium') {
      features[6].value = 'Upto 10';
      features[6].extra = '$20 per additional location';
      features[7].value = '10';
    } else if (tab === 'Basic') {
      features[6].value = 'Upto 3';
      features[6].extra = '$15 per additional location';
      features[7].value = '3';
    }
    this.setState({
      tab: tab,
    });
  };

  selectPlan = () => {
    this.setState({
      selectingPlan: true,
    });
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
  };

  renderPlan = () => {
    return (
      <View style={styles.planView}>
        <AmountCard
          amount={
            this.state.tab === 'Basic'
              ? 60
              : this.state.tab === 'Standard'
              ? 150
              : 300
          }
          color1={
            this.state.tab === 'Basic'
              ? '#26BE8D'
              : this.state.tab === 'Standard'
              ? '#399CE7'
              : '#E1D900'
          }
          color2={
            this.state.tab === 'Basic'
              ? '#14BB6D'
              : this.state.tab === 'Standard'
              ? '#532FB5'
              : '#F1DB14'
          }
        />
        <View style={styles.feature}>
          {features.map((index, key) => {
            return (
              <Feature
                extra={index.extra}
                key={key}
                present={
                  this.state.tab === 'Basic'
                    ? key < 8
                    : this.state.tab === 'Standard'
                    ? key < 11
                    : key > 0
                }
                planType={this.state.tab}
                featureName={index.featureName}
                value={index.value}
              />
            );
          })}
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#FFF'}}>
          <View style={styles.containerView}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.heading}>Choose a Plan</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.rowView}>
            <Text
              onPress={() => this.tabHandler('Basic')}
              style={{
                color: this.state.tab === 'Basic' ? '#26BE8D' : '#505050',
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                borderBottomWidth: 2,
                borderColor: this.state.tab === 'Basic' ? '#26BE8D' : '#FFF',
              }}>
              Basic
            </Text>
            <Text
              onPress={() => this.tabHandler('Standard')}
              style={{
                color: this.state.tab === 'Standard' ? '#26BE8D' : '#505050',
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                borderBottomWidth: 2,
                borderColor: this.state.tab === 'Standard' ? '#26BE8D' : '#FFF',
              }}>
              Standard
            </Text>
            <Text
              onPress={() => this.tabHandler('Premium')}
              style={{
                color: this.state.tab === 'Premium' ? '#26BE8D' : '#505050',
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                borderBottomWidth: 2,
                borderColor: this.state.tab === 'Premium' ? '#26BE8D' : '#FFF',
              }}>
              Premium
            </Text>
          </View>
        </View>
        {this.renderPlan()}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.selectPlan();
          }}
          style={styles.select}>
          {this.state.selectingPlan ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.selectText}>Select the Plan</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Plans;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    // flex: 1,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    backgroundColor: 'white',
  },
  heading: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  planView: {
    margin: 15,
  },
  feature: {
    marginTop: 0,
  },
  select: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  selectText: {
    color: '#FFF',
    fontFamily: 'Roboto-Medium',
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
});
