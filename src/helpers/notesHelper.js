import { auth, db } from '../config';
import { deleteDoc, doc } from 'firebase/firestore';

/**
 * It returns the path to the notes collection for the current user
 * @returns The user's id and the collection name.
 */
export const getNotesCollection = () => {
	return `${ auth.currentUser.uid }/${ import.meta.env.VITE_FIRESTORE_NOTES_COLLECTION }`;
};

/**
 * It takes an array of notes and deletes each one from the database
 * @param notes - an array of objects that contain the id of the note to be deleted
 */
export const deleteNotesHelper = async (notes) => {
	try {
		for (let i = 0; i < notes.length; i++) {
			await deleteDoc(doc(db, `${auth.currentUser.uid}/diaryApp/notes`, `${ notes[i].id }`));
		}
		
	} catch (err) {
		throw new Error(err.message);
	}
}