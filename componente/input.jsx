import React from "react";
import{Text,View,StyleSheet,TextInput} from "react-native"

import $name from "../js/funtion";


function Input(){

    const [text,onChangeText]= React.useState('')
    console.log($name)
    return(
     <View>
           <View style={style.inputSearch}> 
        <TextInput
        placeholder="Busca Tu Anime "
            style={style.search}
            onChangeText={onChangeText}
            onPressOut={console.log(text)}
            value={text}
        />
    </View>

    <View>
        <Text></Text>
    </View>
     </View>
    )
}

const style= StyleSheet.create({
    inputSearch:{
        alignItems:"center",
        
    },
    search:{
        backgroundColor:'white',
        width:250,
        textAlign:"center",
        alignItems:"center",
        borderColor:"gold",
        borderWidth:3,
        borderRadius:10
        ,color:'red',
    }

})
export default Input