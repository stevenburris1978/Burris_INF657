import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { Sizes, Colors } from '../constants';
import CheckBox from "@react-native-community/checkbox";

const styles = StyleSheet.create({

    view: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: Sizes.padding,
        borderRadius: Sizes.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        elevation: 11,
        shadowColor: Colors.secondary,
        shadowOffset: {width: 1, height: 10},
        shadowRadius: 10

    },

    text: {
        color: Colors.primary
    },

    checkbox: {

        borderRadius: 4,
        marginRight: 10,
        backgroundColor: Colors.primary

    }


})

export default function Card(props){
    return <View style={styles.view}>

        <CheckBox style={styles.checkbox} />
        <Text style={styles.text}>{props.text}</Text>

      </View>
}