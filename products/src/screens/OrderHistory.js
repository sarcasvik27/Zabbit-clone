import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Text, FlatList, Image, View, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import NavigationHeader from '../Components/NavigationHeader';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../Context';

const OrderHistory = () => {
  const {state, actions} = useContext(GlobalContext);
  const arr = [];
  useEffect(() => {
    getdata();
  }, []);
  const navigation = useNavigation();

  const {orderHistory} = useMemo(() => {
    const {orderHistory} = state;
    return {orderHistory};
  },[state]);

  const getdata = async () => {
    try {
      const ID = await AsyncStorage.getItem('ID');
      await firestore()
        .collection('orders')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            if (documentSnapshot.data().ID == ID) {
              console.log('documentSnapshot.data()', documentSnapshot.data());
              arr.push(documentSnapshot.data());
              actions?.OrderHistory(arr);
            }
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <NavigationHeader title={'Order History'}></NavigationHeader>
      {orderHistory.length==0? <View style={{ flex:1,justifyContent: 'center',
              alignItems: 'center',}}><Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              alignItems: 'center',

            }}>
            No Orders yet
          </Text></View>:
      <FlatList
        data={orderHistory}
        renderItem={element => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('OrderDetails', {
                  obj: element.item,
                })
              }
              style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 25,
                }}>
                <View>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 22, color: 'black'}}>
                    {element.item.NAME}
                  </Text>
                  <Text style={{fontSize: 18}}>₹{element.item.PRICE}</Text>
                  <Text style={{marginBottom: 10}}>{element.item.DATE}</Text>
                </View>
                <View>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 20}}
                    source={{uri: element.item.IMG}}></Image>
                </View>
              </View>
              <View
                style={{height: 1, backgroundColor: 'rgba(196,196,196,1)'}}
              />
            </Pressable>
          );
        }}></FlatList>}
    </>
  );
};
export default OrderHistory;
