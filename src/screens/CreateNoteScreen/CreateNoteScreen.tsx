import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setNote } from '../../firebase/queries';
import GlobalStyles from '../../global-styles/GlobalStyles';
import styles from './CreateNoteScreen.styles';

const CreateNoteModal = () => {
  const [loader, setLoader] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const createNote = async () => {
    await setNote();
  };

  return (
    <SafeAreaView style={GlobalStyles.bodyScreenContainer}>
      <View style={styles.noteFieldsContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setTitle}
          placeholder="Type a title"
          placeholderTextColor="grey"
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          value={description}
          editable={!loader}
          style={[
            styles.textInput,
            textInputColor,
            { textAlignVertical: 'top' },
          ]}
          onChangeText={setDescription}
          placeholder="Type a description"
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={10}
        />
        <TouchableOpacity
          onPress={() => {
            createNote();
          }}
          style={styles.createNoteBtn}
        >
          {!loader ? (
            <Text style={styles.createNoteBtnText}>CREATE NOTE</Text>
          ) : (
            <ActivityIndicator color="grey" />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateNoteModal;
