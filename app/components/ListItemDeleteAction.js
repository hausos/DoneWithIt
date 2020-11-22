import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='trash-can'
                    size={30}
                    style={styles.icon}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.warning,
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: colors.white,
    }
})

export default ListItemDeleteAction;