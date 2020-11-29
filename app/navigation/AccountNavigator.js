import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountScreen';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false}}>
        <Stack.Screen
            name="Account"
            component={AccountScreen}
        />
        <Stack.Screen
            name="Messages"
            component={MessagesScreen}
        />
    </Stack.Navigator>
)

export default AccountNavigator;