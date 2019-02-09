import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../Home';
import Explore from '../Explore';

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Explore: Explore
  },
  {
    tabBarComponent: () => null
  }
);

export default createAppContainer(TabNavigator);
