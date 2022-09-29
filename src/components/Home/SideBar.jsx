import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { deleteNoteThunk, getNotesCollectionThunk } from '../../state/thunks';
import { selectedActiveNote } from '../../state/slices';

export function SideBar() {
	const dispatch = useDispatch();
	const { notes } = useSelector(state => state.note);
	
	useEffect(() => {
		dispatch(getNotesCollectionThunk());
	}, []);
	
	const handleSelectedNote = (note) => {
		dispatch(selectedActiveNote(note));
	};
	
	const handleDeleteNote = (e, id) => {
		e.stopPropagation();
		
		dispatch(deleteNoteThunk(id));
	};
	
	return (
		<>
			<div className="col-span-1 p-2">
				<ul className="h-[calc(100vh-104px)] overflow-y-scroll">
					{
						notes?.map(note => (
							<li
								className="grid grid-cols-4 grid-rows-2 items-center py-1 pr-2 h-20 rounded border border-transparent cursor-pointer duration-200 hover:border-gray-200 border"
								key={ note.id }
								onClick={ () => handleSelectedNote(note) }
							>
								<span className="flex items-center justify-center col-start-1 col-end-2 row-start-1 row-end-3">
									<BookmarkIcon className="w-6" />
								</span>
								<p className="col-span-3 text-lg text-gray-900 font-semibold truncate">{ note.title }</p>
								<span className="flex items-center col-span-1 text-sm text-gray-600">{ note.date }</span>
								<button className="flex items-center justify-end col-start-4 text-sm text-gray-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-5 h-5 hover:text-red-500"
										onClick={ (e) => handleDeleteNote(e, note.id) }
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
										/>
									</svg>
								</button>
							</li>
						))
					}
				</ul>
			</div>
		</>
	);
}