/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'native-base';

import RegularVisitor from '../../../components/business/regular';

const {height, width} = Dimensions.get('window');

class MessageScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    message: '',
    success: false,
    error: false,
    visitors: [
      {
        name: 'Melisha Rauch',
        date: '20/05/2020',
      },
      {
        name: 'David Paul',
        date: '22/05/2020',
      },
      {
        name: 'Felix Lee',
        date: '23/05/2020',
      },
    ],
    keyword: '',
    loading: false,
    sent: false,
  };

  sendMessage = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        sent: true,
      });
    }, 4000);
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#F5F5F5'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="ios-arrow-back"
                style={{paddingRight: 20}}
              />
              <View>
                <Text style={styles.stackTitle}>Añadir Mensaje</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.writeMessage}>Escribir Mensaje</Text>
          <TextInput
            onChangeText={text =>
              this.setState({
                email: text,
              })
            }
            placeholderTextColor="#A1A1A1"
            placeholder="Sopas de mama lanzará un nuevo cupón especial que será válido solo por 3 horas. Echa un vistazo antes de que el cupón no sea válido. "
            style={styles.input}
            multiline
          />
        </View>
        <View style={styles.searchbar}>
          <View style={{paddingRight: 10}}>
            <Icon
              name="ios-search"
              style={{color: '#A1A1A1', fontSize: 20}}
              fontSize={18}
            />
          </View>
          <View
            style={{
              width: width / 2,
            }}>
            <TextInput
              keyboardAppearance={'dark'}
              onChangeText={text => {
                this.setState({
                  keyword: text,
                });
              }}
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
                width: width / 2,
              }}
              placeholder="Buscar visitante"
            />
          </View>
        </View>
        <Text style={styles.writeMessage}>Visitantes regulares</Text>
        <View style={styles.regular}>
          {this.state.visitors.map((index, key) => {
            return index.name
              .toLowerCase()
              .includes(this.state.keyword.toLowerCase()) ? (
              <RegularVisitor date={index.date} name={index.name} />
            ) : null;
          })}
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.sendMessage()}
          style={styles.send}>
          {this.state.loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.sendMessageText}>
              {this.state.sent ? 'Sent' : 'Send Message'}
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default MessageScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    paddingBottom: 50,
  },
  stackTitle: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#C6C6C6',
    borderRadius: 5,
    borderWidth: 0.5,
    margin: 10,
    padding: 10,
    fontFamily: 'Roboto-Regular',
    height: height / 5,
    textAlignVertical: 'top',
  },
  heading: {
    fontSize: 35,
    paddingTop: 20,
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    paddingBottom: 20,
  },
  writeMessage: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    paddingTop: 10,
  },
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 40,
    marginTop: 5,
    paddingLeft: 20,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: width / 1.05,
    marginLeft: 10,
    marginBottom: 20,
    borderColor: '#C6C6C6',
    borderWidth: 0.5,
    marginRight: 0,
  },
  send: {
    backgroundColor: '#26BE8D',
    padding: 15,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  sendMessageText: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
});
