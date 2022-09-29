import { changeStatusNotes, deleteNotes, setNotes } from '../slices';
import { getCollectionHelper } from '../../helpers';
import { notesTypes } from '../../types/notes';
import { deleteNotesHelper } from '../../helpers/notesHelper';
import Swal from 'sweetalert2';

/**
 * It's a thunk that dispatches a changeStatusNotes action with the value of checking, then it calls the getCollectionsHelper function, which returns a promise, and then it dispatches a setNotes action
 * with the value of the resolved promise, and then it dispatches a changeStatusNotes action with the value of full
 * @returns A function that takes dispatch as an argument.
 */
export const getNotesCollectionThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(changeStatusNotes(notesTypes.checking));
			
			const notes = await getCollectionHelper();
			
			dispatch(setNotes(notes));
			dispatch(changeStatusNotes(notesTypes.full));
			
		} catch (err) {
			throw new Error(err.message);
		}
	};
};

/**
 * It deletes all the notes in the database
 * @returns A function that returns a function that returns a function that returns a function that returns a function that returns a function that returns a function that returns a function that returns
 * a function that returns a function that returns a function that returns a function that returns a function that returns a function that returns a function that returns a function that returns a
 * function that returns a function that returns a function that returns a function that returns
 */
export const deleteNotesThunk = () => {
	return async (dispatch, getState) => {
		try {
			dispatch(changeStatusNotes(notesTypes.checking));
			
			await Swal.showLoading(Swal.getDenyButton());
			
			await deleteNotesHelper(getState().note.notes);
			
			dispatch(deleteNotes());
			
			dispatch(changeStatusNotes(notesTypes.empty));
			
			Swal.fire('Eliminadas', 'Notas eliminadas', 'success');
			
		} catch (err) {
			throw new Error(err.message);
		}
	};
};