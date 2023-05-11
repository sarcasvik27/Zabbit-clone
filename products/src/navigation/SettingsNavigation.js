import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import ChangeLanguage from '../screens/ChangeLanguage';
import DeleteAccount from '../screens/DeleteAccount';
const Stack = createNativeStackNavigator();
const SettingsNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
        <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} options={{headerShown: false}}/>
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={{headerShown: false}} />
      </Stack.Navigator>

  );
};
export default SettingsNavigation;
