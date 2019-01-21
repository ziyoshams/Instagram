import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Nav from './index';
import NavButton from './NavButton';

class MainNavigation extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Nav>
        <NavButton name="home" onPress={() => navigate('Home')} />
        <NavButton name="search" onPress={() => navigate('Explore')} />
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={15} color="#000" />
        </TouchableOpacity>
        <NavButton name="heart" />
        <NavButton name="user" />
      </Nav>
    );
  }
}

export default MainNavigation;

const styles = StyleSheet.create({
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
  }
});
