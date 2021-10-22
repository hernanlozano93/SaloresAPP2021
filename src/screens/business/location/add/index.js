/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

// TODO (Date sets to 1 day less,  )

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
  ActivityIndicator,
  Image,
} from 'react-native';

import {Icon, Picker} from 'native-base';

import ImagePicker from 'react-native-image-picker';
import Upload from '../../../../components/business/upload';

const options = {
  title: 'Select Avatar',
  // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const {height, width} = Dimensions.get('window');

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
      {label: 'Descuento', value: 0},
      {label: 'Oferta', value: 1},
    ],
    radio_props2: [
      {label: 'Si', value: 0},
      {label: 'No', value: 1},
    ],
    category: 'key1',
    businessImage1: '',
    businessImage2: '',
    businessImage3: '',
    businessLogo: '',
    menucard: '',
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

  showMode = (currentMode) => {
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
      this.props.navigation.navigate('SetLocation');
    }, 5000);
  };

  onValueChange = (value) => {
    this.setState({
      category: value,
    });
  };
  showImagePicker = (field) => {
    return ImagePicker.showImagePicker(options, (response) => {
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
          [field]: source,
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
                <Text style={styles.heading}>Añadir Localización</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inputView}>
            <Text style={styles.label}>Nombre del negocio</Text>
            <TextInput
              placeholderTextColor="#C6C6C6"
              placeholder="Ingrese nombre del negocio"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  business: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Descripcioón del negocio</Text>
            <TextInput
              placeholderTextColor="#C6C6C6"
              placeholder="Describe tu negocio"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  description: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Categoría</Text>
            <TextInput
              //   keyboardType="number-pad"
              placeholderTextColor="#C6C6C6"
              placeholder="Select el tipo de negocio"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  category: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Dirección</Text>
            <TextInput
              //   keyboardType="number-pad"
              placeholderTextColor="#C6C6C6"
              placeholder="Enter la dirección del negocio"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  address: text,
                });
              }}
            />
          </View>

          <View style={styles.selectCityState}>
            <View>
              <Text style={styles.label}>Ciudad</Text>
              <Picker
                note
                mode="dropdown"
                style={{width: width / 2.4, marginLeft: -7}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="Selecciona ciudad" value="key0" />
                <Picker.Item label="Bogotá" value="key1" />
                <Picker.Item label="Medellin" value="key2" />
                <Picker.Item label="Cartagena" value="key3" />
                <Picker.Item label="Cali" value="key4" />
              </Picker>
            </View>
            <View>
              <Text style={styles.label}>Departamento</Text>
              <Picker
                note
                mode="dropdown"
                style={{width: width / 2.5, marginLeft: -10}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="Selecciona depart" value="key0" />
                <Picker.Item label="Bogotá D.C." value="key1" />
                <Picker.Item label="Cundinamarca" value="key2" />
                <Picker.Item label="Antioquía" value="key3" />
                <Picker.Item label="La Guajira" value="key4" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Zip</Text>
            <TextInput
              keyboardType="number-pad"
              placeholderTextColor="#C6C6C6"
              placeholder="Añade codigo zip"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  zip: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Celular</Text>
            <TextInput
              keyboardType="number-pad"
              placeholderTextColor="#C6C6C6"
              placeholder="Añade celular"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  phone: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Website (opcional)</Text>
            <TextInput
              //   keyboardType="number-pad"
              placeholderTextColor="#C6C6C6"
              placeholder="Añade link de sitio web"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  website: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Facebook (Opcional)</Text>
            <TextInput
              //   keyboardType="number-pad"
              placeholderTextColor="#C6C6C6"
              placeholder="Añade link de facebook"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  facebook: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Instagram (Opcional)</Text>
            <TextInput
              //   keyboardType="number-pad"
              placeholderTextColor="#C6C6C6"
              placeholder="Añade link de instagram"
              style={styles.input}
              onChangeText={(text) => {
                this.setState({
                  instagram: text,
                });
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Carga imagen de negocio (Min 3)</Text>
            <View style={styles.uploadBox}>
              <TouchableOpacity
                onPress={() => this.showImagePicker('businessImage1')}>
                {this.state.businessImage1.length === 0 ? (
                  <Upload />
                ) : (
                  <Image
                    source={this.state.businessImage1}
                    style={styles.previewImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.showImagePicker('businessImage2')}>
                {this.state.businessImage2.length === 0 ? (
                  <Upload />
                ) : (
                  <Image
                    source={this.state.businessImage2}
                    style={styles.previewImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.showImagePicker('businessImage3')}>
                {this.state.businessImage3.length === 0 ? (
                  <Upload />
                ) : (
                  <Image
                    source={this.state.businessImage3}
                    style={styles.previewImage}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Carga logo de negocio (opcional)</Text>
            <TouchableOpacity
              style={[
                styles.uploadBox,
                {
                  justifyContent: 'flex-start',
                  marginLeft: -10,
                },
              ]}
              onPress={() => this.showImagePicker('businessLogo')}>
              {this.state.businessLogo.length === 0 ? (
                <Upload />
              ) : (
                <Image
                  source={this.state.businessLogo}
                  style={styles.previewImage}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Carga carta de menu (opcional)</Text>

            <TouchableOpacity
              style={[
                styles.uploadBox,
                {
                  justifyContent: 'flex-start',
                  marginLeft: -10,
                },
              ]}
              onPress={() => this.showImagePicker('menucard')}>
              {this.state.menucard.length === 0 ? (
                <Upload />
              ) : (
                <Image
                  source={this.state.menucard}
                  style={styles.previewImage}
                />
              )}
            </TouchableOpacity>
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
                {this.state.status ? 'Next' : 'Next'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Coupon;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    // flex: 1,
    // paddingBottom: 10,
  },
  container: {
    flex: 1,
    margin: 15,
    marginTop: 20,
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
    flex: 1,
    backgroundColor: '#26BE8D',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  publishText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
  camera: {color: '#A1A1A1', fontSize: 25},
  uploadBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  selectCityState: {flexDirection: 'row', marginLeft: 5, marginBottom: 10},
  previewImage: {
    height: 100,
    width: 100,
    margin: 15,
    borderRadius: 2,
  },
});
