import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

function Screen(props) {
    return (
        <SafeAreaView style={styles.screen}>
            {props.children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.light,
        flex: 1,

    }
})

export default Screen;