import React, { useEffect, useState } from 'react';
import { getNotes } from '../../firebase/queries';
import Note from '../../types/Note';
import NotesList from './NotesList/NotesList';
import styles from './NotesMainScreen.styles';

function NotesMainScreen({ navigation: { navigate } }) {
  const [notes, setNotes] = useState<Array<Note>>([]);

  useEffect(() => {
    init();
    return () => {
      setNotes([]);
    };
  }, []);

  // It creates an infinite loop, make it in another way
  // useEffect(() => {
  //   init();
  // }, [notes]);

  const init = async () => {
    const notesResult = await getNotes();
    setNotes(notesResult);
  };

  return <NotesList notes={notes} />;
}

export default NotesMainScreen;
