import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../colors';
import TopNav from './TopNav';
import NavButton from './NavButton';
import MainNavigation from './MainNavigation';

const width = Dimensions.get('window').width;
const navHeight = 80;

const Nav = ({ children }) => {
  return <View style={styles.nav}>{children}</View>;
};

export default Nav;
export { TopNav, navHeight, NavButton, MainNavigation };

const styles = StyleSheet.create({
  nav: {
    height: navHeight,
    width,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    backgroundColor: colors.nav,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});
