import { Text, View } from 'react-native';
import React from 'react';
import styles from './NoteCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const NoteCard = ({ note }) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.noteTitle}>{note.title}</Text>
      </View>
      <View>
        <Text style={styles.noteDesc}>{note.description}</Text>
      </View>
      <FontAwesomeIcon icon="trash" size={20} color="green" />
    </View>
  );
};

export default NoteCard;
