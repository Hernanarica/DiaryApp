import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth } from "../../config";
import { logout } from "../../state/slices";

export function Header() {
	const { isAuthenticated } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	
	const handleLogout = () => {
		signOut(auth).then(() => {
			dispatch(logout());
		}).catch((error) => {
			console.log(error);
		});
	};
	
	if (!isAuthenticated) {
		return (
			<header className="bg-gray-50 py-3">
				<nav>
					<ul className="flex gap-4 justify-center">
						<li>
							<NavLink to="/login" className={ ({ isActive }) =>
								isActive
									? 'font-semibold text-gray-700'
									: 'font-semibold text-gray-400 hover:text-gray-700' }
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to="/register" className={ ({ isActive }) =>
								isActive
									? 'font-semibold text-gray-700'
									: 'font-semibold text-gray-400 hover:text-gray-700' }
							>
								Register
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
	
	return (
		<header className="bg-gray-50 py-3">
			<nav>
				<ul className="flex gap-4 justify-center">
					<li>
						<NavLink to="/" className={ ({ isActive }) =>
							isActive
								? 'font-semibold text-gray-700'
								: 'font-semibold text-gray-400 hover:text-gray-700' }
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/profile" className={ ({ isActive }) =>
							isActive
								? 'font-semibold text-gray-700'
								: 'font-semibold text-gray-400 hover:text-gray-700' }
						>
							Profile
						</NavLink>
					</li>
					<li
						className="font-semibold text-gray-400 hover:text-gray-700 cursor-pointer"
						onClick={ handleLogout }
					>
						Logout
					</li>
				</ul>
			</nav>
		</header>
	);
}