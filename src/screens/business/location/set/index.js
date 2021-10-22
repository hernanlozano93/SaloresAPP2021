/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';

import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

class MarkerTypes extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Set Location',
      headerTintColor: '#505050',
      headerStyle: {
        backgroundColor: '#F5F5F5',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        // fontWeight: 'bold',
      },
      showHeader: true,
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
      b: {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE,
      },
      location: {
        latitude: 0,
        longitude: 0,
      },
      loading: true,
      settingLocation: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then((location) => {
          console.log(location);
          this.setState({
            a: {
              latitude: location.latitude + SPACE,
              longitude: location.longitude + SPACE,
            },
            b: {
              latitude: location.latitude - SPACE,
              longitude: location.longitude - SPACE,
            },
            location: {
              latitude: location.latitude,
              longitude: location.longitude,
            },
            loading: false,
          });
        })
        .catch((error) => {
          const {code, message} = error;
          console.warn(code, message);
        });
    }, 3000);
  }

  setLocation = () => {
    this.setState({
      settingLocation: false,
    });
    setTimeout(() => {
      this.props.navigation.navigate('Location');
    }, 3000);
  };

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return (
        <View style={styles.indicator}>
          {/* <Header label="Set Location" /> */}
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker
            coordinate={this.state.b}
            onSelect={(e) => log('onSelect', e)}
            onDrag={(e) => log('onDrag', e)}
            onDragStart={(e) => log('onDragStart', e)}
            onDragEnd={(e) => log('onDragEnd', e)}
            onPress={(e) => log('onPress', e)}
            draggable
          />
        </MapView>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.setLocation()}
          style={styles.confirm}>
          {!this.state.settingLocation ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.text}>Confirmar Localización</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default MarkerTypes;

MarkerTypes.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  indicator: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  confirm: {
    backgroundColor: '#26BE8D',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // flex:1
    padding: 10,
    width: width / 1.1,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
  },
  header: {
    // marginTop: -height / 1,
    // position: 'absolute',
  },
});
