import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import NoteCard from '../NoteCard/NoteCard';
import GlobalStyles from '../../../global-styles/GlobalStyles';
import styles from './NotesList.styles';

type Note = {
  title: string;
  description: string;
  create_timestamp: number;
};

const NotesList = ({ notes }: Array<Note>): JSX.Element => {
  return (
    <SafeAreaView style={GlobalStyles.bodyScreenContainer}>
      <ScrollView>
        {notes.map((note: Note, i: number) => (
          <NoteCard note={note} key={i} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotesList;
