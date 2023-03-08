import React from "react";
import Constants from "expo-constants"
import{Text,View,StyleSheet,TextInput,ImageBackground} from "react-native"
import Input from "./input";
const Main =()=>{
    console.log(TextInput)
    return(
    
    <View>
         <View style={style.containerMain}>
            <Text style={style.textTilte}>Tu Anime Favorito </Text>
        </View>
        <Input></Input>
    </View>
        
        

    )

}

const style= StyleSheet.create({
    containerMain:{
        padding:9,
        backgroundColor:'#6E6A5F',
        alignItems:"center",
        margin: Constants.statusBarHeight,
        borderRadius:10,
    },
    textTilte:{
        fontSize:26,
        color:"#FCB906"
    } ,
    
    inputSearch:{
        alignItems:"center",
        
    },
    search:{
        backgroundColor:'gray',
        width:250,
        textAlign:"center",
        alignItems:"center",
        borderColor:"gold",
        borderWidth:3,
        borderRadius:10
    }

})

export default Main