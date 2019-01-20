import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';

export default class App extends Component {
  render() {
    return <Navigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
