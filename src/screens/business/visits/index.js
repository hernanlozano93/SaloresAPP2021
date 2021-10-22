import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Icon} from 'native-base';
import Visit from '../../../components/business/visits';

const {width} = Dimensions.get('window');

class LatestVist extends Component {
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
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <View style={styles.containerView}>
            <View style={styles.rowStyle}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="ios-arrow-back"
                style={styles.iconView}
              />
              <View>
                <Text style={styles.heading}>Latest Visits</Text>
              </View>
            </View>
          </View>
        </View>
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Aryan Yadav"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Ali Abbas"
          time="5:22PM"
        />
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Aryan Yadav"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Ali Abbas"
          time="5:22PM"
        />
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Aryan Yadav"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Ali Abbas"
          time="5:22PM"
        />
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Aryan Yadav"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Ali Abbas"
          time="5:22PM"
        />
        <Visit
          offerName="Get 50% Off on Pizza"
          userName="Aryan Yadav"
          time="3:12PM"
        />
        <Visit
          offerName="Buy 1 Get 1 Free"
          userName="Ali Abbas"
          time="5:22PM"
        />
      </ScrollView>
    );
  }
}

export default LatestVist;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    backgroundColor: 'white',
  },
  heading: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  background: {
    backgroundColor: '#F5F5F5',
  },
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 40,
    marginTop: 5,
    paddingLeft: 20,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: width / 1.1,
    marginLeft: 20,
    marginBottom: 20,
    borderColor: '#C6C6C6',
    borderWidth: 0.5,
  },
  rowStyle: {
    flexDirection: 'row',
  },
});
