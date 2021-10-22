import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Icon} from 'native-base';

const slides = [
  {
    key: 'one',
    title: '¡Muchas experiencias!',
    text: 'Busca a través del mapa una ruta para poder conocer nuevos lugares exquisitos',
    image: require('../../assets/intro-1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: "No pierdas ninguna experiencia",
    text: 'Marca tus lugares favoritos y no te pierdas ninguna noticia',
    image: require('../../assets/intro-2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Gana y redime cupones',
    text: 'Puedes redimir tus cupones tan solo con un click',
    image: require('../../assets/intro-3.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'four',
    title: '¡Obten recompensas!',
    text: 'Gana recompensar compartiendo tus experiencias y visitando lugares',
    image: require('../../assets/intro-5.png'),
    backgroundColor: '#22bcb5',
  },
];
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#281530',
    //   paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },
  activeDotStyle: {
    backgroundColor: '#26BE8D',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    marginTop: 50,
    color: '#DFEE24',
    marginBottom: 15,
  },
  content: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    padding: 20,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(11, 247, 200, .9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  next: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    color: '#00BE83',
    padding: 10,
    fontSize: 16,
  },
  skip: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    color: '#CEF2D3',
    padding: 10,
    fontSize: 16,
  },
});
export default class App extends React.Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.image} resizeMode="contain" source={item.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  _renderNextButton = () => {
    return <Text style={styles.next}>Siguiente</Text>;
  };
  _renderSkipButton = () => {
    return <Text style={styles.skip}>Omitir</Text>;
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    this.props.navigation.navigate('Auth');
  };
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          activeDotStyle={styles.activeDotStyle}
          skipLabel="Skip"
          showSkipButton
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderItem={this._renderItem}
          renderSkipButton={this._renderSkipButton}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}
