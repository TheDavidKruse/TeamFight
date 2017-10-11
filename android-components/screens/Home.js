import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Home = (props) => {
    const { textStyle, viewStyle } = styles;
    console.log(props);
    return (
        <View style={viewStyle}>
            <Text>Home</Text>
        </View>
    );
}; 
const styles = {
    textStyle: {
        fontSize: 30
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        height: 60,
        paddingTop: 15,
        elevation: 3,
        position: 'relative',
        flex: 1
    }
};
export default Home;
