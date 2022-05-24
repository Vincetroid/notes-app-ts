import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './SignInScreen.styles';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const onSignInPress = () => {
    setLoader(true);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.group();
        console.log('user in sign in', user);
        console.groupEnd();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode in Sign In', errorCode);
        console.log('errorMessage in Sign In', errorMessage);
      });
  };

  return (
    <SafeAreaView>
      <TextInput
        value={email}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="grey"
      />
      <TextInput
        secureTextEntry
        value={password}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="grey"
      />
      <Pressable onPress={onSignInPress} style={styles.signInBtn}>
        {!loader ? (
          <Text style={styles.signInBtnText}>SIGN IN</Text>
        ) : (
          <ActivityIndicator color="grey" />
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default SignInScreen;
