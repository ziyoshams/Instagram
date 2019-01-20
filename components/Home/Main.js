import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, SafeAreaView } from 'react-native';

import Nav from '../CustomNav';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <Text style={styles.text}>Main</Text>
            <View style={styles.sections}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>6</Text>
            </View>
          </ScrollView>
        </SafeAreaView>

        <Nav />
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width,
    height,
    backgroundColor: '#eeeeee',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'red'
  },
  sections: {
    width,
    height: 40,
    borderWidth: 1,
    borderColor: '#777777',
    marginVertical: 5,
    borderRadius: 5
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40
  }
});
