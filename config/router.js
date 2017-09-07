import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import Home from '../components/Home';
import Options from '../components/Options';
import Breed from '../components/Breed';
import Profile from '../components/Profile';
import Parks from '../components/Parks';
import FureverHomes from '../components/FureverHomes';
import About from '../components/About';

export const Root = StackNavigator ({
  Home:{
    screen: Home
  },
  Options:{
    screen: Options
  },
  Breed: {
    screen: Breed
  },
  Profile: {
    screen: Profile
  },
  Parks: {
    screen: Parks
  },
  FureverHomes: {
    screen: FureverHomes
  },
  About:  {
    screen: About
  }

});
