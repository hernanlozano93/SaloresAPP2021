import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Deals from '../../../components/user/deals';

class Explore extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.explore,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#26BE8D',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
      },
      headerShown: true,
    };
  };

  state = {};
  render() {
    console.log(this.props.navigation.state.params);
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Deals {...this.props} favourites={true} />
      </ScrollView>
    );
  }
}

export default Explore;
