import React from "react";
import {Text,Image,View} from "react-native"
const SplashScreen=()=>{
    return(
        <View style={{justifyContent:"center",alignItems:"center",height:"100%",backgroundColor:"rgba(1,43,40,255)"}}>
        <Image  source={require('../assets/images/cuisina.png')}></Image>
        </View>

    )
}
export default SplashScreen