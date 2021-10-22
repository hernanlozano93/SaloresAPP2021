import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Clipboard,
  Dimensions,
  Linking,
} from 'react-native';
import Slider from '../../../components/user/slider';
import Description from '../../../components/user/description';
import Offers from '../../../components/user/offer';
import Info from '../../../components/user/info';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Icon} from 'native-base';
import Status from '../../../components/user/status';
import ExperienceCard from '../../../components/user/experiences/card';

const {height} = Dimensions.get('window');

class Merchant extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    copied: false,
    showMenu: false,
  };

  renderNumberCopy = () => {
    this.RBSheetCopy.open();
  };

  renderCopiedMessage = () => {
    return (
      <View style={styles.copied}>
        <Text style={styles.copiedText}>Copiado a Portapapeles</Text>
      </View>
    );
  };

  renderBottomSheetCopyClipboard = () => {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheetCopy = ref;
        }}
        height={height / 5.5}
        openDuration={250}
        customStyles={{
          container: {
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <View style={styles.bottomsheetRow1}>
          <View style={styles.phoneNumberRow}>
            <Icon name="ios-call" style={styles.callIcon} />
            <Text style={styles.phoneNumber}>Numero Tel</Text>
          </View>
          <Text style={styles.callText}>Horario 11am - 5pm</Text>
        </View>
        <View style={styles.bottomsheetRow2}>
          <Text style={styles.phoneNumberText}>+57-3122345678</Text>
          <Icon
            onPress={() => this.copyToClipboard()}
            name="ios-copy"
            style={styles.copyIcon}
          />
          {this.state.copied ? this.renderCopiedMessage() : null}
        </View>
      </RBSheet>
    );
  };

  renderBottomSheetStatus = () => {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheetStatus = ref;
        }}
        closeOnDragDown={true}
        height={height / 1.2}
        animationType="slide"
        openDuration={250}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            padding: 20,
            paddingTop: 5,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <Status />
      </RBSheet>
    );
  };

  copyToClipboard = () => {
    Clipboard.setString('+180-8472946');
    this.setState({
      copied: true,
    });
  };

  openWebsite = () => {
    Linking.openURL('https://www.outserved.com');
  };

  handleStatus = () => {
    this.RBSheetStatus.open();
  };

  showMenu = () => {
    console.log('triggered showmneu');
    this.setState({showMenu: true});
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Slider {...this.props} />
        <Description status={this.handleStatus} />
        <View style={styles.business}>
          <Text style={styles.businessText}>Info Negocio</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Info
              triggerFunction={() => this.showMenu()}
              icon="ios-restaurant"
              label="Menu"
            />
            <Info
              triggerFunction={() => {}}
              icon="ios-information"
              label="Website"
            />
            <Info
              icon="ios-call"
              label="Cel"
              triggerFunction={this.renderNumberCopy}
            />
            <Info triggerFunction={() => {}} icon="ios-map" label="Map" />
            <Info
              icon="ios-globe"
              label="Social"
              triggerFunction={this.openWebsite}
            />
          </ScrollView>
        </View>

        <View style={styles.experience}>
          <View style={styles.row}>
            <Text style={styles.businessText}>Mirar todas las experiencias</Text>
            <Icon style={styles.arrowIcon} name="ios-arrow-forward" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ExperienceCard {...this.props} />
            <ExperienceCard {...this.props} />
            <ExperienceCard {...this.props} />
            <ExperienceCard {...this.props} />
            <ExperienceCard {...this.props} />
          </ScrollView>
        </View>

        <View style={styles.add}>
          <View style={styles.addView} />
          <View style={styles.videoView}>
            <View>
              <Text style={styles.addText}>Add un Video</Text>
              <Text style={styles.shareText}>
                Comparte tus experiencias en este lugar
              </Text>
            </View>
            <Icon
              onPress={() => this.props.navigation.navigate('AddExperience')}
              name="ios-add"
              style={styles.addIcon}
            />
          </View>
        </View>

        <Offers
          {...this.props}
          times={400}
          offer_name="Obten 50% descuento en Pizza"
          offer_description="Compre cualquier pizza de tamaño mediano de Dominos y obtenga un 50% de descuento. Esto
          la oferta es válida solo para usuarios nuevos "
        />

        <Offers
          {...this.props}
          times={230}
          offer_name="Free Garlic Bread"
          offer_description="Buy two regular size pizzas from dominos and get a free stuffed garlic bread"
        />

        <Offers
          {...this.props}
          times={400}
          offer_name="Get 50% off on Pizza"
          offer_description="Buy any medium size pizza from Dominos and get 50% flat off. This
        offer is valid only for the first time users"
        />

        <Offers
          {...this.props}
          times={230}
          offer_name="Free Garlic Bread"
          offer_description="Buy two regular size pizzas from dominos and get a free stuffed garlic bread"
        />
        {this.renderBottomSheetCopyClipboard()}
        {this.renderBottomSheetStatus()}
      </ScrollView>
    );
  }
}

export default Merchant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  business: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  businessText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#505050',
    padding: 5,
    paddingBottom: 10,
  },
  bottomsheetRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyIcon: {
    color: '#A1A1A1',
    fontSize: 20,
    padding: 10,
  },
  phoneNumber: {
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  bottomsheetRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  callIcon: {
    fontSize: 20,
    paddingRight: 20,
  },
  callText: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
  },
  phoneNumberRow: {
    flexDirection: 'row',
  },
  phoneNumberText: {
    color: '#a1a1a1',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  copied: {
    backgroundColor: '#26BE8D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  copiedText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
  },
  experience: {padding: 15, marginTop: 10, backgroundColor: 'white'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  add: {
    padding: 15,
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  addView: {
    width: 10,
    backgroundColor: '#26BE8D',
    margin: -20,
    marginRight: 20,
  },
  shareText: {
    color: '#707070',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },
  addText: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
  video: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  arrowIcon: {
    fontSize: 20,
  },
  addIcon: {
    color: '#26BE8D',
  },
});
