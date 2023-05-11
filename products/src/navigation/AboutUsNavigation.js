import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Aboutus from '../screens/Aboutus';
import TermsandCondition from '../screens/TermsandCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy';
const Stack = createNativeStackNavigator();
const AboutUsNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="AboutUs" component={Aboutus} options={{headerShown: false}}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{headerShown: false}} />
        <Stack.Screen name="TermsandCondition" component={TermsandCondition} options={{headerShown: false}} />
      </Stack.Navigator>
  );
};
export default AboutUsNavigation;
