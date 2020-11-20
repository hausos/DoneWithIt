import React from 'react';
import {View} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';

export default function App() {
  return (
    <ListingDetailsScreen></ListingDetailsScreen>
      
  );
}

