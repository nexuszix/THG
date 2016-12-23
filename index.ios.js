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
  TextInput,
  View,
  Image,
  ScrollView,
  ListView,
  Navigator,
} from 'react-native';

import MyScene from './MyScene';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class THG extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}





class HomeReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

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
                                     //margin: 10,
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                 },
                                 instructions: {
                                     textAlign: 'center',
                                     color: '#333333',
                                     marginBottom: 5,
                                 },
                                 menu: {
                                     justifyContent: 'center',
                                     height: 200
                                 }
});

class FixedDimensionsBasics extends Component {
    render() {
        return (
                <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
                </View>
                );
    }
};

class FlexDimensionsBasics extends Component {
    render() {
        return (
                <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'stretch',
                }}>
                <View style={styles.menu, {height: 150, backgroundColor: 'powderblue'}}>
                <Text style={styles.welcome}>A</Text></View>
                <View style={{height: 150, backgroundColor: 'skyblue'}}>
                <Text style={styles.welcome}>B</Text></View>
                <View style={{height: 150, backgroundColor: 'steelblue'}}>
                <Text style={styles.welcome}>C</Text></View>
                </View>
                );
    }
};

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    
    render() {
        return (
                <View style={{padding: 10}}>
                <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                </View>
                );
    }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return(
               <ScrollView>
               <Text style={{fontSize:96}}>Scroll me plz</Text>
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Text style={{fontSize:96}}>If you like</Text>
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Text style={{fontSize:96}}>Scrolling down</Text>
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Text style={{fontSize:96}}>What's the best</Text>
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Text style={{fontSize:96}}>Framework around?</Text>
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Image source={require('./img/favicon.png')} />
               <Text style={{fontSize:80}}>React Native</Text>
               </ScrollView>
               );
    }
}

class ListViewBasics extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows([
                                      'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
                                      ])
        };
    }
    render() {
        return (
                <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
                />
                </View>
                );
    }
}

class YoDawgApp extends Component {
    render() {
        return (
                <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) =>
                <MyScene
                title={route.title}
                
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
                )
    }
}


AppRegistry.registerComponent('THG', () => YoDawgApp);

