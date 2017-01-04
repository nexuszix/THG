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
//let app = new Firebase("YOUR-FIREBASE-APP-URL");

export default class THG extends Component {

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

class THGnew extends Component {    

  constructor(props){
    super(props);
    this.state = {
      component: null,
      loaded: false
    };
  }

  componentWillMount(){

    AsyncStorage.getItem('user_data').then((user_data_json) => {

      let user_data = JSON.parse(user_data_json);
      let component = {component: Signup};
      if(user_data != null){
        app.authWithCustomToken(user_data.token, (error, authData) => {
          if(error){
            this.setState(component);
          }else{
            this.setState({component: Account});
          }
        });
      }else{
        this.setState(component);
      }
    });

  }

  render(){

    if(this.state.component){
      return (
        <Navigator
          initialRoute={{component: this.state.component}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    }else{
      return (
        <View style={styles.container}>
          <Header text="React Native Firebase Auth" loaded={this.state.loaded} />  
          <View style={styles.body}></View>
        </View>
      );
    }

  }

}


AppRegistry.registerComponent('THG', () => THG);
