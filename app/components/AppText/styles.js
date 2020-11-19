import { Platform, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    text: {
        color: "tomato",
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
});


export default styles;