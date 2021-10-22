import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon, Textarea} from 'native-base';

const {height} = Dimensions.get('window');

class Add extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Share your Experience',
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
  state = {
    write: '',
  };
  render() {
    return (
      <ScrollView>
        <Image
          resizeMode="contain"
          source={require('../../../../assets/dominos.jpg')}
          style={styles.image}
        />
        <View style={{padding: 20, backgroundColor: 'white', elevation: 1}}>
          <Text style={styles.videoText}>Agrega un video</Text>
          <Text style={styles.text}>Tu review será posteado publicamente.</Text>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'Roboto-Regular',
              fontSize: 12,
              lineHeight: 50,
            }}>
            Has un video review para compartir tu experiencia.
          </Text>
          <View style={styles.uploadButton}>
            <Icon name="md-play" style={styles.icon} />
            <Text style={styles.uploadText}>Carga Video Review</Text>
          </View>
        </View>
        <View style={styles.write}>
          <Text style={styles.experienceText}>Escribe tu Experiencia</Text>
          <Textarea
            value={this.state.write}
            onChangeText={text =>
              this.setState({
                write: text,
              })
            }
            maxLength={120}
            multiline
            style={styles.textarea}
          />
          <Text style={styles.textWrite}>{this.state.write.length}/120</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Añadir Experiencia</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Add;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: null,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#25BC85',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textarea: {
    height: height / 4,
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 0.2,
  },
  write: {
    padding: 20,
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  uploadText: {
    marginLeft: 10,
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
  uploadButton: {
    backgroundColor: '#25BC85',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    width: 180,
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 0,
    marginTop: 0,
  },
  videoText: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 30,
    marginTop: -20,
  },
  text: {
    color: '#707070',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    lineHeight: 20,
  },
  experienceText: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  textWrite: {
    fontSize: 12,
    textAlign: 'right',
    marginTop: 5,
  },
});
