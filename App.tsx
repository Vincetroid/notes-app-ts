import './src/firebase/conf';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabBottomNavigator from './src/navigators/TabBottomNavigator';
import GuestNavigator from './src/navigators/GuestNavigator';
import { getAuth } from 'firebase/auth';
import useFirebaseAuth from './src/hooks/useFirebaseAuth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faGear,
  faNoteSticky,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

LogBox.ignoreAllLogs();

export default function App() {
  const auth = getAuth();
  const authUser = useFirebaseAuth(auth);

  React.useEffect(() => {
    library.add(fab, faGear, faNoteSticky, faCirclePlus);
  }, []);

  return (
    <NavigationContainer>
      {authUser ? <TabBottomNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
}
