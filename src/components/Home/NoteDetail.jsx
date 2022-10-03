import { useDispatch, useSelector } from 'react-redux';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ActiveNote } from './ActiveNote';
import { NoNote } from './NoNote';
import { changeStatusNote, removedActiveNote } from '../../state/slices';
import { noteTypes } from '../../types/notes';

export function NoteDetail() {
	const dispatch = useDispatch();
	const { status, activeNote } = useSelector(state => state.note);
	
	const handleCreateNote = async () => {
		dispatch(changeStatusNote(noteTypes.empty));
	};
	
	const handleRemoveNote = async () => {
		dispatch(changeStatusNote(noteTypes.remove));
		dispatch(removedActiveNote());
	};
	
	return (
		<>
			<div className="col-span-3 p-5">
				<div className="relative rounded-lg h-full space-y-4">
					<button className="absolute top-3 right-5 w-9 h-9" onClick={ handleRemoveNote }>
						<XMarkIcon className="w-6 h-6 text-red-500 mx-auto" />
					</button>
					{
						status.note === noteTypes.empty || activeNote
							? <ActiveNote { ...activeNote } />
							: <NoNote />
					}
					<button className="absolute bottom-5 right-5 bg-indigo-600 rounded-full" onClick={ handleCreateNote }>
						<PlusIcon className="w-9 text-white" />
					</button>
				</div>
			</div>
		</>
	);
}