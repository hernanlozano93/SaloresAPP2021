import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Switch} from 'react-native';

class App extends Component {
  state = {
    enabled: !this.props.disabled,
  };

  switchHanlder = () => {
    this.setState({
      enabled: !this.state.enabled,
    });
  };

  render() {
    return (
      <View
        activeOpacity={1}
        onPress={() => {}}
        style={[
          styles.container,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: this.props.disabled ? '#F2F2F2' : 'white',
          },
        ]}>
        <View style={styles.row}>
          <Image
            source={require('../../../assets/bking.png')}
            style={styles.image}
          />
          <Text style={styles.heading}>{this.props.offer}</Text>
        </View>
        <Text style={styles.description}>{this.props.description}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.usedText}>Used {this.props.usedTimes} times</Text>

          {this.props.disabled ? null : (
            <Switch
              trackColor="#D2FFEF"
              ios_backgroundColor="#D2FFEF"
              value={this.state.enabled}
              onValueChange={() => this.switchHanlder()}
              thumbColor={this.props.disabled ? '#F2F2F2' : '#26BE8D'}
            />
          )}
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    elevation: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 0,
  },
  label: {
    paddingTop: 10,
    fontFamily: 'Roboto-Regular',
    color: '#505050',
    fontSize: 13,
  },
  icon: {
    color: '#147053',
    fontSize: 25,
  },
  image: {
    height: 25,
    width: 25,
    borderRadius: 5,
    marginRight: 10,
  },
  usedText: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Medium',
  },
  description: {
    color: '#A1A1A1',
    paddingTop: 10,
    fontFamily: 'Roboto-Regular',
  },
  heading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    color: '#505050',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  row: {flexDirection: 'row'},
});
