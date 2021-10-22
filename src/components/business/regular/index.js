import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {CheckBox} from 'native-base';

class Regular extends Component {
  state = {
    checked: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          onPress={() => {
            this.setState({
              checked: !this.state.checked,
            });
          }}
          checked={this.state.checked}
        />
        <Image
          source={require('../../../assets/avatar.jpeg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.visit}>Last visit {this.props.date}</Text>
        </View>
      </View>
    );
  }
}

export default Regular;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#505050',
    fontFamily: 'Roboto-Regular',
  },
  visit: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
});
