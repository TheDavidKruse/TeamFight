import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
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
        position: 'relative'
    }
};
export default Header;
