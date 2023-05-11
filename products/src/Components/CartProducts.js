import React, {useState, useEffect, useMemo, useContext} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ZavitInputField from './ZavitInputField';
import CheckBox from '@react-native-community/checkbox';
import CounterButton from './CounterButton';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../Context';

const CartProducts = ({name, price, desc, img}) => {
  const [count, setcount] = useState(0);
  const [disabled, setdisabled] = useState(true);
  const [note, setnote] = useState('');
  const [cartdisabled, setcartdisabled] = useState(true);
  const [userId, setUserId] = useState('');
  const [pepsi, setpepsi] = useState(false);
  const [coke, setcoke] = useState(false);
  const [beer, setbeer] = useState(false);
  const {state, actions} = useContext(GlobalContext);

  useEffect(() => {
    getId();
  }, []);

  const {orderHistory} = useMemo(() => {
    const {orderHistory} = state;
    return {orderHistory};
  }, [state]);

  const navigation = useNavigation();

  const inc = () => {
    setcount(count + 1), setdisabled(false), setcartdisabled(false);
  };
  const dec = () => {
    if (count > 0) {
      if (count == 1) {
        setcartdisabled(true);
        setdisabled(true);
      }
      setcount(count - 1);
    }
  };

  const getId = async () => {
    const ID = await AsyncStorage.getItem('ID');
    setUserId(ID);
  };
  const order = {
    NAME: name,
    PRICE: price,
    QUANTITY: count,
    NOTE: note,
    IMG: img,
    DATE: moment().format('MM/DD/YYYY'),
    TIME: moment().format('hh:mm:ss a'),
    ID: userId,
  };
  const storeData = async () => {
    firestore().collection('orders').add(order);
    let arr = [...orderHistory, order];
    actions?.OrderHistory(arr);
  };

  return (
    <ScrollView
      style={{
        width: '100%',
        padding: 12,
        backgroundColor: 'white',
        borderTopEndRadius: 12,
        borderTopStartRadius: 12,
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
      }}>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            padding: 15,
          }}>
          {name}
        </Text>
        <Text style={{fontSize: 18, color: 'black', padding: 15}}>{desc}</Text>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            color: 'gray',
            padding: 15,
          }}>
          ₹{price}{' '}
        </Text>
        <View
          style={{height: 0.5, backgroundColor: 'rgba(196, 196, 196, 1)'}}
        />
        <View style={{flexDirection: 'column', padding: 15}}>
          <Text>Add ons</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox value={pepsi} onValueChange={setpepsi}></CheckBox>
            <Text style={{paddingHorizontal: 15}}>Pepsi</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <CheckBox value={coke} onValueChange={setcoke}></CheckBox>
            <Text style={{paddingHorizontal: 15}}>coke</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <CheckBox value={beer} onValueChange={setbeer}></CheckBox>
            <Text style={{paddingHorizontal: 15}}>Beer</Text>
          </View>
        </View>

        <ZavitInputField
          placeholder={'Leave a note for the Kitchen'}
          value={note}
          setValue={setnote}></ZavitInputField>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CounterButton
            buttontext={'-'}
            disabled={disabled}
            functionality={() => {
              dec();
            }}></CounterButton>
          <Text style={{margin: 10, fontWeight: 'bold'}}>{count}</Text>
          <CounterButton
            buttontext={'+'}
            disabled={false}
            functionality={() => {
              inc();
            }}></CounterButton>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#7895B2',
            padding: 20,
            marginBottom: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 8,
            alignItems: 'center',
          }}
          onPress={() => {
            storeData(), navigation.goBack();
          }}
          disabled={cartdisabled}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            ADD TO BASKET
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            ₹{price * count}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default CartProducts;
