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
import Stories from './Stories';
import Post from './Post';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;
const ICON_SIZE = 24;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TopNav>
            <Icon style={{ flex: 1 }} name="camera" size={ICON_SIZE} />
            <Text style={{ fontSize: 25, flex: 3, textAlign: 'center' }}>Instagram</Text>
            <View style={styles.topNavColumn3}>
              <Icon name="square" size={ICON_SIZE} />
              <Icon name="telegram-plane" size={ICON_SIZE} />
            </View>
          </TopNav>
          <ScrollView style={styles.mainArea}>
            <Stories />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </ScrollView>
        </SafeAreaView>

        <Nav>
          <Icon.Button name="home" size={25} color="#000" backgroundColor="transparent" />
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

export default Main;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width,
    height,
    paddingVertical: 10
  },
  mainArea: {
    width,
    height: height - navHeight
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
    width: 26,
    height: 26,
    borderRadius: 6,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topNavColumn3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
