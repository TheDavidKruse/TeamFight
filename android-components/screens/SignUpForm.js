import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: ''
        };
    }

     onRegisterPressed() {
        if (this.state.password === this.state.password_confirmation) {
            this.setState({ errors: '' });
                   try {
                       console.log('sending');
            axios.post('https://teamfight.herokuapp.com/', {
                        name: this.state.name,
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password
            }).then(data => {
                console.log('signup', data);
                if (data.status === 200) {
                    this.props.navigation.navigate('Login');
                } else {
                    this.setState({errors: 'please select a different username'});
                }
            });
            
            if (response.status >= 200 && response.status < 300) {
              this.setState({ error: "" });
            }          
        } catch (err) {
            console.log(err);
                       this.setState({ errors: 'Something went wrong' });
        }
        } else {
            this.setState({
                errors: 'password and password confirmation do not match'
            });
       }

    }

    render() {
        console.log('signup', this.props, 'state', this.state);
        const { container, input, buttonContainer, buttonText, errors } = styles;
        return (
            <KeyboardAvoidingView style={container}>
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
            placeholder={'desired username'}
            placeholderTextColor='#FFF'
            returnKeyType="next"
            keyboardType='default'
            onChangeText={(val) => this.setState({ username: val })}
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

            <Text style={errors}>
            {this.state.errors}
                </Text>
            <TouchableOpacity style={buttonContainer} onPress={() => this.onRegisterPressed.bind(this)}>
                <Text style={buttonText}>
                    Sign Up
                </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
    },
    errors: {
        color: 'white'
    }
};
