import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {Icon} from 'native-base';
const {width} = Dimensions.get('window');

class header extends Component {
  state = {};
  render() {
    return (
      <View style={styles.top_container}>
        <View style={styles.main_container}>
          <View style={styles.container}>
            <Icon name="ios-pin" style={styles.location_icon} />
            <Text style={styles.place_name}>
             Cra 103a #78d-15, Bogotá, Bogotá D.C.
            </Text>
          </View>
          <Icon
            onPress={() =>
              this.props.map !== undefined
                ? this.props.showExplore()
                : this.props.navigation.navigate('Notification')
            }
            name={
              this.props.map !== undefined ? 'ios-menu' : 'ios-notifications'
            }
            style={styles.notification_icon}
          />
        </View>
        {/* Search Bar */}
        <View style={styles.searchbar}>
          <View>
            <Icon
              // onPress=
              name="ios-search"
              style={styles.search_icon}
            />
          </View>
          <View>
            <TextInput
              keyboardAppearance={'dark'}
              onChangeText={text => {
                this.setState({
                  keyword: text,
                });
              }}
              style={styles.searchbar_text}
              placeholder={'Busca restaurantes cerca de tí'}
              placeholderTextColor="#86E0C3"
            />
          </View>
        </View>

        {/* Search Bar */}
      </View>
    );
  }
}

export default header;

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  top_container: {
    flexDirection: 'column',
    elevation: 2,
    backgroundColor: 'white',
    paddingTop: 7,
  },
  place_name: {
    fontFamily: 'Roboto-Light',
    color: '#A1A1A1',
    padding: 10,
    paddingLeft: 0,
    fontSize: 13,
  },
  location_icon: {
    color: '#26BE8D',
    padding: 10,
    fontSize: 20,
  },
  notification_icon: {
    color: '#6E6E6E',
    fontSize: 20,
    padding: 10,
  },
  searchbar_text: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    width: width / 2,
    color: '#86E0C3',
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderColor: '#A1A1A1',
    borderRadius: 5,
    height: 40,
    marginBottom: 20,
    marginTop: 6,
    borderWidth: 0.4,
  },
  search_icon: {
    fontSize: 16,
    padding: 5,
    paddingLeft: 7,
  },
});
