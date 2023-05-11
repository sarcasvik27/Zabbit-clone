import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigation from './src/navigation/RootNavigation';
import {GlobalProvider} from './src/Context';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/view/Signup';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {

  return (
    <GlobalProvider>
      <NavigationContainer independent={true}>
        <RootNavigation />
        {/* <Signup/> */}
      </NavigationContainer>
    </GlobalProvider>
  );
};
export default App;
