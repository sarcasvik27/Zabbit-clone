import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GlobalContext} from '../Context';

const SearchBox = ({search,empty,searchValue}) => {
  const [searchVlaue, setSearchValue] = searchValue;
  const [searchInput, setSearchInput] = search;
  const {state, actions} = useContext(GlobalContext);


  if(empty==true){
    setSearchValue("")
  }
  

  return (
    <TextInput
      style={styles.input} 
      placeholder="Search any Dish"
      value={searchVlaue}
      onChangeText={value => {
        setSearchInput(value);
      }}
      onChange={setSearchValue}
      />
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FAF9F6',
    borderRadius: 8,
    justifyContent: 'flex-end',
  },
  icons: {
    fontSize: 20,
    color: 'gray',
  },
});
export default SearchBox;
