import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {Icon} from 'native-base';
const {width, height} = Dimensions.get('window');

export default class VideoData extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    video: false,
    paused: true,
    volume: true,
    liked: false,
  };

  handle = () => {
    this.setState({
      video: !this.state.video,
      paused: this.state.video,
    });
  };

  render() {
    return (
      <View>
        <Video
          paused={this.state.paused}
          source={{uri: 'https://i.imgur.com/RPkP9k0.mp4'}}
          resizeMode="contain"
          style={styles.video}
        />

        {/* DP */}
        <View style={styles.mainView}>
          <Icon
            onPress={() => this.props.navigation.goBack(null)}
            style={styles.arrowBack}
            name="ios-arrow-back"
          />

          <Image
            source={{
              uri:
                'https://1.bp.blogspot.com/-owWnooI5WBM/XTfOAoz_QTI/AAAAAAAASv8/rGeORwQsxjs__t_NE_Th8yBItsGUijXPQCLcBGAs/s2560/anonymus-alan-walker-4k-hl-2048x2048.jpg',
            }}
            style={styles.image}
          />
        </View>
        {/* DP */}

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.handle()}
          style={styles.containerView}>
          <Image
            source={
              this.state.video
                ? require('../../assets/pause.png')
                : require('../../assets/play.png')
            }
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <View style={styles.music}>
            <Icon
              onPress={() =>
                this.setState({
                  volume: !this.state.volume,
                })
              }
              name={this.state.volume ? 'ios-volume-high' : 'ios-volume-mute'}
              color="#fff"
              style={styles.iconStyle}
            />
            <Icon
              name="md-heart"
              size={18}
              color="#fff"
              onPress={() =>
                this.setState({
                  liked: !this.state.liked,
                })
              }
              // eslint-disable-next-line react-native/no-inline-styles
              style={{color: this.state.liked ? 'red' : 'white'}}
            />
          </View>
          <View style={styles.innerLeft}>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>@ Foodie Blogger</Text>
              <Text style={styles.description} numberOfLines={4}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    height: height,
    width: width,
    backgroundColor: '#000',
  },
  header: {
    width: width,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
  },
  mainView: {
    position: 'absolute',
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    marginRight: 15,
  },
  mainContainer: {
    height: '55%',
    flexDirection: 'row',
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  innerLeft: {
    width: '80%',
    height: '100%',
  },
  innerRight: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: width / 1.3,
  },
  profile: {
    height: 50,
    width: 50,
    alignItems: 'center',
    marginBottom: 25,
  },
  btn: {
    backgroundColor: '#ff5b77',
    width: 20,
    height: 20,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -10,
  },
  containerView: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: height / 2.5,
    alignSelf: 'center',
  },
  dataContainer: {
    height: '45%',
    width: '125%',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    color: '#e5e5e5',
  },
  music: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    marginTop: height / 5,
    padding: 10,
  },
  iconImage: {
    height: 60,
    width: 60,
  },
  arrowBack: {
    color: 'white',
  },
  iconStyle: {
    color: 'white',
    marginBottom: 5,
    fontSize: 35,
  },
});
