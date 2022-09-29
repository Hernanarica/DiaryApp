import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ExclamationCircleIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { uploadFile } from '../../helpers/uploadFile';
import { createNoteThunk, updateNoteThunk } from '../../state/thunks';

export function ActiveNote({ title, description, id }) {
	const dispatch = useDispatch();
	const { activeNote } = useSelector(state => state.note);
	const { handleSubmit, register, setValue, formState: { errors } } = useForm();
	
	useEffect(()=> {
		setValue('title', title);
		setValue('description', description);
	}, [ title, description ]);
	
	const onSubmit = note => {
		activeNote ? dispatch(updateNoteThunk({ ...note, id, image })) : dispatch(createNoteThunk(note));
	}
	
	return (
		<>
			<form action="#" onSubmit={ handleSubmit(onSubmit) }>
				<div className="flex flex-col gap-4">
					<div className="space-y-4">
						<label htmlFor="title" className="sr-only">
							Titulo
						</label>
						<div className="border-b border-gray-300 focus-within:border-indigo-600">
							<input
								type="text"
								name="title"
								id="title"
								className="block w-full border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
								placeholder="Titulo"
								{ ...register('title', {
									required: "El titulo es obligatorio",
									minLength: 1,
								}) }
							/>
						</div>
						{
							errors.title && (
								<div className="flex items-center gap-2 p-2 bg-red-500 text-white rounded" role="alert">
									<ExclamationCircleIcon className="h-6 w-6" />
									<p>{ errors.title.message }</p>
								</div>
							)
						}
					</div>
					<div className="min-w-0 flex-1 relative">
						<div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
							<label htmlFor="description" className="sr-only">
								Descripcion
							</label>
							<textarea
								rows="3"
								name="description"
								id="description"
								className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
								placeholder="Description"
								{ ...register('description', {
									required: "La descripcion es obligatoria",
									minLength: 2,
								}) }
							/>
							<div className="py-2" aria-hidden="true">
								<div className="py-px">
									<div className="h-9" />
								</div>
							</div>
						</div>
						<div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
							<div className="flex items-center space-x-5">
								<div className="flex items-center">
									
									<label
										htmlFor="image"
										className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
									>
										<PhotoIcon className="h-5 w-5 cursor-pointer" />
										<span className="sr-only">Selecciona una imagen</span>
									</label>
									<input
										type="file"
										id="image"
										className="sr-only"
										{ ...register('image', {
											required: 'La imagen es obligatoria'
										}) }
									/>
									
								</div>
								
								
								{
									activeNote
										? <button
											type="submit"
											className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Save
										</button>
										: <button
											type="submit"
											className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Create
										</button>
								}
							
							
							</div>
						</div>
					</div>
					{
						errors.description && (
							<div className="flex items-center gap-2 p-2 bg-red-500 text-white rounded" role="alert">
								<ExclamationCircleIcon className="h-6 w-6" />
								<p>{ errors.description.message }</p>
							</div>
						)
					}

					{
						errors.image && (
							<div className="flex items-center gap-2 p-2 bg-red-500 text-white rounded" role="alert">
								<ExclamationCircleIcon className="h-6 w-6" />
								<p>{ errors.image.message }</p>
							</div>
						)
					}
				</div>
			</form>
		</>
	);
}