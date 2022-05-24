import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

function SettingsScreen({ navigation }) {
  const auth = getAuth();

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('Signed out successfully');
        navigation.navigate('InitialScreen');
      })
      .catch(error => {
        Alert.alert('There was an error signing out, try again');
        console.log('error', error);
      });
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
      <Button onPress={onSignOut} title="Sign out" />
    </>
  );
}

export default SettingsScreen;
