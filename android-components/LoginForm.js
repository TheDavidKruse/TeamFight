import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
    render() {
        const { container, input, buttonContainer, buttonText } = styles;
        return (
            <View style={container}>
            <TextInput
             style={input}
             placeholder={'Email'}
             placeholderTextColor='#FFF'
             returnKeyType="next"
             keyboardType='email-address'
             autoCapitalize="none"
             autoCorrect={false}
             underlineColorAndroid='rgba(225,225,225,0.9)'
             onSubmitEditing={() => this.passwordInput.focus()}
            />
            <TextInput
             style={input}
             placeholder={'Password'}
             placeholderTextColor='#FFF'
             secureTextEntry
             returnKeyType="go"
             underlineColorAndroid='rgba(225,225,225,0.9)'
             ref={(input) => this.passwordInput = input}
            />


            <TouchableOpacity style={buttonContainer}>
                <Text style={buttonText}>
                    Login
                </Text>
                </TouchableOpacity>
            </View>
        );
    }

}
const styles = {
    container: {
        padding: 20
    },
    input: {
        height: 40,
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#000',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    }
};
