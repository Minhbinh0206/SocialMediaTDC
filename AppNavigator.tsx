import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Register from './components/Register';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} // Ẩn header cho màn hình Login
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }} // Ẩn header cho màn hình Register (nếu cần)
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
