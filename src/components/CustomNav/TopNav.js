import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../data/colors';

const TopNav = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default TopNav;

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  }
});
