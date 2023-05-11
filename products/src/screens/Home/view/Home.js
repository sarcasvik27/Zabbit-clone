import React from 'react';
import {ImageBackground, View} from 'react-native';
import Header from '../../../Components/Header/view/Header';
import Products from '../../../Components/Products/view/Products';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',
      }}
      style={{flex: 1}}>
      <Header />
      <View style={{flex: 1}}>
        <Products />
      </View>
    </ImageBackground>
  );
};

export default Home;
