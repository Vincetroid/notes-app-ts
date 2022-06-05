import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './NoteCard.styles';
import { db } from '../../../firebase/conf';
import handleErrors from '../../../utils/handleErrors';

const NoteCard = ({ note }) => {
  const onDeleteNote = async () => {
    try {
      console.log('onDeleteNote');
      await deleteDoc(doc(db, 'notes', note.docId));
    } catch (error) {
      const errorCode = error.code;
      handleErrors(errorCode);
    }
  };

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.noteTitle}>{note.title}</Text>
      </View>
      <View>
        <Text style={styles.noteDesc}>{note.description}</Text>
      </View>
      <Pressable onPress={onDeleteNote}>
        <FontAwesomeIcon icon="trash" size={20} color="green" />
      </Pressable>
    </View>
  );
};

export default NoteCard;
