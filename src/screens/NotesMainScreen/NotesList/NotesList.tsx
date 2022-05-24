import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NoteCard from '../NoteCard/NoteCard';
import styles from './NotesList.styles';

type Note = {
  title: string;
  description: string;
  create_timestamp: number;
};

const NotesList = ({ notes }: Array<Note>): JSX.Element => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {notes.map((note: Note, i: number) => (
        <NoteCard note={note} key={i} />
      ))}
    </ScrollView>
  );
};

export default NotesList;
