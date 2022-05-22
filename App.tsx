import './src/firebase/conf';
import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabBottomNavigator from './src/navigators/TabBottomNavigator';
import GuestNavigator from './src/navigators/GuestNavigator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faGear,
  faNoteSticky,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

import { View, Text, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {
  React.useEffect(() => {
    library.add(fab, faGear, faNoteSticky, faCirclePlus);
  }, []);

  const loggedIn = false;

  return (
    <NavigationContainer>
      {loggedIn ? <TabBottomNavigator /> : <GuestNavigator />}
      {/* {loggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabBottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditPost"
            component={() => (
              <View>
                <Text>Hola Edit</Text>
              </View>
            )}
          />
          <Stack.Screen
            name="Settings"
            component={() => (
              <View>
                <Text>Hola settings</Text>
              </View>
            )}
            options={{
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <SignInNavigator />
      )} */}
    </NavigationContainer>
  );
}
