import React, { Component } from 'react';
import { View, Image, Text, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { container, logoContainer, formContainer, logo, title } = styles;
        return (
            <KeyboardAvoidingView behavior='position' style={container}>
                <View style={logoContainer}>
                    <Image
                        style={logo}
                        source={require('../../assets/img/logo.jpg')}
                    />
                    <Text style={title}>TeamFight</Text>
                </View>
                <View style={formContainer}>
                    <SignUpForm  navigation={this.props.navigation}/>
                </View>
            </KeyboardAvoidingView>
        );
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
        fontSize: 30,
        opacity: 0.6

    }
};
export default SignUp;
