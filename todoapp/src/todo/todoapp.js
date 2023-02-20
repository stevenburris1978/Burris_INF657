import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Platform, StatusBar} from "react-native";
import { TodoList } from '../components';
import { SIZES, COLORS, SHADOW } from '../constants';

const styles = StyleSheet.create({

    container: {

        paddingTop: Platform.OS === "ios" ? 70 : StatusBar.currentHeight + 20,
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
        marginBottom: 40,


    },
    textInput: {

        backgroundColor: COLORS.secondary,
        color: COLORS.primary,
        width: "90%",
        height: 30,
        borderRadius: SIZES.textBoxRadius,
        marginRight: 10,
        paddingLeft: 10,
        ...SHADOW,
        

    },
    butn: {
        height: 30,
        width: 30,
        backgroundColor: COLORS.accent,
        borderRadius: SIZES.textBoxRadius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 30,
        
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
            {text: text, isSelected: false}
          ]
        })
        setValue("")

      } else {
        alert("input something")

      }

    }

    function setIsSelected(index, value){
      let data = []

      for (let i = 0; i < list.length; i++) {
        if (index === i){
          data.push({...list[i], isSelected: value})
        } else {
          data.push(list[i])

        }
        
      }

      setList(data)
    }
    
    return <View style={styles.container}>
        <Text style={{marginBottom: 10, fontSize: SIZES.h1}}>Ramsey, add to do.</Text>
{/* // uncomment this line below  to add card as tasks to the screen with using the code*/}
        {/* <TodoList text={"finish homework"} /> */}
        <FlatList style={{flex: 1}}
          data={list}
          renderItem={({item, index}) => <TodoList data={item} index={index} setIsSelected={setIsSelected} />}
          keyExtractor={(item, index) => index.toString()}

        />  
          <View style={styles.textWrap}>
            <TextInput 
              style={styles.textInput}  
              placeholder="Add To Do" 
              onChangeText={text => setValue(text)}
              value={value} />
            <TouchableOpacity 
              style={styles.butn} 
              onPress={() => addText(value)}>
              <Text style={{fontSize: 20}}>+</Text>
            </TouchableOpacity>
          </View>

      </View>
}