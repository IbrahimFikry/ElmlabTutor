import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class App extends React.Component {
  render() {
    return(

      <View style={styles.row}>
      <Icon name='rowing' />
      <Text>Instagram</Text>
      <Icon name='rowing' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    height: 60,
    alignItems: 'center',
  },
});
