import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './SignInScreen.styles';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // console.log(2);
    // const email = 'vince_trance@hotmail.com';
    // const password = '123456';
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(userCredential => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.group();
    //     console.log('user', user);
    //     console.groupEnd();
    //     // ...
    //   })
    //   .catch(error => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log('errorCode', errorCode);
    //     console.log('errorMessage', errorMessage);
    //     // ..
    //   });
  }, []);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={() => setPassword}
        secureTextEntry
        value={password}
        placeholder="Password"
      />
      <Button onPress={() => console.log('Registering')} title="Sign In" />
    </SafeAreaView>
  );
};

export default SignInScreen;
