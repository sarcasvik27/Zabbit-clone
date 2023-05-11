import React from "react";
import SettingsComponent from "../Components/SettingComponent";
import { useNavigation } from "@react-navigation/native";
import NavigationHeader from "../Components/NavigationHeader";
const Settings=()=>{
    const navigation=useNavigation();
    return(
        <>
        <NavigationHeader title={"Settings"}></NavigationHeader>
        <SettingsComponent title={"Change Language"} icon={"globe"} functionality={()=>navigation.navigate("ChangeLanguage")}></SettingsComponent>
        <SettingsComponent title={"Delete Account"} icon={"trash-o"} functionality={()=>navigation.navigate("DeleteAccount")}></SettingsComponent>
       </>
    )
}
export default Settings
//
