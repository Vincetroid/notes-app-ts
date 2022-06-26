import React from 'react';
import TabBottomNavigator from './src/navigators/TabBottomNavigator';
import GuestNavigator from './src/navigators/GuestNavigator';
import useFirebaseAuth from './src/hooks/useFirebaseAuth';
import addFontAwesomeIcons from './src/assets/icons/FontAwesomeIconsHandler';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';

LogBox.ignoreAllLogs();

export default function App() {
  const auth = getAuth();
  const authUser = useFirebaseAuth(auth);

  React.useEffect(() => {
    addFontAwesomeIcons();
  }, []);

  return (
    <NavigationContainer>
      {authUser ? <TabBottomNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
}
