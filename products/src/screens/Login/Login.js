import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  BackHandler,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [passworderror, setpassworderror] = useState('');
  const [emailstate, setemailstate] = useState(false);
  const [passwordstate, setpasswordstate] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [errormessage,seterrormessage]=useState("")
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const handleBackButtonClick = () => {
    return true;
  };
  let count=0;
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regpswrd =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const getdata = async () => {
      const data1 = await firestore().collection('users').get();
      data1.docs.find(satvik => {
        if (
          satvik.data().EMAIL == email 
        ) {
          count++;
          if( satvik.data().PASSWORD == password){
          Asyncstr(satvik.id);
          seterror(true)
          setloading(false)
          console.log('satvik.id', satvik.id);}
          else{
            seterror(false)
            console.log("wrong password")
            seterrormessage("Password is incorrect");
            setloading(false)
            return
          }
        }
      }
      );
      if(count==0){
        seterror(false)
            console.log(" Not signed in")
            seterrormessage("User is not signed in");
            setloading(false)
      }
  };
  

  const Asyncstr = async data => {
    await AsyncStorage.setItem('ID', data);
    console.log('the id is', data);
    seterror(true)
    setemail("")
    setpassword("")
    navigation.navigate('Home');
  };

  const email_validation = () => {
    if (email == '') {
      setemailerror('Email id required');
    } else if (reg.test(email)) {
      setemailstate(true);
    } else {
      setemailerror(' Invalid mail id');
    }
  };

  const password_validation = () => {
    if (password == '') {
      setpassworderror('Password is required');
    } else if (regpswrd.test(password)) {
      setpasswordstate(true);
    } else {
      setpassworderror(
        'Password must contain minimum eight characters, at least one letter, one number and one special character:',
      );
    }
  };

  const validate = () => {
    email_validation();
    password_validation();
    if (emailstate && passwordstate) {
      setloading(true)
      getdata();
    }
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderWidth: 1,
        height: '100%',
        backgroundColor:"rgba(1,43,40,255)"
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          padding: 10,
        }}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <Image
            source={require('../../assets/images/cuisina.png')} style={{width:370,height:250,marginTop:60}}></Image>
        </View>
      </View>
      <View style={{padding:30,marginTop:30}}>
        <TextInput
        elevation={10}
          style={{
            padding:10,
            borderColor: 'black',
            margin: 10,
            borderRadius: 8,
            backgroundColor:"#FFFFFF"
          }}
          placeholder="Email"
          value={email}
          onChangeText={email => setemail(email)}
          onChange={() => {setemailerror(''),seterror(true),setloading(false),seterrormessage("");}}></TextInput>
        <Text style={{paddingHorizontal:10, color: 'red'}}>{emailerror}</Text>
        <TextInput
        elevation={10}
        style={{
          padding:10,
          borderColor: 'black',
          margin: 10,
          borderRadius: 8,
          backgroundColor:"#FFFFFF"
        }}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={password => setpassword(password)}
          onChange={() => {setpassworderror(''),seterror(true),setloading(false),seterrormessage("")}}></TextInput>
        <Text style={{color: 'red',paddingHorizontal:10}}>{passworderror}</Text>
      </View>
      {loading==true?<ActivityIndicator/>:null}
      {<Text style={{textAlign:"center",color:"red"}}>{errormessage}</Text>}
      <TouchableOpacity style={{}}>
        <Button title={'LOGIN'} functionality={validate}></Button>
      </TouchableOpacity>

      <View style={{display: 'flex', alignItems: 'center',marginBottom:20}}>
        <Pressable
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{color:"#FFFFFF"}}>New to the App ? </Text>
          <Text style={{color: 'rgba(235,180,44,255)'}}>Signup</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
