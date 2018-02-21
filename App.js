import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator, NavigationActions,
} from 'react-navigation';
import Login from './app/components/Login'
import Signup from './app/components/Signup'
import Logout from './app/components/Logout'
import firebase from 'firebase'

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyALqyUW5Drs6Rky36eXZ-1fPCG-_hNAPls",
      authDomain: "reactnative-authenticati-62f5f.firebaseapp.com",
      databaseURL: "https://reactnative-authenticati-62f5f.firebaseio.com",
      projectId: "reactnative-authenticati-62f5f",
      storageBucket: "reactnative-authenticati-62f5f.appspot.com",
      messagingSenderId: "673503617904"
    });
  }
  render() {
    const Navigation = StackNavigator({
      Login: { screen: Login },
      Signup: { screen: Signup},
      Logout: { screen: Logout },
    });
    return (
      
      <Navigation/>
    );
  }
}

