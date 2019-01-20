import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Explore</Text>
      </View>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353538'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40
  }
});
