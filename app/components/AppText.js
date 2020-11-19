import React from 'react';
import { Text, Platform, StyleSheet} from 'react-native';



function AppText(props) {
    return <Text class={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        color: "tomato",
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
});



export default AppText;