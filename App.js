import React, { useState } from 'react';
import {Switch, Text, View} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import { TextInput } from 'react-native-gesture-handler';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const[isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)}/>
    </Screen>
  );
}

