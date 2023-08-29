import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages';
import dashbord from '../pages/dashbord';
import Home from '../pages/home';
import splashScreen from '../pages/splashScreen';
import signinScreen from '../pages/signinScreen';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={dashbord}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        //options={{headerShown: false}}
      />
      <Stack.Screen
        name="splashScreen"
        component={splashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signinScreen"
        component={signinScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
