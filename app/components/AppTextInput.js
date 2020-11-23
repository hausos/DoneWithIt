import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && 
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={colors.medium}
                    style={styles.icon}
                />
            }
            <TextInput
                placeholder="First Name"
                style= {defaultStyles.text} {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    textinput: {
        paddingLeft: 10,
    }
})

export default AppTextInput;