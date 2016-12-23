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
} from 'react-native';

export default class THG extends Component {
  render() {
	return (
	    <View style={{
		    flex: 1,
		    flexDirection: 'column',
		    justifyContent: 'space-between',
		    alignItems: 'stretch',
	    }}>
		    <View style={{flex: 2, backgroundColor: 'white', alignItems: 'center', justifyContent:'flex-end'}}>
		    	<Image source={
		    		require('./img/favicon.jpg')
		    		//uri:
		    		//'https://facebook.github.io/react/img/logo_og.png'
		    		//'https://thonburihospital.com/2015_new/asset/images/thonburi-hospital-logo.png'
		    	} 
				//style={{width: 100, height: 110}}
		    	/>
		    </View>
		    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
			{
				<FBLoginButton
			      publishPermissions={["publish_actions"]}
			      onLoginFinished={
			        (error, result) => {
			          if (error) {
			            alert("Login failed with error: " + result.error);
			          } else if (result.isCancelled) {
			            alert("Login was cancelled");
			          } else {
			            alert("Login was successful with permissions: " + result.grantedPermissions)
			          }
			        }
			      }
			      onLogoutFinished={() => alert("User logged out")}/>
			    //<Text style={styles.welcome}>B</Text></View>
			}</View>
		    <View style={{flex: 1, backgroundColor: 'steelblue'}}>
			    <Text style={styles.welcome}>C</Text></View>
	    </View>
    );
  }
}

const FBSDK = require('react-native-fbsdk');
const {
  FBLoginButton,
} = FBSDK;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('THG', () => THG);
