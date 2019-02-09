import React, { Component } from 'react';
import { Alert } from 'react-native';
import { withNavigation } from 'react-navigation';

import Nav from './index';
import NavButton from './NavButton';

class MainNavigation extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Nav>
        <NavButton name="home" onPress={() => navigate('Home')} />
        <NavButton name="search" onPress={() => navigate('Explore')} />
        <NavButton name="plus-square" onPress={() => Alert.alert('Hello')} />
        <NavButton name="heart" />
        <NavButton name="user" />
      </Nav>
    );
  }
}

export default withNavigation(MainNavigation);