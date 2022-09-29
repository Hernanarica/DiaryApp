import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config';
import { Login } from '../views/Login';
import { Register } from '../views/Register';
import { Header } from '../components/Header';
import { Home } from '../views/Home';
import { Loader } from '../components';
import { setUserCredentials } from '../state/thunks';
import { PublicRoutes } from '../guards/PublicRoutes';
import { PrivateRoutes } from '../guards/PrivateRoutes';
import { Profile } from '../views/Profile/Profile';

export function AppRouter() {
	const { status } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUserCredentials(user));
			} else {
			}
		});
	}, []);
	
	
	if (status === 'checking') {
		return <Loader />
	}
	
	return (
		<>
			<Header />
			
			<Routes>
				
				<Route element={ <PublicRoutes /> } >
					<Route path="/login" element={ <Login /> } />
					<Route path="/register" element={ <Register /> } />
				</Route>
				
				<Route element={ <PrivateRoutes /> }>
					<Route path="/" element={ <Home /> } />
					<Route path="/profile" element={ <Profile /> } />
				</Route>
				
			</Routes>
		</>
	);
}