import { createSlice } from '@reduxjs/toolkit';
import { notesTypes, noteTypes } from '../../types/notes';

const initialState = {
	status: {
		notes: notesTypes.empty,
		note: null
	},
	notes: null,
	activeNote: null
};

export const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		createNote: (state, { payload }) => {
			state.notes.push(payload);
		},
		updateNote: (state, { payload }) => {
			state.notes = state.notes.map( note => note.id === payload.id ? ({ ...payload }) : note);
		},
		deleteNote: (state, { payload }) => {
			state.notes.splice(state.notes.findIndex(note => note.id === payload), 1);
		},
		deleteNotes: (state) => {
			state.notes = null;
		},
		selectedActiveNote: (state, { payload }) => {
			state.activeNote = payload;
		},
		removedActiveNote: (state, { payload }) => {
			state.activeNote = null;
		},
		setNotes: (state, { payload }) => {
			return { ...state, notes: payload };
		},
		changeStatusNotes: (state, { payload }) => {
			state.status.notes = payload;
		},
		changeStatusNote: (state, { payload }) => {
			state.status.note = payload;
		}
	}
});

export const { createNote, updateNote, deleteNote, deleteNotes, selectedActiveNote, setNotes, changeStatusNotes, changeStatusNote, removedActiveNote } = noteSlice.actions;