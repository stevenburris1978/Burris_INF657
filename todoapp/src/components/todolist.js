import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { SIZES, COLORS, FONTS } from '../constants';
import CheckBox from "@react-native-community/checkbox";

const styles = StyleSheet.create({

    view: {
        width: '100%',
        paddingVertical: 11,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        elevation: 11,
        shadowColor: COLORS.secondary,
        shadowOffset: {width: 3, height: 10},
        shadowRadius: 10

    },

    text: {
        
        ...FONTS.h2_semiBold,
        color: COLORS.primary
    },

    checkbox: {

        borderRadius: 4,
        marginRight: 10,
        backgroundColor: COLORS.primary

    }


})

export default function TodoList(props){
    return <View style={styles.view}>

        <CheckBox style={styles.checkbox} />
        <Text style={styles.text}>{props.text}</Text>

      </View>
}