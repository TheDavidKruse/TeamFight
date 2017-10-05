import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: []
        };
    }

   async onRegisterPressed() {
        try {
            let response = await fetch('', {
                method001: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password
                    }
                })
            });
        } catch (err) {

        }
    }

    render() {
        const { container, input, buttonContainer, buttonText } = styles;
        return (
            <View style={container}>
            <TextInput
             style={input}
             placeholder={'Name'}
             placeholderTextColor='#FFF'
             returnKeyType="next"
             keyboardType='default'
             onChangeText={(val) => this.setState({ name: val })}
             underlineColorAndroid='rgba(225,225,225,0.9)'
            />
            <TextInput
             style={input}
             placeholder={'Email'}
             placeholderTextColor='#FFF'
             returnKeyType="next"
             keyboardType='email-address'
             autoCapitalize="none"
             autoCorrect={false}
             onChangeText={(val) => this.setState({ email: val })}
             underlineColorAndroid='rgba(225,225,225,0.9)'

            />
            <TextInput
             style={input}
             placeholder={'Password'}
             placeholderTextColor='#FFF'
             secureTextEntry
             returnKeyType="go"
             onChangeText={(val) => this.setState({ password: val })}
             underlineColorAndroid='rgba(225,225,225,0.9)'

            />
            <TextInput
             style={input}
             placeholder={'Confirm Password'}
             placeholderTextColor='#FFF'
             secureTextEntry
             returnKeyType="go"
             onChangeText={(val) => this.setState({ password_confirmation: val })}
             underlineColorAndroid='rgba(225,225,225,0.9)'

            />


            <TouchableOpacity style={buttonContainer} onPress={this.onRegisterPressed.bind(this)}>
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
