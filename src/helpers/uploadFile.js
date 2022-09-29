import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../config';

export const uploadFile = async (file) => {
	const storageRef = ref(storage, v4());
	
	const { metadata: { fullPath } } = await uploadBytes(storageRef, file);
	
	return fullPath;
};