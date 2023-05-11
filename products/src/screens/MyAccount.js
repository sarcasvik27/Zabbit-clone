import React, {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Components/Button';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ZavitInputField from '../Components/ZavitInputField';
import PopupButton from '../Components/PopupButton';
import {useNavigation} from '@react-navigation/native';
import EditNavigationHeader from '../Components/EditNavigationHeader';
import {GlobalContext} from '../Context';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const MyAccount = () => {
  useEffect(() => {
    getId();
  }, []);
  const {state, actions} = useContext(GlobalContext);
  const {MyAccount} = state;

  const [name, setname] = useState('');
  const [UserImage, setUserImage] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [edit, setedit] = useState(false);
  const [emailerror, setemailerror] = useState('');
  const [userId, setUserId] = useState('');
  const [editbutton, seteditbutton] = useState('Edit');
  const [showPopUp, setShowPopUp] = useState(false);
  const [editdisable, setEditDisable] = useState(true);

  const navigation = useNavigation();

  let img = '../assets/images/account.png';

  const saveImage=async(photo)=>{
    const uploadUri = photo;
      let fileName = `UserImage/${uploadUri.substring(
        uploadUri.lastIndexOf('/') + 1,
        console.log(fileName)
      )}`;
        await storage().ref(fileName).putFile(uploadUri);
      
      const url = await storage().ref(fileName).getDownloadURL();
      setUserImage(url);
      console.log("the url is ",url)
      await firestore().collection('users').doc(userId).update({
        FNAME: name,
        LNAME: lname,
        EMAIL: email,
        USERIMAGE: url,
      });
  }

  const validation = async () => {
    if (name == '') {
      setemailerror("Name can't be empty");
    } else {
      // update data on firebase
      await firestore().collection('users').doc(userId).update({
        FNAME: name,
        LNAME: lname,
        EMAIL: email,
      });
      // to update the entries in drawer we will use context
      actions.MyAccount(name);
      setShowPopUp(false);
      setedit(false);
    }
  };

  const getId = async () => {
      const ID = await AsyncStorage.getItem('ID');
      setUserId(ID)
      getdata(ID);
  };

  const getdata = async ID => {
    try {
      const data1 = await firestore().collection('users').doc(ID).get();
      setname(data1.data().FNAME);
      setlname(data1.data().LNAME);
      setemail(data1.data().EMAIL);
      setUserImage(data1.data().USERIMAGE);
    } catch (err) {
      console.log(err);
    }
  };

  const editing = () => {
    if (editbutton == 'Edit') {
      seteditbutton('Save');
      setedit(true);
      setEditDisable(false);
    } else {
      seteditbutton('Edit');
      setEditDisable(true); // to disable the editing of image
      setedit(false);
      validation();
    }
  };

  return (
    <>
      <EditNavigationHeader
        title={'My Account'}
        edit={editbutton}
        functionality={() => editing()}></EditNavigationHeader>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       

        <Pressable
          disabled={editdisable}
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log('hello from image', image.path);
              saveImage(image.path)
            });
          }}>
         {UserImage == '' ? (
          <Image
            source={require('../assets/images/account.png')}
            style={{height: 150, width: 150, padding: 10}}
          />
         
        ) : (
          <Image
            source={{uri: UserImage}}
            style={{height: 150, width: 150, padding: 10, borderRadius: 75}}
          />
        )}
        </Pressable>
      </View>
      <View
        style={{
          paddingTop: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '88%',
        }}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{fontSize: 22, marginTop: 20, paddingHorizontal: 12}}>
            First Name
          </Text>
          <ZavitInputField
            value={name}
            placeholder={'First name'}
            setValue={setname}
            edit={edit}></ZavitInputField>

          <Text style={{fontSize: 22, marginTop: 20, paddingHorizontal: 12}}>
            Last Name
          </Text>
          <ZavitInputField
            value={lname}
            placeholder={'Last name'}
            setValue={setlname}
            edit={edit}></ZavitInputField>

          <Text style={{fontSize: 22, marginTop: 20, paddingHorizontal: 12}}>
            Email ID
          </Text>
          <ZavitInputField
            value={email}
            placeholder={'Email'}
            edit={false}
            setValue={setemail}
            emptyValue={() => setemailerror('')}></ZavitInputField>
          <Text style={{color: 'red', textAlign: 'right'}}>{emailerror}</Text>
        </View>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
        </View>
      </View>
    </>
  );
};

export default MyAccount;
