import {View, StyleSheet, Text} from 'react-native';
import React, {useState, useContext, useMemo} from 'react';
import PopupButton from './PopupButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../Context';

const LogoutPopup = ({functionality}) => {
  const {state, actions} = useContext(GlobalContext);
  const {addedCards} = state;

  const {orderHistory} = useMemo(() => {
    const {orderHistory} = state;
    return {orderHistory};
  }, [state]);

  const navigation = useNavigation();
  const Asyncstr = async () => {
    await AsyncStorage.removeItem('ID');
    actions?.OrderHistory([]);
    actions.AddcardAction([]);
    navigation.navigate('Login');
  };

  const logoutyes = () => {
    Asyncstr();
  };

  const cancel = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={styles.outerView}></View>
      <View style={styles.innerView}>
        <View style={{padding: 10}}>
          <Text
            style={{
              padding: 10,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 22,
            }}>
            Are you sure you want to logout?
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <PopupButton
            title={'Yes'}
            functionality={() => {
              logoutyes();
            }}></PopupButton>
          <PopupButton
            title={'No'}
            functionality={() => {
              cancel();
            }}></PopupButton>
        </View>
      </View>
    </>
  );
};
export default LogoutPopup;

const styles = StyleSheet.create({
  innerView: {
    position: 'absolute',
    top: '40%',
    transform: [{translateX: -50}],
    transform: [{translateY: -50}],
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    marginHorizontal: 20,
  },
  outerView: {
    position: 'absolute',
    backgroundColor: 'rgba(189,189,189,0.4)',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    color: 'black',
  },
});
