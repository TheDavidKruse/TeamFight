import React, { Component } from 'react';
import { View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';

class Profile extends Component{
    constructor(){
        super();
    }

    componentDidMount = () => {
        AsyncStorage.getItem('person_token')
        .then(data => axios.post(`https://teamfight.herokuapp.com/GetUser`, { token: data }))
        .then(data => console.log("HA",data));
    }
    
    render (){
        const {container, viewStyle, title, signUp, buttonText, buttonContainer, input, inputContainer } = styles;
        return (<View style={container}>
            <TextInput
                style={input}
                placeholder={'email'}
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

            <TouchableOpacity style={buttonContainer} onPress={ () => this.handleLogin()}>
              <Text style={buttonText}>
                Update
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={signUp} onPress={() => this.moveIt()}>
              <Text style={buttonText}>
                Sign Up
              </Text>
            </TouchableOpacity>
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
        height: 75,
        opacity: 0.8
    },
    title: {
        color: 'white',
        marginTop: 10,
        fontFamily: 'Montserrat',
        fontSize: 30,
        opacity: 0.6
    },
        inputContainer: {
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
export default Profile;