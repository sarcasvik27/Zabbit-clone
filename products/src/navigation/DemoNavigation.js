import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SavedCards from '../screens/SavedCards'
import AddNewCard from '../screens/AddNewCard'
import CardDetails from '../screens/CardDetails'


const Stack = createNativeStackNavigator();
const DemoNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SavedCards"
        component={SavedCards}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CardDetails"
        component={CardDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddNewCard"
        component={AddNewCard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
export default DemoNavigation;
