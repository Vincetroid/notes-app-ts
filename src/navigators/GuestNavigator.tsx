import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import Routes from '../utils/Routes';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUpScreen}
        options={{ title: 'Sign Up' }}
      />
      <Stack.Screen
        name={Routes.SignIn}
        component={SignInScreen}
        options={{ title: 'Sign In' }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
