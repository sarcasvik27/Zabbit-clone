import React from 'react';
import {TextInput, StyleSheet,View} from 'react-native';

const ZavitInputField = ({value, setValue, emptyValue, placeholder,max,edit,type,sec}) => {
  return (
    <View style={{display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
    <TextInput
      elevation={10}
      editable={edit}
      style={styles.inputbox}
      placeholder={placeholder}
      value={value}
      onChangeText={value => setValue(value)}
      onChange={emptyValue}
      maxLength={max}
      keyboardType={type}
      secureTextEntry={sec}
      
    />
    </View>
  );
};

export default ZavitInputField;

const styles = StyleSheet.create({
  inputbox: {
    borderRadius:16,
     padding: 15,
     backgroundColor:"#FAF9F6",
     width:"95%",
     marginHorizontal:10
  },
});
