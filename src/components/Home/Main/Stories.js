import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from '../../../data/colors';

const { width, height } = Dimensions.get('window');

export const storiesWindowHeight = 100;
const storyHeight = 60;

class Stories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.storiesContainer}
        pinchGestureEnabled={false}
        directionalLockEnabled={true}
      >
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circles}>
          <Icon name="user" size={20} color="#353538" />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Stories;

const styles = StyleSheet.create({
  storiesContainer: {
    minHeight: storiesWindowHeight,
    flexDirection: 'row',
    paddingHorizontal: 13,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  circles: {
    width: storyHeight,
    height: storyHeight,
    borderRadius: storyHeight / 2,
    borderWidth: 3,
    borderColor: 'purple',
    margin: 8,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
