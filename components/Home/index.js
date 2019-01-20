import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Camera from './Camera';
import Main from './Main';
import Messages from './Messages';

class Home extends Component {
  render() {
    return (
      <ScrollView horizontal bounces={false} pagingEnabled={true} style={styles.container}>
        <Camera />
        <Main />
        <Messages />
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40
  }
});
