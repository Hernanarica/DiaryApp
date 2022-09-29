import { Provider } from "react-redux";
import { store } from "../state/store";

export function StateProvider({ children }) {
	return (
		<Provider store={ store }>
			{ children }
		</Provider>
	);
}