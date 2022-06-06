import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesMainScreen from '../screens/NotesMainScreen/NotesMainScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import CommonNavigationOptions from '../utils/CommonNavigationOptions';

const Tab = createBottomTabNavigator();

function TabBottomNavigator() {
  return (
    <Tab.Navigator screenOptions={CommonNavigationOptions}>
      <Tab.Screen
        name="Home"
        component={NotesMainScreen}
        options={{
          title: 'Notes',
          tabBarIcon: () => <FontAwesomeIcon icon="note-sticky" size={24} />,
          headerLeft: () => null,
        }}
      />
      <Tab.Screen
        name="Settings"
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
