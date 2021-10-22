import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import Option from '../../../components/user/option';
import ImagePicker from 'react-native-image-picker';

const {width} = Dimensions.get('window');

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
class Business extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    tab: 'Active',
  };

  tabHandler = tab => {
    this.setState({
      tab: tab,
    });
  };
  showImagePicker = () => {
    return ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <View style={styles.containerView}>
            <View style={styles.iconView}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="ios-arrow-back"
                style={styles.paddingStyle}
              />
              <View>
                <Text style={styles.heading}>Mi negocio</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image
              source={require('../../../assets/shopping.png')}
              style={styles.image}
            />
            <TouchableOpacity
              onPress={() => this.showImagePicker()}
              style={styles.editLogo}>
              <Text style={styles.editLogoText}>Editar Logo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.storeName}>Sopas de mama</Text>
            <Text style={styles.id}>Reg ID: 27478A3B3</Text>
          </View>
        </View>

        {/* Options Start */}
        <View style={styles.optionView}>
          <View style={styles.optionContainerView}>
            <Option
              icon="md-pin"
              label="Localización"
              routeName="Location"
              {...this.props}
            />
          </View>
          <View style={styles.optionContainer}>
            <Option
              icon="ios-card"
              routeName="Coupons"
              {...this.props}
              label="Cupones"
            />
          </View>
          <View style={styles.optionContainer}>
            <Option {...this.props} icon="ios-mail" label="Mensajes" />
          </View>
          <View style={styles.optionContainer}>
            <Option {...this.props} icon="md-card" label="Info pago" />
          </View>
          <View style={styles.optionContainer}>
            <Option icon="ios-settings" label="Configuración" {...this.props} />
          </View>
        </View>
        <View style={styles.optionContainer}>
          <Option
            routeName="Auth"
            {...this.props}
            icon="ios-log-out"
            label="Cerrar sesión"
          />
        </View>
        {/* Options End */}
      </ScrollView>
    );
  }
}

export default Business;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    backgroundColor: 'white',
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  heading: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  iconView: {
    flexDirection: 'row',
  },
  id: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  row: {
    marginLeft: width / 10,
  },
  storeName: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 23,
  },
  card: {
    backgroundColor: '#26BE8D',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30,
    margin: 10,
    borderRadius: 5,
  },
  paddingStyle: {
    paddingRight: 20,
  },
  background: {
    backgroundColor: '#F5F5F5',
  },
  editLogo: {
    height: 35, // change these values according to your requirement.
    width: 70,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -32,
    opacity: 0.85,
  },
  editLogoText: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
    fontSize: 9,
    paddingBottom: 5,
  },
  optionView: {
    marginTop: 30,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
  optionContainer: {
    margin: 5,
  },
  optionContainerView: {
    margin: 5,
    paddingLeft: 4,
  },
});
