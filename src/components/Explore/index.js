import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import MainNavigation from '../CustomNav/MainNavigation';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;

class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }} />
          <MainNavigation />
        </SafeAreaView>
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
  },
  sections: {
    width,
    height: 40,
    borderWidth: 1,
    borderColor: '#777777',
    marginVertical: 5,
    borderRadius: 5
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
});
