import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text} from 'react-native';

import AppButton from '../components/AppButton';


function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={1}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoConatainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => console.log("Tapped")}/>
                <AppButton title="Register" color="secondary" onPress={() => console.log("Tapped")}/>
            </View>


        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
    logoConatainer: {
        alignItems: "center",
        position: 'absolute',
        top: 130,
    },
    logo: {
        width: 100,
        height: 100,
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },

})


export default WelcomeScreen; 