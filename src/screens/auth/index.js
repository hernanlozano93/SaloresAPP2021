import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const {height, width} = Dimensions.get('window');

class Auth extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    username: '',
    password: '',
  };
  authHandler = () => {
    this.setState({
      authenticating: true,
    });
    setTimeout(() => {
      if (
        this.state.username.toLowerCase() === 'admin' &&
        this.state.password.toLowerCase() === 'admin'
      ) {
        this.props.navigation.navigate('Business');
      } else {
        this.props.navigation.navigate('User');
      }
    }, 1500);
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../../assets/logoinicio.png')} style={styles.logo} />
        {/* <Text style={styles.heading}>Hey, there</Text>
        <Text style={styles.loginText}>Login to continue</Text> */}
        <View>
          <TextInput
            onChangeText={text =>
              this.setState({
                username: text,
              })
            }
            placeholderTextColor="#E4F13B"
            placeholder="[Usuario o correo electronico]"
            style={styles.input}
          />
          <TextInput
            onChangeText={text =>
              this.setState({
                password: text,
              })
            }
            placeholderTextColor="#E4F13B"    
            secureTextEntry
            placeholder="[Contraseña]"
            style={styles.input}
          />
        </View>
        <View style={styles.forgot}>
          <Text
            onPress={() => this.props.navigation.navigate('Forgot')}
            style={styles.forgotText}>
            ¿Olvido contraseña?
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.authHandler();
          }}
          style={styles.login}>
          {this.state.authenticating ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.socialBoxText}>Inicio</Text>
          )}
        </TouchableOpacity>
        <View style={styles.row}>
          <View style={styles.seperator} />
          <Text style={styles.orText}>O</Text>
          <View style={styles.seperator} />
        </View>
        <View style={styles.socialRow}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
            style={styles.socialGoogle}>
            <Text style={styles.socialBoxText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
            style={styles.socialFacebook}>
            <Text style={styles.socialBoxText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.createAccountText}>
            ¿Aun no tiene cuenta?{' '}
            <Text
              onPress={() => this.props.navigation.navigate('Create')}
              style={styles.forgotText}>
              Create una cuenta
            </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#121330',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // height: 50,
    // width: 50,
    // marginTop: height / 20,
    width: 270,
    height: 240,
    marginBottom: 10,
    marginTop: height / 20,
  },
  socialBoxText: {color: 'white', fontFamily: 'Roboto-Bold'},
  input: {
    borderColor: '#35DABE',
    borderRadius: 10,
    borderWidth: 0.5,
    width: width / 1.2,
    margin: 10,
    padding: 10,
    color: "#4BF6DC",
    fontFamily: 'Roboto-Regular',
    backgroundColor:'#121330',
  },
  login: {
    padding: 15,
    width: width / 1.2,
    backgroundColor: '#26BE8D',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: height / 25,
  },
  forgotText: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Medium',
  },
  forgot: {
    marginLeft: width / 1.8,
  },
  social: {
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 30,
    margin: 10,
  },
  socialGoogle: {
    backgroundColor: '#FF8C81',
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 30,
    margin: 10,
  },
  socialFacebook: {
    backgroundColor: '#4B6EB7',
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 30,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  seperator: {
    backgroundColor: '#C6C6C6',
    width: width / 2.8,
    height: 1,
    margin: height / 60,
  },
  createAccountText: {color: '#A1A1A1', fontFamily: 'Roboto-Regular'},
  bottom: {
    paddingTop: height / 25,
  },
  orText: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  loginText: {
    color: '#A1A1A1',
    fontFamily: 'Roboto-Regular',
    marginBottom: height / 25,
    marginTop: 10,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flex:1
  },
  heading: {
    fontSize: 35,
    paddingTop: 20,
    color: '#505050',
    fontFamily: 'Roboto-Bold',
  },
});
