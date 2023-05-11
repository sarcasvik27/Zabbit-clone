import React from "react";
import styles from "../style/Inputstyle";
import { Text,TextInput } from "react-native";
const Input=({placeholder,value})=>{
    return(
    <>
    <TextInput  style={styles.Input} placeholder={placeholder} value={value}></TextInput>
    </>
    )

}
export default Input
