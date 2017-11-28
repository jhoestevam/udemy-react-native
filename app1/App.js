/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const gerarNumeroRandom = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10)
  alert(numero_aleatorio);
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={gerarNumeroRandom}
          title="Press me"
          color='#841584'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
