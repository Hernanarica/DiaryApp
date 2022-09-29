import { configureStore } from '@reduxjs/toolkit';
import { authSlice, noteSlice } from "../slices";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		note: noteSlice.reducer
	}
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nameAPiService.middleware)
});