import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, Dimensions} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

export default function App() {
  const { height, width } = useDimensions().window;
  const landscape = width > height;

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: landscape ? "100%" : "30%",
      }}>

      </View>

    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: 'orange'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
});
