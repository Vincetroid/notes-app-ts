import React, { useState } from 'react';
import { Text, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setNote } from '../../firebase/queries';
import GlobalStyles from '../../global-styles/GlobalStyles';
import styles from './CreateNoteScreen.styles';
import StyleConstants from '../../global-styles/StyleConstants';

const CreateNoteModal = () => {
  const [loader, setLoader] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const textInputColor = { color: loader ? 'grey' : 'black' };
  const createNoteBgColor = {
    backgroundColor: loader
      ? StyleConstants.solidPinkLoading
      : StyleConstants.solidPink,
  };

  const createNote = async () => {
    try {
      setLoader(true);
      await setNote(title, description);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.bodyScreenContainer}>
      <ScrollView>
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
          onPress={createNote}
          style={[styles.createNoteBtn, createNoteBgColor]}
          disabled={loader}
        >
          {!loader ? (
            <Text style={styles.createNoteBtnText}>CREATE NOTE</Text>
          ) : (
            <ActivityIndicator color="grey" />
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNoteModal;
