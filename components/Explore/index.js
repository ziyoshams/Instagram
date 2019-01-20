import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Nav from '../CustomNav';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;

class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            
          </ScrollView>
        </SafeAreaView>

        <Nav>
          <Icon.Button
            name="home"
            size={25}
            color="#000"
            backgroundColor="transparent"
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          />
          <Icon.Button
            name="search"
            size={25}
            color="#000"
            backgroundColor="transparent"
            onPress={() => {
              this.props.navigation.navigate('Explore');
            }}
          />
          <TouchableOpacity style={styles.addButton}>
            <Icon name="plus" size={15} color="#000" />
          </TouchableOpacity>
          <Icon.Button name="heart" size={25} color="#000" backgroundColor="transparent" />
          <Icon.Button name="user" size={25} color="#000" backgroundColor="transparent" />
        </Nav>
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
