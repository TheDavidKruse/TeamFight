import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class Login extends Component {
    submitLogin(vals) {
        alert('done'); 
    }
    render() {
        const { handleSubmit } = this.props;
        const { container, logoContainer, formContainer, logo, title } = styles;
        return (
            <View style={container}>
                <View style={logoContainer}>
                    <Image
                        style={logo}
                        source={require('../assets/img/logo.jpg')}
                    />
                    <Text style={title}>DuoQ</Text>
                </View>
                <View style={formContainer}>
                </View>
            </View>
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
        height: 75
    },
    title: {
        color: 'white',
        marginTop: 10,
        fontFamily: 'Montserrat',
        fontSize: 30

    }
};
export default Login;
