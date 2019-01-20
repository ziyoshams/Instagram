import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;

class Messages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Messages</Text>
      </View>
    );
  }
}

export default Messages;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: 'yellow',
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40
  }
});
