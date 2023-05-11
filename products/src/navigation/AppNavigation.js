import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantDetails from '../screens/RestaurantDetails/view/RestaurantDetails';
import Products from '../Components/Products/view/Products';
import Card from '../Components/Card';
import DrawerNavigation from './DrawerNavigation';
import Signup from '../screens/Signup/view/Signup';
import Login from '../screens/Login/Login';
import AuthNavigation from './AuthNavigation';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={DrawerNavigation} options={{headerShown: false}}/>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Card" component={Card} options={{headerShown: false}} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        <Stack.Screen name="Login" component={AuthNavigation} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
