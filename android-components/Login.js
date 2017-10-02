import { React, Component } from 'react';
import { Text, View, TextInput, StatusBar, navigationOptions, Button, Form } from 'react-native';

class Login extends Component {
    constructor() {
        super();
    }
    render() {
        const { textStyle, viewStyle } = styles;
        return (
            <View style={viewStyle}>
            
                <Text style={textStyle}>Username or Email</Text>
                <TextInput keyboardType={'email-address'} returnKeyType={'next'} />
                <Text style={textStyle}>Password</Text>
                <TextInput secureTextEntry={true} keyboardType={'default'} returnKeyType={'go'} />
                <Button title="blah" />
                
            </View>
        );
    }
   
} 
const styles = {
    textStyle: {
        fontSize: 30
    },
    viewStyle: {
        flex: 3,
        backgroundColor: 'red'
    }
};
export default Login;
