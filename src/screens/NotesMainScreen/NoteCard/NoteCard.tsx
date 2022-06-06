import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { doc, deleteDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { db } from '../../../firebase/conf';
import handleErrors from '../../../utils/handleErrors';
import styles from './NoteCard.styles';
import LoadingModal from '../../../components/LoadingModal/LoadingModal';
import StyleConstants from '../../../global-styles/StyleConstants';

const NoteCard = ({ note }) => {
  const [loading, setLoading] = useState(false);

  const onDeleteNote = async () => {
    setLoading(true);
    try {
      console.log('onDeleteNote');
      await deleteDoc(doc(db, 'notes', note.docId));
      setLoading(false);
    } catch (error) {
      const errorCode = error.code;
      handleErrors(errorCode);
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.cardWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.noteTitle}>{note.title}</Text>
        </View>
        <View>
          <Text style={styles.noteDesc}>{note.description}</Text>
        </View>
        <View style={styles.iconsZone}>
          <Pressable onPress={onDeleteNote} style={styles.iconBtn}>
            <FontAwesomeIcon icon="pen" size={20} color={'aqua'} />
          </Pressable>
          <Pressable onPress={onDeleteNote} style={styles.iconBtn}>
            <FontAwesomeIcon
              icon="trash"
              size={20}
              color={StyleConstants.gray}
            />
          </Pressable>
        </View>
      </View>
      <LoadingModal loading={loading} loadingMessage="Erasing note..." />
    </>
  );
};

export default NoteCard;
