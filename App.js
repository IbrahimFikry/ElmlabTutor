import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import Header from './components/header.js';
import InstaScroll from './components/instascroll.js';

import * as firebase from 'firebase';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


var config = {
   apiKey: "AIzaSyDjrI3JrUJDacivIvu5d0-4h92iiEGHnK8",
   authDomain: "helloworld3-3e72a.firebaseapp.com",
   databaseURL: "https://helloworld3-3e72a.firebaseio.com",
   projectId: "helloworld3-3e72a",
   storageBucket: "",
   messagingSenderId: "678661955043"
 };
 firebase.initializeApp(config);


class App extends React.Component {

  _page1 = () => {
    this.props.navigation.navigate('Page1');
  }
  _page2 = () => {
    this.props.navigation.navigate('Page2');
  }
  _pagefirebase = () => {
    this.props.navigation.navigate('PageFirebase');
  }

  _pagelogin = () => {
    this.props.navigation.navigate('PageLogin');
  }


  render() {

    return (
      <View style={styles.container}>

      <Button onPress={this._page1} title="Go to page 1"/>
      <Button onPress={this._page2} title="Go to page 2"/>
      <Button onPress={this._pagefirebase} title="Go to page firebase"/>
      <Button onPress={this._pagelogin} title="Go to page login"/>

      <Text></Text>

      </View>
    );
  }
}


class PageLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
    }
  }

  _loginnow = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then( (userData) => {
      console.log(userData.uid);
    }).catch ( (error) => {
      console.log(error);
    })
  }

  render() {
    return(
      <View>
      <Text>Login Page</Text>
      <Text>Email</Text>
      <TextInput value={this.state.email} onChangeText={ (x) => this.setState({email:x}) }/>
      <Text>Password</Text>
      <TextInput value={this.state.password} onChangeText= {(x) => this.setState({password:x})}/>
      <Button onPress={this._loginnow} title="Login"/>
      </View>
    )
  }
}
class Page1 extends React.Component {
  render() {
    return (
      <View>
      <Header/>
      <ScrollView>
      <InstaScroll/>
      </ScrollView>
      </View>
    )
  }
}
class Page2 extends React.Component {
  render() {
    return (
      <View>
      <Text>This is page 2 </Text>
      </View>
    )
  }
}
class PageFirebase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameinput : 'hi!',
      read: '',
    }
  }

    _addfirebase = () => {
      firebase.database().ref('test/uniqueid1').set({
          hello: 'hello',
        })
    }

      _addvaluetofirebase = () => {
        firebase.database().ref('success').set({
            email: this.state.nameinput,
          })
      }
      _readfromfirebase = () => {
        firebase.database().ref('success').on("value", function (snapshot) {
          console.log(snapshot.val().email);
          this.setState({ read: snapshot.val().email})
        })
      }
  render() {
    return (
      <View>
      <Text>This is firebase page example</Text>
      <Button onPress={this._addfirebase} title="Add firebase"/>

      <Text>{this.state.nameinput}</Text>

      <TextInput placeholder="Insert here"
      value={this.state.nameinput} onChangeText={ (x) => {this.setState({ nameinput: x}) } } />

      <Button onPress={this._addvaluetofirebase} title="Add the input to the database"/>
      <Button onPress={this._readfromfirebase} title="Read"/>
      </View>
    )
  }
}

export default StackNavigator({
  Home : {screen: App,},
  Page1 : {screen: Page1,},
  Page2 : {screen: Page2,},
  PageFirebase : {screen: PageFirebase,},
  PageLogin : {screen: PageLogin,},
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    //alignItems: 'center',
    justifyContent: 'center',
  },


});
