import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity, FlatList} from "react-native";
import { TodoList } from '../components';
import { SIZES, COLORS, FONTS, SHADOW } from '../constants';

const styles = StyleSheet.create({

    container: {
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding
    },

    textWrap: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SIZES.padding,
    },
    textInput: {

        backgroundColor: COLORS.secondary,
        color: COLORS.primary,
        width: "80%",
        hieght: 40,
        borderRadius: SIZES.textBoxRadius,
        marginRight: 10,
        paddingLeft: 10,
        ...SHADOW,
        ...FONTS.h2_semiBold,

    },
    butn: {
        height: 40,
        width: "15%",
        backgroundColor: COLORS.accent,
        borderRadius: SIZES.textBoxRadius,
        alignItems: "center",
        justifyContent: "center",
    }

})

export default function TodoApp(){

    const [list, setList] = useState([])

    const [value, setValue] = useState("")

    function addText(text) {

      if (value !== ""){

        setList(txt => {
          return [
            ...txt,
            text
          ]
        })
        setValue("")

      } else {
        alert("input something")

      }

    }
    
    return
      <View style={styles.container}>
        <Text style={{...FONTS.h1_semiBold, marginBottom: 10 }}>Ramsey, add to do.</Text>
{/* // uncomment this line below  to add card as tasks to the screen with using the code*/}
        {/* <TodoList text={"finish homework"} /> */}
        <FlatList style={{flex: 1}}
          data={list}
          renderItem={({item}) => <TodoList text={item} />}
          keyExtractor={(item, index) => index.toString()}

        />  
          <View style={styles.textWrap}>
            <TextInput style={styles.textInput} placeholder="Add To Do" onChangeText={text => setValue(text)} value={value} />
            <TouchableOpacity style={styles.butn} onPress={() => addText(value)}>
              <Text style={{fontSize: 20}}>+</Text>
            </TouchableOpacity>
          </View>

      </View>
}