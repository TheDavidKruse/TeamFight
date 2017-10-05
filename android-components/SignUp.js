import React, { Component } from 'react';
import { View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

class SignUp extends Component {
    submitLogin(vals) {
        alert('done'); 
    }
    render() {
        const { handleSubmit } = this.props;
        const { container, logoContainer, formContainer, logo, title } = styles;
        return (
            <KeyboardAvoidingView behavior='padding' style={container}>
                <View style={logoContainer}>
                    <Image
                        style={logo}
                        source={require('../assets/img/logo.jpg')}
                    />
                    <Text style={title}>DuoQ</Text>
                </View>
                <View style={formContainer}>
                    <LoginForm />
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
        fontFamily: 'Montserrat',
        fontSize: 30,
        opacity: 0.6

    }
};
export default SignUp;
