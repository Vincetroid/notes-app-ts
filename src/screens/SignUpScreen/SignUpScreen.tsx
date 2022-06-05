import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './SignUpScreen.styles';
import handleErrors from '../../utils/handleErrors';

const SignUpScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const onSignUpPress = () => {
    setLoader(true);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoader(false);
        setUserName('');
        setEmail('');
        setPassword('');
        Alert.alert('Registration Completed');
      })
      .catch(error => {
        const errorCode = error.code;
        handleErrors(errorCode);
        setLoader(false);
      });
  };

  return (
    <SafeAreaView>
      <TextInput
        value={userName}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setUserName}
        placeholder="User name / Nick name"
        placeholderTextColor="grey"
      />
      <TextInput
        value={email}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="grey"
      />
      <TextInput
        value={password}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="grey"
      />
      <Pressable onPress={onSignUpPress} style={styles.signUpBtn}>
        {!loader ? (
          <Text style={styles.signUpBtnText}>SIGN UP</Text>
        ) : (
          <ActivityIndicator color="grey" />
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUpScreen;
