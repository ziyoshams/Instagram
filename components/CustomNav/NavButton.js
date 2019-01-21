import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavButton = ({ name, onPress, size, ...rest }) => {
  return (
    <Icon.Button
      name={name}
      size={size || 25}
      color="#000"
      backgroundColor="transparent"
      onPress={onPress}
      {...rest}
    />
  );
};

export default NavButton;
