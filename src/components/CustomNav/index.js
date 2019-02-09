import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../data/colors';
import TopNav from './TopNav';
import NavButton from './NavButton';
import MainNavigation from './MainNavigation';

const {width, height} = Dimensions.get('window');
const navHeight = height/12;

const Nav = ({ children }) => {
  return (
    <View style={styles.nav}>
      <View style={styles.iconRow}>{children}</View>
    </View>
  );
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
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  iconRow: {
    width,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'
  }
});
