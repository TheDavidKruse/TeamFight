import React, { Component } from 'react';
import { View, Image, Text, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';

import LoginForm from './LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        try {
          console.log('hi');
         AsyncStorage.getItem('person_token').then(data => {
           if (data !== undefined || data !== null) {
             this.props.navigation.navigate('Tabs');
           } else {
             return null;
           }
         }
           
         );
        } catch (err) {
          console.log('help');
        }
      }
    render() {
        console.log('login props', this.props);
        const { container, logoContainer, formContainer, logo, title, signUp } = styles;
        return (<KeyboardAvoidingView behavior="position" style={container}>
            <View style={logoContainer}>
              <Image style={logo} source={require("../../assets/img/logo.jpg")} />
              <Text style={title}>TeamFight</Text>
            </View>
            <View style={formContainer}>
              <LoginForm navigation={this.props.navigation} />
            </View>
          </KeyboardAvoidingView>);
    }
} 
const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(252,55,62)'
    },
    viewStyle: {
        flex: 3,
        backgroundColor: 'red'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 75,
        height: 75,
        opacity: 0.8
    },
    title: {
        color: 'white',
        marginTop: 10,
        fontFamily: 'Montserrat',
        fontSize: 30,
        opacity: 0.6
    }
};
export default Login;
