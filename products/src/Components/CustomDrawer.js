import React ,{useEffect,useState,useContext}from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../Context';

const CustomDrawer = props => {

  useEffect(()=>{getname()},[])
  const navigation = useNavigation();

  const {state, actions} = useContext(GlobalContext);
  const [email,setemail]=useState("")
  const {MyAccount} = state;
  const getname=async()=>{
    const ID = await AsyncStorage.getItem('ID');
    const data1 = await firestore().collection('users').doc(ID).get();
    actions.MyAccount(data1.data().FNAME);
    setemail(data1.data().EMAIL)

  }
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#1A120B', height: '100%'}}>
          <View style={{felx:1,flexDirection:"row",alignItems:"center"}}>
        <Image
          source={require('../assets/images/rabbit.png')}
          style={{width: 75, height: 75,margin:8}}/>
           <Text style={{color:"white",fontSize:30,fontWeight:"700"}}>
                Zabbit
          </Text>
          </View>
         
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'space-evenly',
          }}>
          <View style={{color: 'white',backgroundColor:"gray",justifyContent:"center",marginTop:12}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('My Account')}
              style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
              source={require('../assets/images/account.png')}
              style={{height: 60,width:60, padding: 10,}}/>
             <View style={{flexDirection:"column"}}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: 20,
                  paddingHorizontal:10
                }}>
                {MyAccount}
              </Text>
              <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    padding: 5,
                    paddingHorizontal:10
                  }}>
                {email}
              </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
     
            <View style={{color: 'white', paddingTop: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Order History')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="clock-o"
                  style={{fontSize: 20, padding: 10, color: 'white'}}></Icon>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 20,
                    padding: 12,
                  }}>
                  Order History
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{color: 'white', paddingTop: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Saved Cards')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="credit-card"
                  style={{fontSize: 20, padding: 10, color: 'white'}}></Icon>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 20,
                    padding: 12,
                  }}>
                  Saved Cards
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{color: 'white', paddingTop: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('About us')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="spoon"
                  style={{fontSize: 20, padding: 10, color: 'white'}}></Icon>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 20,
                    padding: 12,
                    paddingHorizontal:25,
                  }}>
                  About Us
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{color: 'white', paddingTop: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('FAQs')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="question"
                  style={{fontSize: 20, padding: 10, color: 'white'}}></Icon>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 20,
                    padding: 12,
                    paddingHorizontal:25,
                  }}>
                  FAQs
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{color: 'white', paddingTop: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Settings')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="gears"
                  style={{fontSize: 20, padding: 10, color: 'white'}}></Icon>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 20,
                    padding: 12,
                  }}>
                  Settings
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{color: 'white', paddingTop: 220}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Logout')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="male"
                  style={{fontSize: 20, padding: 10, color: 'white'}}></Icon>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 20,
                    padding: 12,
                    paddingHorizontal:25,
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawer;
