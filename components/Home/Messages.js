import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Nav, { navHeight, TopNav } from '../CustomNav';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;
const ICON_SIZE = 24;

class Messages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TopNav>
            <Icon name="arrow-left" size={ICON_SIZE} />
            <Text style={{ fontSize: 25 }}>Messages</Text>
            <Icon name="plus" size={ICON_SIZE} />
          </TopNav>
          <ScrollView style={styles.mainArea}>
            <Text>Messages</Text>
          </ScrollView>
        </SafeAreaView>

        <Nav>
          <Icon.Button name="camera" size={25} color="#3498db" backgroundColor="transparent">
            <Text style={{ color: '#3498db' }}>Camera</Text>
          </Icon.Button>
        </Nav>
      </View>
    );
  }
}

export default Messages;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width,
    height,
    paddingVertical: 10
  },
  mainArea: {
    width,
    height: height - navHeight,
    borderColor: 'red',
    borderWidth: 1
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
    color: '#000',
    fontSize: 40
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    width: 30,
    height: 30,
    borderRadius: 6,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
