import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const {width} = Dimensions.get('window');

class Coupon extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    date: new Date(), // initial value of date
    mode: 'date', // date picker mode
    show: false, // Boolean value to check whether to show date picker or not
    dateSelected: false, // Boolean value to check whether date is selected or not
    status: false, // Publish Coupon Status
    title: '',
    description: '',
    amount: '',
    radio_props1: [
      {label: 'Discount', value: 0},
      {label: 'Offer', value: 1},
    ],
    radio_props2: [
      {label: 'Yes', value: 0},
      {label: 'No', value: 1},
    ],
    couponImage: '',
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({
      show: Platform.OS === 'ios',
    });
    this.setState({
      date: currentDate,
      dateSelected: true,
    });
  };

  showMode = currentMode => {
    this.setState({
      show: true,
    });
    this.setState({mode: currentMode});
  };

  showDatepicker = () => {
    console.log('called');
    this.setState({
      mode: 'date',
      show: true,
    });
  };

  showTimepicker = () => {
    this.setState({
      mode: 'time',
    });
  };

  publish = () => {
    this.setState({
      publishing: true,
    });
    setTimeout(() => {
      this.setState({
        publishing: false,
        status: true,
      });
    }, 5000);
  };

  showImagePicker = () => {
    return ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response.uri);

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
          couponImage: source,
        });
      }
    });
  };

  render() {
    console.log(this.state);
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
                style={styles.paddingView}
              />
              <View>
                <Text style={styles.heading}>Añadir Cupon</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inputView}>
            <Text style={styles.label}>Titulo</Text>
            <TextInput
              placeholderTextColor="#C6C6C6"
              placeholder="Ingresa titulo de cupón"
              style={styles.input}
              onChangeText={text => {
                this.setState({
                  title: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Descripciones</Text>
            <TextInput
              placeholderTextColor="#C6C6C6"
              placeholder="Describe cupon (Max 30 carac)"
              style={styles.input}
              onChangeText={text => {
                this.setState({
                  description: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <View style={styles.imageView}>
              <Text style={styles.label}>Fecha de fin</Text>
              <Text style={styles.radioLabel}>
                {this.state.dateSelected
                  ? JSON.stringify(this.state.date).substring(1, 11)
                  : null}
              </Text>

              <TouchableOpacity
                onPress={this.showDatepicker}
                style={styles.row}>
                <Icon name="ios-calendar" style={styles.icon} />
                <Text style={styles.chooseText}>Configurar fecha</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Monto</Text>
            <TextInput
              keyboardType="number-pad"
              placeholderTextColor="#C6C6C6"
              placeholder="Número de cupones"
              style={styles.input}
              onChangeText={text => {
                this.setState({
                  amount: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Type</Text>
            <View style={styles.rapidFormView}>
              <RadioForm
                radio_props={this.state.radio_props1}
                initial={0}
                animation={true}
                buttonColor={'#A1A1A1'}
                buttonInnerColor={'#A1A1A1'}
                buttonSize={10}
                radioStyle={{marginRight: width / 5.5}}
                labelStyle={styles.radioLabelStyle}
                formHorizontal={true}
                onPress={value => {
                  this.setState({value: value});
                }}
              />
            </View>
          </View>
          <View style={styles.inputViewMagin}>
            <Text style={styles.label}>¿Este cupón está relacionado con el alcohol?</Text>
            <View style={styles.rapidFormView}>
              <RadioForm
                radio_props={this.state.radio_props2}
                initial={0}
                animation={true}
                buttonColor={'#A1A1A1'}
                buttonInnerColor={'#A1A1A1'}
                buttonSize={10}
                radioStyle={{marginRight: width / 4}}
                labelStyle={styles.radioLabel}
                formHorizontal={true}
                onPress={value => {
                  this.setState({value: value});
                }}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <View style={styles.imageView}>
              <Text style={styles.label}>Subir imagen (if any)</Text>
              {this.state.couponImage.length === 0 ? (
                <TouchableOpacity
                  onPress={() => this.showImagePicker()}
                  style={styles.row}>
                  <Icon name="ios-camera" style={styles.icon} />
                  <Text style={styles.chooseText}>Seleccione archivos</Text>
                </TouchableOpacity>
              ) : (
                <Image
                  source={this.state.couponImage}
                  style={styles.couponImage}
                />
              )}
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            disabled={this.state.status}
            onPress={() => this.publish()}
            style={styles.publish}>
            {this.state.publishing ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.publishText}>
                {this.state.status ? 'Published' : 'Publish Coupon'}
              </Text>
            )}
          </TouchableOpacity>
          {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={this.onChange}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

export default Coupon;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    margin: 15,
    marginTop: 20,
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
  input: {
    borderBottomWidth: 0.5,
    borderColor: '#C6C6C6',
    padding: -5,
    paddingTop: 5,
  },
  label: {
    fontFamily: 'Roboto-Bold',
    color: '#505050',
  },
  inputView: {
    margin: 20,
    marginLeft: 5,
    marginTop: 0,
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  chooseText: {
    fontSize: 12,
    color: '#A1A1A1',
    padding: 5,
    fontFamily: 'Roboto-Regular',
  },
  icon: {color: '#A1A1A1', fontSize: 22},
  radioLabel: {
    fontSize: 13,
    color: '#505050',
    fontFamily: 'Roboto-Regular',
  },
  publish: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    backgroundColor: '#26BE8D',
    borderRadius: 5,
    marginTop: 20,
    padding: 15,
  },
  publishText: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
  couponImage: {
    height: 70,
    width: 70,
  },
  radioLabelStyle: {
    fontSize: 13,
    color: '#505050',
    fontFamily: 'Roboto-Regular',
  },
  inputViewMagin: {
    margin: 20,
    marginLeft: 5,
    marginTop: -10,
  },
  background: {
    backgroundColor: '#F5F5F5',
  },
  rapidFormView: {
    margin: 20,
    marginLeft: 0,
  },
  iconView: {
    flexDirection: 'row',
  },
  paddingView: {
    paddingRight: 20,
  },
});
