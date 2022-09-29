import {
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile } from 'firebase/auth';
import { auth } from "../config";
import { createUserAdapter } from "../views/Login/adapters";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const { user } = await signInWithPopup(auth, provider);
		
		return createUserAdapter({ ...user, isAuthenticated: true });
	} catch (err) {
		const errorMessage = err.message;
		
		return {
			isAuthenticated: false,
			errorMessage
		};
	}
};

export const registerWithEmailAndPassword = async (name, email, password) => {
	try {
	
		await createUserWithEmailAndPassword(auth, email, password);
		
		await updateProfile(auth.currentUser, {
			displayName: name
		});
		
		const { displayName, uid, photoURL } = auth.currentUser;
		
		return { ok: true, displayName, name, email, uid, photoURL };
		
	} catch (err) {
		const errorMessage = err.message;
		
		return {
			errorMessage
		};
	}
};