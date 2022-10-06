import { BookmarkIcon }       from "@heroicons/react/24/outline";
import { TrashIcon }          from "../Icons";
import { selectedActiveNote } from "../../state/slices";
import { useDispatch }        from "react-redux";
import { deleteNoteThunk }    from "../../state/thunks";

export function Note({ note }) {
	const dispatch = useDispatch();
	
	const handleSelectedNote = () => {
		dispatch(selectedActiveNote(note));
	};

	const handleDeleteNote = (e) => {
		e.stopPropagation();
		dispatch(deleteNoteThunk(note.id));
	};
	return (
		<li
			className="grid grid-cols-4 grid-rows-2 items-center py-1 pr-2 h-20 rounded border border-transparent cursor-pointer duration-200 hover:border-gray-200 border"
			onClick={ handleSelectedNote }
		>
			<span className="flex items-center justify-center col-start-1 col-end-2 row-start-1 row-end-3">
				<BookmarkIcon className="w-6" />
			</span>
			<p className="col-span-3 text-lg text-gray-900 font-semibold truncate">{ note.title }</p>
			<span className="flex items-center col-span-1 text-sm text-gray-600">{ note.date }</span>
			<button className="flex items-center justify-end col-start-4 w-fit ml-auto text-sm text-gray-600" onClick={ (e) => handleDeleteNote(e) }>
				<TrashIcon />
			</button>
		</li>
	);
}