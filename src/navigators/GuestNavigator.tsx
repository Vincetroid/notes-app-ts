import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import InitialScreen from '../screens/InitialScreen/InitialScreen';
import { Routes } from '../utils/Routes';
import CommonNavigationOptions from '../utils/CommonNavigationOptions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type GuestStackParamList = {
  Initial: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type GuestNavigationProps =
  NativeStackNavigationProp<GuestStackParamList>;

const Stack = createStackNavigator<GuestStackParamList>();

function GuestStack() {
  return (
    <Stack.Navigator screenOptions={CommonNavigationOptions}>
      <Stack.Screen
        name={Routes.Initial}
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SignIn}
        component={SignInScreen}
        options={{ title: 'Sign In' }}
      />
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUpScreen}
        options={{ title: 'Sign Up' }}
      />
    </Stack.Navigator>
  );
}

export default GuestStack;
