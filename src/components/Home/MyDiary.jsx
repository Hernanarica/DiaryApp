import { SideBar } from './SideBar';
import { NoteDetail } from './NoteDetail';

export function MyDiary() {
	return (
		<div className="grid grid-cols-4 min-h-[calc(100vh-88px)]">
			<SideBar />
			<NoteDetail />
		</div>
	);
}