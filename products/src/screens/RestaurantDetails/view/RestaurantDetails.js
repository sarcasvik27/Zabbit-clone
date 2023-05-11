import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Table,Row,Rows} from "react-native-table-component"

const RestaurantDetails = () => {
  const tableData = [
    ['Monday', '9:00 AM-11:00 PM'],
    ['Tuesday', '9:00 AM-11:00 PM'],
    ['Wednesday', '9:00 AM-11:00 PM'],
    ['Thursday', '9:00 AM-11:00 PM'],
    ['Friday', '9:00 AM-11:00 PM'],
    ['Saturday', '9:00 AM-11:00 PM'],
    ['Sunday', '9:00 AM-12:30 PM'],
  ];
  return (<>
    <View style={styles.container}>
      <View style={styles.outerview}>
        <View>
          <Text style={styles.headingTxt}>Nopa Starvou</Text>
        </View>
        <View style={styles.firstview}>
          <Text style={styles.firstviewtxt}>{'\u2022'}Indian</Text>
          <Text style={styles.firstviewtxt}>{'\u2022'}British</Text>
          <Text style={styles.firstviewtxt}>{'\u2022'}Italian</Text>
        </View>
        <View style={styles.secondview}>
          <Text style={styles.textAddHeading}>Address</Text>
          <Text style={styles.textAddress}>
           Christopher Nolan street, London UK
          </Text>
        </View>
        <View style={styles.table}>
          <View style={styles.lefttable}>
            <Text style={styles.textDelivery}>Open for delivery</Text>
          </View>
          <View style={styles.righttable}>
            <Table>
              <Rows data={tableData} textStyle={styles.text} />
            </Table>
          </View>
        </View>
      </View>
    </View>
 </> );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerview: {
    flex: 1,
    paddingLeft:12
  },
  firstview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196,196,196,1)',
    paddingBottom: 12,
    paddingRight:14,
    paddingLeft:8
  },
  firstviewtxt:{

    fontFamily: 'Ubuntu-Regular'
  },
  secondview: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196,196,196,1)',
    padding: 12,
    justifyContent: 'space-around',
  },
  headingTxt: {
    padding: 12,
    fontSize: 28,
    color: 'black',
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 700,
  },
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 12, fontSize: 18, fontFamily: 'Ubuntu-Regular',},
  textAddress: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Regular',
  },
  textDelivery: {
    margin: 12,
    fontFamily: 'Ubuntu-Regular',
  },
  textAddHeading: {
    marginBottom: 12,
    fontFamily: 'Ubuntu-Regular',
  },
});
export default RestaurantDetails;