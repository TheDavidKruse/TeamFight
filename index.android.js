// index.android.js place code in here for ANDROID
// Import a library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './android-components/header';

// Create a component
const App = () => 
   (
     <Header headerText={'Teamfight'} />
  );
//render component to the device
AppRegistry.registerComponent('albums2', () => App);
