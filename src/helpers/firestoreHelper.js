import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { getNotesCollection } from './notesHelper';
import { db } from '../config';

/**
 * It gets all the documents from the notes collection and returns them as an array of objects
 * @returns An array of notes.
 */
export const getCollectionHelper = async () => {
	try {
		const notes = [];
		const querySnapshot = await getDocs(collection(db, getNotesCollection()));
		querySnapshot.forEach((doc) => {
			notes.push(doc.data());
		});
		
		return notes;
		
	} catch (err) {
		throw new Error(err.message);
	}
};

export const getDocumentHelper = async () => {
	try {
		const notes = [];
		const querySnapshot = await getDocs(collection(db, getNotesCollection()));
		querySnapshot.forEach((doc) => {
			notes.push(doc.data());
		});
		
		return notes;
		
	} catch (err) {
		throw new Error(err.message);
	}
};

/**
 * It deletes a document from the database
 * @returns A function that takes in a document and deletes it.
 * @param document
 */
export const deleteDocumentHelper = async (document) => {
	try {
		await deleteDoc(doc(db, document));
		return true;
	} catch (err) {
		throw new Error(err.message);
	}
};