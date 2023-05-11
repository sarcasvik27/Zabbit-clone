import React, {useEffect, useState} from 'react';
import {Text, FlatList, Image, View} from 'react-native';
import Button from '../Components/Button';
import ZavitInputField from '../Components/ZavitInputField';
import { useNavigation } from '@react-navigation/native';
import NavigationHeader from '../Components/NavigationHeader';
const CardDetails = ({route}) => {
  const [name, setname] = useState(route.params.obj.NAME);
  const [cardNumber, setCardNumber] = useState(route.params.obj.CARDNUMBER);
  const [cvv, setcvv] = useState(route.params.obj.CVV);
  const [cardtype, setcardtype] = useState(route.params.obj.CARDTYPE);
  const [expmonth, setExpMonth] = useState(route.params.obj.EXP_MON);
  const [expYear, setExpYear] = useState(route.params.obj.EXP_YEAR);

  const navigation=useNavigation();
  userObject = {
    NAME: name,
    CARDNUMBER: cardNumber,
    CVV: cvv,
    EXP_MON: expmonth,
    EXP_YEAR: expYear,
    CARDTYPE:cardtype,
  };

  const setdata = () => {
    navigation.navigate("SavedCards")
  };
  return (
    <>
    <NavigationHeader title={"Card Details"}></NavigationHeader>
      <View style={{ padding: 15,flex:1,justifyContent:"space-between"}}>
        <View style={{marginBottom:20}}>
        <Text style={{paddingHorizontal: 15, fontWeight: 'bold', fontSize: 24}}>
          Name
        </Text>
        <ZavitInputField
          placeholder={'Name as per Card'}
          value={name}
          edit={false}
          setValue={setname}></ZavitInputField>
          </View>
          <View style={{marginBottom:20}}>
         <Text style={{paddingHorizontal: 15, fontWeight: 'bold', fontSize: 24}}>
          Card Type
        </Text>
        <ZavitInputField
          placeholder={'Visa/mastercard/amex'}
          value={cardtype}
          edit={false}
          setValue={setcardtype}></ZavitInputField>
        </View>
        <View style={{marginBottom:20}}>
        <Text style={{paddingHorizontal: 15, fontWeight: 'bold', fontSize: 24}}>
          Card Number
        </Text>
        <ZavitInputField
          placeholder={'xxxx-xxxx-xxxx-xxxx'}
          value={cardNumber}
          edit={false}
          setValue={setCardNumber}
        ></ZavitInputField>
       </View>
       <View style={{marginBottom:20}}>
        <Text style={{paddingHorizontal: 15, fontWeight: 'bold', fontSize: 24}}>CVV</Text>
        <ZavitInputField
          placeholder={'123'}
          value={cvv}
          edit={false}
          setValue={setcvv}
          max={3}></ZavitInputField>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal:15
          }}>
          <View style={{ flexDirection: 'column'}}>
          <View style={{marginBottom:20}}>
            <Text style={{ fontWeight: 'bold', fontSize: 24}}>
              Month
            </Text>
            <ZavitInputField
              placeholder={'MAR'}
              value={expmonth}
              edit={false}
              setValue={setExpMonth}
              max={7}></ZavitInputField>
           </View>
          </View>
          <View style={{ flexDirection: 'column'}}>
          <View style={{marginBottom:20}}>
            <Text style={{ fontWeight: 'bold', fontSize: 24}}>
              Year
            </Text>
            <ZavitInputField
              placeholder={'2025'}
              value={expYear}
              edit={false}
              setValue={setExpYear}
              max={4}></ZavitInputField>
            </View>
          </View>
        </View>
        <Button title={'Done'} functionality={() => setdata()}></Button>
      </View>

    </>
  );
};
export default CardDetails;
