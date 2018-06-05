import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    return(
      <View>
      <View style={styles.row1}>
      <Image style={styles.dp} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
      <Text>{this.props.name}</Text>
      </View>
      <Image style={styles.picture} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
      <View style={styles.row}>
      <Text>Like</Text><Text>Comment</Text><Text>Tag</Text>
      </View>
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
