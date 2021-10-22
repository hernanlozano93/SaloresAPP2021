import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'native-base';
import Option from '../../../components/user/option';

class Settings extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    tab: 'Active',
  };

  tabHandler = tab => {
    this.setState({
      tab: tab,
    });
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#F5F5F5'}}>
          <View style={styles.containerView}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="ios-arrow-back"
                style={{paddingRight: 20}}
              />
              <View>
                <Text style={styles.heading}>Settings</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.optionContainer}>
          <Option icon="ios-person" label="Support" {...this.props} />
        </View>

        <View
          style={[
            styles.optionContainer,
            {
              paddingLeft: 5,
            },
          ]}>
          <Option icon="ios-question" label="FAQ" {...this.props} />
        </View>
        <View style={styles.optionContainer}>
          <Option icon="ios-people" label="Invite" {...this.props} />
        </View>
      </ScrollView>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
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
  optionContainer: {
    margin: 5,
    marginTop: 15,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
