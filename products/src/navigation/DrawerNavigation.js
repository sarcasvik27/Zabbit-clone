import {createDrawerNavigator} from '@react-navigation/drawer';
import {Pressable} from 'react-native/Libraries/Components/Pressable/Pressable';
import Aboutus from '../screens/Aboutus';
import FAQs from '../screens/FAQs';
import Home from '../screens/Home/view/Home';
import OrderHistory from '../screens/OrderHistory';
import SavedCards from '../screens/SavedCards';
import Settings from '../screens/Settings';
import SettingsNavigation from './SettingsNavigation';
import CustomDrawer from '../Components/CustomDrawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutUsNavigation from './AboutUsNavigation';
import DemoNavigation from './DemoNavigation';
import MyAccount from '../screens/MyAccount';
import Logout from '../screens/Logout';
import OrderHistoryNavigation from './OrderHistoryNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="About us" component={AboutUsNavigation} options={{headerShown: false}} />
        <Drawer.Screen name="FAQs" component={FAQs} options={{headerShown: false}} />
        <Drawer.Screen name="Order History" component={OrderHistoryNavigation} options={{headerShown: false}}  />
        <Drawer.Screen name="Saved Cards" component={DemoNavigation} options={{headerShown: false}}  />
        <Drawer.Screen name="Settings" component={SettingsNavigation} options={{headerShown: false}}  />
        <Drawer.Screen name="My Account" component={MyAccount} options={{headerShown: false}} />
        <Drawer.Screen name="Logout" component={Logout} options={{headerShown: false,headerBackVisible: false}} />
      </Drawer.Navigator>
    </>
  );
};
export default DrawerNavigation;
