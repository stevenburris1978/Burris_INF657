import React from 'react';
import {View, Text, StyleSheet, StatusBar, Platform} from "react-native";
import { Card } from '../components';
import { Sizes, Colors } from '../constants';

const styles = StyleSheet.create({

    container: {
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: Colors.primary,
        padding: Sizes.padding
    }

})

export default function Homepage(){
    return
      <View style={styles.container}>

        <Card text={"finish homework"} />

      </View>
}