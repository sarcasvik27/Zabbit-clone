import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderDetails from '../screens/OrderDetails';
import OrderHistory from '../screens/OrderHistory';


const Stack = createNativeStackNavigator();
const OrderHistoryNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="OrderHistory" component={OrderHistory} options={{headerShown: false}} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} options={{headerShown: false}} />
      </Stack.Navigator>
  );
};
export default OrderHistoryNavigation;
