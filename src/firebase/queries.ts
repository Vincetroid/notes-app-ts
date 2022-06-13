import { db } from './conf';
import { collection, getDocs } from 'firebase/firestore';
import Note from '../types/Note';

const getNotes = async () => {
  const notesCollection = collection(db, 'notes');
  const notesSnapshotOfDocuments = await getDocs(notesCollection);
  const notesList = notesSnapshotOfDocuments.docs.map(doc => {
    const data = doc.data();
    // TODO: Desctructure data to get timestamp values and convert them with https://firebase.google.com/docs/reference/node/firebase.firestore.Timestamp to show an readable Date
    const docId = doc.id;
    return { docId, ...data };
  });
  return notesList as Array<Note>;
};

export { getNotes };
