import React from 'react';
import {ImageBackground, View, Pressable,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CartProducts from './CartProducts';

const Card = ({route}) => {
  console.log(route.params.obj.NAME);
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        source={{
          uri: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',
        }}
        style={{flex: 1}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" style={styles.icon}></Icon>
        </Pressable>
        <View style={{padding: 100}}></View>
        <View style={{flex: 1}}>
          <CartProducts
            name={route.params.obj.NAME}
            price={route.params.obj.PRICE}
            desc={route.params.obj.DESCRIPTION}
            img={route.params.obj.IMG}></CartProducts>
        </View>
      </ImageBackground>
    </>
  );
};
const styles=StyleSheet.create({
  icon:{fontSize: 25, padding: 19},
})
export default Card;
