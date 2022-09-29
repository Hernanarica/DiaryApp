import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { getImageUrlHelper } from '../../helpers';
import { FormInput, FormLabel } from "../../components/Forms";
import { startRegisterUserWithEmailAndPassword } from "../../state/thunks";

export function Register() {
	const dispatch = useDispatch();
	const { name, email, password, onInputChange } = useForm({
		name: 'Herno',
		email: 'herno@gmail.com',
		password: 'asdf1234'
	})
	
	const handleRegistration = (e) => {
		e.preventDefault();
		console.log('register');
		
		dispatch(startRegisterUserWithEmailAndPassword(name, email, password));
	};
	
	return (
		<div className="min-h-screen flex flex-col justify-center py-12 bg-gray-50 sm:px-6 lg:px-8">
			
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" action="#" method="POST" onSubmit={ handleRegistration }>
						
						<div>
							<FormLabel htmlFor="name">Name</FormLabel>
							<FormInput
								id="name"
								name="name"
								type="text"
								value={ name }
								onChange={ onInputChange }
							/>
						</div>
						
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
						
						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Register
							</button>
						</div>
					</form>
					
					{/*<div className="mt-6">*/}
					{/*	<div className="relative">*/}
					{/*		<div className="absolute inset-0 flex items-center">*/}
					{/*			<div className="w-full border-t border-gray-300" />*/}
					{/*		</div>*/}
					{/*		<div className="relative flex justify-center text-sm">*/}
					{/*			<span className="px-2 bg-white text-gray-500">Or continue with</span>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*	<div className="mt-6">*/}
					{/*		<div>*/}
					{/*			<button*/}
					{/*				className={`w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}*/}
					{/*				onClick={ handleLoggingWithGoogle }*/}
					{/*			>*/}
					{/*				<span className="sr-only">Sign in with Google</span>*/}
					{/*				<img src={ getImageUrlHelper('google.svg')} alt="Google icon" className="w-7 h-7" />*/}
					{/*			</button>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	);
}