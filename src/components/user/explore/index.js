import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Category from '../category';

class explore extends Component {
  state = {
    category: [
      'Azul',
      'Rojo',
      'Verde',
      'Amarillo',
      'Naranja',
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.heading}>Explora cerca de ti</Text>
          <Text style={styles.deals_text}>4 ofertas</Text>
        </View>
        <ScrollView
          style={styles.category}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {this.state.category.map((index, key) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                key={key}
                onPress={() =>
                  this.props.map !== undefined
                    ? null
                    : this.props.navigation.navigate({
                        routeName: 'Explore',
                        params: {
                          explore: index,
                        },
                      })
                }>
                <Category
                  map={this.props.map !== undefined ? true : false}
                  category_name={index}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default explore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
    elevation: 1,
  },
  heading: {
    color: '#505050',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  deals_text: {
    color: '#26BE8D',
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    marginTop: 5,
  },
});
