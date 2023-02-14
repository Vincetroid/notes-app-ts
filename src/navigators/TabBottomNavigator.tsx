import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import CreateNoteScreen from '../screens/CreateNoteScreen/CreateNoteScreen';
import NotesMainScreen from '../screens/NotesMainScreen/NotesMainScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import CommonNavigationOptions from '../utils/CommonNavigationOptions';
import NotesNavigationOptions from '../screens/NotesMainScreen/NavigationOptions';
import { Routes } from '../utils/Routes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NotesStackParamList = {
  Notes: undefined;
  CreateNote: undefined;
};

export type TabBottomParamList = {
  NotesRoot: undefined;
  Settings: undefined;
};

export type NavigationProps = NativeStackNavigationProp<NotesStackParamList>;

const Tab = createBottomTabNavigator<TabBottomParamList>();
const NotesStack = createStackNavigator<NotesStackParamList>();

function NotesStackNavigator() {
  return (
    <NotesStack.Navigator screenOptions={CommonNavigationOptions}>
      <NotesStack.Screen
        name={Routes.Notes}
        component={NotesMainScreen}
        options={NotesNavigationOptions}
      />
      <NotesStack.Screen
        name={Routes.CreateNote}
        component={CreateNoteScreen}
        options={{ title: 'Create Note' }}
      />
    </NotesStack.Navigator>
  );
}

function TabBottomNavigator() {
  return (
    // TODO: screenOptions={CommonNavigationOptions} only works for Settings, create Settings stack to remove screenOptions from here
    <Tab.Navigator screenOptions={CommonNavigationOptions}>
      <Tab.Screen
        name={Routes.NotesRoot}
        component={NotesStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon="note-sticky" size={24} />,
        }}
      />
      <Tab.Screen
        name={Routes.Settings}
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: () => <FontAwesomeIcon icon="gear" size={24} />,
          headerLeft: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBottomNavigator;
