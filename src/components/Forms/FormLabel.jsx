export function FormLabel({ htmlFor, children}) {
	return (
		<label htmlFor={ htmlFor } className="block text-sm font-medium text-gray-700" >
			{ children }
		</label>
	);
}