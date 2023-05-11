import React, {useContext, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import PopupButton from '../../PopupButton';
import {useNavigation} from '@react-navigation/native';
import Popup from '../../Popup';
import SearchBox from '../../SearchBox';
import {GlobalContext} from '../../../Context';

const Products = () => {
  const navigation = useNavigation();
  const {state, actions} = useContext(GlobalContext);
  const [firebaseData, setFirebaseData] = useState([]);
  const [searchVlaue, setSearchValue] = useState('');
  const [searchInput, setSearchInput] = useState(null);
  const [showPopup, setshowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [color, setcolor] = useState('white');
  const arr = [];
  const arr2 = [];

  const {MyProducts} = useMemo(() => {
    const {MyProducts} = state;
    return {MyProducts};
  }, [state]);

  useEffect(() => {
    // to get the data from firestore
    getdata();
  }, []);

  useEffect(() => {
    setEmpty(false);
    if (searchInput != null) {
      if (searchInput.charAt(0) == ' ') {
        setSearchInput(searchInput.trim()); // will use to to stop the user to enter space in the first go in textbox
      } else {
        MyProducts.filter(data => {
          if (data.NAME.toUpperCase().includes(searchInput.toUpperCase())) {
            arr2.push(data);
          }
          setFirebaseData(arr2);
        });
      }
    }
  }, [searchInput]);

  const details = () => {
    navigation.navigate('RestaurantDetails');
    setEmpty(true);
  };

  const getdata = async () => {
    // storing data in context and in local state (firebasedata) from firebase
    setLoading(true);
    const data = await firestore()
      .collection('products')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          arr.push(documentSnapshot.data());
          actions?.Products(arr);
        });
      });
    setFirebaseData(arr);
    setLoading(false);
  };

  const colorchanger = () => {
    // to change the color of heart
    if (color == 'red') {
      setcolor('white');
    } else if (color == 'white') {
      setcolor('red');
    }
  };

  return (
    <View style={styles.OuterView}>
      {/* <View style={{flexDirection: 'column'}}> */}
      <View style={styles.CardHeader}>
        <Text style={styles.RestaurantName}>Nopa Stavrou</Text>

        {/* Red and white heart code below */}
        <Pressable onPress={() => colorchanger()}>
          {color == 'red' ? (
            <Icon
              name="heart"
              style={{fontSize: 25, padding: 19, color: color}}></Icon>
          ) : (
            <Icon name="heart-o" style={{fontSize: 25, padding: 19}}></Icon>
          )}
        </Pressable>
      </View>

      <View style={styles.waiterandinfo}>
        <PopupButton //Call waiter Button
          title={'Call Waiter'}
          icon={'spoon'}
          functionality={() => {
            setshowPopup(true);
            setSearchInput('');
          }}></PopupButton>
        <Pressable
          onPress={() => {
            details();
            setSearchValue('');
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{paddingLeft: 10}}>View Restaurant Information </Text>
          <Icon name="location-arrow"></Icon>
        </Pressable>
      </View>

      <SearchBox
        search={[searchInput, setSearchInput]}
        searchValue={[searchVlaue, setSearchValue]}></SearchBox>

      {loading && <ActivityIndicator></ActivityIndicator>}
      {!loading &&
        (!firebaseData.length ? (
          <Text style={{textAlign: 'center', padding: 50}}>
            No such data found{' '}
          </Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={firebaseData}
            renderItem={element => {
              return (
                <>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Card', {
                        obj: element.item,
                      });
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                        }}>
                        <View style={{width: 200}}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 19,
                              color: '#282828',
                              fontFamily: 'Ubuntu',
                              paddingTop: 20,
                            }}>
                            {element.item.NAME}
                          </Text>
                        </View>
                        <View style={{width: 220}}>
                          <Text numberOfLines={3}>
                            {element.item.DESCRIPTION}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: '#282828',
                            paddingTop: 20,
                            paddingBottom: 20,
                          }}>
                          ₹{element.item.PRICE}
                        </Text>
                      </View>
                      <View style={{padding: 20}}>
                        <Image
                          style={{height: 70, width: 70, borderRadius: 20}}
                          source={{uri: element.item.IMG}}
                        />
                      </View>
                    </View>
                  </Pressable>
                  <View
                    style={{
                      height: 0.5,
                      backgroundColor: 'rgba(196, 196, 196, 1)',
                    }}
                  />
                </>
              );
            }}
          />
        ))}
      {showPopup && (
        <Popup
          title={'Call Waiter'}
          desc={'Do you want to call the waiter ?'}
          functionality={() => {
            setshowPopup(false), setSearchValue('');
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  OuterView: {
    borderRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  RestaurantName: {fontSize: 30, fontWeight: 'bold', color: 'black'},
  waiterandinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 25,
  },
});
export default Products;
