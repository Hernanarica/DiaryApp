import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import moment from 'moment';
import { auth, db } from '../config';
import { uploadFile } from './uploadFile';
import { getNotesCollection } from './notesHelper';
import { createNoteAdapter } from '../adapters/createNoteAdapter';

/**
 * It creates a new note in the database
 */
export const createNoteHelper = async (note) => {
	try {
		const docRef = await addDoc(collection(db, getNotesCollection()), {
			...note
		});
		
		const id = docRef.id;
		
		await updateDoc(docRef, { id });
		
		return { ...note, id };
		
	} catch (err) {
		throw new Error(err.message);
	}
};

export const updateNoteHelper = async (newNote) => {
	try {
		// const adaptedNote = await createNoteAdapter(newNote);
		
		const docRef = doc(db, getNotePathHelper(newNote.id));
		
		// delete newNote.id;
		
		await updateDoc(docRef, { ...newNote });
		
		return newNote;
		
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