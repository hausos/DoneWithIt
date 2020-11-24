import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


import AppText from './AppText';
import colors from '../config/colors';
import RoundIcon from './RoundIcon';


function SettingsLinks({title, icon, iconColor, onPress}) {
    return (
        <TouchableHighlight
            underlayColor={colors.dark}
            onPress={onPress}
            >

            <View style={styles.wrapper}>
                <RoundIcon icon={icon} iconColor={iconColor}/>
                <AppText style={styles.title}>{title}</AppText>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    wrapper: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
})

export default SettingsLinks;