import React, { Component } from 'react';
import { View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker'

class Profile extends Component{
    constructor() {
        super();

        this.state = {
        };
    }

    componentDidMount = () => {
        AsyncStorage.getItem('person_token')
        .then(data => {
            this.setState({
                token: data
            });
            axios.post(`http://localhost:8000/GetUser`, { token: data })
            .then(reas => {
                console.log('data',reas)
                this.setState({
                user_image: reas.data.user_image,
                description: reas.data.description,
                name: reas.name
                        })}
        )}).catch(error => {
            console.log(error);
        });
    }

    updateUser() {
        axios.post(`http://localhost:8000/UpdateUser`, {
            user_image: this.state.user_image,
            description: this.state.description,
            token: this.state.token
        });
    }
    
    render (){
        console.log(this.state);
        const {container, buttonText, buttonContainer, input, inputContainer, title, userImage, userContainer, userImageContainer } = styles;
        return (
            <View style={container}>
            <KeyboardAvoidingView style={userContainer}>
            <TouchableOpacity
                style={userImageContainer} 
                onPress={() => ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
                includeBase64: true
              }).then(image => {
                this.setState({
                    user_image: 'data:' + image.mime + ';base64,' + image.data
                });
                console.log(image)
              })}>
            <Image style={userImage} source={this.state.user_image? { uri: this.state.user_image } : { uri: 'https://www.spinninrecords.com/images/img_profile80x80.png' } } />
            </TouchableOpacity>
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
            <TouchableOpacity style={buttonContainer} onPress={() => this.updateUser()}>
              <Text style={buttonText}>
                Update
              </Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
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
        marginTop: 58,
        fontSize: 30,
        opacity: 0.6,
        textAlign: 'center',
    },
    inputContainer: {
        marginTop: -60,
        width: '90%',
        height: 300,
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 15.0,
        zIndex: 1
    },
    input: {
        height: 100,
        marginBottom: 20,
        color: '#000',
        paddingHorizontal: 10,
        borderRadius: 15.0
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
    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'black'
    },
    userContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 30
    },
    userImageContainer: {
        zIndex: 2
    }
};
export default Profile;