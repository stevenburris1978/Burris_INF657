import React from 'react';
import {View, Text, StyleSheet, StatusBar, Platform} from "react-native";
import { TodoList } from '../components';
import { SIZES, COLORS, FONTS } from '../constants';

const styles = StyleSheet.create({

    container: {
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding
    }

})

export default function TodoApp(){
    return
      <View style={styles.container}>

        <TodoList text={"finish homework"} />

      </View>
}