import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import axios from 'axios';

const PERSON_TOKEN = 'person_token';

export default class LoginForm extends Component {
                 constructor(props) {
                   super(props);

                   this.state = { email: "", password: "", errors: "" };
                 }
                 

                 async storeToken(accessToken) {
                   try {
                     await AsyncStorage.setItem(PERSON_TOKEN, accessToken);
                     this.getToken();
                   } catch (error) {
                     console.log("something went wrong", error);
                   }
                 }

                 handleLogin() {
                   try {
                     const response = axios.post(
                       `https://teamfight.herokuapp.com/login`,
                       {
                           email: this.state.email,
                           password: this.state.password
                         })
                    .then(data => {
                       console.log('server response', data);
                      if (data.status === 200) {
                        this.setState({ error: '' });
                        this.storeToken(data.data.user.token);
                        this.props.navigation.navigate('Tabs');
                    }
                     });
                   } catch (err) {
                     this.setState({ error: err });
                   }
                 }

                 moveIt() {
                  this.props.navigation.navigate('SignUp');
                 }
                 render() {
                   const { container, input, buttonContainer, buttonText, signUp } = styles;
                   return <View style={container}>
                       <TextInput
                           style={input}
                           placeholder={"Email"}
                           placeholderTextColor="#FFF"
                           returnKeyType="next"
                           keyboardType="email-address"
                           autoCapitalize="none" autoCorrect={false}
                           onChangeText={
                               val => this.setState(
                             { email: val }
                               )}
                           underlineColorAndroid="rgba(225,225,225,0.9)"
                           onSubmitEditing={() => this.passwordInput.focus()} />
                       <TextInput
                           style={input}
                           placeholder={"Password"}
                           placeholderTextColor="#FFF"
                           secureTextEntry
                           returnKeyType="go"
                           onChangeText={val => this.setState(
                             { password: val }
                           )} underlineColorAndroid="rgba(225,225,225,0.9)" ref={input => (this.passwordInput = input)} />

                       <TouchableOpacity style={buttonContainer} onPress={() => this.handleLogin()}>
                         <Text style={buttonText}>
                           Login
                         </Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={signUp} onPress={() => this.moveIt()}>
                         <Text style={buttonText}>
                           Sign Up
                         </Text>
                       </TouchableOpacity>
                     </View>;
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
    signUp: {
        justifyContent: 'center',
        paddingVertical: 10
    }
};
