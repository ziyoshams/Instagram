import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;

class Camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera</Text>
      </View>
    );
  }
}

export default Camera;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40
  }
});
