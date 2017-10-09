import React, { Component } from 'react';
import { View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';

class Profile extends Component{
    constructor() {
        super();

        this.state = {
            name: 'David',
            description: '',
            games: [],
        };
    }

    componentDidMount = () => {
        AsyncStorage.getItem('person_token')
        .then(data => axios.post(`https://teamfight.herokuapp.com/GetUser`, { token: data }))
        .then(data => console.log("HA",data));
    }
    
    render (){
        const {container, buttonText, buttonContainer, input, inputContainer, title } = styles;
        return (<View style={container}>
            <View style={inputContainer}>
                <Text style={title}>
                {this.state.name}
                </Text>
                <TextInput
                    style={input}
                    placeholder={"Description"}
                    placeholderTextColor="#000"
                    defaultValue={this.state.description}
                    multiline
                    numberOfLines={5}
                    returnKeyType="go"
                    onChangeText={val => this.setState(
                    { description: val }
                    )} underlineColorAndroid="rgba(225,225,225,0.9)"
                />
            </View>
            <TouchableOpacity style={buttonContainer} onPress={() => this.handleUpdate()}>
              <Text style={buttonText}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(252,55,62)',
        alignItems: 'center'
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
        color: 'black',
        marginTop: 10,
        fontFamily: 'Montserrat',
        fontSize: 30,
        opacity: 0.6,
    },
    inputContainer: {
        marginTop: 20,
        width: '90%',
        height: 300,
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 15.0,
        elevation: 8
    },
    input: {
        height: 150,
        marginBottom: 20,
        color: '#000',
        paddingHorizontal: 10
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: '#000',
        paddingVertical: 10,
        width: '85%'
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