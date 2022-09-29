import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	status: 'not-authenticated',
	isAuthenticated: false,
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, { payload }) => {
			state.status = 'authenticated';
			state.isAuthenticated = true;
			state.uid = payload.uid;
			state.email = payload.email;
			state.displayName = payload.displayName;
			state.photoURL = payload.photoURL;
		},
		logout: (state, { payload }) => ({ ...initialState }),
		checkingCredentials: (state) => {
			state.status = 'checking';
		}
	}
});

export const { login, logout, checkingCredentials } = authSlice.actions;