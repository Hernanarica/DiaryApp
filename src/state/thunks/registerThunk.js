import { checkingCredentials, login, logout } from "../slices";
import { registerWithEmailAndPassword } from "../../providers";

export const startRegisterUserWithEmailAndPassword = (name, email, password) => async (dispatch) => {
	dispatch(checkingCredentials());
	
	const res = await registerWithEmailAndPassword(name, email, password);
	
	if(!res.ok) return dispatch(logout(res));

	dispatch(login(res));
}