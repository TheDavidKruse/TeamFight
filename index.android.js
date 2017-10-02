// index.android.js place code in here for ANDROID
// Import a library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './android-components/Login';
import Home from './android-components/Home';

// Create a component
const App = StackNavigator(
  {
  Login: { screen: Login, title: 'Login' },
  Home: { screen: Home }
   });
//render component to the device
AppRegistry.registerComponent('albums2', () => App);
