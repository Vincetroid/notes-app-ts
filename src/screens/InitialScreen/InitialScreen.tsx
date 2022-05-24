import React from 'react';
import { View, Button } from 'react-native';
import Routes from '../../utils/Routes';

function HomeScreen({ navigation: { navigate } }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigate(Routes.SignIn)} title="Sign In" />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigate(Routes.SignUp)} title="Sign Up" />
      </View>
    </>
  );
}

export default HomeScreen;
