import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const NavigationHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFFFFF',
        height:55,
        alignItems:"center",paddingHorizontal:10
      }}>
      <View style={{flex: 0.1}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name={'chevron-left'}
            style={{fontSize: 20}}></Icon>
        </Pressable>
      </View>
      <View
        style={{
          flex: 0.9,
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
          }}>
          {title}
        </Text>
      </View>
        <Pressable>
        <Text style={{paddingHorizontal:15,color:"green"}}></Text>
       </Pressable>
    </View>
  );
};
export default NavigationHeader;
