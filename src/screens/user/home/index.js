import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Header from '../../../components/user/header';
import Explore from '../../../components/user/explore';
import Deals from '../../../components/user/deals';
import EndingSoon from '../../../components/user/ending';
class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {};
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header {...this.props} />
        <Explore {...this.props} />
        <Deals {...this.props} />
        <EndingSoon {...this.props} />
      </ScrollView>
    );
  }
}

export default Home;
