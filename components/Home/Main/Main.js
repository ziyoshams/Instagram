import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { navHeight, TopNav } from '../../CustomNav';
import Stories from './Stories';
import Post from './Post';
import { MainNavigation, NavButton } from '../../CustomNav';

import data from '../../../data/users.json';

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
            <NavButton style={{ flex: 1 }} name="camera" size={ICON_SIZE} onPress={() => this.props.onPress(1)} />
            <Text style={styles.headerText}>Instagram</Text>
            <View style={styles.topNavColumn3}>
              <Icon name="square" size={ICON_SIZE} />
              <Icon name="telegram-plane" size={ICON_SIZE} />
            </View>
          </TopNav>
          <ScrollView style={styles.mainArea}>
            <Stories />
            {data.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </ScrollView>
        </SafeAreaView>

        <MainNavigation navigation={this.props.navigation} />
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
  headerText: { fontSize: 25, flex: 3, textAlign: 'center' },
  topNavColumn3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
