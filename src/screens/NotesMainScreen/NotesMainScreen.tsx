import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/conf';
import { collection, getDocs } from 'firebase/firestore';
import NotesList from './NotesList/NotesList';
import styles from './NotesMainScreen.styles';

type Note = {
  title: string;
  description: string;
  create_timestamp: number;
};

function NotesMainScreen({ navigation: { navigate } }) {
  const [notes, setNotes] = useState<Array<Note>>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const result = await getNotes(db);
    setNotes(result);
  };

  // Get a list of cities from your database
  async function getNotes(db) {
    const notesCollection = collection(db, 'notes');
    const notesSnapshotOfDocuments = await getDocs(notesCollection);
    const notesList = notesSnapshotOfDocuments.docs.map(doc => {
      const data = doc.data();
      // TODO: Desctructure data to get timestamp values and convert them with https://firebase.google.com/docs/reference/node/firebase.firestore.Timestamp to show an readable Date
      const docId = doc.id;
      return { docId, ...data };
    });
    return notesList as Array<Note>;
  }

  return <NotesList notes={notes} />;
}

export default NotesMainScreen;
