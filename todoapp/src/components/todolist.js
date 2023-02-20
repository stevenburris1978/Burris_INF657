import React from 'react';
import {View, Text, StyleSheet,} from "react-native";
import { SIZES, COLORS, SHADOW } from '../constants';
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
        ...SHADOW,
        marginBottom: 10,


    },

    text: {
        
        color: "green",
    },

    checkbox: {

        borderRadius: 4,
        marginRight: 10,
        backgroundColor: COLORS.primary

    }


})

export default function TodoList(props){
    return <View style={styles.view}>
        <CheckBox style={styles.checkbox}
          value={props.data.isSelected}
          onValueChange={(value) => props.setIsSelected(props.index, value)}       
        />
        <Text style={{...styles.text, textDecorationLine: props.data.isSelected ? "underline line-through" : "none"}}>{props.data.text}</Text>
        
    </View>

      
}
