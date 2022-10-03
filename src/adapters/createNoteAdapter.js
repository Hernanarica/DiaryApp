import { uploadFile } from '../helpers/uploadFile';
import moment from 'moment/moment';

export const createNoteAdapter = async (note) => ({
	...note,
	image: !note.image ? null : await uploadFile(note.image[0]),
	date: moment().format('MMM D YYYY')
});