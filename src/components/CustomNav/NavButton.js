import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const NavButton = ({ name, onPress, size, children, style }) => {
  return (
    <View style={[styles.buttonWrapper, style]}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={name} size={size || 25} color="#000">
          {children}
        </Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
export default NavButton;
