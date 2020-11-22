import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'


function roundIcon({
    icon,
    iconColor,
    size = 35,
    insideIconColor = colors.white
}) {
    return (
        <View style={{
            backgroundColor: iconColor,
            height: size,
            width: size,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: size/2,
            }}>
            <MaterialCommunityIcons
                name = {icon}
                size = {size * 0.6}
                color = {insideIconColor}
            ></MaterialCommunityIcons>
        </View>
    );
}

const styles = StyleSheet.create({
    iconWrap: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 20,
    },
})

export default roundIcon;