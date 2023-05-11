import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Pressable,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const EditNavigationHeader = ({title,edit,functionality}) => {
  const navigation = useNavigation();
  return (
    <View style={{alignItems:"center",flexDirection:"row",justifyContent:"space-between",width:"100%",backgroundColor:"#FFFFFF"}}>
    <View style={{justifyContent:"space-between",width:"100%",flexDirection:"row",alignItems:"center"}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name={"chevron-left"} style={{fontSize: 20, padding:20}}></Icon>
      </Pressable>
    
      <View style={{alignItems:"center",justifyContent:"center"}}>
      <Text style={{textAlign:"center",fontWeight:"bold",color:"black",fontSize:20}}>{title}</Text>
      </View>
    <Pressable onPress={functionality}>
        <Text style={{paddingHorizontal:15,color:"green"}}>{edit}</Text>
    </Pressable>
   
      </View>
    </View>
  );
};
export default EditNavigationHeader;
