import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NoteCard from '../NoteCard/NoteCard';
import styles from './NotesList.styles';
import GlobalStyles from '../../../global-styles/GlobalStyles';

type Note = {
  title: string;
  description: string;
  create_timestamp: number;
};

const NotesList = ({ notes }: Array<Note>): JSX.Element => {
  const navigation = useNavigation();

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
