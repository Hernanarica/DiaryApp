export const createUserAdapter = (user) => {
	return {
		status: user.status,
		isAuthenticated: user.isAuthenticated,
		uid: user.uid,
		email: user.email,
		displayName: user.displayName,
		photoURL: user.photoURL,
		errorMessage: user.errorMessage
	};
};