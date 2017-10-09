import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';


import Home from './screens/Home';
import Profile from './screens/Profile';
import ChatList from './screens/ChatList';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

export const SignedOut = StackNavigator({
  Login: {
    screen: Login, 
  },
  SignUp: {
  screen: SignUp,
},
}, {
navigationOptions: {
  headerStyle: {
    backgroundColor: 'rgb(252,55,62)',
    elevation: 0,
  }
}
});


export const SignedIn = TabNavigator({
  Profile: { screen: Profile },
  Home: { screen: Home },
  Chat: { screen: ChatList }
}, {
  initialRouteName: 'Home',
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'black',
      rippleColor: 'rgb(252,55,62)',
      tabs: {
        Home: {
          barBackgroundColor: 'rgb(252,55,62)'
        },
        Profile: {
          barBackgroundColor: 'rgb(252,55,62)'
        },
        ChatList: {
          barBackgroundColor: 'rgb(252,55,62)',
          labelColor: 'rgb(252,55,62)',
          activeLabelColor: 'rgb(252,55,62)',
          activeIcon: <Icon size={24} color="#FFF" name="newsstand" />
        }
      }
    }
  }
});

export const Root = StackNavigator({
  SignedOut: {
    screen: SignedOut
  },
  Tabs: {
    screen: SignedIn,
  },
}, {
  mode: 'modal',
  headerMode: 'none'
});
