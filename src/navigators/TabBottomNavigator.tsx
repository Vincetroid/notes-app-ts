import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/NotesMainScreen/NotesMainScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

function TabBottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Notes',
          tabBarIcon: () => <FontAwesomeIcon icon="note-sticky" size={24} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: () => <FontAwesomeIcon icon="gear" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBottomNavigator;
