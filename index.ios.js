/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView,
  AsyncStorage,
} from 'react-native';
import 'react-native-fbsdk';

import MyScene from './MyScene';

import * as firebase from 'firebase';
const styles = require('./styles.js');
const StatusBar = require('./src/components/StatusBar');
const ActionButton = require('./src/components/ActionButton');
const ListItem = require('./src/components/ListItem');


import Signup from './src/pages/signup';
import Account from './src/pages/account';

import Header from './src/components/Header';

import Firebase from 'firebase';
let firebaseApp = require('./firebase.android');

class THG extends Component {

  render() {
  return (
    <Navigator
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <MyScene
              title={route.title}
              index={route.index}

              // Function to call when a new scene should be displayed
              onForward={() => {    
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
        />
      


    );
  }
}


AppRegistry.registerComponent('THG', () => THG);

