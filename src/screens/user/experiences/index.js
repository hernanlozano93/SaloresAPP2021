/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import Header from '../../../components/user/header';
import Explore from '../../../components/user/explore';
import Experiences from '../../../components/user/experiences'

// const { height, width } = Dimensions.get("window");

class App extends Component {
    static navigationOptions = {
        headerShown: false,
    };
    state = {};
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <StatusBar barStyle="dark-content" backgroundColor="white" /> */}
                <Header {...this.props} />
                <Explore {...this.props} />
                <View style={styles.view}>
                    <Text style={styles.heading}>
                        Videos recomendados
                </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                    </ScrollView>
                </View>
                <View style={styles.view}>
                    <Text style={styles.heading}>
                       Experiencias más votadas
                </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                    </ScrollView>
                </View>
                <View style={styles.view}>
                    <Text style={styles.heading}>
                       Videos más vistos
                </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                        <Experiences {...this.props} />
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
    },
    heading: {
        color: '#707070',
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        padding: 10
    }, view: { backgroundColor: 'white', marginTop: 10 }
});
