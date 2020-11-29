import React, { useEffect, useState } from 'react';
import {Switch, Text, View, StyleSheet, Button} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {BaseRouter, NavigationContainer, useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialComunityIcons} from '@expo/vector-icons';

const Link = () => {
  const navigation = useNavigation();
  return (
  <Button 
    title="Click"
    onPress={() => navigation.navigate("TweetDetails", {id: 1})}
  />
  );
}


const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({route}) => (
  <Screen>
    <Text>TweetDetails {route.params.id} </Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator =() => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: "dodgerblue"},
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
    name="TweetDetails"
    component={TweetDetails}

    />
  </Stack.Navigator>
)

const Account = () => (
  <Screen><Text>Account</Text></Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweets}
      />
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>

  );
}
