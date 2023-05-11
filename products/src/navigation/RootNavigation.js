import React, { useEffect,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import SplashScreen from "../screens/SplashScreen";

const RootNavigation=()=>{
    const [id,setid]=useState(null)
    const [loader,setLoader]=useState(true)
    useEffect(()=>{getId()},[])
   const getId = async () => {
 
    const ID = await AsyncStorage.getItem('ID');
        setid(ID)
        setLoader(false)
  };

  const checknavigation=()=>{
    if(id==null){
      return(
        <AuthNavigation></AuthNavigation>
      )
    }
    else{
      return(
        <AppNavigation></AppNavigation>
      )
    }
  }
  return(
    <>
    {loader===true ? <SplashScreen/>: (checknavigation())}
    </>
  )
}
export default RootNavigation