import React, { useEffect, useState } from 'react';
import { getNotes } from '../../firebase/queries';
import Note from '../../types/Note';
import NotesList from './NotesList/NotesList';
import styles from './NotesMainScreen.styles';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

function NotesMainScreen({ navigation: { navigate } }) {
  const [notes, setNotes] = useState<Array<Note>>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    const notesResult = await getNotes();
    setNotes(notesResult);
    setLoading(false);
  };

  return loading ? (
    <LoadingModal
      loading={loading}
      size={'large'}
      loadingMessage="Loading notes..."
    />
  ) : (
    <NotesList notes={notes} />
  );
}

export default NotesMainScreen;
