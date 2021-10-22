import React, {Component} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Mock Data
      images: [
        'https://mrroom.s3.ap-south-1.amazonaws.com/p37-15695787665d8ddf0eda6e9.jpg',
        'https://mrroom.s3.ap-south-1.amazonaws.com/Dominos-Pizza-Store.jpg',
        'https://mrroom.s3.ap-south-1.amazonaws.com/pizza-outlets-dominos-10370639-mylgs0c5jf.jpg',
      ],
      index: 1,
    };
  }

  setPointer = index => {
    this.setState({
      index: index + 1,
    });
  };

  render() {
    return (
      <View>
        <SliderBox
          resizeMethod={'resize'}
          resizeMode={'cover'}
          sliderBoxHeight={280}
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          currentImageEmitter={index => this.setPointer(index)}
          dotStyle={styles.dotStyle}
        />
        <Icon
          onPress={() => this.props.navigation.goBack()}
          name="ios-arrow-back"
          style={styles.arrowStyle}
        />
        <View style={styles.rowView}>
          <View style={styles.containerView}>
            <Text style={styles.color}>
              {this.state.index}/{this.state.images.length}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dotStyle: {
    width: 0,
    height: 0,
    borderRadius: 15,
    marginHorizontal: 10,
    padding: 0,
    margin: 0,
  },
  arrowStyle: {
    color: 'white',
    position: 'absolute',
    padding: 30,
    paddingLeft: 20,
  },
  rowView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -40,
    padding: 10,
  },
  containerView: {
    backgroundColor: '#26BE8D',
    width: 40,
    padding: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    color: 'white',
  },
});
