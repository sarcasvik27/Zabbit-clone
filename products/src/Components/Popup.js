import {View, StyleSheet, Text, Pressable, Input} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import PopupButton from './PopupButton';
import ZavitInputField from './ZavitInputField';
import firestore from '@react-native-firebase/firestore';

const Popup = ({title, desc, functionality}) => {
  const [req, setreq] = useState();
  const [billReq, setbillReq] = useState(false);

  const setcheckbox = () => {
    if (billReq == false) {
      setbillReq(true);
    } else {
      setbillReq(false);
    }
  };

  const userObject = {
    bill: billReq,
    otherReq: req,
  };
  const setdata = async () => {
    try {
      firestore().collection('WaiterReq').add(userObject);
      functionality();
    } catch (error) {
      console.error(error);
    }
    console.log('click1');
  };

  const cancel = () => {
    functionality();
  };
  return (
    <>
      <View style={styles.outerView} />
      <View style={styles.innerView}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox value={billReq} onChange={() => setcheckbox()}></CheckBox>
            <Text>REQUEST BILL</Text>
          </View>
          <Text style={{padding: 10}}>SPECIAL REQUEST</Text>
          <ZavitInputField
            value={req}
            setValue={setreq}
            placeholder="Your Request"></ZavitInputField>
            
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-around",width:"100%"}}>
          <PopupButton
            title={'Submit'}
            functionality={() => {
              setdata();
            }}></PopupButton>
          <PopupButton
            title={'Cancel'}
            functionality={() => {
              cancel();
            }}></PopupButton>
        </View>
      </View>
    </>
  );
};
export default Popup;

const styles = StyleSheet.create({
  innerView: {
    position: 'absolute',
    //top: '50%',
    // left: '50%',
    transform: [{translateX: -50}],
    transform: [{translateY: -50}],
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    padding: 20,
    alignSelf: 'center',
    // marginLeft:40
  },
  outerView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
