import React from 'react';
import {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../Components/Button';
import SuggesstionPopup from '../Components/SuggesstionPopup';
import NavigationHeader from '../Components/NavigationHeader';

const Aboutus = () => {
  const [showPopup, setshowPopup] = useState(false);
  const [defaultStyle, setdefaultStyle] = useState(true);
  const navigation = useNavigation();

  const update = () => {
    setdefaultStyle(false), setshowPopup(true);
  };

  return (
    <>

<NavigationHeader title={'About Us'}></NavigationHeader>
      <View style={defaultStyle ? styles.style1 : styles.style2}>
 
        <View>
   
          <Text
            style={styles.text}>
            Build version: 2.3 V3
          </Text>
          <Text style={{padding: 16, fontSize: 16}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            purus tristique, ornare massa eget, laoreet sem. Integer eget metus
            enim. Nullam viverra lobortis nisl, id euismod velit dapibus in.
            Suspendisse dignissim purus nunc, vitae scelerisque nisi luctus
            eget. Cras luctus sollicitudin dapibus. Praesent elit tortor,
            gravida vitae erat et, iaculis ullamcorper ligula. Fusce nunc erat,
            mattis quis gravida in, bibendum id tortor. Curabitur pulvinar massa
            diam, vel lobortis purus feugiat quis. Phasellus placerat lorem
            vitae arcu imperdiet, at bibendum est iaculis. Cras sagittis, dolor
            eu sollicitudin placerat, lacus mauris dignissim justo, vitae
            posuere libero diam non justo. Etiam id odio commodo, suscipit nulla
            vel, feugiat dolor. In finibus eleifend eros vel lacinia. Vestibulum
            faucibus leo a  Etiam id odio commodo, suscipit nulla
            vel, feugiat dolor. In finibus eleifend eros vel lacinia. Vestibulum
            faucibus leo a
          </Text>
        </View>
        {showPopup && (
          <SuggesstionPopup
            title={'Your Valuable Suggestion'}
            functionality={() => {
              setshowPopup(false), setdefaultStyle(true);
            }}
          />
        )}
        <View>
        <Button
          title={'TELL US WHAT DO YOU THINK'}
          functionality={() => {
            update();
          }}></Button>
 
        <Button
          title={'TERMS AND CONDITION'}
          functionality={() =>
            navigation.navigate('TermsandCondition')
          }></Button>
        <Button
          title={'PRIVACY POLICY'}
          functionality={() => navigation.navigate('PrivacyPolicy')}></Button></View>
      </View>
    </>
  );
};
export default Aboutus;

const styles = StyleSheet.create({
  style1: {
    padding: 12,
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
    justifyContent:"space-between"
  },
  style2: {
    padding: 12,
    backgroundColor: 'rgba(189,189,189,0.9)',
    height: '100%',
        flex: 1,
    justifyContent:"space-between"
  },
  text:{
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    padding: 20,
    textAlign:"center"
  }
});
