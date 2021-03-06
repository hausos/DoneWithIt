import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, useColorScheme } from 'react-native';
import AppText from '../AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors';

function ListItem({title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>

                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "bold",
        color: colors.black,
    },
    subTitle: {
        color: colors.medium,
    }
})

export default ListItem;