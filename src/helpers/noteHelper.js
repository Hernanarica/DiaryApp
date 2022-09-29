import { auth, db } from '../config';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { getNotesCollection } from './notesHelper';
import moment from 'moment';
import { uploadFile } from './uploadFile';

/**
 * It creates a new note in the database
 */
export const createNoteHelper = async (note) => {
	try {
		const image = await uploadFile(note.image[0]);
		
		const docRef = await addDoc(collection(db, getNotesCollection()), {
			...note,
			image,
			date: null,
			id: null
		});
		
		const id = docRef.id
		const date = moment().format('MMM D YYYY');
		
		await updateDoc(docRef, {
			id,
			date
		});
		
		return { ...note, id, date, image }
		
	} catch (err) {
		throw new Error(err.message);
	}
};

export const updateNoteHelper = async (newNote) => {
	try {
		const docRef = doc(db, getNotePathHelper(newNote.id));
		
		// delete newNote.id;
		
		await updateDoc(docRef, { ...newNote });
		
	} catch (err) {
		throw new Error(err.message);
	}
};

/**
 * It returns a string that represents the path to a note in the Firestore database
 * @param id - The id of the note.
 * @returns A string that is the path to the note in the database.
 */
export const getNotePathHelper = (id) => {
	return `${ auth.currentUser.uid }/${ import.meta.env.VITE_FIRESTORE_NOTES_COLLECTION }/${ id }`;
};