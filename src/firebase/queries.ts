import { db } from './conf';
import { collection, getDocs, addDoc } from 'firebase/firestore';
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

const setNote = async () => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, 'notes'), {
    title: 'Titulo de prueba',
    description:
      "Descripción de prueba, lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    create_timestamp: 523453245423,
  });
  console.log('Document written with ID: ', docRef.id);
};

export { setNote, getNotes };
