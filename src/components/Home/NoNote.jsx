import { PlusIcon, StarIcon } from '@heroicons/react/24/outline';

export function NoNote() {
	return (
		<>
			<div className="relative bg-indigo-600 rounded-lg h-full">
				<div className="h-full flex flex-col gap-2 items-center justify-center animate-pulse">
					<StarIcon className="w-20 text-white stroke-1" />
					<p className="text-white">Selecciona o ingresa una nueva nota</p>
				</div>
				<button className="absolute bottom-5 right-5 bg-white rounded-full">
					<PlusIcon className="w-9 text-indigo-600" />
				</button>
			</div>
		</>
	);
}