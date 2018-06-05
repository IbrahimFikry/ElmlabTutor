import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import Header from './components/header.js';
import InstaScroll from './components/instascroll.js';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class App extends React.Component {

  _page1 = () => {
    this.props.navigation.navigate('Page1');
  }
  _page2 = () => {
    this.props.navigation.navigate('Page2');
  }

  render() {

    return (
      <View style={styles.container}>

      <Button onPress={this._page1} title="Go to page 1"/>
      <Button onPress={this._page2} title="Go to page 2"/>

      </View>
    );
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

export default StackNavigator({
  Home : {screen: App,},
  Page1 : {screen: Page1,},
  Page2 : {screen: Page2,},
})













const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },


});
