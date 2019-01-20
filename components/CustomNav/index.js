import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../colors';

const width = Dimensions.get('window').width;

const Nav = ({ children }) => {
  return <View style={styles.nav}>{children}</View>;
};

export default Nav;

const styles = StyleSheet.create({
  nav: {
    height: 50,
    width,
    backgroundColor: colors.nav,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});
