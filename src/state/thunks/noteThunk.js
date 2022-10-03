import Swal from 'sweetalert2';
import { changeStatusNote, createNote, deleteNote, updateNote } from '../slices';
import { createNoteHelper, deleteDocumentHelper, getNotePathHelper, updateNoteHelper } from '../../helpers';
import { noteTypes } from '../../types/notes';
import { uploadFile } from '../../helpers/uploadFile';

/**
 * It's a thunk that dispatches a changeStatusNote action creator, then shows a loading modal, then calls a helper function, then dispatches another changeStatusNote action creator, then shows a success
 * modal
 * @returns A function that returns a function that returns a promise.
 */
export const createNoteThunk = (note) => {
	return async (dispatch) => {
		try {
			dispatch(changeStatusNote(noteTypes.checking));
			await Swal.showLoading(Swal.getDenyButton());
			
			const noteWithId = await createNoteHelper(note);
			
			dispatch(createNote(noteWithId));
			
			dispatch(changeStatusNote(noteTypes.create));
			
			await Swal.fire('Creado', 'Nota creada con éxito', 'success');
		} catch (err) {
			throw new Error(err.message);
		}
	};
};

export const updateNoteThunk = (newNote) => {
	return async (dispatch) => {
		try {
			dispatch(changeStatusNote(noteTypes.checking));
			await Swal.showLoading(Swal.getDenyButton());
			
			const adaptedNote = await updateNoteHelper(newNote);
			
			dispatch(updateNote(adaptedNote));
			
			dispatch(changeStatusNote(noteTypes.update));
			
			await Swal.fire('Actualizada', 'Nota actualizada con éxito', 'success');
		} catch (err) {
			throw new Error(err.message);
		}
	};
};


/**
 * It deletes a note from Firestore and then shows a success message
 * @param id - The id of the note to be deleted.
 * @returns An object with a function that receives dispatch as a parameter.
 */
export const deleteNoteThunk = (id) => {
	return async (dispatch) => {
		try {
			dispatch(changeStatusNote(noteTypes.checking));
			
			await Swal.showLoading(Swal.getDenyButton());
			
			await deleteDocumentHelper(getNotePathHelper(id));
			dispatch(deleteNote(id));
			
			dispatch(changeStatusNote(noteTypes.delete));
			
			await Swal.fire('Eliminado', 'Nota eliminada con éxito', 'success');
		} catch (err) {
			throw new Error(err.message);
		}
	};
};