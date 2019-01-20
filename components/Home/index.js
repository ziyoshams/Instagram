import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Camera from './Camera';
import Main from './Main';
import Messages from './Messages';

const viewport = Dimensions.get('window');
const { width, height } = viewport;
class Home extends Component {
  render() {
    return (
      <ScrollView
        horizontal
        bounces={false}
        pagingEnabled={true}
        contentOffset={{ x: width, y: 0 }}
        nestedScrollEnabled={true}
        style={styles.container}
      >
        <Camera />
        <Main {...this.props} />
        <Messages />
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40
  }
});
