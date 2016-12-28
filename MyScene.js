import React, { Component, PropTypes } from 'react';
import { 
    View, 
    Text, 
    Navigator, 
    TouchableHighlight,
    Image, 
    StyleSheet,
} from 'react-native';

export default class MyScene extends Component {

    static get defaultProps() {
        return {
        title: 'MyScene'
        };
    }


    render() {
        if (!this.props.index) {
        return (
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
                }}>
                    <View style={{flex: 2, backgroundColor: 'white', alignItems: 'center', justifyContent:'flex-end'}}>
                        
                        <TouchableHighlight onPress={this.props.onForward}>
                        <Image source={
                            require('./img/favicon.png')
                            //{uri:
                            //'https://facebook.github.io/react/img/logo_og.png'}
                            //'https://thonburihospital.com/2015_new/asset/images/thonburi-hospital-logo.png'
                        } 
                        style={{width: 200, height: 200}}
                        />
                        </TouchableHighlight>
                        
                    </View>
                    <View style={{flex: 1, backgroundColor: 'skyblue', alignItems: 'center'}}>
                    {
                        <LoginButton
                          publishPermissions={["publish_actions"]}
                          onLoginFinished={
                            this.props.onForward
                            /*(error, result) => {
                              if (error) {
                                alert("Login failed with error: " + result.error);
                              } else if (result.isCancelled) {
                                alert("Login was cancelled");
                              } else {
                                alert("Login was successful with permissions: " + result.grantedPermissions);                                
                              }

                            } */
                          }
                          onLogoutFinished={() => alert("User logged out, title = " + this.props.title)}
                          />
                        //<Text style={styles.welcome}>B</Text></View>
                    }</View>
                    <View style={{flex: 1, backgroundColor: 'steelblue'}}>
                        <Text style={styles.welcome}>C</Text></View>
                </View>
            )
        } 
        else {
            return(
                <View>
            <Text>Current Scene: {this.props.title}</Text>

            <TouchableHighlight onPress={this.props.onForward}>
            <Text>Tap me to load the next scene</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.props.onBack}>
            <Text>Tap me to go back</Text>
            </TouchableHighlight>
            </View>
            )  
        }
    }
}

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
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

MyScene.propTypes = {
title: PropTypes.string.isRequired,
onForward: PropTypes.func.isRequired,
onBack: PropTypes.func.isRequired,
};
