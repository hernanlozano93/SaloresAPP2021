import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import MapDeals from '../../../components/user/mapdeals';
import mapStyle from './map.json';
import CustomMarker from '../../../components/user/marker';
import Header from '../../../components/user/header';
import RBSheet from 'react-native-raw-bottom-sheet';
import Explore from '../../../components/user/explore';

// Mock Data
const Images = [
  {
    uri:
      'https://table.skift.com/wp-content/uploads/2019/01/2_Dominos-Store_Eugene-OR-e1546984571327.jpg',
  },
  {
    uri:
      'https://table.skift.com/wp-content/uploads/2019/01/2_Dominos-Store_Eugene-OR-e1546984571327.jpg',
  },
  {
    uri:
      'https://table.skift.com/wp-content/uploads/2019/01/2_Dominos-Store_Eugene-OR-e1546984571327.jpg',
  },
  {
    uri:
      'https://table.skift.com/wp-content/uploads/2019/01/2_Dominos-Store_Eugene-OR-e1546984571327.jpg',
  },
];

const {width, height} = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class Maps extends Component {
  state = {
    // Mock Data
    markers: [
      {
        coordinate: {
          latitude: 26.4798058,
          longitude: 80.2920524,
        },
        title: 'MrRoom 265 ABC Hostel',
        description: 'Near Newlight',
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 26.4793317,
          longitude: 80.2915405,
        },
        title: 'Third Best Place',
        description: 'This is the third best place in Portland',
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 26.4798058,
          longitude: 80.2920524,
        },
        title: 'MrRoom 265 ABC Hostel',
        description: 'Near Newlight',
        image: Images[1],
      },
    ],
    region: {
      latitude: 26.4781987,
      longitude: 80.2752932,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034,
    },
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    // this.RBSheet.open();
    this.animation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const {coordinate} = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  }

  renderBottomSheet = () => {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        animationType="slide"
        closeOnDragDown={true}
        height={height / 3.5}
        openDuration={250}
        customStyles={{
          container: {
            alignItems: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 10,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
        }}>
        <Explore map={true} {...this.props} />
      </RBSheet>
    );
  };
  renderHeader = () => {
    return (
      <Header
        {...this.props}
        map={true}
        showExplore={() => this.RBSheet.open()}
      />
    );
  };

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: 'clamp',
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: 'clamp',
      });
      return {scale, opacity};
    });

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderBottomSheet()}
        <MapView
          customMapStyle={mapStyle}
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}>
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <CustomMarker />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}>
          {this.state.markers.map((marker, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate('Merchant')}>
              <MapDeals data={marker} />
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  ring: {
    width: 0,
    height: 0,
    borderRadius: 12,
    position: 'absolute',
  },
});
