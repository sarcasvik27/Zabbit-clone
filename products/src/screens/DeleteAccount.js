
import React, {useEffect, useState,useContext,useMemo} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import PopupButton from '../Components/PopupButton';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../Context';

const DeleteAccount = () => {
  const {state, actions} = useContext(GlobalContext);
  const {addedCards} = state;
  const [modalVisible, setModalVisible] = useState(true);
  const [yes, setYes]=useState(false)
  const navigation=useNavigation();
   useEffect(()=>{getId()},[])

   const {orderHistory} = useMemo(() => {
    const {orderHistory} = state;
    return {orderHistory};
  },[state]);

  const getId = async () => {
    try {
      let ID = await AsyncStorage.getItem('ID');
      if (ID != null) {
        // We have data!
        console.log("hi",ID);
        setYes(ID)
       }

     } catch (error) {
    //  Error retrieving data
       console.log("error",ID);
     }
  };
  const delete1=async()=>{
    await firestore().collection('users').doc(yes).delete().then(() => { console.log('User deleted!'); });
    AsyncStorage.removeItem('ID');
    actions?.OrderHistory([]);
    actions.AddcardAction([])
    navigation.navigate("Login")
   }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete this account ? </Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"}}>
            <PopupButton functionality={() => {delete1()}} title={"Yes"}>
            </PopupButton>
            <PopupButton functionality={() => navigation.goBack()} title={"No"}>
            </PopupButton>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight:"bold",
    fontSize:20,
  },
});

export default DeleteAccount;