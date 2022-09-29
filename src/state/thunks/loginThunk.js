import { checkingCredentials, login, logout } from '../slices';
import { signInWithGoogle } from '../../providers';
import { createUserAdapter } from "../../views/Login/adapters";

export const onSignIn = () => (dispatch) => {
	dispatch(checkingCredentials());
};

export const onGoogleSignIn = () => async (dispatch) => {
	dispatch(checkingCredentials());
	
	const res = await signInWithGoogle();
	
	if (!res.isAuthenticated) return dispatch(logout(res));
	
	dispatch(login(res));
};

export const setUserCredentials = (user) => (dispatch) => {
	const res = createUserAdapter({ ...user, isAuthenticated: true });
	dispatch(login(res));
};