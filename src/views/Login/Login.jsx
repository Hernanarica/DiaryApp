import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGoogleSignIn, onSignIn } from '../../state/thunks';
import { useForm } from '../../hooks';
import { getImageUrlHelper } from '../../helpers';
import { FormInput, FormLabel } from "../../components/Forms";

export function Login() {
	const { status } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const { email, password, onInputChange } = useForm({
		email: 'herno@gmail.com',
		password: 'asdf'
	})
	
	const isAuthenticated = useMemo(() => status === 'checking' , [ status ]);
	
	const handleOnSignIn = (e) => {
		e.preventDefault();
		
		dispatch(onSignIn());
	};
	
	const handleOnGoogleSignIn = () => {
		dispatch(onGoogleSignIn());
	};
	
	return (
		<div className="min-h-screen flex flex-col justify-center py-12 bg-gray-50 sm:px-6 lg:px-8">
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" action="#" method="POST" onSubmit={ handleOnSignIn }>
						
						<div>
							<FormLabel htmlFor="email">Email Address</FormLabel>
							<FormInput
								id="email"
								name="email"
								type="email"
								value={ email }
								onChange={ onInputChange }
							/>
						</div>
						
						<div>
							<FormLabel htmlFor="password">Password</FormLabel>
							<FormInput
								id="password"
								name="password"
								type="password"
								value={ password }
								onChange={ onInputChange }
							/>
						</div>
						
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
								/>
								<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
									Remember me
								</label>
							</div>
							<div className="text-sm">
								<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
									Forgot your password?
								</a>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Sign in
							</button>
						</div>
					</form>
					<div className="mt-6">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-white text-gray-500">Or continue with</span>
							</div>
						</div>
						<div className="mt-6">
							<div>
								<button className={`w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${ isAuthenticated && 'cursor-not-allowed opacity-40'}`}
								        disabled={ isAuthenticated }
								        onClick={ handleOnGoogleSignIn }
								>
									<span className="sr-only">Sign in with Google</span>
									<img src={ getImageUrlHelper('google.svg')} alt="Google icon" className="w-7 h-7" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}