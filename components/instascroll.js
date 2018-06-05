import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

import IndividualInsta from './individualinsta.js';

export default class InstaScroll extends React.Component {

  _clicking = () => {
    Alert.alert('Hello');
    //This is something
  }

  render() {
    return(
      <View>

      <IndividualInsta name="Some guyssakdjsakd"/>
      <IndividualInsta name="another guy"/>
      <IndividualInsta name="1"/>
      <IndividualInsta name="2"/>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    height: 60,
    alignItems: 'center',
  },
  picture:{
    height: 200,
    width: SCREEN_WIDTH,
  },
  dp: {
    height: 60,
    width: 60,
    borderRadius: 30,

  },

  row1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    height: 60,
    alignItems: 'center',
  },

});
