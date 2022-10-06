import { Note } from "./Note";

export function Notes({ notes }) {
	return (
		<>
			{
				notes.map(note => (
					<Note
						key={ note.id }
						note={ note }
					/>
				))
			}
		</>
	);
}