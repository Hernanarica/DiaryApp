import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotesCollectionThunk }  from '../../state/thunks';
import { NoteLoader }               from "./NoteLoader";
import { Notes }                    from "./Notes";

export function SideBar() {
	const dispatch  = useDispatch();
	const { notes } = useSelector(state => state.note);
	
	useEffect(() => {
		dispatch(getNotesCollectionThunk());
	}, []);
	
	return (
		<>
			<div className="col-span-1 p-2">
				<ul className="h-[calc(100vh-104px)] overflow-y-scroll" id="sidebar">
					{
						(!notes?.length > 0)
							? <NoteLoader />
							: <Notes notes={ notes } />
					}
				</ul>
			</div>
		</>
	);
}