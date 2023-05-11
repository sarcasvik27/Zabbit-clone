import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../Components/Header/view/Header';
import Signup from '../screens/Signup/view/Signup';
import Login from '../screens/Login/Login';
import RestaurantDetails from '../screens/RestaurantDetails/view/RestaurantDetails';
import Products from '../Components/Products/view/Products';
import Card from '../Components/Card';
import Home from '../screens/Home/view/Home';
import DrawerNavigation from './DrawerNavigation';
import SettingsNavigation from './SettingsNavigation';


const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={DrawerNavigation} options={{headerShown: false}}/>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Card" component={Card} options={{headerShown: false}}/>
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
  );
};
export default AuthNavigation;
