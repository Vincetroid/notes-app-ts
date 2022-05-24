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

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const onSignUpPress = () => {
    setLoader(true);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.group();
        console.log('user', user);
        console.groupEnd();
        setLoader(false);
        setUserName('');
        setEmail('');
        setPassword('');
        Alert.alert('Registration Completed, please Sign in');
        navigation.navigate('SignIn');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          Alert.alert('Email already in use, please provide another one');
        }
        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
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
